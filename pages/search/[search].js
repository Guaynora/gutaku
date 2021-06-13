import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import Star from "../../components/Star";
import Loader from "../../components/Loader";
import { colors } from "../../styles/theme";
import AnimeSearchContext, {
  animeContext,
} from "../../context/AnimeSearchContext";

function search() {
  const [infoSearch, setInfoSearch] = useState([]);
  const [load, setLoad] = useState(false);
  const { animeSearch } = useContext(animeContext);
  const router = useRouter();

  const handleAnimeClick = (malId) => {
    router.push(`/anime/${malId}`);
  };

  useEffect(async () => {
    setLoad(true);
    const url = `https://api.jikan.moe/v3/search/anime?q=${animeSearch}&limit=16`;
    const res = await fetch(url);
    const resSearch = await res.json();
    setInfoSearch(resSearch.results);
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
      <style jsx>{`
        .search {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          margin: 3.125rem auto;
        }

        .search__anime {
          cursor: pointer;
          width: 13.75rem;
          height: 20rem;
          margin-top: 3.125rem;
          position: relative;
        }

        .search__anime-img {
          height: 100%;
          width: 100%;
          transition: all 0.3s ease;
        }

        .search__anime-title {
          background-color: ${colors.backgroundText};
          color: ${colors.white};
          padding: 0.3125rem;
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          overflow: hidden;
          text-align: center;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .search__anime:hover .search__anime-img {
          filter: brightness(40%);
        }

        .search__score {
          align-items: center;
          display: flex;
        }

        .search__score-text {
          color: ${colors.white};
          margin-left: 0.625rem;
        }

        @media screen and (max-width: 430px) {
          body {
            font-size: 12px;
          }
        }
      `}</style>
    </>
  );
}

export default search;
