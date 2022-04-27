import { createContext, useContext, useState } from 'react'

interface State {
  cursor: {
    root: HTMLElement
    dot: HTMLElement
    text: HTMLElement
    setCustomPos(pos: { x: number; y: number }): void
    removeCustomPos(): void
  } | null
  setCursor: React.Dispatch<React.SetStateAction<State['cursor']>>
}

const CursorContext = createContext<State>({
  cursor: null,
  setCursor: () => {},
})

export function CursorProvider(props: { children: React.ReactNode }) {
  const [cursor, setCursor] = useState<State['cursor']>(null)

  return <CursorContext.Provider {...props} value={{ cursor, setCursor }} />
}

export default function useCursor() {
  return useContext(CursorContext)
}
