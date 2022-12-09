import { createContext, useEffect, useState } from 'react';

export const store = createContext();

export const AppContext = ({ children }) => {
  const [listTitle, setListTitle] = useState("")
  const [loading, setLoading] = useState(false)

  const INITIAL_STATE = {
    listTitle,
    loading
  }

  const setState = () => {
    return {
      setListTitle,
      setLoading
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