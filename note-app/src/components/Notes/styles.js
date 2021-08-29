import styled, { css } from 'styled-components'
import theme from '../../styles/theme'

export const Container = styled.div`
  width: 49%;
  position: relative;
  min-width: 190px;
  height: 13.6rem;
  color: white;
  border-radius: 4px;
  box-shadow: 0px 3px 6px ${theme.shadow};
  margin-bottom: 3%;
  padding: 1.6%;
  ${props =>
    props.backgroundColor &&
    css`
      background: ${props.backgroundColor};
    `};
`
export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.125rem;
  margin-bottom: 1rem;
  font-weight: 600;

  button {
    background: transparent;
    border: 0;
  }

  .card-icons {
    display: flex;
    align-items: center;
    width: min-content;

    img {
      width: 1rem;
    }
  }

  div {
    text-decoration: none;

    ${props =>
      props.isComplete &&
      css`
        text-decoration: line-through;
      `};
  }
`
export const StyledCheckbox = styled.div`
  position: relative;
  width: min-content;
  input[type='checkbox'] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    display: inline-block;
    width: 1.3rem;
    height: 1.3rem;
    padding: 2px;
    background-clip: content-box;
    border: 0.15rem solid rgba(255, 255, 255, 0.6);
    border-radius: 3px;
    background-color: transparent;
    margin-right: 15px;

    &:focus {
      outline: none !important;
    }
  }
`

export const Icon = styled.svg`
  fill: none;
  stroke: rgba(255, 255, 255, 0.6);
  stroke-width: 0.15rem;
  width: 1.3rem;
  position: absolute;
  bottom: 20%;
  left: 2%;
`

export const Body = styled.div`
  text-align: left;
  opacity: 0.8;
  font-size: 1rem;
  margin-bottom: 1rem;
  height: 6rem;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;

  ::-webkit-scrollbar-track {
    background-color: rgba(244, 244, 244, 0.4);
  }
  ::-webkit-scrollbar {
    width: 6px;
    background: rgba(244, 244, 244, 0.4);
  }
  ::-webkit-scrollbar-thumb {
    background: white;
    border-radius: 1rem;
  }

  scrollbar-width: thin;
  scrollbar-color: white rgba(244, 244, 244, 0.4);
  scroll-behavior: smooth;
  text-decoration: none;

  ${props =>
    props.isComplete &&
    css`
      text-decoration: line-through;
    `};
`
export const Footer = styled.div`
  opacity: 0.6;
  ${props =>
    props.isComplete &&
    css`
      text-decoration: line-through;
    `};
`

export const PopUp = styled.div`
  box-shadow: 0px 3px 6px #00000029;
  background: white;
  top: -54%;
  z-index: 999;
  font-size: 1rem;
  color: ${theme.text.secondary};
  padding: 2.5%;
  left: 65%;
  position: absolute;
  width: 70%;
  min-width: 140px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 90px;

  .footer {
    display: flex;
    justify-content: flex-end;
  }
`

export const Button = styled.button`
  color: ${theme.buttonBlue.secondary};
  background: transparent;
  border: 0;
  padding: 0.5rem;
  padding-bottom: 0px;
  font-size: 1rem;
`
