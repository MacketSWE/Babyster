import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

export const Circle = () => {
  return (
    <AnimatePresence>
      <motion.div
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.3 },
        }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="h-60 w-60 rounded-full bg-gray-700 overflow-hidden">
          <Image
            src="/images/awake.jpg"
            alt="babyawake"
            width={1000}
            height={1000}
            className="object-contain"
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
