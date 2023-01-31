import { useEffect, useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import bg from "../../../public/img/face.jpg"


const Box = styled.div`
  z-index: -1;
  position: fixed;
  background-color: transparent;
  justify-content: center;
  align-items: center;
  display: flex;
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
          src={bg}
          alt="Picture of the author"
          width={width}
          height={height}
          placeholder="blur"
          blurDataURL="data:image/png;base64,[IMAGE_CODE_FROM_PNG_PIXEL]"
          quality={100}
          sizes="100vw"
          style={{
            objectFit: 'cover',
          }}
        />
      </Box>
    );
  }

  return null;
}

export default BGImage;
