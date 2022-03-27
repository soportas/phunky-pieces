import styles from "./piece.module.css";
import utilStyles from "../styles/utils.module.css";
import React from "react";
import Head from "next/head";
import Layout from "./layout";
import { useRouter } from "next/router";
import { getPieceConfig, getPieceColor } from "../config/piecesConfig";

function Piece({ children }: PieceProps) {
  const router = useRouter();
  const config = getPieceConfig(router.pathname);

  return (
    <Layout home={false}>
      <Head>
        <title>{config.title}</title>
      </Head>
      <div className={styles.colorBar} style={{ backgroundColor: getPieceColor(config.index) }}></div>
      <h1 className={utilStyles.headingLg}>{`0${config.index}. ${config.title}`}</h1>
      {children}
    </Layout>
  );
}

type PieceProps = {
  children: React.ReactNode;
};

export default Piece;
