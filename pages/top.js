import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Loader from "../components/Loader";
import Star from "../components/Star";
import Filter from "../components/Filter";
import { colors } from "../styles/theme";
import Head from "next/head";

function top() {
  const [top, setTop] = useState([]);
  const [load, setLoad] = useState(false);
  const [option, setOption] = useState(null);
  const router = useRouter();

  const handleAnimeClick = (malId) => {
    router.push(`/anime/${malId}`);
  };

  const urls = {
    topUrl: "https://api.jikan.moe/v3/top/anime/1",
    options: `https://api.jikan.moe/v3/top/anime/1/${option}`,
  };

  const getTop = async (url) => {
    setLoad(true);
    const res = await fetch(url);
    const json = await res.json();
    setTop(json.top);
    setLoad(false);
  };

  useEffect(async () => {
    if (option === null) {
      const url = urls.topUrl;
      console.log(url);
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
      <style jsx>{`
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
      `}</style>
    </>
  );
}

export default top;
