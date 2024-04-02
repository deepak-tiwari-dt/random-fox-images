import RandomFoxImage from "../RandomFoxImage/RandomFoxImage";
import styles from "../FoxCard/FoxCard.module.css";

const FoxCard = () => {
  const imageNumbers = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  return (
    <div className={styles.container}>
      {imageNumbers.map((number) => (
        <RandomFoxImage key={number} imageNumber={number} />
      ))}
    </div>
  );
};

export default FoxCard;
