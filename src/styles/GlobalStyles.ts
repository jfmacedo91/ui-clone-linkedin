import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    height: 100%;
    width: 100%;
    background: var(--color-background);
  }
  *, button, input {
    font-family: -apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Fira Sans,Ubuntu,Oxygen,Oxygen Sans,Cantarell,Droid Sans,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Lucida Grande,Helvetica,Arial,sans-serif;
  }
  :root {
    --color-header: #283E4A;
    --color-linkedin: #0077B5;
    --color-input: #E1E9EE;
    --color-icons: #C7D1D8;
    --color-hashtag: #7A8B98;
    --color-background: #F5F5F5;
    --color-ad-text: #434649;
    --color-panel: #FFFFFF;
    --color-link: #0073b1;
    --color-black: #000000E6;
    --color-gray: #00000099;
    --color-separator: #00000026;
    --color-white: #FFFFFF;
  }
`;