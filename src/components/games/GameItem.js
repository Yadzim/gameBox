/** @format */

import { useContext } from "react";
import { Link } from "react-router-dom";
import { AiFillWindows, AiFillHeart } from "react-icons/ai";
import { GoBrowser } from "react-icons/go";
import styles from "./GameItem.module.css";

import { FavoritesContext } from "../../context/FavoritesContext";

const GameItem = ({ item: game }) => {
  const { addToFavorite, gameIsFavorite } = useContext(FavoritesContext);

  return (
    <div className={styles.wrapperCard}>
      <div className={styles.borderCard}>
        <div className={styles.card}>
          <Link to={`/games/${game.id}`} className={styles.card_header}>
            <img className={styles.thumbnail} src={game.thumbnail} alt='test' />
          </Link>
          <div className={styles.card_body}>
            <div>
              <Link to={`/games/${game.id}`} className={styles.title}>
                {game.title}
              </Link>
              <p className={`${styles.description} text-muted`}>
                {game.short_description.substr(0, 70)}...
              </p>
            </div>
            <div className={styles.card_footer}>
              <div>
                <span className={styles.badge}>{game.genre}</span>
                {game.platform.includes("PC (Windows)") ? (
                  <AiFillWindows
                    className={styles.platform_icon}
                    title='Available on Windows'
                  />
                ) : (
                  <GoBrowser
                    className={styles.platform_icon}
                    title='Available on Browser'
                  />
                )}
              </div>
              <button
                onClick={() => addToFavorite(game)}
                className={styles.btn}
                title={
                  gameIsFavorite(game.id)
                    ? "Remove from favorites"
                    : "Add to favorites"
                }>
                <AiFillHeart
                  className={styles.heart_icon}
                  style={{ color: gameIsFavorite(game.id) ? "red" : "#aaaaaa" }}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameItem;
