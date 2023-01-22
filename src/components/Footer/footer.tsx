'use client';
import Link from 'next/link';
import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiFillInstagram,
} from 'react-icons/ai';
import { FooterContainer } from './styles';

export function Footer() {
  return (
    <FooterContainer>
      <h4>
        <p>
          COPYRIGHT © 2022 UP EXPERT |{' '}
          <Link href="https://upexpert.com.br/">
            {' '}
            Agência full service up.expert
          </Link>
        </p>
      </h4>
      <div className="links">
        <Link
          href={'https://github.com/EvanderInacio'}
          target="_blank"
          aria-label="Link para o Github"
        >
          <AiOutlineGithub />
        </Link>
        <Link
          href={'https://www.linkedin.com/in/aug_oliver/'}
          target="_blank"
          aria-label="Link para o Linkedin"
        >
          <AiFillLinkedin />
        </Link>
        <Link
          href={'https://api.whatsapp.com/send?phone=5561986692775'}
          target="_blank"
          aria-label="Link para entrar em contato via whatsapp"
        >
          <AiFillInstagram />
        </Link>
      </div>
    </FooterContainer>
  );
}
