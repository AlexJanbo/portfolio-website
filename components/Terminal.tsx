"use client"
import React, { useEffect, useRef, useState } from 'react'


const Terminal= () => {

  const text = 'W elcome to Alex\'s Terminal'

  const [typedText, setTypedText] = useState<string>("");
  const [ inputText, setInputText ] = useState<string>("")
  const indexRef = useRef<number>(0);
  const [ loading, setLoading ] = useState<boolean>(true)
   
  useEffect(() => {
    indexRef.current = -1;
    const intervalId = setInterval(() => {
      if (indexRef.current < text.length) {
        setTypedText((prev) => prev + text.charAt(indexRef.current));
        indexRef.current += 1;
      } else {
        clearInterval(intervalId);
      }
    }, 25); // Adjust typing speed as needed

    return () => clearInterval(intervalId);
  }, [text]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputText(event.target.value);
  };


  return (
    <div className="bg-gray-700 text-white font-mono w-1/2 h-1/2 text-sm overflow-hidden">
        <div className="w-full h-10 bg-gray-800 flex flex-row justify-end items-center">
          <div>-</div>
          <div className="pl-5">O</div>
          <div className="pl-5 pr-3">X</div>
        </div>
        {typedText}
        <br/>
        <div>User@WEBSITE:~$</div>
        {/* <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Type here.."
        /> */}
        <span className="cursor-blink ml-0.5 inline-flex h-4 w-2 bg-white opacity-85"></span>
    </div>
  )
}

export default Terminal