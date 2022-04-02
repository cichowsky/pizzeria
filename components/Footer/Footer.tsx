import Image from 'next/image';
import { SFooter, SImageContainer, STextContainer, SMotto, SHeading, SDay } from './Footer.styles';

const Footer = () => {
  return (
    <SFooter>
      <SImageContainer>
        <Image src="/images/footer-bg.jpg" layout="fill" objectFit="cover" alt="" />
      </SImageContainer>
      <STextContainer>
        <SMotto>
          Well baked slice of pizza.
          <br />
          The best in town!
        </SMotto>

        <div>
          <SHeading>Our Restaurants</SHeading>
          <p>
            1654 R. Don Road #304.
            <br /> NewYork, 85022
            <br /> (602) 867-1010
          </p>
          <p>
            2356 K. Laquie Rd #235.
            <br /> NewYork, 85022
            <br /> (602) 867-1011
          </p>
        </div>

        <div>
          <SHeading>Working hours</SHeading>
          <p>
            <SDay>monday - friday</SDay>
            <br /> 9:00 – 22:00
          </p>
          <p>
            <SDay>saturday - sunday</SDay>
            <br /> 12:00 – 24:00
          </p>
        </div>
      </STextContainer>
    </SFooter>
  );
};

export default Footer;
