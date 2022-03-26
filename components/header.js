import Link from "next/link";
import styles from "./header.module.css";
import utilStyles from "../styles/utils.module.css";

export default function Header({ siteTitle }) {
  return (
    <div className={styles.container}>
      <h1 className={utilStyles.headingTitle}>
        <Link href="/">
          <a>{siteTitle}</a>
        </Link>
      </h1>
    </div>
  );
}
