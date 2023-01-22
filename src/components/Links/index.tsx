'use client'
import Link from 'next/link'
import { Icons } from './styles'
import { FiGithub, FiLinkedin, FiFacebook, FiTwitter } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

export function Links() {
  return (
    <>
      <Icons>
        <Link
          href={'https://github.com/EvanderInacio'}
          target="_blank"
          aria-label="Link para o Github"
        >
          <FiGithub />
        </Link>
        <Link
          href={'https://www.linkedin.com/in/evander-inacio/'}
          target="_blank"
          aria-label="Link para o Linkedin"
        >
          <FiLinkedin />
        </Link>
        <Link
          href={'https://www.facebook.com/evandder.lopes/'}
          target="_blank"
          aria-label="Link para o Facebook"
        >
          <FiFacebook />
        </Link>
        <Link
          href={'https://twitter.com/Evander_Inacio'}
          target="_blank"
          aria-label="Link para o Twitter"
        >
          <FiTwitter />
        </Link>
        <Link
          href={'https://api.whatsapp.com/send?phone=5511995085916'}
          target="_blank"
          aria-label="Link para entrar em contato via whatsapp"
        >
          <FaWhatsapp />
        </Link>
        <div className="barra"></div>
      </Icons>
    </>
  )
}
