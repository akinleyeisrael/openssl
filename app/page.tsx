"use client"
import { Button } from "@/components/ui/button";
import { CopyIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [key, setKey] = useState("")

  const generateOpenssl = () => {
    const randomBytes = new Uint8Array(44);
    window.crypto.getRandomValues(randomBytes);
    const byteArray = Array.from(randomBytes);
    const base64String = btoa(String.fromCharCode(...byteArray));
    setKey(base64String)
  }
    return (
      <div>
        <div className="flex flex-col items-center mx-auto space-y-6 mt-52">
          <h1 className="text-2xl leading-5 tracking-tighter mb-2 ">
            Openssl generator for next auth JS
          </h1>
          <Button onClick={generateOpenssl} variant={"secondary"}>Generate</Button>
          <div className="flex space-x-2 text-primary-foreground relative">
            <div className="bg-primary border border-white rounded-lg h-20 w-[40rem] px-6">
              <p className="max-w-lg my-8 break-before-all break-words text-xs">{key}</p>
            </div>
            <CopyIcon className="absolute end-6 m-8 hover:cursor-pointer" />
          </div>
        </div>
      </div>
    );
  }