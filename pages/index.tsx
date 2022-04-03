import type { NextPage } from 'next';
import Head from 'next/head';
import Template from 'components/templates/Template';
import styled from 'styled-components';

interface IHeadingProps {
  isSmall?: boolean;
}

const Heading = styled.h1<IHeadingProps>`
  font-size: ${({ theme, isSmall }) => (isSmall ? theme.font.size.xl : theme.font.size.xxl)};
`;

const Home: NextPage = () => {
  return (
    <Template>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="The best pizza in town!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Heading isSmall>Hello world</Heading>
    </Template>
  );
};

export default Home;
