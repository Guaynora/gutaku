import { useState, useEffect, useRef } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";


const Today = () => {

    const [day, setDay] = useState(null)
    const [today, setToday] = useState([])
    const [child, setChild] = useState(false)

    const gliderListRef = useRef(null);

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
                slidesToShow: 5,
                slidesToScroll: 5,
                draggable: true,
                dots: '.glider__dots',
                arrows: {
                    prev: '.glider__prev',
                    next: '.glider__next'
                },
            })
        }
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
                    <FontAwesomeIcon icon={faChevronLeft} style={{ width: '30px' }} />
                </button>
                <div className="glider__list" ref={gliderListRef} >
                    {
                        today.map(el =>
                            <div key={el.mal_id} className="glider__element" >
                                <img src={el.image_url} alt={el.title} />
                                <p>{el.title}</p>
                            </div>
                        )
                    }
                </div>
                <button className="glider__next" aria-label="Next" >
                    <FontAwesomeIcon icon={faChevronRight} style={{ width: '20px' }} />
                </button>

            </div>
            <div role="tablist" className="glider__dots" ></div>
        </div>
    )

}

export default Today
