/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/legacy/image";
import Link from "next/link";
import initIsotope from "#/common/initIsotope";

import Img1 from "/public/img/portfolio/mas/Marketing-Digital-1_01.jpg"
import Img2 from "/public/img/portfolio/mas/Marketing-Digital-1_02.jpg"
import Img3 from "/public/img/portfolio/mas/Marketing-Digital-1_03.jpg"
import Img4 from "/public/img/portfolio/mas/Marketing-Digital-1_04.jpg"
import Img5 from "/public/img/portfolio/mas/Marketing-Digital-1_02.jpg"
import Img6 from "/public/img/portfolio/mas/Marketing-Digital-1_02.jpg"

const WorksThreeColumnWithFilter = ({ filterPosition }) => {
  const [pageLoaded, setPageLoaded] = React.useState(false);
  React.useEffect(() => {
    setPageLoaded(true);
    if (pageLoaded) {
      setTimeout(() => {
        initIsotope();
      }, 1000)
    }
  }, [pageLoaded]);
  return (
    <section className="portfolio section-padding pb-70">
      <div className="container">

        <div className="row">

          <div
            className={`filtering ${
              filterPosition === "center"
                ? "text-center"
                : filterPosition === "left"
                ? "text-left"
                : "text-right"
            } smplx col-12`}
          >




            <div className="filter rightShow">
            <h1 className="leftShow">CASES</h1>
              <span data-filter="*" className="active">
                TODOS
              </span>
              <span data-filter=".brand">WEBSITE</span>
              <span data-filter=".web">MÓBILE APP</span>
              <span data-filter=".graphic">CRIATIVIDADE</span>
            </div>
          </div>
          <div className="gallery full-width">
            <div className="col-lg-4 col-md-6 items graphic lg-mr">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <Link href="/project-details/project-details-dark">
                    <Image
                    src={Img1}
                    alt="image"
                    placeholder="blur"
                    width={780}
                    height={1000}
                    />

                </Link>
              </div>
              <div className="cont">
                <h2>Creativity Demand</h2>
                <span>
                  <a href="#0">Design</a>, <a href="#0">WordPress</a>
                </span>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 items web">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <Link href="/project-details/project-details-dark">

                <Image
                    src={Img2}
                    alt="image"
                    placeholder="blur"
                    width={780}
                    height={1000}
                    />

                </Link>
              </div>
              <div className="cont">
                <h2>Through The Breaking</h2>
                <span>
                  <Link href="#0">Design</Link>, <a href="#0">WordPress</a>
                </span>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 items WEBSITE lg-mr">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <Link href="/project-details/project-details-dark">

                <Image
                    src={Img3}
                    alt="image"
                    placeholder="blur"
                    width={780}
                    height={1000}
                    />

                </Link>
              </div>
              <div className="cont">
                <h2>Create With Creatives</h2>
                <span>
                  <a href="#0">Design</a>, <a href="#0">WordPress</a>
                </span>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 items brand">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <Link href="/project-details/project-details-dark">

                <Image
                    src={Img4}
                    alt="image"
                    placeholder="blur"
                    width={780}
                    height={1000}
                    />

                </Link>
              </div>
              <div className="cont">
                <h2>Blast From The Past</h2>
                <span>
                  <Link href="#0">Design</Link>, <a href="#0">WordPress</a>
                </span>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 items web">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <Link href="/project-details/project-details-dark">

                <Image
                    src={Img5}
                    alt="image"
                    placeholder="blur"
                    width={780}
                    height={1000}
                    />

                </Link>
              </div>
              <div className="cont">
                <h2>See It Yourself</h2>
                <span>
                  <Link href="#0">Design</Link>, <a href="#0">WordPress</a>
                </span>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 items graphic">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <Link href="/project-details/project-details-dark">

                <Image
                    src={Img6}
                    alt="image"
                    placeholder="blur"
                    width={780}
                    height={1000}
                    />

                </Link>
              </div>
              <div className="cont">
                <h2>Energies of Love</h2>
                <span>
                  <Link href="#0">Design</Link>, <a href="#0">WordPress</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksThreeColumnWithFilter;
