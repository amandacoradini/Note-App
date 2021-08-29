import React from 'react'
import { ModalProvider } from './modal'
import { NoteProvider } from './note'
import { NoteListProvider } from './noteList'

const AppProvider = ({ children }) => (
  <ModalProvider>
    <NoteProvider>
      <NoteListProvider>{children}</NoteListProvider>
    </NoteProvider>
  </ModalProvider>
)
export default AppProvider
