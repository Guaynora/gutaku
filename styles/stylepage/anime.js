import { colors } from "../../styles/theme";
import css from "styled-jsx/css";

export default css`
    section {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-end;
          width: 70%;
          margin: auto;
          margin-bottom: 1.875rem;
          margin-top: 8rem;
        }

    article {
        display: flex;
        flex-direction: row;
        align-items: center;
        color: ${colors.white};
    }

    img {
        width: 17.5rem;
        height: 25rem;
    }

    p {
        text-align: justify;
    }

    h3 {
        font-size: 1.875em;
    }

    .infotext {
        margin-left: 3.125em;
    }

    .genres {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .genres-p {
        margin-right: 0.625em;
    }

    .listgenres {
        display: flex;
        flex-direction: row;
        white-space: nowrap;
    }
    
    .item-genre {
        margin-right: 0.625em;
        background: ${colors.primary});
        padding: 0.3125em;
        border-radius: 0.625em;
    }

    .item-genre:hover {
        background: ${colors.secondary};
        cursor: pointer;
        transition: all 0.5s;
    }

    iframe{
        margin-top: 3.125rem;
        width: 100%;
    }

    @media(max-width: 770px){
        section{
        font-size: 12px;
        }
        article{
        width: 100%
        }

        img{
        width: 13rem;
        height: 20rem;
        }

        .infotext {
        width: 60%;
        }

        .genres{
        flex-direction: column;
        align-items: flex-start;
        }

        .listgenres {
        flex-wrap: wrap;
        }
    }

    @media(max-width: 430px){
        article{
        flex-direction: column;
        justify-content: center;
        }

        .infotext {
        width: 100%;
        margin: 0;
        }

        h3{
        text-align: center;
        }

        iframe{
        width: 100%;
        height: 20em;
        }

    }
`;
