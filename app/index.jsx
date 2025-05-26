import { StyleSheet, Text, View  , Image} from 'react-native';
import Logo from '../assets/img/logo_light.png';
import React from 'react'

const Home = () => {
  return (
    <View style={styles.container}>
     <Image source={Logo} style={styles.img}/>
      <Text style={[styles.title , {color : 'orange'}]}>The Number 1</Text>


      <Text style={{marginBottom : 30 , marginTop : 10}}>Reading List App</Text>

      
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container : {
       flex : 1,
       alignItems : 'center',
       justifyContent : 'center'
    },

    title : {
       fontWeight : 'bold',
       fontSize : 18
    },

   

    img : {
       marginVertical : 20,
    }
})


