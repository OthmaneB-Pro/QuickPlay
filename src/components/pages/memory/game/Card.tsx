import styled from "styled-components";

type CardProps = {
  image: string;
  onClick: () => void;
  isFlipped: boolean;
  isMatched: boolean;
};

export default function Card({
  image,
  onClick,
  isFlipped,
  isMatched,
}: CardProps) {
  return (
    <CardStyled onClick={onClick} flipped={isFlipped} matched={isMatched}>
      <div className="card-inner">
        <div className="card-back">
          <img src={image} alt="carte" />
        </div>
        <div className="card-front">
          <img src="/img/memoryCard.PNG" alt="dos de carte" />
        </div>
      </div>
    </CardStyled>
  );
}

const CardStyled = styled.div<{ flipped: boolean; matched: boolean }>`
  width: 130px;
  height: 150px;
  perspective: 1000px;
  cursor: pointer;
  opacity: ${({ matched }) => (matched ? 0.5 : 1)};
  transform: ${({ matched }) => (matched ? "scale(0.95)" : "scale(1)")};
  transition: transform 0.3s ease, opacity 0.3s ease;

  .card-inner {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.6s;
    transform: ${({ flipped }) => (flipped ? "rotateY(180deg)" : "rotateY(0)")};
  }

  .card-front,
  .card-back {
    position: absolute;
    height: 100%;
    width: 100%;
    backface-visibility: hidden;
    border: 1px solid black;
    border-radius: 10px;
  }

  .card-back {
    transform: rotateY(180deg);
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
`;
