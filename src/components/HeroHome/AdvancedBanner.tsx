'use client';
import { ParallaxBanner } from 'react-scroll-parallax';
import { BannerLayer } from 'react-scroll-parallax/dist/components/ParallaxBanner/types';
import Image from 'next/image';
import Bg from '../../../public/top.jpg';
import { HomeHero } from '../Home';
import styled from 'styled-components';

const Box = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  z-index: -1;
`;
export const AdvancedBannerTop = () => {
  const background: BannerLayer = {
    children: (
      <Box>
        <Image
          src={Bg}
          alt="Out story pic"
          placeholder="blur"
          quality={100}
          fill
          sizes="100vw"
          style={{
          objectFit: 'cover',
          }}
          />
      </Box>
    ),
    translateY: [0, 50],
    opacity: [1, 0.3],
    scale: [1.05, 1, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
  };

  const headline: BannerLayer = {
    translateY: [0, 70],
    scale: [1, 1.05, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="inset center">
        <HomeHero />
      </div>
    ),
  };

  const foreground: BannerLayer = {
    translateY: [0, 15],
    scale: [1, 1.1, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
  };

  const gradientOverlay: BannerLayer = {
    opacity: [0, 1, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: <div className="gradient inset" />,
  };

  return (
    <ParallaxBanner
      layers={[background, headline, foreground, gradientOverlay]}
      className="full"
    />
  );
};
