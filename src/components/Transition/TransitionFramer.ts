export const fadeIn = () => {
  return {
    hidden: {
      y: 100,
      opacity: 0,
      x: 0,
      transition: {
        type: "tween",
        duration: 0.8,
        dealy: 0.8,
        easy: [0.25, 0.6, 0.3, 0.8 ],
      },
    },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1.4,
        dealy: 0.7,
        easy: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};
