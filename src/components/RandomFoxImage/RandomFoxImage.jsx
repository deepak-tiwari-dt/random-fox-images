import { useState, useEffect } from "react";
import styles from "../RandomFoxImage/RandomFoxImage.module.css";

const RandomFoxImage = ({ imageNumber }) => {
  const [foxImage, setFoxImage] = useState("");

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch(
          `https://randomfox.ca/images/${imageNumber}.jpg`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch image");
        }
        const blob = await response.blob();
        setFoxImage(URL.createObjectURL(blob));
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    fetchImage();
  }, [imageNumber]);

  return (
    <>
      {foxImage && (
        <img src={foxImage} alt="Random Fox" className={styles.foxImage} />
      )}
    </>
  );
};

export default RandomFoxImage;
