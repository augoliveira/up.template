import React from 'react'
import Image from 'next/image'
import '/types'
import Link from 'next/link'
import appData from '#/data/app.json'
import Orc from '/public/img/icons/icon-orca.svg'
import {
  handleDropdown,
  handleMobileDropdown,
  handleSearch
} from '../../common/navbar'

const Navbar = ({ lr, nr, theme }) => {
  React.useEffect(() => {
    handleSearch()
  }, [])
  return (
    <nav
      ref={nr}
      className={`navbar navbar-expand-lg change ${
        theme === 'themeL' ? 'light' : ''
      }`}
    >
      <div className="container">
        <Link href="/"  className="logo">
            {theme ? (
              theme === 'themeL' ? (
                <Image
                  ref={lr}
                  src={`${appData.darkLogo}`}
                  alt="logo"
                  width={100}
                  height={30}
                />
              ) : (
                <Image ref={lr} src={`${appData.lightLogo}`} alt="logo" width={100}
                height={30}/>
              )
            ) : (
              <Image ref={lr} src={`${appData.lightLogo}`} alt="logo" width={100}
              height={30}/>
            )}

        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={handleMobileDropdown}
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="icon-bar">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="12"
                  y="20"
                  width="24"
                  height="2"
                  fill="var(--primary)"
                ></rect>
                <rect
                  x="20"
                  y="26"
                  width="16"
                  height="2"
                  fill="var(--primary)"
                ></rect>

              </svg>
            </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown" onClick={handleDropdown}>
              <span
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Home
              </span>
              <div className="dropdown-menu">
                <Link href="/home/home1-dark" className="dropdown-item">
                  Main Home
                </Link>
                <Link href="/home/home2-dark" className="dropdown-item">
                 Creative Studio
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link href="/about/about-dark" className="nav-link">
               Sobre
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about/about-dark" className="nav-link">
                Soluçoes 3D
              </Link>
            </li>

            <li className="nav-item dropdown" onClick={handleDropdown}>
              <span
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                portfolio
              </span>
              <div className="dropdown-menu">
                <Link href="/works/works-dark" className="dropdown-item">
                  Mouse Info
                </Link>
                <Link href="/works2/works2-dark" className="dropdown-item">
                  Masonry 3 Columns
                </Link>
                <Link href="/works3/works3-dark" className="dropdown-item">
                 Masonry 2 Columns
                </Link>
                <Link href="/works4/works4-dark" className="dropdown-item">
                 Pinterest List
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link href="/contact/contact-dark" className="nav-link">
                Contato
              </Link>
            </li>
            <li className="nav-item">
              <button className="orcamento">
              <Link href="/orcamento" className="Orçamento">

                  <Image
                    src={Orc}
                    alt=""
                    width="21px"
                    height="18px"
                  />
                  <span>ORÇAMENTO</span>

                </Link>
              </button>
            </li>
          </ul>
          <div className="search">
            <span className="icon pe-7s-search cursor-pointer"></span>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
