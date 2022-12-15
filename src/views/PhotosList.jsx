import { useContext, useEffect } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ActivityIndicator,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native'
import { store } from '../context/store'
import { useFonts, Kalam_700Bold } from '@expo-google-fonts/kalam'
import { usePhotos } from '../hooks/usePhotos'
import { getPhotos } from '../helpers/fetch'

const { width, height } = Dimensions.get("window")

export const PhotosList = () => {
  const { listTitle } = useContext(store)
  const {
    currentPage,
    photos,
    loading,
    loadPhotos,
    loadPhotosCollection
  } = usePhotos(getPhotos, listTitle)

  const [fontsLoaded] = useFonts({ Kalam_700Bold })

  useEffect(() => {
    loadPhotosCollection()
  }, [currentPage])

  if (!fontsLoaded) return <></>

  const renderPhotos = ({ item }) => (
    <TouchableOpacity
      style={styles.listWrapper}
      activeOpacity={.6}
    >
      <Image
        source={{ uri: item?.urls?.small }}
        style={styles.photo}
        resizeMode="stretch"
      />
    </TouchableOpacity>
  )

  return (
    <View style={styles.view}>
      <Text style={styles.title}>
        {listTitle}
      </Text>
      <FlatList
        data={photos}
        renderItem={renderPhotos}
        keyExtractor={(item, i) => i}
        numColumns={3}
        ItemSeparatorComponent={<View style={{ margin: 8}}/>}
        onEndReached={loadPhotos}
        onEndReachedThreshold={0}
      />
      {loading ? <ActivityIndicator size="large" color="#aaa" /> : null}
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: "#F4DFCA",
    padding: 20
  },
  title: {
    textAlign: "center",
    fontSize: 32,
    fontFamily: "Kalam_700Bold",
    textTransform: 'capitalize',
    textShadowColor: '#0007',
    textShadowOffset: {width: -1, height: 2},
    textShadowRadius: 10
  },
  listWrapper: {
    flex: 1,
    paddingTop: 10
  },
  photo: {
    height: height * .25,
    width: width * .27,
    borderRadius: 10
  }
})