import { useEffect } from "react";

export default function Carrousel() {

    useEffect(() => {
        window.addEventListener('load', function (e) {
            //console.log(document.querySelector('.glider__list'))
            new Glider(document.querySelector('.glider__list'), {
                slidesToShow: 5,
                slidesToScroll: 5,
                draggable: true,
                dots: '.glider__dots',
                arrows: {
                    prev: '.glider__prev',
                    next: '.glider__next'
                },
            })
        })
    }, [])

    return null

}

