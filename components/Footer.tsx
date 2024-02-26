import Link from 'next/link'
import React from 'react'
import GithubLogo from '../public/github-mark-white.png'
import LinkedInLogo from '../public/In-White-128.png'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="text-white-800 flex-center body-text w-full gap-y-10 border-t border-black-400 py-5 space-x-4">
      <Link href="https://www.github.com/" passHref target='_blank'>
        <Image
          src={GithubLogo}
          alt="Github Link"
          height={32}
          width={32}
        />
      </Link>
      <Link href="https://www.linkedin.com" passHref target='_blank'>
        <Image
          src={LinkedInLogo}
          alt="Linked in Link"
          height={32}
          width={32}
        />
      </Link>
    </footer>
  )
}

export default Footer