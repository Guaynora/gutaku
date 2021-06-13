import Link from "next/link";
import { useState } from "react";
import { colors } from "../styles/theme";
import InputSearch from "./InputSearch";

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
        header {
          align-items: center;
          background: ${colors.primary};
          border-bottom: 1px solid ${colors.secondary};
          box-shadow: ${colors.shadow};
          display: flex;
          justify-content: space-between;
          position: fixed;
          width: 100%;
          top: 0;
          height: 4rem;
          z-index: 900;
        }
        a {
          color: ${colors.white};
        }

        div a {
          color: #a17bcc;
          margin-left: 50px;
          font-weight: bold;
          font-size: 30px;
        }

        nav {
          position: absolute;
          align-items: center;
          display: flex;
          flex-direction: column;
          top: 0;
          left: 0;
          right: 0;
          margin: 4rem 0;
          text-align: center;
          background-color: ${colors.black};
          opacity: ${isactive ? "1" : "0"};
          pointer-events: ${isactive ? "auto" : "none"};
          transition: opacity 0.5s ease;
          z-index: 999;
        }

        nav a {
          font-size: 20px;
          padding: 20px;
          width: 100%;
        }

        nav a:hover {
          background-color: ${colors.secondary};
        }

        button {
          outline: thin solid ${colors.secondary};
          background-color: ${colors.black};
          border: 0;
          cursor: pointer;
          margin-right: 30px;
        }

        button svg {
          fill: ${colors.secondary};
        }

        svg:first-child {
          display: ${isactive ? "none" : "auto"};
        }

        svg:last-child {
          display: ${isactive ? "auto" : "none"};
        }

        @media (min-width: 900px) {
          button {
            display: none;
          }

          nav {
            position: relative;
            width: auto;
            flex-direction: row;
            opacity: 1;
            pointer-events: auto;
            z-index: 800;
            margin: 0;
            top: 0;
            background-color: transparent;
          }

          nav a {
            padding: 0 1rem;
            white-space: nowrap;
          }

          nav a:hover {
            background-color: transparent;
          }
        }
      `}</style>
    </>
  );
}

export default Navbar;
