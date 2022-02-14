// https://styled-components.com/docs/api#typescript
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      text: string;
      primary: string;
      background: string;
      headerText: string;
      headerBackground: string;
    };
    layout: {
      maxWidth: string;
      padding: string;
    };
    header: {
      heightSmall: string;
      heightBig: string;
    };
    boxShadow: string;
  }
}
