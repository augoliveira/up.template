import React from "react";
import Link from "next/link";
import Image from "next/image";
import BgImg from '/public/img/slid/bg-05-free-img.jpg'

const AboutHeader = () => {
  return (
    <header
      className="pages-header bg-img valign parallaxie"
      data-overlay-dark="5"
    >
      <div>
        <Image
          alt="Picture of the author"
          fill
          placeholder="blur"
          blurDataURL="data:image/png;base64,[IMAGE_CODE_FROM_PNG_PIXEL]"
        quality={100}
        sizes="100vw"
        style={{
          objectFit: 'cover',
        }}
          src={BgImg}
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="cont text-center">
              <h1>Sobre | Up.expert</h1>
              <div className="path">
                <Link href="#0">Home</Link>
                <span>/</span>
                <Link href="#0" className="active">
                  Agência
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AboutHeader;
