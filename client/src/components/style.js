const rd = {
  position: "absolute",
  width: "135%",
  top: "1px",
  height: "1px",
  backgroundColor: "green",
  transform: "rotate(-43.5deg)",
  transformOrigin: "right",
  right: "0px",
  animationName: "diagonal",
  animationFillMode: "forwards",
  animationDuration: "1s",
  animationTimingFunction: "ease-out"
}

//for left diagonal
const ld = {
  position: "absolute",
  width: "135%",
  top: "1px",
  height: "1px",
  backgroundColor: "green",
  transform: "rotate(43.5deg)",
  transformOrigin: "left",
  left: "0px",
  animationName: "diagonal",
  animationFillMode: "forwards",
  animationDuration: "1s",
  animationTimingFunction: "ease-out"
}

/* for first horizontal line */
const fh = {
  position: "absolute",
  top: "22px",
  left: "0",
  width: "100%",
  height: "1px",
  backgroundColor: "green",
  borderWidth: "4px",
  animationName: "example",
  animationFillMode: "forwards",
  animationDuration: "1s",
  animationTimingFunction: "ease-out"
}

/* for second horizontal line */
const sh = {
  position: "absolute",
  top: "73px",
  width: "100%",
  height: "1px",
  backgroundColor: "green",
  borderWidth: "4px",
  animationName: "example",
  animationFillMode: "forwards",
  animationDuration: "1s",
  animationTimingFunction: "ease-out"
}

/* for third horizontal line */
const th = {
  position: "absolute",
  bottom: "25px",
  width: "100%",
  height: "1px",
  backgroundColor: "green",
  borderWidth: "4px",
  animationName: "example",
  animationFillMode: "forwards",
  animationDuration: "1s",
  animationTimingFunction: "ease-out"
}

/* for first vertical line */

const fv = {
  position: "absolute",
  top: "0",
  transform: "rotate(90deg)",
  transformOrigin: "left",
  width: "100%",
  height: "1px",
  backgroundColor: "green",
  borderWidth: "4px",
  left: "26px",
  animationName: "example",
  animationFillMode: "forwards",
  animationDuration: "1s",
  animationTimingFunction: "ease-out"
}
/* for second vertical line */
const sv = {
  position: "absolute",
  top: "0",
  transform: "rotate(90deg)",
  transformOrigin: "left",
  width: "100%",
  height: "1px",
  backgroundColor: "green",
  borderWidth: "4px",
  left: "76px",
  animationName: "example",
  animationFillMode: "forwards",
  animationDuration: "1s",
  animationTimingFunction: "ease-out"
}
/* for third vertical line */

const tv = {
  position: "absolute",
  top: "0",
  transform: "rotate(90deg)",
  transformOrigin: "left",
  width: "100%",
  height: "1px",
  backgroundColor: "green",
  borderWidth: "4px",
  left: "128px",
  animationName: "example",
  animationFillMode: "forwards",
  animationDuration: "1s",
  animationTimingFunction: "ease-out"
}
export { rd, ld, fh, sh, th, fv, sv, tv }
