import React, { createContext, useState, useContext } from 'react'

export const NoteListContext = createContext({})

export const NoteListProvider = ({ children }) => {
  const [noteList, setNoteList] = useState([])

  return (
    <NoteListContext.Provider value={{ noteList, setNoteList }}>
      {children}
    </NoteListContext.Provider>
  )
}

export function useNoteList() {
  const context = useContext(NoteListContext)
  const { noteList, setNoteList } = context
  return { noteList, setNoteList }
}
