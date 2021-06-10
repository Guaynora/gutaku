import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import Star from "../../components/Star";
import Loader from "../../components/Loader";
import AnimeSearchContext, {
  animeContext,
} from "../../context/AnimeSearchContext";

function search() {
  const [infoSearch, setInfoSearch] = useState([]);
  const [load, setLoad] = useState(false);
  const { animeSearch } = useContext(animeContext);
  const router = useRouter();

  const handleAnimeClick = (mal_id) => {
    router.push(`/anime/${mal_id}`);
  };

  useEffect(async () => {
    setLoad(true);
    const url = `https://api.jikan.moe/v3/search/anime?q=${animeSearch}&limit=16`;
    const res = await fetch(url);
    const resSearch = await res.json();
    const claves = Object.keys(resSearch);
    for (let i = 0; i < claves.length; i++) {
      const clave = claves[i];
      if (i === 3) {
        setInfoSearch(resSearch[clave]);
      }
    }
    setLoad(false);
  }, [animeSearch]);

  return (
    <>
      <Layout>
        <AnimeSearchContext>
          <div className="search">
            {load ? (
              <div className="container__load">
                <Loader />
              </div>
            ) : (
              infoSearch.map((el) => (
                <figure
                  key={el.mal_id}
                  className="search__anime"
                  onClick={(e) => handleAnimeClick(el.mal_id)}
                >
                  <img
                    src={el.image_url}
                    alt={el.title}
                    className="search__anime-img"
                  />
                  <figcaption className="search__anime-title">
                    {el.title}
                  </figcaption>
                  <div className="search__score">
                    <Star />
                    <p className="search__score-text">{el.score}</p>
                  </div>
                </figure>
              ))
            )}
          </div>
        </AnimeSearchContext>
      </Layout>
    </>
  );
}

export default search;
