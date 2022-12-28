import { useContext } from "react"
import { shareAsync } from "expo-sharing"
import { store } from "../context/store"

export const useImgOptions = (img) => {
  const {
    galleryImg,
    effects: {
      setGalleryImg,
      setIsModalVisible,
      setInputText,
      setEditItem
    }
} = useContext(store)

  const shareImage = async () => {
    try {
      await shareAsync(img)
    } catch (error) {
      console.log("Error on shareImage: ",error)
    }
  }

  const deleteImage = (itemToDelete) => {
    const newImagesList = galleryImg.filter(item => item.image !== itemToDelete)
    setGalleryImg(newImagesList)
  }

  const editImage = (description) => {
    setIsModalVisible(true)
    setInputText(description)
    setEditItem(img)
  }
  return {
    shareImage,
    deleteImage,
    editImage
  }
}
