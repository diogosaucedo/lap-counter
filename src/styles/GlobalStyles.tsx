import { createGlobalStyle } from 'styled-components';
import { white } from '../configs/colors';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    font-size: 62.5%; // 1rem = 10px
  }

  body {
    display: flex;
    justify-content: center;
    align-items: center;

    min-height: 100vh;

    font-family: 'Montserrat', sans-serif;
    font-weight: 400;

  }
  .App {
    background: ${white};
    padding: 0.8rem;
    border-radius: 0.8rem;
    box-shadow: 0 0 1rem rgba(0,0,0,0.5);
  }
  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 700;
  }
`;
