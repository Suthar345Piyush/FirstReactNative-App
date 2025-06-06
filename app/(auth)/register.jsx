import { StyleSheet  , Text} from 'react-native'
import { Link } from 'expo-router'


import ThemedView from '../../components/ThemedView';
import ThemedText from '../../components/ThemedText';
import ThemedButton from '../../components/ThemedButton';
import Spacer from '../../components/Spacer';
import { Colors } from '../../constants/Colors';


const register = () => {

  
   const handleSubmit = () => {
      console.log("Register form submitted");
   }


  return (

      <ThemedView style={styles.container}>
         <Spacer />


          <ThemedText title={true} style={styles.title}>
               Register a Account             
          </ThemedText>

          <ThemedButton onPress={handleSubmit}>
     <Text style={{ color: 'white'}}>Register</Text>
   </ThemedButton>



          <Spacer height={100} />
          <Link href="/">
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
     justifyContent : "center",
     alignItems : 'center'
   },

   title : {
      textAlign : "center",
      fontSize : 18,
      marginBottom : 30
   },

   pressed : {
       opacity : 0.0
   },

   btn : {
      backgroundColor : Colors.primary,
      padding : 15,
      borderRadius : 5
   }
});


