import { createContext, useEffect, useState } from 'react';

export const store = createContext();

export const AppContext = ({ children }) => {
  const [listTitle, setListTitle] = useState("")

  const INITIAL_STATE = {
    listTitle,
  }

  const setState = () => {
    return {
      setListTitle,
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