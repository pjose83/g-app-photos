import { ImageBackground, StyleSheet, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { colors, StyledText } from '../theme'
import { store } from '../context/store'
import { useContext } from 'react'
import { Modal } from './Modal'
import { useCamera } from '../hooks'

export const CameraPicture = ({ img, deleteImg, saveImg }) => {
  const { isModalVisible } = useContext(store)
  return (
    <ImageBackground
      resizeMode='stretch'
      source={{ uri: img }}
      style={styles.imgScreen}
    >
      <TouchableOpacity style={styles.imgBtn} onPress={deleteImg}>
        <Ionicons name="trash" size={30} color={colors.light} />
        <StyledText
          kalamRegular
          regular
          color={colors.light}
        >
          Delete
        </StyledText>
      </TouchableOpacity>
      <TouchableOpacity style={styles.imgBtn} onPress={saveImg}>
        <Ionicons name="checkmark" size={30} color={colors.light} />
        <StyledText
          kalamRegular
          regular
          color={colors.light}
        >
          Save
        </StyledText>
      </TouchableOpacity>
      { isModalVisible && <Modal message="Add a description for your picture!" />}
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  imgScreen: {
    flex: 1,
    padding: 30,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "flex-end"
  },
  imgBtn: {
    flexDirection: "row",
    alignItems: "center"
  }
})