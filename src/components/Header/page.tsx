'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { List, X } from 'phosphor-react';
import { HeaderContainer, MobileIcon, NavMenu } from './styles';
import Logo from '../../../public/assets/logo.png';
export function Header() {
  const [click, setClick] = useState(false);

  const handleOpen = () => {
    setClick(!click);
  };

  return (
    <HeaderContainer style={{ position: 'fixed' }}>
      <div className="mobile-content">
        <Link href={'/'}>
          <span>
            <Image src={Logo} alt={''} />
          </span>
        </Link>
        <MobileIcon onClick={handleOpen}>
          {click ? (
            <X size={24} weight="bold" />
          ) : (
            <List size={24} weight="bold" />
          )}
        </MobileIcon>
      </div>

      <NavMenu onClick={handleOpen} click={click}>
        <ul>
          <li>
            <Link href={'/'}>
              <span>Início</span>
            </Link>
          </li>

          <li>
            <Link href={'#service'} scroll={false}>
              <span>Seviço</span>
            </Link>
          </li>

          <li>
            <Link href={'#skills'} scroll={false}>
              <span>Habilidades</span>
            </Link>
          </li>

          <li>
            <Link href={'#projects'} scroll={false}>
              <span>Projetos</span>
            </Link>
          </li>

          <li>
            <Link href={'#contact'} scroll={false}>
              <span>Contato</span>
            </Link>
          </li>
        </ul>
      </NavMenu>
    </HeaderContainer>
  );
}
