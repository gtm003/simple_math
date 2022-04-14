import { Card } from "@mui/material";
import classNames from "classnames";
import { useState } from "react";
import { useDrag } from "react-dnd";
import { useWindowSize } from "../../../hooks/useWindowSize";
import styles from "./DragableCard.module.scss";

export const DragableCard = function Box({ name, color, isGame, children }) {
  const [isHidden, setIsHidden] = useState(false);
  const width = useWindowSize().width;
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "box",
    item: { name },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        if (item.name === dropResult.name) {
          setIsHidden(true);
        }
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));

  const positionStyle = {
    left: `${Math.random() * (width - 70 - 300)}px`,
    top: `${Math.random() * 160}px`,
    transform: `rotate(${7 * (Math.random() - 0.5)}deg)`,
  };

  return (
    <Card
      ref={drag}
      className={classNames({
        [styles.answerCard]: true,
        [styles.isDragging]: isDragging,
        [styles.isHidden]: (!isGame || isHidden),
      })}
      style={{ ...positionStyle, backgroundColor: color }}
      data-testid={`box-${name}`}
    >
      {children}
    </Card>
  );
};
