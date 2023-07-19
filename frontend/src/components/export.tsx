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

export function ExportMessages({ isRegister }: props) {
  return (
  <Card className='w-[400px] bg-slate-200'>
    <CardHeader>
      <CardTitle>Salve you conversetion!</CardTitle>
    </CardHeader>
    <CardContent>
      <Button className="w-full" >{ isRegister ? 'Register': 'Login'}</Button>
    </CardContent>
  </Card>
  );
}