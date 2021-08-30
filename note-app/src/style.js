import styled, { css } from 'styled-components'
import theme from './styles/theme'

export const Container = styled.div`
  padding: 0.625rem;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  flex: 1;
  padding: 5% 20% 0% 20%;

  .no-result-search {
    width: 100%;
    margin-top: 8%;
    height: min-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 2.813rem;
    color: ${theme.text.secondary};
    text-align: center;
  }

  .progress-bar-style {
    margin-top: 3.5%;
    margin-bottom: 3%;
    color: ${theme.text.primary};
    font-size: 1.125rem;

    @media (max-width: 830px) {
      margin-bottom: 5%;
      margin-top: 5.5%;
    }
  }

  @media (max-width: 600px) {
    padding: 5% 5% 0% 5%;
  }
`

export const StyledSearch = styled.div`
  background: white;
  padding: 0.625rem 1.2rem 0.625rem 1.2rem;
  width: 100%;
  color: ${theme.text.primary};
  border: 0;
  box-shadow: 0px 3px 6px ${theme.shadow};
  display: flex;

  input {
    width: 100%;
    flex: 1;
    background: transparent;
    border: 0;
    color: #000;
    font-size: 1rem;
    line-spacing: 24px;

    &::placeholder {
      color: ${theme.text.secondary};
    }
  }
`

export const Menu = styled.ul`
  display: flex;
  width: 100%;
`
export const MenuItem = styled.li`
  position: relative;
  margin-right: 2.5%;
  padding: 1% 1.5% 0.4% 1.5%;
  border-radius: 6px;
  width: 11%;
  min-width: min-content;
  list-style-type: none;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-size: 1rem;
  cursor: pointer;
  color: ${theme.text.terciary};
  ${props =>
    props.color !== 'none' &&
    css`
      background: ${props.color};
      color: white;
    `};
`

export const MenuCircle = styled.div`
  border-radius: 50%;
  width: 0.4rem;
  height: 0.4rem;
  min-width: 0.4rem;
  min-height: 0.4rem;
  background: transparent;
  ${props =>
    css`
      background: ${props.color};
    `};
`

export const AddButton = styled.button`
  border-radius: 4px;
  background: ${theme.buttonBlue.secondary};
  color: white;
  border: none;
  font-weight: 600;
  white-space: nowrap;
  padding: 1% 2%;
  box-shadow: 0px 3px 6px ${theme.shadow};
  display: flex;
  align-items: center;

  img {
    margin-right: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0px;
    border-radius: 50%;
    justify-content: center;
    padding: 2%;

    img {
      margin-right: 0rem;
    }
  }
`

export const Progress = styled.div`
  width: 100%;
  height: 0.25rem;
  background: rgba(33, 150, 243, 0.2);
  margin-top: 1%;
`

export const Bar = styled.div`
  height: 100%;
  background: rgba(33, 150, 243, 1);
  ${props =>
    css`
      width: ${props.width}%;
    `};
`

export const NotesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  height: min-content;
  align-items: baseline;
  justify-content: space-between;

  @media (max-width: 633px) {
    justify-content: center;
  }
`

export const ModalBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
  background: rgba(0, 0, 0, 0.2);
  z-index: 1;
`

export const StyledInput = styled.div`
  background: white;
  padding: 0.625rem 1.2rem 0.625rem 1.2rem;
  width: 100%;
  color: ${theme.text.primary};
  border: 0;
  box-shadow: 0px 3px 6px ${theme.shadow};
  display: flex;

  input {
    width: 100%;
    flex: 1;
    background: transparent;
    border: 0;
    color: #000;
    font-size: 1rem;
    line-spacing: 24px;

    &::placeholder {
      color: ${theme.text.secondary};
    }
  }
`
