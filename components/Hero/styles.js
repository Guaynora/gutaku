import { colors } from "../../styles/theme";
import css from "styled-jsx/css";

export default css`
  section {
    height: 70vh;
    background-image: url("heroimg.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: center;
    box-shadow: inset 0 -100px 120px rgb(0 0 0 / 80%);
    margin: 3rem 0;
    cursor: pointer;
  }
  div {
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 2rem;
  }
  h2 {
    color: ${colors.white};
    font-size: 3rem;
    margin: 0;
  }
  p {
    color: ${colors.white};
    font-size: 1.2rem;
  }

  @media (max-width: 720px) {
    h2 {
      font-size: 2rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;
