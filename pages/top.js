import Layout from '../components/Layout'
import { useState, useEffect } from 'react'

function top() {

    const [top, setTop] = useState([])

    useEffect(async () => {
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
    }, [])

    return (
        <>
            <Layout>
                <div className="top" >
                    {
                        top.map(el =>
                            <figure key={el.mal_id} className="top__anime" >
                                <img src={el.image_url} alt={el.title} className="top__anime-img" />
                                <figcaption className="top__anime-title" >{el.title}</figcaption>
                            </figure>
                        )
                    }
                </div>
            </Layout>
        </>
    )
}

export default top

{/* top.map(el =>
                                <tr key={el.mal_id} >
                                    <td>{el.rank}</td>
                                    <td>
                                        <img src={el.image_url} alt={el.title} />
                                        <p>{el.title}</p>
                                    </td>
                                    <td>{el.score}</td>
                                </tr>
                            )
 */}