/** @format */

// styles
import styles from "./GameList.module.css";
import GameItem from "./GameItem";
import styled from "styled-components";
import { useState } from "react";

const GameList = ({ items }) => {
  const [count, setCount] = useState(15);

  const getCount = () => {
    setCount(100);
  };

  return (
    <div>
      <div className={styles.grid}>
        {items.map(
          (game, i) => i <= count && <GameItem key={game.id} item={game} />
        )}
      </div>
      {count !== 100 && (
        <div className={styles.grid}>
          <div></div>
          <div></div>
          <div></div>
          <Button onClick={() => getCount()}>All game</Button>
        </div>
      )}
    </div>
  );
};

export default GameList;

const Button = styled.div`
  height: 50px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.05);
  margin-top: 20px;
  margin-bottom: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  box-shadow: 0 0.3rem 1rem rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.2s ease-out;
  &:hover {
    box-shadow: 3px 5px 18px rgba(0, 0, 0, 0.6);
  }
  &:active {
    box-shadow: 0 0.3rem 1rem rgba(0, 0, 0, 0.1);
  }
`;
