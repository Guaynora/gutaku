import Link from "next/link";
import { useState } from "react";
// import { colors } from "../../styles/theme";
import InputSearch from "../InputSearch";
import styles from "./styles";

function Navbar() {
  const [isactive, setIsactive] = useState(false);

  const menuBtn = (e) => {
    setIsactive(!isactive);
  };

  return (
    <>
      <header>
        <div>
          <Link href="/">
            <a>GUTAKU</a>
          </Link>
        </div>
        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/top">
            <a>Top Anime</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
          <InputSearch />
        </nav>
        <button onClick={menuBtn}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M4 6H20V8H4zM4 11H20V13H4zM4 16H20V18H4z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.242 13.364 12 17.606 7.758z" />
          </svg>
        </button>
      </header>
      <style jsx>{`
        nav {
          opacity: ${isactive ? "1" : "0"};
          pointer-events: ${isactive ? "auto" : "none"};
        }

        svg:first-child {
          display: ${isactive ? "none" : "auto"};
        }

        svg:last-child {
          display: ${isactive ? "auto" : "none"};
        }
        @media (min-width: 900px) {
          nav {
            opacity: 1;
            pointer-events: auto;
          }
        }
      `}</style>
      <style jsx>{styles}</style>
    </>
  );
}

export default Navbar;
