import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import godash from 'godash'
import { Goban } from 'react-go-board'

const useStyles = makeStyles((theme) => ({
  square: {
    width: '30px',
    height: '30px',
    border: 'solid 1px black',
    backgroundColor: '#F0DAB4',
    float: 'left',
  },
  board: {
    width: '600px',
    height: '540px',
    board: 'solid',
  },
}))

function GoBoard() {
  const classes = useStyles()
  const [board, setBoard] = React.useState(new godash.Board(19))
  const [black, setBlack] = React.useState(true)
  const annotations = [new godash.Coordinate(2, 2)]

  const handleCoordinateClick = async (coordinate) => {
    console.log('(' + coordinate.x + ', ' + coordinate.y + ')')
    var temp = board
    if (black) {
      temp = godash.addMove(board, coordinate, godash.BLACK)
      setBlack(false)
    } else {
      temp = godash.addMove(board, coordinate, godash.WHITE)
      setBlack(true)
    }
    setBoard(temp)
  }

  return (
    <Goban
      board={board}
      boardColor="#f0dab4"
      onCoordinateClick={handleCoordinateClick}
    />
  )
}

export default GoBoard
