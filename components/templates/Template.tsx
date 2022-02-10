import { ReactNode } from 'react';
import Header from 'components/Header/Header';
import { SWrapper, SContent } from './Template.styles';

interface ITemplateProps {
  children: ReactNode;
}

const Template = ({ children }: ITemplateProps) => {
  return (
    <SWrapper>
      <Header />
      <SContent>{children}</SContent>
    </SWrapper>
  );
};

export default Template;
