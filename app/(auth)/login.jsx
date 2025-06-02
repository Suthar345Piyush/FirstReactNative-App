import { StyleSheet , Pressable , Text} from 'react-native'
import { Link } from 'expo-router'


// use themed components  
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import Spacer from "../../components/Spacer";
import { Colors } from '../../constants/Colors';
import ThemedButton from '../../components/ThemedButton';


const Login = () => {

  const handleSubmit = () => {
     console.log("Login form submitted");
  }



  return (
      <ThemedView style={styles.container}>
      <Spacer />
    
    <ThemedText title={true} style={styles.title}>
       Login to Your Account
    </ThemedText>
 
   {/* <Pressable onPress={handleSubmit}  style={({pressed}) => [styles.btn , pressed && styles.pressed]}> 
     <Text style={{color : '#f2f2f2'}}>Login</Text>
   </Pressable> */}

   <ThemedButton onPress={handleSubmit}>
     <Text style={{ color: 'white'}}>Login</Text>
   </ThemedButton>



    <Spacer height={100}/>
    <Link href="/">
       <ThemedText style={{ textAlign : "center" }}>
          Want to Register?
       </ThemedText>
    </Link>
      </ThemedView>    
  )
};

export default Login

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

     btn : {
       backgroundColor : Colors.primary,
       padding : 15,
       borderRadius : 5,
     },

     pressed : {
       opacity : 0.8
     }
});



