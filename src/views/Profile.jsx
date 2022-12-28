import { useContext } from 'react';
import { StyleSheet, View, FlatList } from 'react-native'
import { HeaderProfile, MyPhotoItem } from '../components';
import { StyledText } from '../theme';
import { store } from '../context/store';
import { Modal } from './Modal';
import { useIsFocused } from '@react-navigation/native';

export const Profile = () => {
  const { galleryImg, isModalVisible } = useContext(store)
  const isFocused = useIsFocused()

  const renderItems = ({ item }) => {
    const { desc, image } = item
    return <MyPhotoItem description={desc} img={image} />
  }

  return (
    <View style={styles.profileContainer}>
      <HeaderProfile />
      <FlatList
        ListHeaderComponent={
          <StyledText
            juaRegular
            big
            center
            extraStyles={{ marginTop: 20 }}
          >
            My Photos
          </StyledText>
        }
        data={galleryImg}
        renderItem={renderItems}
        keyExtractor={item => item.image}
      />
      {(isFocused && isModalVisible) && <Modal message="New description" />}
    </View>
  )
}

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1
  }
})