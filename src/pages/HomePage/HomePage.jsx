import { Box, Typography } from "@mui/material";

import styles from "./HomePage.module.scss";

export const HomePage = () => {
  return (
    <Box className={styles.container}>
      <Typography variant="h1">Home Page</Typography>
    </Box>
  );
};
