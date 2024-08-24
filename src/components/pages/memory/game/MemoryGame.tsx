import styled from "styled-components";
import Card from "./Card";
import { useState, useEffect } from "react";
import shuffleArray from "../../../../utils/GameFunction";
import { initialCardImages } from "./imageValue";

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
  gap: 15px;
  width: 560px;
  margin-right: 50px;
  padding: 20px;
  background-color: #f0f9fc;
  border-radius: 15px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
`;
