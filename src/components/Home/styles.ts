'use client';
import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  display: table;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 600px) {
    height: 60%;
  }
  @media only screen and (min-width: 600px) {
    height: 50%;
  }
  @media only screen and (min-width: 992px) {
    height: 80%;
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
  height: 100%;
  width: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h2 {
    font-family: Roboto, sans-serif;
    font-weight: normal;
    font-style: normal;
    z-index: 8;
    font-size: 40.4303px;
    line-height: 1.2;
    letter-spacing: 0px;
    text-shadow: none;
    margin-top: -2%;
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

      h3 {
        padding: 1rem;
        font-size: 0.3rem;
      }
    }
  }
  h4 {
    font-size: 2.5rem;
    font-weight: 90px;
    margin-top: -5%;
    color: #3cec00;
    @media only screen and (max-width: 600px) {
      padding: 10px 25px;
    }
    //for Tablets and Medium Screens
    @media only screen and (min-width: 600px) {
      padding: 10px 30px;
    }
    //for laptops and desktops
    @media only screen and (min-width: 992px) {
      padding: 15px 30px;
    }
    @media only screen and (min-width: 430px) {
      padding: 15px 20px;
    }
  }
  h1 {
    width: 60%;
    font-size: 95px;
    font-weight: 900;
    color: var(--first-color);
    background: linear-gradient(160.44deg, #ffeb6b 1.37%, #fcb93d 58.45%);
    background-clip: text;
    font-family: montserrat;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;
    //for Mobiles
    @media only screen and (max-width: 600px) {
      width: 100%;
      font-size: 30px;
    }
    //for Tablets and Medium Screens
    @media only screen and (min-width: 600px) {
      width: 85%;
      font-size: 30px;
    }
    //for laptops and desktops
    @media only screen and (min-width: 992px) {
      width: 85%;
    }
  }
  code {
    font-size: 85px;
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
    @media (min-width: 480px) {
      font-size: 3rem;
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
    @media (min-width: 480px) {
      font-size: 1.5rem;
    }
    @media (min-width: 430px) {
      font-size: 1.5rem;
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
export const Title = styled.div`
  width: 60%;
  font-size: 4rem;
  font-weight: 900;
  color: var(--first-color);
  background: linear-gradient(160.44deg, #fffff1 1.37%, #dfe9f3 58.45%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  //for Mobiles
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
  //for Tablets and Medium Screens
  @media only screen and (min-width: 600px) {
    width: 85%;
  }
  //for laptops and desktops
  @media only screen and (min-width: 992px) {
    width: 85%;
  }
`;

export const Description = styled.p`
  width: 70%;
  font-size: 20px;
  margin-bottom: 2%;
  color: #fff;
  //for Mobiles
  @media only screen and (max-width: 600px) {
    width: 80%;
    text-align: center;
  }
  //for Tablets and Medium Screens
  @media only screen and (min-width: 600px) {
    width: 70%;
  }
  //for laptops and desktops
  @media only screen and (min-width: 992px) {
    width: 70%;
  }
`;
