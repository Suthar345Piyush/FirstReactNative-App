import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'

const Contact = () => {
  return (
    <View>
      <Text>Contact Page</Text>

       <Link href="/about">To about page</Link>

       <Link href="/">To home page</Link>
    </View>
  )
}

export default Contact

const styles = StyleSheet.create({})