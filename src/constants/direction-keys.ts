import { Direction } from 'constants/index'

const { EAST, WEST, NORTH, SOUTH } = Direction

export const DirectionKey: { [key: string]: Direction } = {
  ArrowUp: NORTH,
  ArrowDown: SOUTH,
  ArrowRight: EAST,
  ArrowLeft: WEST,
}
