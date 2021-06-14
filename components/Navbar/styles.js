import { colors } from "../../styles/theme";
import css from "styled-jsx/css";

export default css`
  header {
    align-items: center;
    background: ${colors.primary};
    border-bottom: 1px solid ${colors.secondary};
    box-shadow: ${colors.shadow};
    display: flex;
    justify-content: space-between;
    position: fixed;
    width: 100%;
    top: 0;
    height: 4rem;
    z-index: 900;
  }
  a {
    color: ${colors.white};
  }

  div a {
    color: #a17bcc;
    margin-left: 50px;
    font-weight: bold;
    font-size: 30px;
  }

  nav {
    position: absolute;
    align-items: center;
    display: flex;
    flex-direction: column;
    top: 0;
    left: 0;
    right: 0;
    margin: 4rem 0;
    text-align: center;
    background-color: ${colors.black};
    transition: opacity 0.5s ease;
    z-index: 999;
  }

  nav a {
    font-size: 20px;
    padding: 20px;
    width: 100%;
  }

  nav a:hover {
    background-color: ${colors.secondary};
  }

  button {
    outline: thin solid ${colors.secondary};
    background-color: ${colors.black};
    border: 0;
    cursor: pointer;
    margin-right: 30px;
  }

  button svg {
    fill: ${colors.secondary};
  }

  @media (min-width: 900px) {
    button {
      display: none;
    }

    nav {
      position: relative;
      width: auto;
      flex-direction: row;
      z-index: 800;
      margin: 0;
      top: 0;
      background-color: transparent;
    }

    nav a {
      padding: 0 1rem;
      white-space: nowrap;
    }

    nav a:hover {
      background-color: transparent;
    }
  }
`;
