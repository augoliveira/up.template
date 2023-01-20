'use client';
import { ParallaxProvider } from 'react-scroll-parallax';
import { AdvancedBannerTop } from './AdvancedBanner';

export default function App() {
  return (

    <ParallaxProvider>
      <AdvancedBannerTop />
    </ParallaxProvider>
  );
}
