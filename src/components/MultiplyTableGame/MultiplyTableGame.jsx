import { DragableCard } from "../UI KIT/DragableCard/DragableCard";
import { Dustbin } from "../UI KIT/Dustbin/Dustbin";
import { Controls } from "./Controls/Controls";
import { Victory } from "./Victory/Victory";
import { Box, Typography } from "@mui/material";

import styles from "./MultiplyTableGame.module.scss";
import { useState, useEffect, useRef } from "react";
import { SettingsModal } from "./SettingsModal/SettingsModal";
import { colors, defaultSettings } from "../../constants/multiplyTableGame";
import { AnswerCard, ExerciseCard } from "./AnswerCard/AnswerCard";
import { HeroesModal } from "./HeroesModal/HeroesModal";
import { getFromLocalStorage } from "./helpers/helpers";
import { getNaturalNumbers } from "../../helpers/common";

export const MultiplyTableGame = () => {
  const [counter, setCounter] = useState(0);
  let count = counter;
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const [isHeroesModalOpen, setIsHeroesModalOpen] = useState(false);
  const [time, setTime] = useState("start");
  const [settings, setSettings] = useState(
    getFromLocalStorage("multiplyTableGame.settings", defaultSettings)
  );
  const { numbers, firstMultiplier, lastMultiplier } = settings;
  const multiplierArray = getNaturalNumbers(firstMultiplier, lastMultiplier);
  const [multiplierArrayTest, setMultiplierArrayTest] = useState(
    getNaturalNumbers(2, 9)
  );
  const [multipledArrayTest, setMultipledArrayTest] = useState(
    settings.numbers.filter((item) => item.checked)
  );
  const multipliedNumbers = numbers.filter((item) => item.checked);
  const [isStart, setIsStart] = useState(false);
  const [isGame, setIsGame] = useState(false);
  const [isFinish, setIsFinish] = useState(false);
  const [isVictory, setIsVictory] = useState(false);
  const numbersOfTasks = multipliedNumbers.length * multiplierArray.length;
  const startGame = () => {
    setIsGame(true);
  };

  const decrementCounter = () => {
    count += 1;
    if (count === numbersOfTasks) {
      setIsFinish(true);
      count = 0;
    }
  };

  const closeSettingsModal = () => {
    setIsSettingsModalOpen(false);
  };

  const openSettingsModal = () => {
    setIsSettingsModalOpen(true);
  };

  const closeHeroesModal = () => {
    setIsHeroesModalOpen(false);
  };

  const openHeroesModal = () => {
    setIsHeroesModalOpen(true);
  };

  const changeSettings = (newSettings) => {
    setSettings(newSettings);
    setCounter(0);
    setIsStart(true);
  };

  const updateTime = (time) => {
    setTime(time);
    setIsVictory(true);
  };

  const startNewGame = () => {
    setIsGame(false);
    setIsFinish(false);
    setIsVictory(false);
  };

  return (
    <>
      <SettingsModal
        settings={settings}
        isModalOpen={isSettingsModalOpen}
        closeModal={closeSettingsModal}
        changeSettings={changeSettings}
      />
      <HeroesModal
        isModalOpen={isHeroesModalOpen}
        closeModal={closeHeroesModal}
      />
      <Box className={styles.topSection}>
        {isVictory ? (
          <Victory
            time={time}
            startNewGame={startNewGame}
            openHeroesModal={openHeroesModal}
          />
        ) : (
          <>
            <Box className={styles.answers}>
              {multipliedNumbers.map((number) => {
                return multiplierArray.map((item) => (
                  <DragableCard
                    key={item}
                    name={number.name * item}
                    color={colors[number.name]}
                    isGame={isGame}
                  >
                    <AnswerCard
                      text={number.name * item}
                      color={colors[number.name]}
                    />
                  </DragableCard>
                ));
              })}
            </Box>
            <Controls
              startGame={startGame}
              isStart={isStart}
              isFinish={isFinish}
              openSettingsModal={openSettingsModal}
              openHeroesModal={openHeroesModal}
              updateTime={updateTime}
            />
          </>
        )}
      </Box>
      <Box className={styles.tasks}>
        {multipliedNumbers.map((number) => {
          return (
            <Box className={styles.list} key={number.name}>
              {multiplierArray.map((item) => (
                <Box className={styles.task} key={item}>
                  <ExerciseCard
                    text={`${number.name} x ${item} =`}
                    color={colors[number.name]}
                  />
                  <Dustbin
                    name={number.name * item}
                    isGame={isGame}
                    decrementCounter={decrementCounter}
                  >
                    <AnswerCard
                      text={number.name * item}
                      color={colors[number.name]}
                    />
                  </Dustbin>
                </Box>
              ))}
            </Box>
          );
        })}
      </Box>
    </>
  );
};
