import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Loader from "../components/Loader";
import Star from "../components/Star";
import Filter from "../components/Filter";
import Head from "next/head";

function top() {
  const [top, setTop] = useState([]);
  const [load, setLoad] = useState(false);
  const [option, setOption] = useState(null);
  const router = useRouter();

  const handleAnimeClick = (malId) => {
    router.push(`/anime/${malId}`);
  };

  useEffect(async () => {
    setLoad(true);
    const url = "https://api.jikan.moe/v3/top/anime/1";
    const res = await fetch(url);
    const json = await res.json();
    const claves = Object.keys(json);
    for (let i = 0; i < claves.length; i++) {
      const clave = claves[i];
      if (i === 3) {
        setTop(json[clave]);
      }
    }
    setLoad(false);
  }, []);

  useEffect(async () => {
    setLoad(true);
    const url = `https://api.jikan.moe/v3/top/anime/1/${option}`;
    const res = await fetch(url);
    const json = await res.json();
    const claves = Object.keys(json);
    for (let i = 0; i < claves.length; i++) {
      const clave = claves[i];
      if (i === 3) {
        setTop(json[clave]);
      }
    }
    setLoad(false);
  }, [option]);

  const handleFilterClick = (childData) => {
    setOption(childData.toLowerCase());
  };

  return (
    <>
      <Head>
        <title>Gutaku-Top</title>
      </Head>
      <Layout>
        <div className="top">
          <Filter handleFilterClick={handleFilterClick} />
          {load ? (
            <div className="container__load">
              <Loader />
            </div>
          ) : (
            <div className="top__section">
              {top.map((el) => (
                <figure
                  key={el.mal_id}
                  className="top__anime"
                  onClick={(e) => handleAnimeClick(el.mal_id)}
                >
                  <img
                    src={el.image_url}
                    alt={el.title}
                    className="top__anime-img"
                  />
                  <figcaption className="top__anime-title">
                    {el.title}
                  </figcaption>
                  <p className="top__anime-rank">{el.rank}</p>
                  <div className="top__score">
                    <Star />
                    <p className="top__score-text">{el.score}</p>
                  </div>
                </figure>
              ))}
            </div>
          )}
        </div>
      </Layout>
    </>
  );
}

export default top;
