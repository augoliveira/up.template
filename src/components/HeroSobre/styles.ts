'use client';
'use client';
import styled from 'styled-components';

export const AboutContainer = styled.section`
width: 100%;
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .AboutImg {
    width: 100%;
    display: flex;
    justify-self: center;
    align-self: center;
    position: relative;
    transition: 0.4s;
    transition: 1s all ease;
    border-radius: 5px;
    margin-bottom: 2rem;

    &:hover {
      transform: scale(1.1);
    }
  }

  .aboutContent {
    padding: 0 1rem;
    text-align: start;
    max-width: 31rem;
  }

  .aboutDescription {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  @media (min-width: 994px) {
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: repeat(2, 1fr);

    .AboutImg {
      width: 300px;
    }

    .aboutContent {
      width: 31rem;
      font-weight: 500;
    }
  }
`;
