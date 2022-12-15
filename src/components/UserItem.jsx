import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import { useFonts, Kalam_400Regular, Kalam_700Bold } from '@expo-google-fonts/kalam'
import { Jua_400Regular } from '@expo-google-fonts/jua'
import { Marker } from 'react-native-maps'
import { users } from '../data/usersData'
import ellipse from "../../assets/ellipse.png"

export const UserItem = () => {
  const [fontsLoaded] = useFonts({
    Kalam_400Regular,
    Kalam_700Bold,
    Jua_400Regular
  })

  if (!fontsLoaded) return <></>

  return (
    users.map(({ name, username, latitude, longitude, pro }) => (
      <Marker
        key={username}
        coordinate={{ latitude, longitude }}
        style={styles.markerContainer}
      >
        {
          pro
            &&
            <View style={styles.pro}>
              <Text style={styles.proText}>PRO</Text>
            </View>
        }
        <ImageBackground
          source={ellipse}
          resizeMode="stretch"
          style={styles.ellipse}
        >
          <Image
            source={{ uri: `https://maps-app1.s3.amazonaws.com/profile-pic/bogota/${username}.jpeg` }}
            resizeMode="stretch"
            style={styles.profileImg}
          />
        </ImageBackground>
        <View style={styles.wrapperBg} />
          <View style={styles.nameWrapper}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.username}>{username} </Text>
          </View>
      </Marker>
    ))
  )
}

const styles = StyleSheet.create({
  markerContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10
  },
  ellipse: {
    width: 50,
    height: 65,
    paddingTop: 5,
    alignItems: "center",
    zIndex: 100,
  },
  pro: {
    position: "absolute",
    top: 0,
    left: 40,
    backgroundColor: "#6E5744",
    paddingHorizontal: 8,
    paddingVertical: 5
  },
  proText: {
    fontFamily: "Jua_400Regular",
    fontSize: 12,
    color: "#fff"
  },
  profileImg: {
    width: 40,
    height: 40,
    borderRadius: 100
  },
  nameWrapper: {
    backgroundColor: "#F4DFCA",
    paddingVertical: 2,
    paddingHorizontal: 5,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10
  },
  wrapperBg: {
    backgroundColor: "#F4DFCA",
    position: "absolute",
    height: 45,
    width: 30,
    left: 20
  },
  name: {
    fontFamily: "Kalam_700Bold",
    fontSize: 14
  },
  username: {
    fontFamily: "Kalam_400Regular",
    color: "#222",
    fontSize: 12
  }
})