import styles from "./piece.module.css";
import utilStyles from "../styles/utils.module.css";
import React from "react";
import { PieceConfig } from "../config/piecesConfig";

function Piece({ children, config }: PieceProps) {
  return (
    <>
      <div className={styles.colorBar} style={{ backgroundColor: config.color }}></div>
      <h1 className={utilStyles.headingLg}>{config.title}</h1>
      {children}
    </>
  );
}

type PieceProps = {
  children: React.ReactNode;
  config: PieceConfig;
};

export default Piece;
