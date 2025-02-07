import React from "react";
import { motion } from "framer-motion"; // Import motion from Framer Motion
import "../styling/Favs.css"; // Import CSS for styling

const pageVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.5 } },
};

const favorites = [
  {
    img: "/apocalypse.jpg",
    caption:
      "A whispered confession of love in the dark, the kind that stays in your heart long after the song is over.",
  },
  {
    img: "/11.11.jpg",
    caption:
      "11:11—when the world slows down just enough for us to close our eyes, make a wish. And every time, my heart whispers your name.",
  },
  {
    img: "/heartstopper.jpg",
    caption:
      "The first story we both fell for, where every frame felt like home. Heartstopper was more than a show—it was a reflection of us.",
  },
  {
    img: "/safeandsound.jpg",
    caption:
      "A song that feels like time slowing down, like the world fades away and it’s just us in the quiet, wrapped in the warmth of unspoken love.",
  },
  {
    img: "/pinkpurp.jpg",
    caption:
      "The colors of our world—pink for the laughter, purple for the quiet moments, both for the love that fills them.",
  },
  {
    img: "/kuromi.jpg",
    caption:
      "Two opposites that somehow fit perfectly together—like us. A little bit of chaos, a whole lot of love.",
  },
  {
    img: "/butterfly.jpg",
    caption:
      "Somehow, butterflies became ours. Every butterfly feels like a little love note from the universe, reminding me of you—soft, pretty, and a little bit magical.",
  },
  {
    img: "/mcd.jpg",
    caption:
      "Golden arches, quiet corners, and the comfort of knowing this place will always be ours. From anxious first dates to effortless comfort—MCD has been with us through it all.",
  },
];

const Favs = () => {
  return (
    <motion.div
      className="favs-container"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {favorites.map((fav, index) => (
        <div className="polaroid" key={index}>
          <img src={fav.img} alt="Favorite" className="polaroid-img" />
          <p className="caption">{fav.caption}</p>
        </div>
      ))}
    </motion.div>
  );
};

export default Favs;
