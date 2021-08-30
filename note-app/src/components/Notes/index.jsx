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
  const { noteList, setNoteList } = useNoteList()
  const [popUp, setPopUp] = useState(false)
  const [selectedNote, setSelectedNote] = useState()

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('@note-app/notes'))
    if (storedNotes !== null) setNoteList(storedNotes)
  }, [setNoteList])

  useEffect(() => {
    localStorage.setItem('@note-app/notes', JSON.stringify(noteList))
  }, [noteList])

  const handleOnChange = useCallback(
    e => {
      const changedNote = noteList.filter(note => note.id === e.currentTarget.id)
      const list = noteList.filter(note => note.id !== e.currentTarget.id)
      const newList = [{ ...changedNote[0], complete: !changedNote[0].complete }, ...list]
      setNoteList(newList)
    },
    [noteList, setNoteList]
  )

  return (
    <>
      {notes.map(note => (
        <Container
          key={note.id}
          backgroundColor={note.complete ? 'rgba(40, 46, 41, 0.6)' : note.background}
          data-cy="card-note"
        >
          {popUp && note.id === selectedNote ? (
            <PopUp id={note.id} isVisible={note.id}>
              Delete note?
              <div className="footer">
                <Button
                  type="button"
                  data-cy="btn-delete-note-popup"
                  onClick={() => {
                    const newList = noteList.filter(item => item.id !== note.id)
                    setNoteList(newList)
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
                  data-cy="check-note"
                  id={note.id}
                  checked={note.complete}
                  readOnly
                  onClick={handleOnChange}
                />
                <Icon
                  id={note.id}
                  data-cy="check-note-icon"
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
                data-cy="btn-edit-note"
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
                data-cy="btn-delete-note"
              >
                <img style={{ marginLeft: '1rem' }} src={trash} alt="trash" />
              </button>
            </div>
          </Header>
          <Body
            id={`body-card-${note.id}`}
            isComplete={note.complete}
            className="withdrawn"
            onClick={() => {
              const card = document.getElementById(`body-card-${note.id}`)
              if (card.className === 'expanded') card.className = 'withdrawn'
              else card.className = 'expanded'
            }}
          >
            {note.description}
          </Body>
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
