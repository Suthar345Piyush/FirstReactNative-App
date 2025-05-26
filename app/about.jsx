import { StyleSheet, Text, View } from 'react-native'



const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>This is About Page</Text>
    </View>
  )
}
 
export default About

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
})