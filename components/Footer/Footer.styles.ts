import styled from 'styled-components';

export const SFooter = styled.footer`
  display: flex;

  background: ${({ theme: { background } }) =>
    `linear-gradient(145deg, ${background.footer} 0%, ${background.footer2} 100%)`};
  color: ${({ theme }) => theme.font.color.footer};

  ${({ theme }) => theme.mq.desktop} {
    min-height: 420px;
    font-size: ${({ theme }) => theme.font.size.m};
  }
`;

export const SImageContainer = styled.div`
  display: none;

  ${({ theme }) => theme.mq.desktop} {
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
  gap: 3.2rem;
  padding: 4.8rem;

  ${({ theme }) => theme.mq.desktop} {
    gap: 3.2rem 6.4rem;
  }
`;

export const SMotto = styled.h2`
  text-transform: uppercase;
  width: 100%;
  margin-bottom: 0;

  ${({ theme }) => theme.mq.desktop} {
    font-size: ${({ theme }) => theme.font.size.xxxl};
  }
`;

export const SHeading = styled.h3`
  color: ${({ theme }) => theme.font.color.footerHeader};
  text-transform: uppercase;
`;

export const SDay = styled.span`
  text-transform: uppercase;
  font-weight: bold;
`;
