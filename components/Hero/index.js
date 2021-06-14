import { useRouter } from "next/router";
import styles from "./styles";

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
            agenda in the long-awaited conclusion to Paradis fight for freedom.
          </p>
        </div>
      </section>
      <style jsx>{styles}</style>
    </>
  );
}

export default Hero;
