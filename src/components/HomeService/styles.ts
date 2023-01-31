'use client';
import styled from 'styled-components';

export const Container = styled.section`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;
  @media (max-width: 970px) {
    width: 100%;
  }
  > img {
    width: 40rem;
    flex: 1;
  }

  > div {
    flex: 4;
  }

  @media (max-width: 1450px) {
    > img {
      width: 30rem;
    }

    > div {
      flex: 1;
    }
  }

  @media (max-width: 1000px) {
    > img {
      width: 22rem;
    }
  }

  @media (max-width: 700px) {
    flex-direction: column-reverse;
    > div {
      width: 100%;
    }
  }
`

export const TextContainer = styled.section`
  background: url(/img/square.png) no-repeat;
  background-position: 520px 20px;
  margin-bottom: 2rem;
  width: 40%;
  @media (max-width: 970px) {
    width: 100%;
  }

  h1 {
    font-size: 8rem;
    color: #fff;
    font-size: 7rem;
    font-weight: 900;
    line-height: 95px;
  }

  h2 {
    color: #ff8600;
    font-family: 'Open sans Unicode';
    font-size: 2.9rem;
    font-weight: 400;
    padding-right: 150px;
  }

  h3 {
    color: #ff8600;
    font-size: 20px;
    font-weight: 800;
    letter-spacing: 5px;
    margin-bottom: 10px;
    padding-right: 200px;
    text-transform: uppercase;
  }

  hr {
    border: 0;
    background: #ff8600;
    height: 1px;
    margin: 60px 0 10px 200px;
    float: left;
    width: 90px;
  }

  @media (max-width: 1450px) {
    h1 {
      font-size: 5rem;
    }
    h2 {
      font-size: 2.9rem;
    }
    hr {
      margin: 60px 0 10px 200px;
    }
  }

  @media (max-width: 1000px) {
    h1 {
      font-size: 7rem;
    }
    h2 {
      font-size: 2.9rem;
    }
  }
  @media (max-width: 375px) {
    h1 {
      font-weight: 900;
      align-items: center;
      justify-content: center;
      margin: 20px 0 10px -90px;
      font-size: 6rem;
    }
    h3 {
      color: #ff8600;
      font-size: 30px;
      font-weight: 800;
      letter-spacing: 3px;
      text-transform: uppercase;
    }
    hr {
      margin: 60px 0 10px -100px;
    }
  }
`;

