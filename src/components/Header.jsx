import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native'
import { useFonts, Jua_400Regular } from '@expo-google-fonts/jua'
import Logo from '../../assets/header/logo.png'

const { height } = Dimensions.get("window")

export const Header = () => {
  const [fontsLoaded] = useFonts({
    Jua_400Regular
  })

  if (!fontsLoaded) return <></>

  return (
    <View style={styles.headerWrapper}>
      <Image
        source={Logo}
        resizeMode="stretch"
      />
      <Text style={styles.headerTitle}>
        PhotoSearch
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  headerWrapper: {
    flexDirection: "row",
    height: height * .1,
    paddingHorizontal: 20,
    alignItems: "center"
  },
  headerTitle: {
    fontSize: 18,
    paddingLeft: 15,
    color: "#AB7E57",
    fontFamily: "Jua_400Regular"
  }
})