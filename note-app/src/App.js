import React, { useState, useEffect } from 'react'
import GlobalStyle from './styles/global'
import search from './assets/search.svg'
import result from './assets/no-result.svg'
import noNotes from './assets/no-notes.svg'
import add from './assets/add.svg'
import {
  Container,
  StyledSearch,
  MenuCircle,
  Menu,
  MenuItem,
  AddButton,
  Progress,
  Bar,
  NotesContainer,
  ModalBackground
} from './style'
import { useModal } from './hooks/modal'
import { useNoteList } from './hooks/noteList'
import Notes from './components/Notes'
import Form from './components/Form'
import theme from './styles/theme'

const App = () => {
  const [filteredCards, setFilteredCards] = useState([])
  const [wordFilter, setWordFilter] = useState('')
  const [typeFilter, setTypeFilter] = useState('All')
  const { isOpenModal, setIsOpenModal } = useModal()
  const { noteList, completedNotes } = useNoteList()

  const types = [
    {
      name: 'All',
      color: theme.buttonBlue.primary
    },
    {
      name: 'Home',
      color: theme.filterType.home
    },
    {
      name: 'Work',
      color: theme.filterType.work
    },
    {
      name: 'Personal',
      color: theme.filterType.personal
    }
  ]

  useEffect(() => {
    let list = noteList
    if (typeFilter !== 'All') {
      list = list.filter(option => option.type === typeFilter.toLowerCase())
    }
    if (wordFilter !== '') {
      list = list.filter(option => {
        return (
          option.title.toLowerCase().indexOf(wordFilter?.toLowerCase()) !== -1 ||
          option.description.toLowerCase().indexOf(wordFilter?.toLowerCase()) !== -1
        )
      })
    }
    setFilteredCards(list)
  }, [wordFilter, noteList, typeFilter])

  return (
    <>
      {isOpenModal ? (
        <ModalBackground>
          <Form />
        </ModalBackground>
      ) : null}
      <Container>
        <GlobalStyle />
        <StyledSearch>
          <img src={search} alt="lupe" style={{ marginRight: '2%', width: '1rem' }} />
          <input placeholder="Search notes..." onChange={e => setWordFilter(e.target.value)} />
        </StyledSearch>
        <div
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
            marginTop: '3.5%',
            alignItems: 'center'
          }}
        >
          <Menu>
            {types.map(item => (
              <MenuItem
                key={`${item.name}`}
                onClick={() => setTypeFilter(item.name)}
                color={typeFilter === item.name ? item.color : 'none'}
              >
                {item.name}
                <MenuCircle color={item.name === 'All' ? 'transparent' : item.color} />
              </MenuItem>
            ))}
          </Menu>
          <AddButton type="button" onClick={() => setIsOpenModal(true)}>
            <img src={add} alt="+" /> ADD NOTE
          </AddButton>
        </div>
        {filteredCards.length === 0 || noteList.length === 0 ? (
          <div className="no-result-search">
            {noteList.length === 0 ? 'You don’t have any notes' : 'Couldn’t find any notes'}
            <img
              src={noteList.length === 0 ? noNotes : result}
              alt="no-result"
              style={{ marginTop: '5.5%' }}
            />
          </div>
        ) : (
          <div className="progress-bar-style">
            {completedNotes.length !== 0
              ? `You have ${completedNotes.length}/${noteList.length} notes completed`
              : 'You have completed all notes'}
            <Progress>
              <Bar width={(completedNotes.length * 100) / noteList.length} />
            </Progress>
          </div>
        )}
        <NotesContainer>
          <Notes notes={filteredCards} />
        </NotesContainer>
      </Container>
    </>
  )
}

export default App
