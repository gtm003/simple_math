import { useState } from "react";
import {
  FormControl,
  RadioGroup,
  Radio,
  FormControlLabel,
  Typography,
} from "@mui/material";
import { Board } from "../../components/board/Board";
import styles from "./GeometryPage.module.scss";

const drawings = [
  "Triangle",
  "Inscribed circle",
  "Circumscribed circle",
];

export const GeometryPage = () => {
  const [drawing, setDrawing] = useState(drawings[0]);
  const selectDrawing = (event) => {
    setDrawing(event.target.value);
  }

  return (
    <div className={styles.container}>
      <Board drawing={drawing} />
      <FormControl className={styles.сontrol}>
        <Typography className={styles.сontrolTitle}>Select drawing</Typography>
        <RadioGroup
          defaultValue={drawings[0]}
        >
          {drawings.map((drawing) => (
            <FormControlLabel
              value={drawing}
              control={<Radio />}
              label={drawing}
              key={drawing}
              onChange={selectDrawing}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </div>
  );
};
