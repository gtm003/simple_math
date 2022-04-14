import { Box } from "@mui/material";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { useDrop } from "react-dnd";

import styles from "./Dustbin.module.scss";

export const Dustbin = ({ name, isGame, decrementCounter, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: "box",
    drop: (_item, monitor) => {
      const didDrop = monitor.didDrop();
      if (didDrop) {
        return;
      }
      //console.log(`dustbin name ${name}`);
      //console.log(`item name ${_item.name}`);
      if (name === _item.name) {
        setIsVisible(true);
        decrementCounter();
      }
      return { name: name };
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
      handlerId: monitor.getHandlerId(),
    }),
  }));
  const isActive = canDrop && isOver;

  useEffect(() => {
    setIsVisible(false);
  }, [isGame]);

  return (
    <Box
      ref={drop}
      className={classNames({
        [styles.dustbin]: true,
        [styles.isDragging]: isActive,
        [styles.isVisible]: !isGame || isVisible,
      })}
    >
      {children}
    </Box>
  );
};
