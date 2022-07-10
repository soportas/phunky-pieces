import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import GridItem from "../components/gridItem";
import gridStyles from "../components/gridItem.module.css";
import pieceConfig, { getPieceColor } from "../config/piecesConfig";

export default function Home() {
  const gridItems = pieceConfig.map((piece) => (
    <GridItem
      key={piece.index}
      index={piece.index}
      title={piece.title}
      link={piece.path}
      color={getPieceColor(piece.index)}
    />
  ));

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <div className={gridStyles.gridContainer}>{gridItems}</div>
      </section>
    </Layout>
  );
}
