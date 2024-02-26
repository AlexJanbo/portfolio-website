"use client"
import ProjectCard from '@/components/ProjectCard';
import Terminal from '@/components/Terminal';
import React, { useState } from 'react';

const Page = () => {

  const [ open, setOpen ] = useState<boolean>(true)

  return (
    <main className="flex-col w-full h-max-full">
      {open && <Terminal />}
    </main>
  )
}

export default Page;