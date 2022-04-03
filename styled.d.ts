// https://styled-components.com/docs/api#typescript
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    background: {
      body: string;
      header: string;
      header2: string;
      footer: string;
      footer2: string;
    };
    font: {
      color: {
        text: string;
        primary: string;
        header: string;
        headerHover: string;
        footer: string;
        footerHeader: string;
      };
      size: {
        xs: string;
        s: string;
        m: string;
        l: string;
        xl: string;
        xxl: string;
        xxxl: string;
      };
    };
    mq: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    layout: {
      maxWidth: string;
      padding: string;
    };
  }
}
