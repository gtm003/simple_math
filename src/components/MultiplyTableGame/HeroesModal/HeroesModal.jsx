import { Typography, Box, CardMedia, Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import PropTypes from "prop-types";
import React from "react";
import Modal from "../../UI KIT/Modal/Modal";

import catWon from "../../../assets/images/cat/cat_won.png";

import styles from "./HeroesModal.module.scss";
import { MODAL_SIZES } from "../../../constants/modal";
import { getFromLocalStorage } from "../helpers/helpers";

export const HeroesModal = ({ isModalOpen, closeModal }) => {
  const heroes = getFromLocalStorage("multiplyTableGame.heroes", []);
  const clearHeroes = () => {
    localStorage.removeItem("multiplyTableGame.heroes");
  };
  return (
    <Modal isOpen={isModalOpen} onClose={closeModal} size={MODAL_SIZES.NORMAL}>
      <Box className={styles.content}>
        <Box className={styles.image}>
          <CardMedia
            component="img"
            image={catWon}
            className={styles.cat}
            alt="cat_settings"
          />
          <Button
            size="large"
            variant="contained"
            startIcon={<DeleteIcon />}
            onClick={clearHeroes}
          >
            Очистить
          </Button>
        </Box>
        <Box className={styles.table}>
          <Typography className={styles.title} variant="h6">
            Наши герои:
          </Typography>
          {heroes.map((hero, index) => (
            <Box key={index} className={styles.hero}>
              <Typography className={styles.id}>{`${index + 1}.`}</Typography>
              <Typography className={styles.name}>{hero.name}</Typography>
              <Typography className={styles.date}>{hero.date}</Typography>
              <Typography className={styles.time}>{hero.time}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Modal>
  );
};

HeroesModal.propTypes = {
  isModalOpen: PropTypes.bool,
  closeModal: PropTypes.func,
};
