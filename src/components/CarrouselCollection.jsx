import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import { useFonts, Kalam_400Regular } from '@expo-google-fonts/kalam'
import { Link } from '@react-navigation/native'
import { store } from '../context/store'
import { useContext } from 'react'

const listName = [
  "wedding",
  "outdoors",
  "portraits",
  "travel",
  "pets",
  "christmas",
  "products",
  "halloween"
]

export const CarrouselCollection = () => {
  const { effects: { setListTitle } } = useContext(store)
  const [fontsLoaded] = useFonts({
    Kalam_400Regular
  })

  if (!fontsLoaded) return <></>

  const onNextPage = name => () => setListTitle(name)

  const renderCollections = ({ item }) => (
    <Link
      to={{ screen: 'PhotosList' }}
      onPress={onNextPage(item)}
    >
      <View>
        <Image
          source={{ uri: `https://maps-app1.s3.amazonaws.com/collections/${item}.jpg`}}
          style={styles.imgCollection}
          resizeMode="stretch"
        />
        <Text style={styles.titleCollection}>
          {item}
        </Text>
      </View>
    </Link>
  )

  return (
    <View>
      <FlatList
        horizontal
        data={listName}
        renderItem={renderCollections}
        keyExtractor={item => item}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={<View style={{ margin: 8}}/>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  imgCollection: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  titleCollection: {
    fontSize: 16,
    textTransform: 'capitalize',
    fontFamily: "Kalam_400Regular"
  }
})