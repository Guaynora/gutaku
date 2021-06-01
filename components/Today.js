import { useState, useEffect, useRef } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from 'next/router';

const Today = () => {

    const [day, setDay] = useState(null)
    const [today, setToday] = useState([])
    const [child, setChild] = useState(false)

    const gliderListRef = useRef(null);

    const router = useRouter()

    const whatDay = () => {
        let fecha = new Date().getDay()
        switch (fecha) {
            case 0:
                setDay('sunday')
                break
            case 1:
                setDay('monday')
                break
            case 2:
                setDay('tuesday')
                break
            case 3:
                setDay('wednesday')
                break
            case 4:
                setDay('thursday')
                break
            case 5:
                setDay('friday')
                break
            case 6:
                setDay('saturday')
                break
        }
    }

    const getAnimeToday = async () => {
        let url = `https://api.jikan.moe/v3/schedule/${day}`
        let res = await fetch(url)
        let json = await res.json()
        let claves = Object.keys(json)
        for (let i = 0; i < claves.length; i++) {
            let clave = claves[i]
            if (i === 3) {
                setToday(json[clave])
            }
        }
    }

    const Carrousel = () => {
        if (gliderListRef.current) {
            console.log(gliderListRef)
            new Glider(gliderListRef.current, {
                slidesToShow: 1,
                slidesToScroll: 1,
                draggable: true,
                dots: '.glider__dots',
                arrows: {
                    prev: '.glider__prev',
                    next: '.glider__next'
                },
                responsive: [
                    {
                        // screens greater than >= 350px
                        breakpoint: 350,
                        settings: {
                            // Set to `auto` and provide item width to adjust to viewport
                            slidesToShow: 3,
                            slidesToScroll: 3,
                            draggable: true,
                            itemWidth: 150,
                            duration: 0.25
                        }
                    }, {
                        // screens greater than >= 420px
                        breakpoint: 420,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                            draggable: true,
                            itemWidth: 150,
                            duration: 0.25
                        }
                    }, {
                        // screens greater than >= 75px
                        breakpoint: 750,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 4,
                            draggable: true,
                            itemWidth: 150,
                            duration: 0.25
                        }
                    }, {
                        // screens greater than >= 1024px
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 5,
                            slidesToScroll: 5,
                            draggable: true,
                            itemWidth: 150,
                            duration: 0.25
                        }
                    }
                ]
            })
        }
    }

    const handleAnimeClick = (mal_id) => {
        router.push(`/anime/${mal_id}`)
    }

    useEffect(() => {
        whatDay()
        day != null ? getAnimeToday() : console.log('day empty')
    }, [day])


    useEffect(() => {
        if (gliderListRef.current.hasChildNodes()) {
            Carrousel()
        } else {
            console.log('No tiene hijos')
            setChild(!child)
        }
    }, [child])

    return (
        <div className="glider" >
            <div className="glider__contain" >
                <button className="glider__prev" aria-label="Previous" >
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <div className="glider__list" ref={gliderListRef} >
                    {
                        today.map(el =>
                            <div
                                key={el.mal_id}
                                className="glider__element"
                                onClick={(e) => handleAnimeClick(el.mal_id)}
                            >
                                <img src={el.image_url} alt={el.title} />
                                <p className="glider__element-title" >{el.title}</p>
                            </div>
                        )
                    }
                </div>
                <button className="glider__next" aria-label="Next" >
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>

            </div>
            <div role="tablist" className="glider__dots" ></div>
        </div>
    )

}

export default Today
