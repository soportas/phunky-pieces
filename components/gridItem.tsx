import Link from "next/link";
import styles from "./gridItem.module.css";
import utilStyles from "../styles/utils.module.css";

function GridItem({ index, title, link, color }: GridItemProps) {
  return (
    <Link href={link}>
      <a>
        <div className={styles.gridItem} style={{ backgroundColor: color, borderColor: color }}>
          <div className={styles.gridIndexSpace}>
            <div className={styles.gridIndexTextbox}>
              <p className={styles.gridIndexText}>{`PHUNKY PIECE --- 0${index}.`}</p>
            </div>
          </div>
          <div className={styles.gridContent}>
            <h1 className={styles.gridHeading}>{title}</h1>
          </div>
        </div>
      </a>
    </Link>
  );
}

type GridItemProps = {
  index: number;
  title: string;
  link: string;
  color: string;
};

export default GridItem;
