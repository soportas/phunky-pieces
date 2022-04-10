import Piece from "../../components/piece";
import styles from "./04-hoverable-header.module.css";

export default function MyPiece() {
  return (
    <Piece>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.headerText}>About Me</p>
          <img src="/images/header-line.svg" alt="Header Line" className={styles.headerLine} />
          <div className={styles.headerUnderlineCover}></div>
        </div>
        <div className={styles.header}>
          <p className={styles.headerText}>Portfolio</p>
          <img src="/images/header-line.svg" alt="Header Line" className={styles.headerLine} />
          <div className={styles.headerUnderlineCover}></div>
        </div>
        <div className={styles.header}>
          <p className={styles.headerText}>Blog</p>
          <img src="/images/header-line.svg" alt="Header Line" className={styles.headerLine} />
          <div className={styles.headerUnderlineCover}></div>
        </div>
        <div className={styles.header}>
          <p className={styles.headerText}>Contact</p>
          <img src="/images/header-line.svg" alt="Header Line" className={styles.headerLine} />
          <div className={styles.headerUnderlineCover}></div>
        </div>
      </div>
    </Piece>
  );
}
