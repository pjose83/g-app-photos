import { createContext, useRef, useState } from 'react';

export const store = createContext();

export const AppContext = ({ children }) => {
  const [listTitle, setListTitle] = useState("")
  const [galleryImg, setGalleryImg] = useState([])
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [inputText, setInputText] = useState("")
  const [editItem, setEditItem] = useState("")
  const myListRef = useRef()

  const goTop = () => {
    myListRef.current.scrollToIndex({ index: 0 })
  }

  const INITIAL_STATE = {
    listTitle,
    myListRef,
    galleryImg,
    isModalVisible,
    inputText,
    editItem
  }

  const setState = () => {
    return {
      setListTitle,
      goTop,
      setGalleryImg,
      setIsModalVisible,
      setInputText,
      setEditItem
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