import React, { useEffect } from "react";
import JXG from "jsxgraph";
import styles from "./Board.module.scss";
import { Box } from "@mui/material";

const getAngleValueToString = (radVal, name) => {
  const degreeVal = (radVal * 180) / Math.PI;
  return `${name} = ${degreeVal.toFixed(0)}&deg;`;
};

const apexAttr = {
  attractToGrid: true,
  attractorDistance: 10,
  attractorunit: "screen",
  color: "green",
};

const pointAttr = {
  attractToGrid: true,
  attractorDistance: 10,
  attractorunit: "screen",
  color: "blue",
};

const sideAttr = {
  straightFirst: false,
  straightLast: false,
  strokeColor: "green",
};

const auxiliaryAttr = {
  straightFirst: false,
  strokeColor: "black",
  strokeWidth: 1,
};

const axisAttr = {
  showCopyright: false,
  axis: true,
  grid: true,
  defaultAxes: {
    x: {
      name: "X",
      withLabel: true,
      label: {
        position: "rt",
        offset: [-10, -15],
      },
    },
    y: {
      withLabel: true,
      name: "Y",
      label: {
        position: "rt",
        offset: [-20, -10],
      },
    },
  },
  keepaspectratio: true,
  boundingbox: [-5, 5, 5, -5],
};

const ChartJS = (board) => {
  board.suspendUpdate();
  const A = board.create("point", [-1.0, 3.0], apexAttr);
  const B = board.create("point", [3.0, -1.0], apexAttr);
  const C = board.create("point", [-3.0, -3.0], apexAttr);
  const AB = board.create("line", [A, B], sideAttr);
  const BC = board.create("line", [B, C], sideAttr);
  const CA = board.create("line", [C, A], sideAttr);
  board.create("polygon", [A, B, C], { color: "green" });

  const mp1 = board.create("midpoint", [A, B], pointAttr);
  const mp2 = board.create("midpoint", [B, C], pointAttr);
  const mp3 = board.create("midpoint", [C, A], pointAttr);

  board.create("circle", [A, B, C], {
    strokeColor: "red",
    center: { visible: true, color: "red" },
  });
  board.create("perpendicular", [AB, mp1], auxiliaryAttr);
  board.create("perpendicular", [BC, mp2], auxiliaryAttr);
  board.create("perpendicular", [CA, mp3], auxiliaryAttr);
  board.unsuspendUpdate();
};

const ChartJS2 = (board) => {
  board.suspendUpdate();
  const A = board.create("point", [-1.0, 3.0], apexAttr);
  const B = board.create("point", [3.0, -2.0], apexAttr);
  const C = board.create("point", [-4.0, -2.0], apexAttr);
  const AB = board.create("line", [A, B], sideAttr);
  const BC = board.create("line", [B, C], sideAttr);
  const CA = board.create("line", [C, A], sideAttr);
  board.create("polygon", [A, B, C], { color: "green" });
  const bi1 = board.create("bisector", [A, B, C], auxiliaryAttr);
  const bi2 = board.create("bisector", [B, C, A], auxiliaryAttr);
  board.create("bisector", [C, A, B], auxiliaryAttr);

  const O = board.create("intersection", [bi1, bi2, 0]);

  const P1 = board.create("perpendicularpoint", [O, AB], pointAttr);
  board.create("perpendicularpoint", [O, BC], pointAttr);
  board.create("perpendicularpoint", [O, CA], pointAttr);

  board.create("circle", [O, P1], {
    strokeColor: "red",
    center: { visible: true, color: "red" },
  });

  board.unsuspendUpdate();
};

const Triangle = (board) => {
  board.suspendUpdate();
  const A = board.create("point", [-1.0, 3.0], apexAttr);
  const B = board.create("point", [3.0, -2.0], apexAttr);
  const C = board.create("point", [-4.0, -2.0], apexAttr);
  board.create("line", [A, B], sideAttr);
  board.create("line", [B, C], sideAttr);
  board.create("line", [C, A], sideAttr);
  const a = board.create("angle", [C, A, B], { color: "green" });
  const b = board.create("angle", [A, B, C], { color: "green" });
  const c = board.create("angle", [B, C, A], { color: "green" });
  board.create(
    "text",
    [3, 4, () => getAngleValueToString(a.Value(), "&alpha;")],
    {
      fontSize: 16,
    }
  );
  board.create(
    "text",
    [3, 3.5, () => getAngleValueToString(b.Value(), "&beta;")],
    {
      fontSize: 16,
    }
  );
  board.create(
    "text",
    [3, 3, () => getAngleValueToString(c.Value(), "&gamma;")],
    {
      fontSize: 16,
    }
  );
  board.unsuspendUpdate();
};

export const Board = ({ drawing }) => {
  useEffect(() => {
    const board = JXG.JSXGraph.initBoard("JSXGraph", axisAttr);
    switch (drawing) {
      case "Inscribed circle":
        ChartJS2(board);
        break;
      case "Circumscribed circle":
        ChartJS(board);
        break;
      case "Triangle":
        Triangle(board);
        break;
      default:
        break;
    }
  }, [drawing]);

  return (
    <Box className={styles.container}>
      <div id={"JSXGraph"} className={styles.board} />
    </Box>
  );
};
