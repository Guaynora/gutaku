import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Loader from "../components/Loader";
import Star from "../components/Star";
import Filter from "../components/Filter";
import Head from "next/head";
import styles from "../styles/stylepage/top";

function top() {
  const [top, setTop] = useState([]);
  const [load, setLoad] = useState(false);
  const [option, setOption] = useState(null);
  const router = useRouter();

  const handleAnimeClick = (malId) => {
    router.push(`/anime/${malId}`);
  };

  const typeToFilter = option === "airing" || option === "upcomming";

  const urls = {
    topUrl: "https://api.jikan.moe/v4/top/anime",
    options: `https://api.jikan.moe/v4/top/anime?${
      typeToFilter ? "filter" : "type"
    }=${option}`,
  };

  const getTop = async (url) => {
    setLoad(true);
    const res = await fetch(url);
    const json = await res.json();
    setTop(json.data);
    setLoad(false);
  };

  useEffect(async () => {
    if (option === null) {
      const url = urls.topUrl;
      getTop(url);
    } else if (option === "nothing") {
      const url = urls.topUrl;
      getTop(url);
    } else {
      const url = urls.options;
      getTop(url);
    }
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
              {top &&
                top.map((el) => (
                  <figure
                    key={el.mal_id}
                    className="top__anime"
                    onClick={(e) => handleAnimeClick(el.mal_id)}
                  >
                    <img
                      src={el.images.webp.image_url}
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
      <style jsx>{styles}</style>
    </>
  );
}

export default top;
