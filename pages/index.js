import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import GridItem from "../components/gridItem";
import gridStyles from "../components/gridItem.module.css";
import pieceConfig from "../config/piecesConfig";

export default function Home() {
  const gridItems = pieceConfig.map((piece) => (
    <GridItem index={piece.index} title={piece.title} link={piece.path} color={piece.color} />
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
