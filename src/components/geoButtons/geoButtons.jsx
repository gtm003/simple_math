import { Box, Button, IconButton, SvgIcon, TextField } from "@mui/material";
import React, { useState } from "react";
import { ColorPicker } from "../ColorPicker/ColorPicker";
import styles from "./geoButtons.module.scss";

function PointIcon(props) {
  return (
    <SvgIcon {...props}>
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".5"
        d="M12 1.81v20.38M1.726 12h20.548"
      />
      <path
        fill="#d55e00"
        stroke="#d55e00"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth=".5"
        d="M15.877 12A3.877 3.902 0 0 1 12 15.902 3.877 3.902 0 0 1 8.123 12 3.877 3.902 0 0 1 12 8.098 3.877 3.902 0 0 1 15.877 12Z"
      />
    </SvgIcon>
  );
}

export const GeoButtons = ({ addPoint }) => {
  const [X, setX] = useState(0);
  const onClickAddPointBtn = () => {
    addPoint([X, 0]);
  };
  const onChange = (event) => {
    setX(event.target.value)
  }
  return (
    <Box className={styles.container}>
      <Box className={styles.line}>
        <IconButton
          variant="contained"
          className={styles.button}
          aria-label="add point"
          onClick={onClickAddPointBtn}
        >
          <PointIcon />
        </IconButton>
        <TextField
          label="coord X"
          id="outlined-size-small"
          value={X}
          size="small"
          className={styles.input}
          onChange={onChange}
        />
        <TextField
          label="coord Y"
          id="outlined-size-small"
          defaultValue="0"
          size="small"
          className={styles.input}
        />
      </Box>
      <Box className={styles.line}>
        <Button>Add Point</Button>
        <TextField
          label="coord X"
          id="outlined-size-small"
          defaultValue="0"
          size="small"
          className={styles.input}
        />
        <TextField
          label="coord Y"
          id="outlined-size-small"
          defaultValue="0"
          size="small"
          className={styles.input}
        />
      </Box>
      <ColorPicker width={250} height={150} step={50} />
    </Box>
  );
};
