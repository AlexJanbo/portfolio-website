import Image, { StaticImageData } from 'next/image'
import React from 'react'
import imagesrc from '../public/default-project-image.png'
import TechnologyIcons from './TechnologyIcons'
import NextIcon from '../public/Nextjs-logo.svg.png'
import DockerIcon from '../public/docker-logo.png'
import TypeScriptIcon from '../public/typescript-logo.png'
import PostgreSQLIcon from '../public/postgreSQL-logo.png'
import Link from 'next/link'

interface Icon {
  src: StaticImageData | string;
  alt: string;
}

const PortfolioIcons: Icon[] = [
   { src: NextIcon, alt: 'Node icon' },
   { src: DockerIcon, alt: 'Docker Icon'},
   { src: TypeScriptIcon, alt: "TypeScript Icon"},
   { src: PostgreSQLIcon, alt: "PostgreSQL Icon"},
]


const ProjectCard = () => {
  return (
    <div className="flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-xs">
      <div className="w-full">
        <Image
          src={imagesrc}
          layout="responsive"
          width={500}
          height={250}
          alt="Project picture"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col px-4 py-2">
        <div className="font-bold text-xl mb-1">Portfolio Website</div>
        <p className="text-gray-700 text-sm mb-2">
          This is a short description of the project. It should be concise and engaging.
        </p>
        <Link href="https://google.com" className="text-indigo-600 hover:text-indigo-900 text-sm">WebsiteLink.com</Link>
        <br />
        <Link href="https://github.com" className="text-indigo-600 hover:text-indigo-900 text-sm">Github.com</Link>
        <TechnologyIcons icons={PortfolioIcons} />
      </div>
    </div>
  )
}

export default ProjectCard