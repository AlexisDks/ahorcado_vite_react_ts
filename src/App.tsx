import { useEffect, useState } from "react";
import "./App.css";
import { HangImage } from "./components/HangImage";
import { getRamdonWord } from "./helpers/getRamdonWord";
import { letters } from "./helpers/letters";

function App() {
  const [word, setWord] = useState(getRamdonWord);
  const [hiddenWord, setHiddenWord] = useState("_ ".repeat(word.length));
  const [attempts, setAttempts] = useState(0);
  const [lose, setLose] = useState(false);
  const [won, setWon] = useState(false);

  useEffect(() => {
    if (attempts >= 9) {
      setLose(true);
    }
  }, [attempts]);

  useEffect(() => {
    const currentHiddenWord = hiddenWord.split(" ").join("");
    if (currentHiddenWord === word) {
      setWon(true);
    }
  }, [hiddenWord, word]);

  const checkLetter = (letter: string) => {
    if (lose) return;
    if (won) return;

    if (!word.includes(letter)) {
      setAttempts(Math.min(attempts + 1, 9));
      return;
    }

    const hiddenWordArray = hiddenWord.split(" ");

    for (let i = 0; i < word.length; i++) {
      if (word[i] == letter) {
        hiddenWordArray[i] = letter;
      }
    }

    setHiddenWord(hiddenWordArray.join(" "));
  };

  const newGame = () => {
    const newWord = getRamdonWord();

    setWord(newWord);
    setHiddenWord("_ ".repeat(newWord.length));
    setAttempts(0);
    setLose(false);
    setWon(false);
  };

  return (
    <>
      {/* Imagenes */}
      <HangImage imageNumber={attempts} />

      {/* Palabra oculta */}
      <h3>{hiddenWord}</h3>

      {/* Contador de intentos */}
      <h3>Intentos: {attempts}</h3>

      {/* Mensaje de perdida */}
      {lose ? <h2>Perdió {word}</h2> : ""}

      {/* Mensaje de victoria */}
      {won ? <h2>Felicidades, usted ganó</h2> : ""}

      {/* Botones de letras */}
      {letters.map((letter) => (
        <button key={letter} onClick={() => checkLetter(letter)}>
          {letter}
        </button>
      ))}

      <br />
      <br />

      {(lose || won) && <button onClick={newGame}>¿Nuevo juego?</button>}
    </>
  );
}

export default App;
