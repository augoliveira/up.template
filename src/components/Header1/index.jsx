/* eslint-disable jsx-a11y/anchor-is-valid */
import { Container } from "./styles";
import Image from 'next/image'

import logoImg from '../../../public/assets/logo.png';

import { FaSearch, FaShoppingBag } from 'react-icons/fa';
import { RiMenu3Fill } from 'react-icons/ri';

export function Header({ setMenuIsVisible }) {
  return (
    <Container>
      <section>
        <Image
          src={logoImg}
          alt="Logo"
          placeholder="blur"
          width={700}
          height={475}
          style={{
          maxWidth: '100%',
          height: 'auto',
        }}/>
        <nav>
          <a href="#">Home</a>
          <a href="#">Produtos</a>
          <a href="#">Sobre nós</a>
          <a href="#">Contato</a>
        </nav>
      </section>

      <section>
        <FaSearch />
        <FaShoppingBag />
        <RiMenu3Fill onClick={() => setMenuIsVisible(true)} className="mobile"/>
      </section>
    </Container>
  )
}
