'use client';

import { FormEvent, useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { api } from "@/lib/axios";
import { useGlobalContext } from "@/app/Context/chatbot";
import { useRouter } from "next/navigation";
import jwt_decode from "jwt-decode";

interface props {
  isRegister: boolean,
}

export function LoginOrRegister({ isRegister }: props) {
  const { setName, name } = useGlobalContext();
  const [user, setUser] = useState({login: '', password: '', name: ''});
  const oneChangeInput = ({ target }: FormEvent) => {
    //@ts-ignore
    setUser({...user, [target.id]: target.value});
  };
  const router = useRouter();

  useEffect(() => {
    if(name !== '') {
      router.push('./');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name])

  const disableButton = () => {
    if(isRegister) {
      return user.login.length >= 5 && user.name.length >= 3 && user.password.length >= 8 ? false : true;
    }
    if(!isRegister) {
      return user.login.length > 4 && user.password.length > 7 ? false : true;
    }
  };

  const onClickButton = () => {
    if(isRegister) {
      api.post('/register', {
        name: user.name,
        login: user.login,
        password: user.password,
      }).then(({ data }) => {
        localStorage.setItem('token', data);
        setName(user.name)
        setUser({name: '', password: '', login: ''})
      }).catch(err => alert(err.message));
    }
    if (!isRegister) {
      api.post('/login', {
        login: user.login,
        password: user.password,
      }).then(({ data }) => {
        const decodeToken = jwt_decode(data);
        localStorage.setItem('token', data);
        // @ts-ignore
        setName(decodeToken.name);
        setUser({name: '', password: '', login: ''})
      }).catch(err => alert(err.message));
    }
  };

  return (
  <Card className='w-[400px] bg-slate-200'>
    <CardHeader>
      <CardTitle>{ isRegister ? 'Register' : 'Login'}</CardTitle>
    </CardHeader>
    <CardContent>
      { isRegister ? <Input placeholder='Name' value={user.name} id="name" className="mb-2" onChange={oneChangeInput}/> : <></>}
      <Input placeholder='Login' value={user.login} id='login' className="mb-2" onChange={oneChangeInput}/>
      <Input placeholder='Password' value={user.password} type="password" id='password' className="mb-2" onChange={oneChangeInput} />
      <Button className="w-full" disabled={disableButton()} onClick={onClickButton} >{ isRegister ? 'Register': 'Login'}</Button>
    </CardContent>
  </Card>
  );
}