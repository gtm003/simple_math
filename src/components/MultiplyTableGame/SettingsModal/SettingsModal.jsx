import { Typography, Box, Checkbox, CardMedia, Input } from "@mui/material";
import PropTypes from "prop-types";
import React, { useState } from "react";
import Modal from "../../UI KIT/Modal/Modal";

import catSettings from "../../../assets/images/cat/cat_settings.png";

import styles from "./SettingsModal.module.scss";
import { MODAL_SIZES } from "../../../constants/modal";

const CheckboxSetting = ({ item, changeSettings }) => {
  const [isChecked, setIsChecked] = useState(item.checked);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    changeSettings(item.name);
  };
  return (
    <Box className={styles.number} key={item.name}>
      <Checkbox
        checked={isChecked}
        onChange={handleCheckboxChange}
        //inputProps={{ "aria-label": "controlled" }}
      />
      <Typography className={styles.number}>{item.name}</Typography>
    </Box>
  );
};

export const SettingsModal = ({
  settings,
  isModalOpen,
  closeModal,
  changeSettings,
}) => {
  const [firstMultiplier, setFirstMultiplier] = useState(
    settings.firstMultiplier
  );
  const [lastMultiplier, setLastMultiplier] = useState(settings.lastMultiplier);
  const [multipliedNumbers, setMultipliedNumbers] = useState(settings.numbers);

  const changeMultipliedNumbers = (name) => {
    const newNumbers = multipliedNumbers.map((item) =>
      item.name === name ? { ...item, checked: !item.checked } : item
    );
    setMultipliedNumbers(newNumbers);
  };

  const changeFirstMultiplier = (event) => {
    setFirstMultiplier(event.target.value);
  };

  const changeLastMultiplier = (event) => {
    setLastMultiplier(event.target.value);
  };

  const onConfirm = () => {
    const newSettings = {
      numbers: multipliedNumbers,
      firstMultiplier: firstMultiplier,
      lastMultiplier: lastMultiplier
    }
    localStorage.setItem(
      "multiplyTableGame.settings",
      JSON.stringify(newSettings)
    );
    changeSettings(newSettings);
    closeModal();
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onClose={closeModal}
      size={MODAL_SIZES.SMALL}
      onConfirm={onConfirm}
      cancelButtonLabel="Отмена"
      actionButtonLabel="Да"
    >
      <Box className={styles.modalContent}>
        <Box className={styles.image}>
          <CardMedia
            component="img"
            image={catSettings}
            className={styles.cat}
            alt="cat_settings"
          />
        </Box>
        <Typography className={styles.title}>
          Повторим умножение для:
        </Typography>
        <Box className={styles.numbers}>
          {multipliedNumbers.map((number) => (
            <CheckboxSetting
              item={number}
              key={number.name}
              changeSettings={changeMultipliedNumbers}
            />
          ))}
        </Box>
        <Box className={styles.multipliers}>
          <Typography>Первый множитель:</Typography>
          <Input
            className={styles.input}
            type="number"
            value={firstMultiplier}
            onChange={changeFirstMultiplier}
          />
        </Box>
        <Box className={styles.multipliers}>
          <Typography>Последний множитель:</Typography>
          <Input
            className={styles.input}
            type="number"
            error={Number(firstMultiplier) > Number(lastMultiplier)}
            value={lastMultiplier}
            onChange={changeLastMultiplier}
          />
        </Box>
      </Box>
    </Modal>
  );
};

SettingsModal.propTypes = {
  settings: PropTypes.object,
  isModalOpen: PropTypes.bool,
  closeModal: PropTypes.func,
  changeSetting: PropTypes.func,
};
