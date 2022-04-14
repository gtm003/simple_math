import React, { useEffect } from "react";
import styles from "./ColorPicker.module.scss";
import { Box } from "@mui/material";

export const ColorPicker = ({ width, height, step }) => {
  const numberRows = height / step;
  const numberColumns = width / step;
  const fullColor = 255;
  const stepColorRows = fullColor / (numberRows - 1);
  const stepColorColumns = fullColor / (numberColumns - 1);
  useEffect(() => {
    const palette = document.getElementById("palette");
    const ctx = palette.getContext("2d");
    for (let i = 0; i <= numberColumns; i += 1) {
      ctx.fillStyle = `rgb(${stepColorColumns * i},${fullColor - stepColorColumns * i},${fullColor - stepColorColumns * i})`;
      ctx.fillRect(i * step, 0, step, step);
      ctx.fillStyle = `rgb(${fullColor - stepColorColumns * i},${stepColorColumns * i},${fullColor - stepColorColumns * i})`;
      ctx.fillRect(i * step, step, step, step);
      ctx.fillStyle = `rgb(${fullColor - stepColorColumns * i},${fullColor - stepColorColumns * i},${stepColorColumns * i})`;
      ctx.fillRect(i * step, 2 * step, step, step);
    }
  }, []);

  return (
    <Box className={styles.container}>
      <canvas id="palette" width={width} height={height} />
    </Box>
  );
};
