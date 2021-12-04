import { useState, useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import { useFetch } from "../hooks/useFetch";
import { useDebounce } from "../hooks/useDebounce";

// styles
import styles from "./Home.module.css";

import GameList from "../components/games/GameList";
import Spinner from "../components/ui/Spinner";
import Slider from "./Slider";

const Home = () => {
  const [filteredGames, setFilteredGames] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const {
    data: allGames,
    isPending,
    error,
  } = useFetch(`${process.env.REACT_APP_API_URL}/games`);

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const currentYear = new Date().getFullYear();

  useEffect(() => {
    if (debouncedSearchTerm && allGames) {
      setFilteredGames(
        allGames.filter((game) =>
          game.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
        )
      );
    }
  }, [debouncedSearchTerm, allGames]);

  return (
    <>
      <Slider />
      <section>
        <div className="text-center">
          <h1 className="title" style={{ marginTop: "33px" }}>
            Best Free to Play Games for PC and Browser in {currentYear}!
          </h1>
          <p className="text-muted subtitle">
            {allGames && allGames.length} free-to-play games found in our list!
          </p>
        </div>
        <form className={styles.form}>
          <label>
            <BiSearch className={styles.search_icon} />
            <input
              onChange={(e) => setSearchTerm(e.target.value)}
              type="search"
              placeholder="Search for games"
              className={styles.input}
            />
          </label>
        </form>
        {debouncedSearchTerm && filteredGames.length === 0 && (
          <p className="text-center">Sorry, no games found :(</p>
        )}
      </section>

      <section className={styles.games_content}>
        {isPending && <Spinner />}
        {error && <p>{error}</p>}
        {allGames && (
          <GameList items={debouncedSearchTerm ? filteredGames : allGames} />
        )}
      </section>
    </>
  );
};

export default Home;
