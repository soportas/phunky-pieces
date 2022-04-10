import { useState, useEffect } from "react";
import Piece from "../../components/piece";
import styles from "./03-screen-curtain-effect.module.css";

export default function MyPiece() {
  const curtainStage = {
    INIT: 0,
    LOADING: 1,
    OPENING: 2,
    FINISHED: 3,
  };
  const [curtainState, setCurtainState] = useState(curtainStage.INIT);

  const runCurtainEffect = () => {
    setCurtainState(curtainStage.LOADING);
  };

  const resetCurtainEffect = () => {
    setCurtainState(curtainStage.INIT);
  };

  useEffect(() => {
    const handleCurtainState = () => {
      if (curtainState === curtainStage.LOADING) {
        setCurtainState(curtainStage.OPENING);
      } else if (curtainState === curtainStage.OPENING) {
        setCurtainState(curtainStage.FINISHED);
      }
    };

    window.addEventListener("transitionend", handleCurtainState);

    return () => {
      window.removeEventListener("transitionend", handleCurtainState);
    };
  }, [curtainState]);

  let curtainLoading = curtainState === curtainStage.LOADING;
  let curtainOpen = curtainState === curtainStage.OPENING || curtainState === curtainStage.FINISHED;
  let curtainFinished = curtainState === curtainStage.FINISHED;

  return (
    <Piece>
      <div className={styles.container}>
        <div className={`${styles.curtainLeft} ${curtainOpen ? styles.curtainLeftOpen : ""}`}></div>
        <div className={`${styles.curtainRight} ${curtainOpen ? styles.curtainRightOpen : ""}`}></div>
        <div className={styles.lineContainer}>
          <div
            className={`${styles.curtainLine} ${curtainLoading ? styles.curtainLoad : ""} ${
              curtainOpen ? styles.curtainOpen : ""
            } ${curtainFinished ? styles.curtainFinished : ""}`}
          ></div>
        </div>
      </div>
      <button onClick={() => runCurtainEffect()}>Click Me</button>
      <button onClick={() => resetCurtainEffect()}>Reset</button>
    </Piece>
  );
}
