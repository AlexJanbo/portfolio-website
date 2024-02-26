import ProjectCard from '@/components/ProjectCard'
import TechnologyIcons from '@/components/TechnologyIcons'
import React from 'react'
import { StaticImageData } from 'next/image';
import NextIcon from '../../../../public/Nextjs-logo.svg.png'
import DockerIcon from '../../../../public/docker-logo.png'
import TypeScriptIcon from '../../../../public/typescript-logo.png'
import PostgreSQLIcon from '../../../../public/postgreSQL-logo.png'
import ReactIcon from '../../../../public/react-logo.jpg'
import NodeIcon from '../../../../public/590px-Node.js_logo.svg.png'
import TailwindIcon from '../../../../public/tailwind-logo.png'
import ReduxIcon from '../../../../public/Redux-logo.png'
import MongoDbIcon from '../../../../public/mongodb-logo.png'
import GraphQLIcon from '../../../../public/GraphQL-logo.png'
import AWSLambdaIcon from '../../../../public/AWSLambda-logo.png'
import DefaultImage from '../../../../public/default-project-image.png'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';



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
  
  const StudyIcons: Icon[] = [
    { src: ReactIcon, alt: "React Icon"},
    { src: NodeIcon, alt: "Node Icon"},
    { src: NextIcon, alt: "Next Icon"},
    { src: TailwindIcon, alt: "Tailwind Icon"},
]
  
  const EcommerceIcons: Icon[] = [
    { src: ReduxIcon, alt: "Redux Icon"},
    { src: MongoDbIcon, alt: "MongoDB Icon"},
    { src: GraphQLIcon, alt: "GraphQL Icon"},
    { src: AWSLambdaIcon, alt: "AWS Lambda Icon"}
]

// Ecommerce App: 
// Study App GraphQL/PostgreSQL/TypeScript/Apollo Client
// Messaging App SocketIO/Redux/Material UI/JavaScript

//   Express,   SocketIO, AWS Lambda,

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full w-full overflow-hidden relative">
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <div className="flex flex-col items-center">
            <ProjectCard/>
            </div>
          </CarouselItem>
          <CarouselItem>
            {/* <ProjectCard/> */}
            <TechnologyIcons icons={StudyIcons}/>
          </CarouselItem>
          <CarouselItem>
            {/* <ProjectCard/> */}
            <TechnologyIcons icons={EcommerceIcons}/>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="border-black sm:absolute sm:left-[12vw]"/>
        <CarouselNext className="border-black sm:absolute sm:right-[12vw]"/>
      </Carousel>
    </div>
  )
}

export default page