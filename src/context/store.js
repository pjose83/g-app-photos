import { createContext, useEffect, useState } from 'react';

export const store = createContext();

export const AppContext = ({ children }) => {
  const [listTitle, setListTitle] = useState("")
  const [photos, setPhotos] = useState([])

  const getPhotos = async () => {
    const ACCESS_KEY = "p2C52aVN0rZ6XjMW2AKe8jTiAQ4VVARGNIEs_SrcSQQ"
    const imgUrl = `https://api.unsplash.com/search/photos?page=1&per_page=9&query=${listTitle}&client_id=${ACCESS_KEY}`

    const getData = await fetch(imgUrl)
    const { results } = await getData.json()
    const imgs =  results.map(item => item?.urls?.small || "")
    // console.log("results from storage :", imgs.length)

    setPhotos(imgs)
  }

  useEffect(() => {getPhotos()}, [listTitle])

  const INITIAL_STATE = {
    listTitle,
    photos
  }

  const setState = () => {
    return {
      setListTitle,
      getPhotos
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