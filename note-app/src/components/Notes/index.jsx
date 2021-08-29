import React, { useState, useCallback, useEffect } from 'react'
import edit from '../../assets/edit.svg'
import trash from '../../assets/trash.svg'
import { useModal } from '../../hooks/modal'
import { useNote } from '../../hooks/note'
import { useNoteList } from '../../hooks/noteList'
import { Container, Header, Body, StyledCheckbox, Icon, Footer, PopUp, Button } from './styles'

const Notes = ({ notes }) => {
  const { setIsOpenModal } = useModal()
  const { setCurrentNote } = useNote()
  const { noteList, setNoteList, setCompletedNotes, completedNotes } = useNoteList()
  const [popUp, setPopUp] = useState(false)
  const [selectedNote, setSelectedNote] = useState()

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('@note-app/notes'))
    if (storedNotes !== null) setNoteList(storedNotes)

    const storedCompletedNotes = JSON.parse(localStorage.getItem('@note-app/completed-notes'))
    if (storedCompletedNotes !== null) setCompletedNotes(storedCompletedNotes)
  }, [setCompletedNotes, setNoteList])

  useEffect(() => {
    localStorage.setItem('@note-app/notes', JSON.stringify(noteList))
    localStorage.setItem('@note-app/completed-notes', JSON.stringify(completedNotes))
  }, [noteList, completedNotes])

  const handleOnChange = useCallback(
    e => {
      const index = noteList.findIndex(item => {
        return item.id === e.currentTarget.id
      })

      const newNoteState = { ...noteList[index], complete: !noteList[index].complete }
      const newList = noteList
      newList[index] = newNoteState

      if (!newNoteState.complete) {
        const newCompletedList = completedNotes.filter(item => item.id !== newList[index].id)
        setCompletedNotes(newCompletedList)
      } else {
        setCompletedNotes(oldList => [newNoteState, ...oldList])
      }

      setNoteList(newList)
    },
    [completedNotes, noteList, setCompletedNotes, setNoteList]
  )

  return (
    <>
      {notes.map(note => (
        <Container
          key={note.id}
          backgroundColor={note.complete ? 'rgba(40, 46, 41, 0.6)' : note.background}
        >
          {popUp && note.id === selectedNote ? (
            <PopUp id={note.id} isVisible={note.id}>
              Delete note?
              <div className="footer">
                <Button
                  type="button"
                  onClick={() => {
                    const newList = noteList.filter(item => item.id !== note.id)
                    const newCompletedList = completedNotes.filter(item => item.id !== note.id)
                    setNoteList(newList)
                    setCompletedNotes(newCompletedList)
                    setPopUp(false)
                  }}
                >
                  DELETE
                </Button>
                <Button type="button" onClick={() => setPopUp(false)}>
                  CANCEL
                </Button>
              </div>
            </PopUp>
          ) : null}
          <Header isComplete={note.complete}>
            <div style={{ display: 'flex' }}>
              <StyledCheckbox>
                <input
                  type="checkbox"
                  id={note.id}
                  checked={note.complete}
                  readOnly
                  onClick={handleOnChange}
                />
                <Icon
                  id={note.id}
                  viewBox="0 0 24 24"
                  style={note.complete ? { visibility: 'visible' } : { visibility: 'hidden' }}
                  onClick={handleOnChange}
                >
                  <polyline points="20 6 9 17 4 12" />
                </Icon>
              </StyledCheckbox>
              {note.title}
            </div>
            <div className="card-icons">
              <button
                type="button"
                onClick={() => {
                  setIsOpenModal(true)
                  setCurrentNote({
                    title: note.title,
                    description: note.description,
                    type: note.type,
                    background: note.background,
                    date: note.date,
                    complete: note.complete,
                    id: note.id
                  })
                }}
              >
                <img src={edit} alt="edit" />
              </button>
              <button
                type="button"
                onClick={() => {
                  setPopUp(value => !value)
                  setSelectedNote(note.id)
                }}
              >
                <img style={{ marginLeft: '1rem' }} src={trash} alt="trash" />
              </button>
            </div>
          </Header>
          <Body isComplete={note.complete}>{note.description}</Body>
          <Footer isComplete={note.complete}>
            {`${new Date(note.date).toLocaleString('en', { month: 'short' })} ${new Date(note.date)
              .getDate()
              .toString()}, ${new Date(note.date).getFullYear().toString()}`}
          </Footer>
        </Container>
      ))}
    </>
  )
}

export default Notes
