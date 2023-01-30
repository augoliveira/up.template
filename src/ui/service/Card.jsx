import React from 'react';
import styled from 'styled-components';

const Card = ({ title, Icon, desc, Buttom }) => {
  return (
    <Content>
      <span>
        <Icon />
      </span>
      <h1>{title}</h1>
      <p>{desc}</p>
    </Content>
  );
};

export default Card;

const Content = styled.div`
  width: 100%;
  background: linear-gradient(225deg, #313860 0%, #11172b 100%);
  padding: 1rem;
  padding-top: 2.5rem;
  height: 20rem;
  border-radius: 5px;
  outline-offset: 3px;
  text-align: center;
  box-shadow: rgba(59, 59, 60, 0.1) 0px 7px 29px 0px;
    transition: 0.3s ease-in-out;
    &:hover {
      filter: brightness(1.3);
    filter: invert(1) drop-shadow(0 0 0.3rem #ffffff70);
    transform: translateY(-20px);
    }
    @keyframes rotate {
      from {
        transform: rotate(360deg);
      }
      to {
        transform: rotate(0deg);
      }
    }
  span {
    font-size: 4rem;
    color: #01be96;


  }
  h1 {
    font-size: 2rem;
      margin-bottom: 1.5rem;
  }
  p {
    color: #c4c4c4;
      font-size: 1rem;
      font-weight: 300;
  }


`;
export const Button = styled.a`
  color: red;
  font-weight: bold;
  margin-top: 30px;
  cursor: pointer;
`;
