import Layout from '../components/Layout'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import Loader from '../components/Loader';
import Star from '../components/Star';
import Filter from '../components/Filter';

function top() {

    const [top, setTop] = useState([])
    const [load, setLoad] = useState(false)
    const router = useRouter()

    const handleAnimeClick = (mal_id) => {
        router.push(`/anime/${mal_id}`)
    }

    useEffect(async () => {
        setLoad(true)
        let url = `https://api.jikan.moe/v3/top/anime/1`
        let res = await fetch(url)
        let json = await res.json()
        let claves = Object.keys(json)
        for (let i = 0; i < claves.length; i++) {
            let clave = claves[i]
            if (i === 3) {
                setTop(json[clave])
            }
        }
        setLoad(false)
    }, [])

    return (
        <>
            <Layout>
                <Filter />
                {
                    load
                        ?
                        <div className="container__load" >
                            <Loader />
                        </div>
                        :
                        <div className="top" >
                            {
                                top.map(el =>
                                    <figure
                                        key={el.mal_id}
                                        className="top__anime"
                                        onClick={(e) => handleAnimeClick(el.mal_id)}
                                    >
                                        <img src={el.image_url} alt={el.title} className="top__anime-img" />
                                        <figcaption className="top__anime-title" >{el.title}</figcaption>
                                        <p className="top__anime-rank" >{el.rank}</p>
                                        <div className="top__score" >
                                            <Star />
                                            <p className="top__score-text" >{el.score}</p>
                                        </div>
                                    </figure>
                                )
                            }
                        </div>
                }

            </Layout>
        </>
    )
}

export default top
