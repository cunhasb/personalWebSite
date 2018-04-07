export const leftScreen = {
  "0%": {
    position: "relative",
    background: "red",
    marginTop: "-20vh",
    right: "0%",
    height: "120vh",
    width: "100px"
  },

  "50%": {
    marginTop: "-20vh",
    background: "red",
    position: "relative",
    height: "120vh",
    width: "100vw"
  }
};
export const leftScreenRound = {
  "0%": {
    position: "relative",
    background: "red",
    left: "-20vw",
    marginTop: "-20vh",
    right: "0%",
    height: "120vh",
    width: "100px"
  },

  "50%": {
    left: "-10vw",
    marginTop: "-20vh",
    background: "red",
    position: "relative",
    height: "120vh",
    width: "100vw",
    borderRadius: "50%"
  }
};

export const disappear = {
  "0%": {
    opacity: 0
  },

  "75%": {
    opacity: 0
  },
  "100%": { opacity: 1 }
};
export const flyLeft = {
  "0%": { opacity: "0", transform: "translatex(100%)" },
  "50%": { transform: "translateX(-2%)" },
  "75%": { transform: "translateX(2%)" },
  "100%": { transform: "translatteX(0%)", opacity: 1 }
};
