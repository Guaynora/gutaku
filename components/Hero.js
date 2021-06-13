import { colors } from "../styles/theme";
import { useRouter } from "next/router";

function Hero() {
  const router = useRouter();
  const handleAnimeClick = (malId) => {
    router.push(`/anime/${malId}`);
  };

  return (
    <>
      <section onClick={(e) => handleAnimeClick(40028)}>
        <div>
          <h2>Shingeki no Kyojin: The Final Season</h2>
          <p>
            With the truth now in their hands, the group set out for the world
            beyond the walls. In Shingeki no Kyojin: The Final Season, two
            utterly different worlds collide as each party pursues its own
            agenda in the long-awaited conclusion to Paradis' fight for freedom.
          </p>
        </div>
      </section>
      <style jsx>{`
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
      `}</style>
    </>
  );
}

export default Hero;
