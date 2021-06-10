import { useState, useContext } from "react";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { animeContext } from "../context/AnimeSearchContext";
import { colors } from "../styles/theme";

function InputSearch() {
  const [search, setSearch] = useState(null);
  const { setAnimeSearch } = useContext(animeContext);
  const router = useRouter();

  const searchInput = (e) => {
    setSearch(e.target.value);
  };

  const inputSubmit = async (e) => {
    e.preventDefault();
    setAnimeSearch(search);
    router.push(`/search/${search}`);
  };

  return (
    <>
      <form className="navbar__input" onSubmit={inputSubmit}>
        <input
          type="text"
          className="navbar__input-search"
          placeholder="Search anime"
          onChange={searchInput}
        />

        <FontAwesomeIcon
          icon={faSearch}
          style={{ width: "20px", color: "#a17bcc" }}
        />
      </form>
      <style jsx>{`
        form {
          align-items: center;
          background: ${colors.inputBackground};
          border-radius: 40px;
          display: flex;
          margin: 20px;
          padding: 5px 10px;
        }

        form:focus-within {
          border: 1px solid ${colors.secondary};
        }

        input {
          background: ${colors.inputBackground};
          border: none;
          color: ${colors.white};
          outline: none;
        }
      `}</style>
    </>
  );
}

export default InputSearch;
