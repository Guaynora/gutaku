import Link from 'next/link'
import { useState } from 'react';
import InputSearch from './InputSearch';


function Navbar() {
    const [isactive, setIsactive] = useState(false)

    const menuBtn = (e) => {
        setIsactive(!isactive)
    }

    return (
        <div className="header" >
            <div className="header-logo" >
                <Link href='/' >
                    <a className="navbar__a" >Gutaku</a>
                </Link>
            </div>
            <nav className={`navbar ${isactive ? "is-active" : ""}`} >
                <Link href='/'>
                    <a className="navbar__a" >Home</a>
                </Link>
                <Link href="/top" >
                    <a className="navbar__a" >Top Anime</a>
                </Link>
                <Link href="/schedule" >
                    <a className="navbar__a" >Schedule</a>
                </Link>
                <InputSearch />
            </nav>
            <button className="menu__btn" onClick={menuBtn} >
                <svg className={isactive ? "none" : ""} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M4 6H20V8H4zM4 11H20V13H4zM4 16H20V18H4z" />
                </svg>
                <svg className={isactive ? "" : "none"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path
                        d="M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.242 13.364 12 17.606 7.758z" />
                </svg>
            </button>
        </div>
    )
}

export default Navbar
