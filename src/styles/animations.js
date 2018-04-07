export const openCloseOpen = {
  "0%": {
    position: "relative",
    background: "red",
    left: "-10vw",
    marginTop: "-15vh",
    height: "120vh",
    width: "100px"
  },

  "50%": {
    marginTop: "-15vh",
    left: "-10vw",
    background: "red",
    position: "relative",
    height: "120vh",
    width: "100vw"
  },
  "75%": {
    position: "relative",
    background: "red",
    left: "-10vw",
    marginTop: "-15vh",
    height: "120vh",
    width: "100px"
  },
  "100%": {
    left: "0px",
    right: "0px",
    width: "85vw",
    height: "75vh"
  }
};
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
export const blink = {
  "0%": { opacity: 0.5, transform: "scale(1,1)" },
  "50%": { opacity: 1, transform: "scale(1.3,1.3)" },
  "100%": { opacity: 0.5, transform: "scale(1,1)" }
};
export const flyLeft = {
  "0%": { opacity: "0", transform: "translatex(100%)" },
  "50%": { transform: "translateX(-2%)" },
  "75%": { transform: "translateX(2%)" },
  "100%": { transform: "translatteX(0%)", opacity: 1 }
};
export const rotate = {
  "0%": { content: "Fabiano S. Cunha", transform: "rotateY(0deg)" },
  "50%": { transform: "rotateY(270deg)" },
  "100%": { content: "Go Back Home", transform: "rotateY(0deg)" }
};
