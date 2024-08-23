import styled from "styled-components";
import Card from "./Card";
import { useState, useEffect } from "react";

const initialCardImages = [
  "/img/lapin.jpg",
  "/img/chat.webp",
  "/img/chien.jpg",
  "/img/lion.jpg",
  "/img/elephant.avif",
  "/img/baleine.avif",
  "/img/lapin.jpg",
  "/img/chat.webp",
  "/img/chien.jpg",
  "/img/lion.jpg",
  "/img/elephant.avif",
  "/img/baleine.avif",
];

function shuffleArray(array: string[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export default function MemoryGame() {
  const [cards, setCards] = useState<string[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matchedCards, setMatchedCards] = useState<number[]>([]);

  useEffect(() => {
    setCards(shuffleArray([...initialCardImages]));
  }, []);

  const handleCardClick = (index: number) => {
    if (flippedCards.length === 2) return;

    setFlippedCards([...flippedCards, index]);

    if (flippedCards.length === 1) {
      const firstIndex = flippedCards[0];
      const secondIndex = index;

      if (cards[firstIndex] === cards[secondIndex]) {
        setMatchedCards([...matchedCards, firstIndex, secondIndex]);
      }

      setTimeout(() => {
        setFlippedCards([]);
      }, 1000);
    }
  };

  const isCardFlipped = (index: number) => {
    return flippedCards.includes(index);
  };

  const isCardMatched = (index: number) => {
    return matchedCards.includes(index);
  };

  return (
    <MemoryGameStyled>
      {cards.map((image, index) => (
        <Card
          key={index}
          image={image}
          onClick={() => handleCardClick(index)}
          isFlipped={isCardFlipped(index) || isCardMatched(index)}
          isMatched={isCardMatched(index)}
        />
      ))}
    </MemoryGameStyled>
  );
}

const MemoryGameStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 10px;
  width: 560px;
  margin-right: 200px;
`;
