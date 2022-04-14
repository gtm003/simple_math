import { Card } from "@mui/material";

import styles from "./AnswerCard.module.scss";

export const AnswerCard = ({ text, color }) => {
  return (
    <Card className={styles.answerCard} style={{ backgroundColor: color }}>
      {text}
    </Card>
  );
};

export const ExerciseCard = ({ text, color }) => {
  return (
    <Card className={styles.exerciseCard} style={{ backgroundColor: color }}>
      {text}
    </Card>
  );
};
