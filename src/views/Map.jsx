import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native'
import MapView from 'react-native-maps';
import { UserItem } from '../components';
import { users } from '../data/usersData'
import { Entypo } from '@expo/vector-icons';
import { useFonts, Kalam_400Regular, Kalam_700Bold } from '@expo-google-fonts/kalam'

export const Map = () => {
  const [fontsLoaded] = useFonts({
    Kalam_400Regular,
    Kalam_700Bold,
  })

  if (!fontsLoaded) return <></>

  return (
    <>
      <View style={styles.textWrapper}>
        <Entypo name="camera" size={24} color="black" />
        <Text style={styles.text}>
          {users.length} photographers in your area
        </Text>
      </View>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 4.629323,
          longitude: -74.105656,
          latitudeDelta: 0.09,
          longitudeDelta: 0.04
        }}
        rotateEnabled={false}
        minZoomLevel={11}
      >
        <UserItem />
      </MapView>
    </>
  )
}

const styles = StyleSheet.create({
  map: {
    flex: 1
  },
  textWrapper: {
    flexDirection: "row",
    backgroundColor: "#F4DFCA",
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center"
  },
  text: {
    paddingLeft: 10,
    fontFamily: "Kalam_700Bold"
  }
})