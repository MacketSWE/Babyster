import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

export const SleepingCircle = () => {
  return (
    <AnimatePresence>
      <motion.div
        animate={{
          scale: [1.1, 0.8, 1.1, 0.8, 1.1],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        <div className="h-60 w-60 rounded-full bg-gray-700 overflow-hidden">
          <Image
            src="/images/sleeping.jpg"
            alt="babysleeping"
            width={1000}
            height={1000}
            className="object-contain"
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
