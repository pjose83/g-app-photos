import { useContext, useRef, useState } from "react";
import { Camera, CameraType } from "expo-camera";
import { createAssetAsync } from 'expo-media-library'
import { store } from "../context/store";

export const useCamera = () => {
  const { isModalVisible, inputText, effects: { setGalleryImg, setIsModalVisible, setInputText } } = useContext(store)
  const [type, setType] = useState(CameraType.back);
  const [image, setImage] = useState(null)
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off)

  const cameraRef = useRef(null)

  const cameraFlash = Camera.Constants.FlashMode

  const takePicture = async () => {
    if (cameraRef) {
      try {
        const { uri } = await cameraRef.current.takePictureAsync()
        setImage(uri)
        setIsModalVisible(!isModalVisible)
      } catch (error) {
        console.log("Error on takePicture :", error)
      }
    }
  }

  const saveImage = async () => {
    if (image) {
      try {
        await createAssetAsync(image)
        setGalleryImg(img => [{ desc: inputText, image }, ...img])
        setImage(null)
        setInputText("")
      } catch (error) {
        console.log("Error on saveImage :", error)
      }
    }
  }

  const deleteImage = () => setImage(null)

  const toggleCameraType = () => setType(type === CameraType.back ? CameraType.front : CameraType.back)

  const toggleCameraFlash = () => setFlash(flash === cameraFlash.off ? cameraFlash.torch : cameraFlash.off)

  return {
    takePicture,
    deleteImage,
    saveImage,
    toggleCameraFlash,
    toggleCameraType,
    image,
    type,
    flash,
    cameraRef
  }
}
