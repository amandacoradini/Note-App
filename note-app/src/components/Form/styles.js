import styled, { css } from 'styled-components'
import theme from '../../styles/theme'

export const Container = styled.div`
  width: 60%;
  height: 70%;
  background: white;
  box-shadow: 0px 3px 6px ${theme.shadow};
  border-radius: 4px;

  .header {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    color: ${theme.text.secondary};
    font-size: 1.5rem;
    padding: 2% 3%;
  }

  .body {
    padding: 3% 5% 0% 5%;
    display: flex;
    justify-content: space-between;
    height: 100%;
  }

  .footer {
    display: flex;
    width: 100%;
    justify-content: flex-end;
    padding-right: 5%;
  }

  form {
    height: 76%;
  }

  .col-1 {
    width: 61%;
  }

  @media (max-width: 600px) {
    width: 80%;
    form {
      height: 83%;
    }
  }
`

export const Styled = styled.div`
  background: #f4f4f4;
  padding: 0.625rem 1.2rem 0.625rem 1.2rem;
  width: 100%;
  border: 0;
  border-radius: 4px 4px 0px 0px;

  input {
    width: 100%;
    flex: 1;
    background: transparent;
    border: 0;
    color: ${theme.text.secondary};
    font-size: 1rem;
    line-spacing: 24px;

    &::placeholder {
      color: ${theme.text.primary};
    }
  }

  select {
    width: 100%;
    flex: 1;
    background: transparent;
    border: 0;
    border-color: transparent;
    color: ${theme.text.secondary};
    font-size: 1rem;
    line-spacing: 24px;
  }

  textarea {
    resize: none;
    border: none;
    font-size: 1rem;
    overflow: auto;
    background: transparent;
    color: ${theme.text.secondary};
    height: 100%;
    width: 100%;

    &::placeholder {
      color: ${theme.text.primary};
    }
  }
`

export const Button = styled.button`
  color: ${theme.buttonBlue.secondary};
  background: transparent;
  border: 0;
  padding: 1rem;

  ${props =>
    props.isDisable &&
    css`
      color: rgba(33, 150, 243, 0.5);
    `};
  .alert {
    width: min-content;
    height: min-content;
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
    color: ${theme.text.secondary};
    position: absolute;
    bottom: 23%;
    right: 28%;
    background: transparent;
    box-shadow: 0px 3px 6px ${theme.shadow};
    visibility: hidden;
  }

  ${props =>
    props.isDisable &&
    css`
      &:hover {
        .alert {
          visibility: visible;
        }
      }
    `};
`
