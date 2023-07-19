'use client';

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import { CSVLink } from "react-csv";
import { api } from "@/lib/axios";

export function ExportMessages() {
  const router = useRouter();
  const toChat = (e: FormEvent) => {
    e.preventDefault();
    router.push('/');
  }

  const [csvData, setCsvData] = useState([]);
 
  useEffect(() => {
    api.get('/chat').then((data)=>{
      console.log(data)
      setCsvData(data.data);
    }).catch(err => alert(err));
    /*const titleCsv = ['user', 'id', 'date'];
    //@ts-ignore
    const dataObjToCsv = dataObj.map(obj => [obj.user, obj.id, obj.date]);
    //@ts-ignore
    setCsvData([titleCsv, ...dataObjToCsv]);
  // eslint-disable-next-line react-hooks/exhaustive-deps*/
  }, [])

  return (
  <Card className='w-[400px] bg-slate-200'>
    <CardHeader>
      <CardTitle className="text-center">History of Chat!</CardTitle>
      </CardHeader>
      <CardContent>
    <div className="grid justify-items-start pl-1 pr-1 gap-y-2">
      <Button
      className="border w-full h-8 bg-white text-slate-500 mt-1"
      type="button"
        ><CSVLink data={csvData}>Download the chat history</CSVLink></Button>
      <Button className="border w-full h-8 bg-white text-slate-500 mb-1"
      type="button" onClick={toChat}
        >Back to chat</Button>
    </div>
    </CardContent>
  </Card>
  );
}