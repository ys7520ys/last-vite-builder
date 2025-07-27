//성공함함
// // components/AnimatedPage.jsx
// "use client";

// import { motion } from "framer-motion";

// export default function AnimatedPage({ children, index }) {
//   return (
//     <motion.div
//       key={index}
//       initial={{ opacity: 0, y: 40 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: 40 }}
//       transition={{ duration: 0.4 }}
//     >
//       {children}
//     </motion.div>
//   );
// }


// components/AnimatedPage.jsx
"use client";

import { motion } from "framer-motion";

export default function AnimatedPage({ children, index, style }) {
  return (
    <motion.div
      key={index}
      style={style} // 부모로부터 받은 스타일 적용
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
}