import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native'
import homeBg from '../../assets/home-background.png'
import { useFonts, Jua_400Regular } from '@expo-google-fonts/jua'
import { Kalam_400Regular } from '@expo-google-fonts/kalam'

const { width, height } = Dimensions.get("window")

export const Home = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    Kalam_400Regular,
    Jua_400Regular
  })

  if (!fontsLoaded) return <></>

  return (
    <ImageBackground
      source={homeBg}
      resizeMode="stretch"
      style={styles.background}
    >
      <View style={styles.homeWrapper}>
        <View style={styles.textWrapper}>
          <Text style={styles.homeTitle}>
            PhotoSearch
          </Text>
          <Text style={styles.homeSlogan}>
            Find your best photographer in the city
          </Text>
        </View>
        <Pressable
          style={styles.searchBtn}
          onPress={() => navigation.navigate("TabNavigator")}
        >
          <Text style={styles.textBtn}>
            Search
          </Text>
        </Pressable>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1
  },
  homeWrapper: {
    width,
    height: height * .35,
    backgroundColor: "#373334B2",
    position: "absolute",
    bottom: 0,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  textWrapper: {
    width,
    alignItems: "center"
  },
  homeTitle: {
    fontSize: 36,
    color: "#fff",
    paddingBottom: 10,
    fontFamily: "Jua_400Regular",
    textShadowColor: '#0007',
    textShadowOffset: {width: -3, height: 3},
    textShadowRadius: 15
  },
  homeSlogan: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Kalam_400Regular"
  },
  searchBtn: {
    backgroundColor: "#AB7E57",
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 50
  },
  textBtn: {
    textAlign: "center",
    fontSize: 22,
    color: "#fff",
    fontFamily: "Jua_400Regular"
  }
})