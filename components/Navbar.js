import Link from 'next/link'
import InputSearch from './InputSearch';

function Navbar() {
    return (
        <nav>
            <div className="navbar__div" >
                <Link href='/' >
                    <a>Gutaku</a>
                </Link>
            </div>
            <div className="navbar__div">
                <Link href='/'>
                    <a>Home</a>
                </Link>
                <Link href="/top" >
                    <a>Top Anime</a>
                </Link>
                <Link href="/schedule" >
                    <a>Schedule</a>
                </Link>
                <InputSearch />
            </div>
        </nav>
    )
}

export default Navbar
