import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas, faSearch } from "@fortawesome/free-solid-svg-icons";

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
                <div className="navbar__input" >
                    <input type="text" className="navbar__input-search" placeholder="Search anime" />
                    <FontAwesomeIcon icon={faSearch} style={{ width: '20px', color: '#a17bcc' }} />
                </div>
            </div>
        </nav>
    )
}

export default Navbar
