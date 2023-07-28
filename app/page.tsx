'use client'
import { useState } from "react";
import Header from "./components/header";
import ForMeContent from "./components/forMeContent";
import FollowinContent from "./components/followingContent";
import Head from "next/head";

export default function Home() {

  const [currentMethod, setCurrentMethod] = useState<number>(0)
  const [methods, setMethods] = useState<string[]>(['For you', 'Following'])

  return (
    <div className="w-1/2 border-x-indigo-500" >
          <Header 
            onClickMethod={(index) => setCurrentMethod(index)} 
            currentMethod={currentMethod} 
            methods={methods} title="Home" 
          />
          <div className="h-screen">
            {currentMethod === 0 ? (
              <div>
                <ForMeContent />
              </div>
            ) : (
              <div>
                <FollowinContent />
              </div>
            )}
          </div>
      </div>
  )
}
