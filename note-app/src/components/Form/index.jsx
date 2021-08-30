/* eslint-disable react/jsx-curly-newline */
import React, { useState, useEffect, useCallback } from 'react'
import { v4 } from 'uuid'
import { useNote } from '../../hooks/note'
import { useModal } from '../../hooks/modal'
import { useNoteList } from '../../hooks/noteList'
import { Container, Styled, Button } from './styles'
import theme from '../../styles/theme'

const Form = () => {
  const [newNoteFormData, setNewNoteFormData] = useState({
    title: '',
    description: '',
    type: 'default'
  })
  const { currentNote, setCurrentNote } = useNote()
  const { noteList, setNoteList } = useNoteList()
  const { setIsOpenModal } = useModal()

  useEffect(() => {
    if (currentNote !== null)
      setNewNoteFormData({
        title: currentNote?.title,
        description: currentNote?.description,
        type: currentNote?.type
      })
  }, [currentNote])

  const handleFormSubmit = useCallback(
    event => {
      event.preventDefault()
      const backgroundColors = {
        home: theme.filterType.home,
        work: theme.filterType.work,
        personal: theme.filterType.personal
      }

      const { title, description, type } = newNoteFormData

      const newNote = {
        title,
        description,
        type,
        background: backgroundColors[type],
        date: new Date(),
        complete: false,
        id: currentNote === null ? v4() : currentNote?.id
      }

      let newList = noteList
      if (currentNote !== null) newList = newList.filter(note => note?.id !== currentNote?.id)

      newList = [newNote, ...newList]

      setNoteList(newList)
      setCurrentNote(null)
      setNewNoteFormData({
        title: '',
        description: '',
        type: ''
      })
      setIsOpenModal(false)
    },
    [currentNote, newNoteFormData, noteList, setCurrentNote, setIsOpenModal, setNoteList]
  )

  return (
    <Container>
      <div className="header">Add note</div>
      <form onSubmit={handleFormSubmit}>
        <div className="body">
          <div className="col-1">
            <Styled>
              <input
                name="title"
                id="title"
                value={newNoteFormData.title}
                onChange={e =>
                  setNewNoteFormData(prevState => {
                    return { ...prevState, title: e.target.value }
                  })
                }
                placeholder="Add title..."
              />
            </Styled>
            <Styled style={{ marginTop: '5%', height: '81%' }}>
              <textarea
                name="description"
                id="description"
                placeholder="Add description..."
                value={newNoteFormData.description}
                onChange={e =>
                  setNewNoteFormData(prevState => {
                    return { ...prevState, description: e.target.value }
                  })
                }
              />
            </Styled>
          </div>
          <Styled style={{ width: '36%', height: '2.5rem' }}>
            <select
              name="type"
              id="type"
              required
              value={newNoteFormData.type}
              onChange={e =>
                setNewNoteFormData(prevState => {
                  return { ...prevState, type: e.target.value }
                })
              }
            >
              <option value="default" disabled hidden>
                Select Category
              </option>
              <option value="home">Home</option>
              <option value="work">Work</option>
              <option value="personal">Personal</option>
            </select>
          </Styled>
        </div>
        <div className="footer">
          <Button
            isDisable={newNoteFormData.type === 'default'}
            disabled={newNoteFormData.type === 'default'}
            type="submit"
          >
            <div className="alert">Mandatory Category </div>
            {currentNote === null ? 'ADD' : 'UPDATE'}
          </Button>
          <Button
            type="button"
            onClick={() => {
              setIsOpenModal(false)
              setCurrentNote(null)
            }}
          >
            CANCEL
          </Button>
        </div>
      </form>
    </Container>
  )
}

export default Form
