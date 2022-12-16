import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  Pressable
} from 'react-native'
import {
  useFonts,
  Kalam_700Bold,
  Kalam_300Light,
  Kalam_400Regular
} from '@expo-google-fonts/kalam'
import { Collections } from './Collections'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import like from '../../assets/like.png'
import unliked from '../../assets/unliked.png'
import Animated from 'react-native-reanimated'
import { useLike } from '../hooks/useLike'

const { width, height } = Dimensions.get("window")

const AnimatedImage = Animated.createAnimatedComponent(Image)

export const ImgItem = ({ profilePic, author, location, img, desc, index }) => {
  const [fontsLoaded] = useFonts({
    Kalam_700Bold,
    Kalam_300Light,
    Kalam_400Regular
  })

  const { doubleTap, style, isLiked, handleUnlike } = useLike()

  if (!fontsLoaded) return <></>

  return (
    <>
      {index ? null : <Collections />}
      <View style={styles.container}>
        <View style={styles.profileWrapper}>
          <Image
            source={{ uri: profilePic }}
            style={styles.picture}
            resizeMode="cover"
          />
          <View style={styles.textWrapper}>
            <Text style={styles.textName}>
              {author || "Anonymous"}
            </Text>
            <Text style={styles.textLocation}>
              From {location || "Somewhere..."}
            </Text>
          </View>
        </View>
        <Text style={styles.textDesc}>
          {desc || "No caption needed"}
        </Text>
        <ImageBackground
          source={{ uri: img }}
          style={styles.img}
          resizeMode="stretch"
        >
          <GestureDetector gesture={Gesture.Exclusive(doubleTap)}>
            <Animated.View>
              <AnimatedImage
                source={like}
                style={style}
                resizeMode="center"
              />
            </Animated.View>
          </GestureDetector>
          <Pressable
            style={styles.likeWrapper}
            onPress={handleUnlike}
          >
            <Image
              source={unliked}
              style={styles.unliked}
              resizeMode="center"
            />
            <Image
              source={like}
              style={[styles.liked, { transform: [{ scale: isLiked ? 1 : 0 }] }]}
              resizeMode="center"
            />
          </Pressable>
        </ImageBackground>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10
  },
  profileWrapper: {
    flexDirection: "row",
    paddingVertical: 5,
    paddingLeft: 15
  },
  picture: {
    width: 50,
    height: 50,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "#aaa8"
  },
  textWrapper: {
    paddingLeft: 10,
    justifyContent: "center"
  },
  textName: {
    fontFamily: "Kalam_700Bold",
    fontSize: 16
  },
  textLocation: {
    fontSize: 14,
    fontFamily: "Kalam_300Light",
  },
  textDesc: {
    fontSize: 16,
    fontFamily: "Kalam_400Regular",
    paddingLeft: 20,
    paddingBottom: 5
  },
  img: {
    width,
    height: height * .65,
    alignItems: "center",
    justifyContent: "center"
  },
  likeWrapper: {
    width: 40,
    height: 40,
    position: "absolute",
    bottom: 5,
    right: 5,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center"
  },
  liked: {
    width: 30,
    height: 30,
  },
  unliked: {
    width: 30,
    height: 30,
    position: "absolute"
  }
})