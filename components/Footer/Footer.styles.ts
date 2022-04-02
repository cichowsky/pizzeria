import styled from 'styled-components';

export const SFooter = styled.footer`
  display: flex;

  background: linear-gradient(145deg, #111 0%, #222 100%);
  color: lightgray;

  @media (min-width: 1024px) {
    min-height: 420px;
    font-size: 18px;
  }
`;

export const SImageContainer = styled.div`
  display: none;

  @media (min-width: 1024px) {
    position: relative;
    display: block;
    flex: 1;
    min-width: 400px;
    max-width: 600px;
  }
`;

export const STextContainer = styled.div`
  flex: 2;

  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 3rem;

  @media (min-width: 1024px) {
    gap: 2rem 4rem;
  }
`;

export const SMotto = styled.h2`
  text-transform: uppercase;
  width: 100%;

  @media (min-width: 1024px) {
    font-size: 36px;
  }
`;

export const SHeading = styled.h3`
  color: #b7903c;
  text-transform: uppercase;
`;

export const SDay = styled.span`
  text-transform: uppercase;
  font-weight: bold;
`;
