import React, { createContext, useState, useContext } from 'react'

export const NoteListContext = createContext({})

export const NoteListProvider = ({ children }) => {
  const [noteList, setNoteList] = useState([])
  const [completedNotes, setCompletedNotes] = useState([])

  return (
    <NoteListContext.Provider value={{ noteList, setNoteList, completedNotes, setCompletedNotes }}>
      {children}
    </NoteListContext.Provider>
  )
}

export function useNoteList() {
  const context = useContext(NoteListContext)
  const { noteList, setNoteList, completedNotes, setCompletedNotes } = context
  return { noteList, setNoteList, completedNotes, setCompletedNotes }
}
