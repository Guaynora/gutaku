import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Carousel from "react-elastic-carousel";
import styled from "styled-components";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 300, itemsToShow: 2, itemsToScroll: 2 },
  { width: 600, itemsToShow: 3, itemsToScroll: 3 },
  { width: 1200, itemsToShow: 5, itemsToScroll: 5 },
];

const Figure = styled.figure`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
  width: 100%;
  margin: 15px;
  color: #fff;
  @media (max-width: 380px) {
    height: 200px;
  }
  @media (max-width: 430px) {
    height: 230px;
  }
`;

const P = styled.p`
  position: absolute;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  overflow: hidden;
  left: 0;
  right: 0;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 5px;
`;

const Img = styled.img`
  &:hover {
    filter: brightness(40%);
    transition: 0.3s ease;
  }
  @media (max-width: 380px) {
    height: 200px;
  }

  @media (max-width: 430px) {
    height: 230px;
  }
`;

function AnimeCarrousel({ option }) {
  const [data, setData] = useState([]);
  const [arrow, setArrow] = useState(true);
  const [day, setDay] = useState(null);

  const router = useRouter();

  const days = {
    0: "sunday",
    1: "monday",
    2: "tuesday",
    3: "wednesday",
    4: "thursday",
    5: "friday",
    6: "saturday",
  };

  const urls = {
    airing: "https://api.jikan.moe/v3/top/anime/1/airing",
    today: `https://api.jikan.moe/v3/schedule/${day}`,
  };

  const getAnime = async () => {
    const url = urls[option];
    const res = await fetch(url);
    const json = await res.json();
    const claves = Object.keys(json);
    for (let i = 0; i < claves.length; i++) {
      const clave = claves[i];
      if (i === 3) {
        setData(json[clave]);
      }
    }
  };

  const handleAnimeClick = (malId) => {
    router.push(`/anime/${malId}`);
  };

  useEffect(() => {
    getAnime();
    const date = new Date().getDay();
    setDay(days[date]);
  }, [day]);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 750) {
        setArrow(false);
      } else if (window.innerWidth > 750) {
        setArrow(true);
      }
    }
    handleResize();
  }, []);

  return (
    <>
      <div>
        <Carousel
          breakPoints={breakPoints}
          pagination={false}
          showArrows={arrow}
        >
          {data.map((el) => (
            <Figure
              key={el.mal_id}
              onClick={(e) => handleAnimeClick(el.mal_id)}
            >
              <Img src={el.image_url} alt={el.title} />
              <P>{el.title}</P>
            </Figure>
          ))}
        </Carousel>
      </div>
      <style jsx>{`
        div {
          margin: 0 15px;
        }
      `}</style>
    </>
  );
}

export default AnimeCarrousel;
