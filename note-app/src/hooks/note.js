import React, { createContext, useState, useContext } from 'react'

export const NoteContext = createContext({})

export const NoteProvider = ({ children }) => {
  const [currentNote, setCurrentNote] = useState(null)

  return (
    <NoteContext.Provider value={{ currentNote, setCurrentNote }}>{children}</NoteContext.Provider>
  )
}

export function useNote() {
  const context = useContext(NoteContext)
  const { currentNote, setCurrentNote } = context
  return { currentNote, setCurrentNote }
}
