import { StyleSheet } from 'react-native'
import { Link } from 'expo-router'


import ThemedView from '../../components/ThemedView';
import ThemedText from '../../components/ThemedText';
import Spacer from '../../components/Spacer';


const register = () => {
  return (

      <ThemedView style={styles.container}>
         <Spacer />


          <ThemedText title={true} style={styles.title}>
               Register a Account             
          </ThemedText>


          <Spacer height={100} />
          <Link href="/login">
             <ThemedText style={{textAlign : "center"}}>
                Want to Login?
             </ThemedText>
          </Link>

          
      </ThemedView>
    
  )
}

export default register

const styles = StyleSheet.create({
   
   container : {
     flex : 1,
     justifyContent : "center"
   },

   title : {
      textAlign : "center",
      fontSize : 18,
      marginBottom : 30
   }
});


