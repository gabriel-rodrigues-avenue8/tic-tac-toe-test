import create from 'zustand'

export type GameStateStore = {
  playerTurn: 0 | 1,
  grid: Record<string, any>
}

export const gameStateStore = create<GameStateStore>((set) => ({
  playerTurn: 0,
  grid: {},
  play: () => set((state: { playerTurn: any }) => ({ playerTurn: state.playerTurn ? 0 : 1 }))
}))
