import { Box, Button, CardMedia, Input, Typography } from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import PetsIcon from "@mui/icons-material/Pets";
import catAgrees from "../../../assets/images/cat/cat_agrees.gif";
import sortBy from "lodash/sortBy";

import styles from "./Victory.module.scss";
import { useState } from "react";
import { getFromLocalStorage } from "../helpers/helpers";

export const Victory = ({ time, startNewGame, openHeroesModal }) => {
  const heroes = getFromLocalStorage("multiplyTableGame.heroes", []);
  const [name, setName] = useState("Как тебя записать?");
  const changeName = (event) => {
    setName(event.target.value);
  };
  const handleFocusInputName = () => {
    setName("");
  };
  const saveRecord = () => {
    const hero = {
      name: name,
      date: new Date().toLocaleDateString("Ru-ru"),
      time: time,
    };
    heroes.push(hero);
    const newHeroes = sortBy(heroes, ["time"]);
    localStorage.setItem("multiplyTableGame.heroes", JSON.stringify(newHeroes));
  };
  return (
    <Box className={styles.container}>
      <Box className={styles.content}>
        <Typography variant="h5">{`Молодец! Твоё время: ${time}`}</Typography>
        <Typography variant="h6">
          Ты справился со всеми примерами и попадёшь в таблицу рекордов!
        </Typography>
        <Box className={styles.name}>
          <Input
            label=""
            id="standard-size-large"
            value={name}
            variant="filled"
            className={styles.input}
            onChange={changeName}
            onFocus={handleFocusInputName}
            onBlur={saveRecord}
          />
          <Button
            size="large"
            variant="contained"
            startIcon={<PetsIcon />}
            onClick={startNewGame}
          >
            Играть ещё
          </Button>
          <Button
            size="large"
            variant="contained"
            startIcon={<EmojiEventsIcon />}
            onClick={openHeroesModal}
          >
            Смотреть рекорды
          </Button>
        </Box>
      </Box>
      <Box>
        <CardMedia
          component="img"
          image={catAgrees}
          className={styles.cat}
          alt="cat_agrees"
        />
      </Box>
    </Box>
  );
};
