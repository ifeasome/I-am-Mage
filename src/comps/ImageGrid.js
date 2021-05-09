import React from "react";
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";


const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore("images");
  

  return (
    <div className="img-grid">
    
      {docs && // image mapping from db response
        docs.map((doc) => (
          <motion.div
            className="img-wrap"
            key={doc.id}
            layout
            whileHover={{ opacity: 1 }}
            onClick={() => setSelectedImg(doc.url)}
          >
            
              <motion.img // image tag with framer motion animation
                src={doc.url}
                alt="Displayed Images"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              />

          </motion.div>
        ))}
    </div>
  );
};

export default ImageGrid;
