import { useEffect } from 'react'
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native'
import { getFeedPhotos } from '../helpers/fetch'
import { usePhotos } from '../hooks/usePhotos'

import { ImgItem } from './ImgItem'

export const FeedPhotosList = () => {
  const {
    currentPage,
    photos,
    loading,
    loadPhotos,
    loadPhotosCollection
  } = usePhotos(getFeedPhotos)

  useEffect(() => {
    loadPhotosCollection()
  }, [currentPage])

  const renderPhotos = ({ item }) => {
    const {
      alt_description,
      urls: { regular },
      user: { name, location, profile_image: { small } }
    } = item

    return (
      <ImgItem
        profilePic={small}
        author={name}
        location={location}
        img={regular}
        desc={alt_description}
      />
    )
  }
  return (
    <View style={styles.listWrapper}>
      <FlatList
        data={photos}
        renderItem={renderPhotos}
        keyExtractor={(item, index) => index}
        ItemSeparatorComponent={<View style={{ margin: 8 }}/>}
        onEndReached={loadPhotos}
        onEndReachedThreshold={0}
        showsVerticalScrollIndicator={false}
      />
      {loading ? <ActivityIndicator size="large" color="#aaa" /> : null}
    </View>
  )
}

const styles = StyleSheet.create({
  listWrapper: {
    flex: 1
  }
})