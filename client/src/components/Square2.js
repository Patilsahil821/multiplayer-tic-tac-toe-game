import React from "react"
import { Zoom } from "@mui/material"
import { rd, ld, fh, sh, th, fv, sv, tv } from "./style"

const pattern = [
  { path: [0, 1, 2], style: fh },
  { path: [3, 4, 5], style: sh },
  { path: [6, 7, 8], style: th },
  { path: [0, 4, 8], style: ld },
  { path: [2, 4, 6], style: rd },
  { path: [0, 3, 6], style: fv },
  { path: [1, 4, 7], style: sv },
  { path: [2, 5, 8], style: tv }
]

function Square2({ handleClick, box, path, whoWin }) {
  //for right diagonal

  return (
    <>
      <div className="box-container">
        <div className="row">
          <div
            className="border-right border-bottom"
            onClick={(e) => {
              handleClick(0, e)
            }}
          >
            {(box[0] === "O" || box[0] === "X") && (
              <Zoom in={true}>
                <div
                  style={{
                    color:
                      (box[0] === "O" && "green") || (box[0] === "X" && "red")
                  }}
                >
                  {box[0]}
                </div>
              </Zoom>
            )}
          </div>

          <div
            className="border-right border-bottom"
            onClick={(e) => {
              handleClick(1, e)
            }}
          >
            {(box[1] === "O" || box[1] === "X") && (
              <Zoom in={true}>
                <div
                  style={{
                    color:
                      (box[1] === "O" && "green") || (box[1] === "X" && "red")
                  }}
                >
                  {box[1]}
                </div>
              </Zoom>
            )}
          </div>
          <div
            className="border-bottom"
            onClick={(e) => {
              handleClick(2, e)
            }}
          >
            {(box[2] === "O" || box[2] === "X") && (
              <Zoom in={true}>
                <div
                  style={{
                    color:
                      (box[2] === "O" && "green") || (box[2] === "X" && "red")
                  }}
                >
                  {box[2]}
                </div>
              </Zoom>
            )}
          </div>
        </div>
        <div className="row">
          <div
            className="border-bottom border-right"
            onClick={(e) => {
              handleClick(3, e)
            }}
          >
            {(box[3] === "O" || box[3] === "X") && (
              <Zoom in={true}>
                <div
                  style={{
                    color:
                      (box[3] === "O" && "green") || (box[3] === "X" && "red")
                  }}
                >
                  {box[3]}
                </div>
              </Zoom>
            )}
          </div>
          <div
            className="border-bottom border-right"
            onClick={(e) => {
              handleClick(4, e)
            }}
          >
            {(box[4] === "O" || box[4] === "X") && (
              <Zoom in={true}>
                <div
                  style={{
                    color:
                      (box[4] === "O" && "green") || (box[4] === "X" && "red")
                  }}
                >
                  {box[4]}
                </div>
              </Zoom>
            )}
          </div>
          <div
            className="border-bottom "
            onClick={(e) => {
              handleClick(5, e)
            }}
          >
            {(box[5] === "O" || box[5] === "X") && (
              <Zoom in={true}>
                <div
                  style={{
                    color:
                      (box[5] === "O" && "green") || (box[5] === "X" && "red")
                  }}
                >
                  {box[5]}
                </div>
              </Zoom>
            )}
          </div>
        </div>
        <div className="row">
          <div
            className="border-right"
            onClick={(e) => {
              handleClick(6, e)
            }}
          >
            {(box[6] === "O" || box[6] === "X") && (
              <Zoom in={true}>
                <div
                  style={{
                    color:
                      (box[6] === "O" && "green") || (box[6] === "X" && "red")
                  }}
                >
                  {box[6]}
                </div>
              </Zoom>
            )}
          </div>
          <div
            className="border-right"
            onClick={(e) => {
              handleClick(7, e)
            }}
          >
            {(box[7] === "O" || box[7] === "X") && (
              <Zoom in={true}>
                <div
                  style={{
                    color:
                      (box[7] === "O" && "green") || (box[7] === "X" && "red")
                  }}
                >
                  {box[7]}
                </div>
              </Zoom>
            )}
          </div>
          <div
            className=""
            onClick={(e) => {
              handleClick(8, e)
            }}
          >
            {(box[8] === "O" || box[8] === "X") && (
              <Zoom in={true}>
                <div
                  style={{
                    color:
                      (box[8] === "O" && "green") || (box[8] === "X" && "red")
                  }}
                >
                  {box[8]}
                </div>
              </Zoom>
            )}
          </div>
        </div>

        {path.length > 0 &&
          pattern.map((element, index) => {
            if (
              path[0] === element.path[0] &&
              path[1] === element.path[1] &&
              path[2] === element.path[2]
            ) {
              const newstyle = {
                ...element.style,
                backgroundColor:
                  (whoWin.O === true && "green") || (whoWin.X === true && "red")
              }
              return <div key={index} style={newstyle}></div>
            }
          })}
      </div>
    </>
  )
}

export default Square2
