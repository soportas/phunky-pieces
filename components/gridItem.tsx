import Link from "next/link";
import styles from "./gridItem.module.css";
import utilStyles from "../styles/utils.module.css";

function GridItem({ index, title, link, color }: GridItemProps) {
  return (
    <Link href={link}>
      <a>
        <div className={styles.gridItem} style={{ backgroundColor: color, borderColor: color }}>
          <div className={styles.gridContent}>
            <h1 className={utilStyles.headingLg}>{`0${index}. ${title}`}</h1>
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
