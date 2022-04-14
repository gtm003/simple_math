import { MultiplyTableGame } from "../../components/MultiplyTableGame/MultiplyTableGame";
import { Box } from "@mui/material";

import styles from "./MultiplyTablePage.module.scss";

export const MultiplyTablePage = () => {
  return (
    <Box className={styles.container}>
      <MultiplyTableGame />
    </Box>
  );
};
