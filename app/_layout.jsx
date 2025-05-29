import { StyleSheet,   useColorScheme } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router';
import { Colors } from "../constants/Colors";
import { StatusBar } from 'react-native';

const RootLayout = () => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <>
     <StatusBar style = "auto"/>
    <Stack screenOptions={{
       headerStyle : { backgroundColor : theme.navBackground},
       headerTintColor : theme.title,
    }}>


  // to remove the (auth) from heading

      <Stack.Screen name= "(auth)" options={{headerShown : false}}/>

      <Stack.Screen name="index" options={{ title : 'Home'}}/>
    </Stack> 
  </>
  )
}

export default RootLayout;

  
const styles = StyleSheet.create({})