import Image, { StaticImageData } from 'next/image'
import React from 'react'
import nextIcon from '../public/Nextjs-logo.svg.png'
import tailwindIcon from '../public/tailwind-logo.png'

interface Icon {
    src: StaticImageData | string,
    alt: string,
}

interface TechnologyIconsProps {
    icons: Icon[];
}

const TechnologyIcons: React.FC<TechnologyIconsProps> = ({ icons }) => {
  return (
    <div className="flex flex-ro justify-center">
        {icons?.map((icon, index) => (
            <div key={index} className="w-16 h-16 flex justify-center items-center bg-gray-200 rounded-full m-1">
                <Image src={icon.src} alt={icon.alt} className="max-w-3/4 max-h-3/4" width={50} height={50} />
            </div>
        ))}
    </div>
  )   
}

export default TechnologyIcons