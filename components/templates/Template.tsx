import { ReactNode } from 'react';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import { SWrapper, SContent } from './Template.styles';

interface ITemplateProps {
  children: ReactNode;
}

const Template = ({ children }: ITemplateProps) => {
  return (
    <SWrapper>
      <Header />
      <SContent>{children}</SContent>
      <Footer />
    </SWrapper>
  );
};

export default Template;
