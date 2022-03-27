import Piece from "../../components/piece";
import styles from "./01-see-through-text.module.css";

export default function MyPiece() {
  return (
    <Piece>
      <div className={styles.page}>
        <p className={styles.seethroughText}>THE TEXT HAS A VERY SNOWY BACKGROUND</p>
      </div>
    </Piece>
  );
}
