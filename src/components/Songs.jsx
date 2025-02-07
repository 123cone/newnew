import React from "react";
import { motion } from "framer-motion";
import "../styling/songs.css";

const pageVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.5 } },
};


  const albums = [
    {
      image: "1.jpg",
      link: "https://music.youtube.com/watch?v=paODmdHQWMo&si=MtFC3ZQ9st_YFC0U",
    },
    {
      image: "4.jpg",
      link: "https://music.youtube.com/watch?v=FJX0JPXD2nM&si=Hee3KAifMkdVhVKn",
    },
    {
      image: "2.jpg",
      link: "https://music.youtube.com/watch?v=uLL2xTK35Qc&si=hef-EQRMxZxw2eYL",
    },
    {
      image: "8.jpg",
      link: "https://music.youtube.com/watch?v=Mw5mAozjC6M&si=PqWhpTUK_qHgo1g1",
    },
    {
      image: "3.png",
      link: "https://music.youtube.com/watch?v=a3FVEgsi5ag&si=E0sRhKNcPR8LHe2_",
    },

    {
      image: "5.jpg",
      link: "https://music.youtube.com/watch?v=a5Icr9m8vbc&si=0BfH9cNmMpICkT5k",
    },
    {
      image: "6.jpg",
      link: "https://music.youtube.com/watch?v=CTy1C6-uKHs&si=WHNRNJJtK1U78zpe",
    },
    {
      image: "7.jpg",
      link: "https://music.youtube.com/watch?v=KvaxYUfGHnk&si=73y9_7MYFbU4l_7W",
    },

    {
      image: "9.jpg",
      link: "https://music.youtube.com/watch?v=bW9Xlmm6j54&si=XfKyb3MVEcBXyeAs",
    },
    {
      image: "10.jpg",
      link: "https://music.youtube.com/watch?v=BaHboCwecec&si=c_akkBFCMvVEcWwr",
    },
    {
      image: "11.jpg",
      link: "https://music.youtube.com/watch?v=SR26AC-GFkg&si=JEAEWXqPEX8VypLv",
    },
    {
      image: "12.jpg",
      link: "https://music.youtube.com/watch?v=g19EuryzWbE&si=tM2HhEG9dsOTnMDF",
    },
  ];


 const Songs = () => {
   return (
     <motion.div
       className="songs-container"
       variants={pageVariants}
       initial="initial"
       animate="animate"
       exit="exit"
     >
       <h2 className="playlist-heading">The Playlist of Us</h2>
       <div className="albums">
         {albums.map((album, index) => (
           <div key={index} className="album">
             <a href={album.link} target="_blank" rel="noopener noreferrer">
               <img src={`/public/${album.image}`} alt={`Album ${index + 1}`} />
             </a>
           </div>
         ))}
       </div>
     </motion.div>
   );
 };

 export default Songs;