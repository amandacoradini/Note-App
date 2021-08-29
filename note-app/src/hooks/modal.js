import React, { createContext, useState, useContext } from 'react'

export const ModalContext = createContext({})

export const ModalProvider = ({ children }) => {
  const [isOpenModal, setIsOpenModal] = useState(false)

  return (
    <ModalContext.Provider value={{ isOpenModal, setIsOpenModal }}>
      {children}
    </ModalContext.Provider>
  )
}

export function useModal() {
  const context = useContext(ModalContext)
  const { isOpenModal, setIsOpenModal } = context
  return { isOpenModal, setIsOpenModal }
}
