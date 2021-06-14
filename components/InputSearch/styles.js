import { colors } from "../../styles/theme";
import css from "styled-jsx/css";

export default css`
  form {
    align-items: center;
    background: ${colors.inputBackground};
    border-radius: 40px;
    display: flex;
    margin: 20px;
    padding: 5px 10px;
  }

  form:focus-within {
    border: 1px solid ${colors.secondary};
  }

  input {
    background: ${colors.inputBackground};
    border: none;
    color: ${colors.white};
    outline: none;
  }
`;
