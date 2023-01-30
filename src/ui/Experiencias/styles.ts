'use client';
import styled from 'styled-components';

export const Container = styled.section`
  > section {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    justify-content: center;
    margin-top: 7rem;
    display: flex;
    gap: 1.5rem;

    padding-bottom: 8rem;
    border-bottom: 3px solid #0ee7b7;

    @media (max-width: 1000px) {
      gap: 1rem;
    }

    @media (max-width: 700px) {
      flex-direction: column;
      margin-top: 5rem;
      gap: 2rem;
    }
  }
`;

export const ItemContainer = styled.div`
  > div {
    background: linear-gradient(225deg, #313860 0%, #11172b 100%);
    padding: 1rem;
    padding-top: 2.5rem;
    height: 20rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
    border-radius: 5px;
    outline-offset: 3px;
    border: 1.5px solid var(--second-color);
    @keyframes rotate {
      from {
        transform: rotate(360deg);
      }
      to {
        transform: rotate(0deg);
      }
    }

    max-width: 19rem;

    transition: 0.5s;

    h1 {
      color: #0ee7b7;
      font-size: 2rem;
      margin-bottom: 1.5rem;
    }

    h2 {
      color: #7ac7e3;
      font-size: 1.5rem;
      font-weight: 300;
      margin-bottom: 1rem;
    }

    p {
      color: #c4c4c4;
      font-size: 1rem;
      font-weight: 300;
    }
    span {
      z-index: -1;
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 3px;
      left: 50%;
      right: 50%;
      color: var(--second-color);
      opacity: 0.2;
      font-weight: 800;
      font-size: 2.6rem;

      @media (min-width: 370px) {
        top: -0.8rem;
        font-size: 3rem;
      }

      @media (min-width: 994px) {
        top: -0.8rem;
        font-size: 4.5rem;
      }
    }
  }

  &:hover > div {
    filter: brightness(1.3);
    filter: invert(1) drop-shadow(0 0 0.3rem #ffffff70);
    transform: translateY(-20px);
  }

  @media (max-width: 1000px) {
    > div {
      height: 15rem;
      padding-top: 1.5rem;

      h1 {
        font-size: 1.2rem;
        margin-bottom: 1rem;
      }

      h2 {
        font-size: 1rem;
      }

      p {
        font-size: 0.9rem;
      }
    }
  }

  @media (max-width: 700px) {
    &:nth-child(even) > div {
      margin-top: 0;
    }

    &:hover > div {
      transform: translateY(0);
    }

    > div {
      height: auto;
      padding: 2rem;
      max-width: 100%;

      h1 {
        font-size: 2rem;
      }

      h2 {
        font-size: 1.5rem;
      }

      p {
        font-size: 1rem;
      }
    }
  }
`;
