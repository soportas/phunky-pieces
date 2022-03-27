import Piece from "../../components/piece";
import styles from "./02-frosted-glass-effect.module.css";

export default function MyPiece() {
  return (
    <Piece>
      <div className={styles.page}>
        <div className={styles.bg}>
          <div className={styles.frosted}>
            <p className={styles.text}>This is the frosted glass effect.</p>
          </div>
        </div>
      </div>
    </Piece>
  );
}
