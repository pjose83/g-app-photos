import { createContext, useEffect, useRef, useState } from 'react';

export const store = createContext();

export const AppContext = ({ children }) => {
  const [listTitle, setListTitle] = useState("")
  const myListRef = useRef()

  const goTop = () => {
    myListRef.current.scrollToIndex({ index: 0 })
  }

  const INITIAL_STATE = {
    listTitle,
    myListRef
  }

  const setState = () => {
    return {
      setListTitle,
      goTop
    }
  }

  const state = {
    ...INITIAL_STATE,
    effects: {
      ...setState()
    }
  }
  return <store.Provider value={state}>{children}</store.Provider>
}