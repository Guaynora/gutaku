import { useState, useContext } from "react";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { animeContext } from "../../context/AnimeSearchContext";
import styles from "./styles";

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
      <style jsx>{styles}</style>
    </>
  );
}

export default InputSearch;
