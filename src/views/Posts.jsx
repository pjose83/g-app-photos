import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Collections } from '../components/Collections'
import { FeedPhotosList } from '../components/FeedPhotosList'

export const Posts = () => {
  return (
    <>
      <Collections />
      <FeedPhotosList />
    </>
  )
}

const styles = StyleSheet.create({})