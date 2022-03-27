import Piece from "../../components/piece";
import styles from "./00-typing-effect.module.css";
import { useState, useEffect } from "react";

export default function MyPiece() {
  const typewriterText = "Lorem ipsum dummy text blabla.";
  const speed = 30;

  let [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (index < typewriterText.length) {
        document.getElementById("typing-effect-demo").innerHTML += typewriterText.charAt(index);
        setIndex(index + 1);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [index, typewriterText, speed]);

  return (
    <Piece>
      <div className={styles.page}>
        <p id="typing-effect-demo"></p>
      </div>
    </Piece>
  );
}
