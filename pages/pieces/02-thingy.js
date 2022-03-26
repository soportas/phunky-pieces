import Head from "next/head";
import Layout from "../../components/layout";
import Piece from "../../components/piece";
import pieceConfigs from "../../config/piecesConfig";

const pieceIndex = 2;

export default function TypingEffectPiece() {
  const pieceConfig = pieceConfigs[pieceIndex];

  return (
    <Layout>
      <Head>
        <title>{pieceConfig.title}</title>
      </Head>
      <Piece config={pieceConfig}>
        <p> piece stuff01 Typing Effect</p>
      </Piece>
    </Layout>
  );
}
