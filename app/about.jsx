import { StyleSheet, Text, View } from 'react-native'



const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>This is About Page</Text>


      <Link href="/" style={styles.link}>Back To Home</Link>

      <Link href="/contact" style={styles.link}>To contact page</Link>
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
  link : {
    marginVertical : 10,
    borderBottomWidth : 1
  }
})