export const InfosContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 5rem;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 994px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Design = styled.pre`
  background: url(/img/detalhe.png) #18181c center bottom no-repeat;
  text-align: center;
  font-family: 'Montserrat';
  font-weight: 300;
  color: #fff;
  padding: 6rem;
  text-align: center;
  width: 100%;
  align-self: flex-start;
  transition: 1s !important;
  border-radius: 20px 0 20px;
  border-inline: solid #ff8600;

  h2 {
    font-size: 25px;
    font-weight: 900;
    margin-top: 32px;
    font-family: 'Montserrat';
  }

  h2 span {
    color: #ff8600;
  }

  @media (max-width: 1450px) {
    width: 18rem;
    padding: 1.5rem;
    font-size: 0.8rem;
  }

  @media (max-width: 1000px) {
    width: 100%;
  }

  &:hover {
    filter: brightness(1.2);
    background: url(/img/interface-min.png) no-repeat #18181c;
    background-position: 10px 65px;
    transition: 0, 5;
    transition: transform 0, 5s ease-in-out;
  }

  &:hover.span {
    filter: brightness(1.2);
    background-position: 10px 65px;
    transition: 0, 5;
    transform: scale3d(0);
    transition: transform 0, 5s ease-in-out;
    transform-origin: left;
  }

  :before {
    background: url(/img/interface-min.png) no-repeat #18181c;
    background-position: 10px 65px;
    transition: 0, 5;
    transform: scale3d(0);
    transition: transform 0, 5s ease-in-out;
    transform-origin: left;
  }

  &:hover.p {
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    padding: 22px 20px 0 60px;
  }

  &:hover.h2 {
    font-size: 25px;
    line-height: 25px;
    height: 80px;
    padding: 20px 0 0 27px;
  }

  &:last-child {
    align-self: flex-end;
  }

  > div {
    margin: 0.2rem 0;
    margin-left: 1rem;
  }

  span.purple {
    background-position: 10px 90px;
    padding-top: 60px;
    text-align: center;
  }

  p {
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    padding: 20px 20px 20px 20px;
    align-items: center;
  }
  span.blue {
    color: #7ac7e3;
  }

  span.comment {
    color: #ff8600;
    margin-bottom: 1rem;
    margin: 1rem;
    display: block;
    gap: 2.5rem;
    font-size: 14px;
    font-weight: 400;
    font-family: 'Montserrat';
    line-height: 24px;
    padding: 22px 20px 0 60px;
  }

  button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    cursor: pointer;
    text-align: center;
    border: 0.25em solid var(--second-color);
    padding: 1em 3em;
    color: var(--white);
    font-size: 15px;
    font-weight: 700;
    background-color: transparent;
    border-radius: 1em;
    outline: none;
    position: relative;
    transition: all 0.3s;
  }

  button:hover {
    color: black;
    background-color: var(--white);
    box-shadow: 0 0 1em 0.25em var(--hover-second-color),
      0 0 4em 2em var(--hover-second-color),
      inset 0 0 0.75em 0.25em var(--white);
  }
`
export const Identidade = styled.pre`
  background: url(/img/detalhe.png) #18181c center bottom no-repeat;
  text-align: center;
  font-family: 'Montserrat';
  font-weight: 300;
  color: #fff;
  padding: 5rem;
  text-align: center;
  width: 100%;
  align-self: flex-start;
  transition: 1s !important;
  border-radius: 20px 0 20px;
  border-inline: solid #ff8600;

  h2 {
    font-size: 25px;
    font-weight: 900;
    margin-top: 32px;
    font-family: 'Montserrat';
  }

  h2 span {
    color: #ff8600;
  }

  @media (max-width: 1450px) {
    width: 18rem;
    padding: 1.5rem;
    font-size: 0.8rem;
  }

  @media (max-width: 1000px) {
    width: 100%;
  }

  &:hover {
    filter: brightness(1.2);
    background: url(/img/id-min.png) no-repeat #18181c;
    background-position: 10px 65px;
    transition: 0, 5;
    transition: transform 0, 5s ease-in-out;
  }

  &:hover.span {
    filter: brightness(1.2);
    background-position: 10px 65px;
    transition: 0, 5;
    transform: scale3d(0);
    transition: transform 0, 5s ease-in-out;
    transform-origin: left;
  }

  :before {
    background: url(/img/interface-min.png) no-repeat #18181c;
    background-position: 10px 65px;
    transition: 0, 5;
    transform: scale3d(0);
    transition: transform 0, 5s ease-in-out;
    transform-origin: left;
  }

  &:hover.p {
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    padding: 22px 20px 0 60px;
  }

  &:hover.h2 {
    font-size: 25px;
    line-height: 25px;
    height: 80px;
    padding: 20px 0 0 27px;
  }

  &:last-child {
    align-self: flex-end;
  }

  > div {
    margin: 0.2rem 0;
    margin-left: 1rem;
  }


  p {
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    padding: 20px 20px 20px 20px;
    align-items: center;
  }
  span.blue {
    color: #7ac7e3;
  }

  span.comment {
    color: #ffcc00;
    margin-bottom: 1rem;
    margin: 1rem;
    display: block;
    gap: 2.5rem;
    font-size: 14px;
    font-weight: 400;
    font-family: 'Montserrat';
    line-height: 24px;
    padding: 22px 20px 0 60px;
  }

  button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    cursor: pointer;
    text-align: center;
    border: 0.25em solid var(--second-color);
    padding: 1em 3em;
    color: var(--white);
    font-size: 15px;
    font-weight: 700;
    background-color: transparent;
    border-radius: 1em;
    outline: none;
    position: relative;
    transition: all 0.3s;
  }

  button:hover {
    color: black;
    background-color: var(--white);
    box-shadow: 0 0 1em 0.25em var(--hover-second-color),
      0 0 4em 2em var(--hover-second-color),
      inset 0 0 0.75em 0.25em var(--white);
  }
`;
