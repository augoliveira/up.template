import { useEffect, useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import bg1 from "../../assets/images/main-slider/slide9.jpg"

const Box = styled.div`
  position: fixed;
  z-index: 0;
  top: 0;
`;

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function BGImage() {
  const [width, setWidth] = useState<number>();
  const [height, setheight] = useState<number>();

  useEffect(() => {
    const { width, height } = getWindowDimensions();

    setWidth(width);

    setheight(height);
  }, []);

  useEffect(() => {
    function handleResize() {
      const { width, height } = getWindowDimensions();

      setWidth(width);

      setheight(height);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (width && height) {
    return (
      <Box>
        <Image
          src={bg1}
          width={width}
          height={height}
        />
      </Box>
    );
  }

  return null;
}

export default BGImage;
