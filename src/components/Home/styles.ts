'use client';
import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;
  max-width: 1120vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  z-index: 1;

  @media (min-width: 994px) {
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 1080px) {
    padding: 200px 100px;
  }
  @media (max-width: 768px) {
    padding: 150px 50px;
  }
  @media (max-width: 480px) {
    padding: 125px 25px;
  }

  @media (min-width: 375px) {
    width: 100%;
    height: 100%;
    h1 {
      font-size: 1rem;
    }
  }

  &.fillHeight {
    padding: 0 150px;

    @media (max-width: 1080px) {
      padding: 0 100px;
    }
    @media (max-width: 768px) {
      padding: 0 50px;
    }
    @media (max-width: 480px) {
      padding: 0 25px;
    }
  }
`;

export const ImgHome = styled.div`
  img {
    display: none;
    @media (min-width: 994px) {
      display: block;
      position: relative;
      width: 32rem;
      -webkit-animation: icon-move-people 4s ease 2s infinite alternate;
      animation: icon-move-people 5s ease 2s infinite alternate;

      @keyframes icon-move-people {
        0% {
          -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
        }
        100% {
          -webkit-transform: translate3d(30px, 60px, 0);
          transform: translate3d(-30px, -50px, 0);
        }
      }
    }
    @media (max-width: 375px) {
      h1 {
        font-size: 27px;
      }
      code {
        font-size: 20px;
      }
    }
  }
`;

export const HomeText = styled.div`
  h2 {
    font-family: Roboto, sans-serif;
    font-weight: normal;
    font-style: normal;
    z-index: 8;
    font-size: 40.4303px;
    line-height: 1.2;
    text-align: left;
    letter-spacing: 0px;
    text-shadow: none;
  }
  h3 {
    color: var(--text-secondary);
    padding: 0.5rem;
    @media (max-width: 350px) {
      font-size: 0.9rem;
    }
    @media (min-width: 768px) {
      font-size: 1.3rem;
    }
    @media (min-width: 375px) {
      font-size: 0.3rem;

      h1 {
        padding: 1rem;
        font-size: 0.3rem;
      }
    }
  }
  h4 {
    color: #3cec00;
  }
  h1 {
    font-size: 90px;
    font-weight: 900;
    line-height: 95px;
    color: var(--first-color);
    background: linear-gradient(160.44deg, #8a6cfa 1.37%, #5432d1 58.45%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    @media (max-width: 375px) {
      font-size: 4.2rem;
    }
    @media (min-width: 768px) {
      font-size: 4rem;
    }
  }
  code {
    font-size: 90px;
    font-weight: 900;
    line-height: 95px;
    color: var(--first-color);
    background: linear-gradient(160.44deg, #ffeb6b 1.37%, #fcb93d 58.45%);
    background-clip: text;
    font-family: montserrat;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    @media (max-width: 375px) {
      font-size: 4.6rem;
    }
    @media (min-width: 768px) {
      font-size: 4rem;
    }
  }
  span {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
    background: none repeat scroll 0 0 transparent;
    font-family: inherit;
    font-size: 100%;
    font-style: inherit;
    font-weight: inherit;
    outline: 0;
  }
  h2 {
    @media (max-width: 350px) {
      font-size: 2.2rem;
    }
    @media (min-width: 768px) {
      font-size: 2rem;
    }
    color: var(--second-color);
    font-weight: 600;
  }

  .cubo-animation {
    position: absolute;
    width: 30px;
    height: 30px;
    border: 4px solid #8543ff;

    @media (min-width: 994px) {
      width: 40px;
      height: 40px;
      border: 5px solid #8543ff;
    }

    top: 15%;
    animation: cubo 5s linear infinite;
    @keyframes cubo {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;
