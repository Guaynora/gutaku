import { colors } from "../../styles/theme";
import css from "styled-jsx/css";

export default css`
  .top {
    margin: 6rem auto;
    position: relative;
    z-index: 40;
  }

  .top__section {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 1.5rem auto;
  }

  .top__anime {
    position: relative;
    width: 13.75rem;
    height: 20rem;
    cursor: pointer;
    margin-top: 3.125rem;
  }

  .top__anime-img {
    width: 100%;
    height: 100%;
    transition: all 0.3s ease;
  }

  .top__anime-title {
    position: absolute;
    color: ${colors.white};
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    text-align: center;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.8);
    padding: 0.3125rem;
  }

  .top__anime-rank {
    position: absolute;
    visibility: hidden;
    color: ${colors.white};
    text-align: center;
    left: 0;
    right: 0;
    top: 0;
    font-size: 80px;
    transition: visibility 0.1s ease-in-out;
  }

  .top__anime:hover .top__anime-rank {
    visibility: visible;
  }

  .top__anime:hover .top__anime-img {
    filter: brightness(40%);
  }

  .top__score {
    display: flex;
    align-items: center;
  }

  .top__score-text {
    color: ${colors.white};
    margin-left: 0.625rem;
  }

  @media (max-width: 430px) {
    .top {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  @media screen and (max-width: 770px) {
    .top__anime {
      width: 8rem;
      height: 12rem;
    }

    .top__anime-rank {
      visibility: visible;
      z-index: 30;
      top: 0;
      font-size: 12px;
      background-color: rgba(0, 0, 0, 0.8);
      margin: 0;
    }
  }
`;
