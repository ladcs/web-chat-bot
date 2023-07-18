'use client';

import { FormEvent, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

interface props {
  isRegister: boolean,
}

export function LoginOrRegister({ isRegister }: props) {
  const [user, setUser] = useState({login: '', password: '', name: ''});
  const oneChangeInput = ({ target }: FormEvent) => {
    //@ts-ignore
    setUser({...user, [target.id]: target.value});
  };
  const disableButton = () => {
    if(isRegister) {
      return user.login.length >= 5 && user.name.length >= 3 && user.password.length >= 8 ? false : true;
    }
    if(!isRegister) {
      return user.login.length > 4 && user.password.length > 7 ? false : true;
    }
  }
  return (
  <Card className='w-[400px] bg-slate-200'>
    <CardHeader>
      <CardTitle>{ isRegister ? 'Register' : 'Login'}</CardTitle>
    </CardHeader>
    <CardContent>
      { isRegister ? <Input placeholder='Name' value={user.name} id="name" className="mb-2" onChange={oneChangeInput}/> : <></>}
      <Input placeholder='Login' value={user.login} id='login' className="mb-2" onChange={oneChangeInput}/>
      <Input placeholder='Password' value={user.password} type="password" id='password' className="mb-2" onChange={oneChangeInput} />
      <Button className="w-full" disabled={disableButton()} >{ isRegister ? 'Register': 'Login'}</Button>
    </CardContent>
  </Card>
  );
}