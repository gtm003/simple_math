import { Box, Button, ButtonGroup, CardMedia } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

import { useStopwatch } from "react-timer-hook";

import catSleeps from "../../../assets/images/cat/cat_sleeps.gif";
import catGames from "../../../assets/images/cat/cat_games.gif";

import styles from "./Controls.module.scss";
import { useCallback, useEffect } from "react";

export const Controls = ({
  startGame,
  isFinish,
  isStart,
  openSettingsModal,
  openHeroesModal,
  updateTime,
}) => {
  const { seconds, minutes, hours, isRunning, start, pause, reset } =
    useStopwatch({ autoStart: false });
  const startBtnClick = () => {
    isRunning ? pause() : start();
    startGame();
  };
  const addNull = (number) => (number < 10 ? `0${number}` : `${number}`);
  const timeToString = useCallback((seconds, minutes, hours) => {
    return `${addNull(hours)}:${addNull(minutes)}:${addNull(seconds)}`;
  }, []);

  useEffect(() => {
    if (isStart) {
      reset(0, false);
    }
  }, [isStart, reset]);

  useEffect(() => {
    if (isFinish) {
      pause(0, false);
      setTimeout(() => updateTime(timeToString(seconds, minutes, hours)));
    }
  }, [isFinish, seconds, minutes, hours, updateTime, timeToString, pause]);

  return (
    <Box className={styles.control}>
      <Button size="large" variant="contained">
        {timeToString(seconds, minutes, hours)}
      </Button>
      <Box>
        <CardMedia
          component="img"
          image={isRunning ? catGames : catSleeps}
          className={styles.cat}
          alt="cat_sleeps"
        />
      </Box>
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button onClick={openSettingsModal}>
          <SettingsIcon />
        </Button>
        <Button onClick={startBtnClick}>{isRunning ? "PAUSE" : "START"}</Button>
        <Button onClick={openHeroesModal}>
          <EmojiEventsIcon />
        </Button>
      </ButtonGroup>
    </Box>
  );
};
