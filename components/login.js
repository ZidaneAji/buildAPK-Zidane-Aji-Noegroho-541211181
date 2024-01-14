import { Text, View, StyleSheet, TextInput, Pressable, Image } from 'react-native';

// You can import supported modules from npm
import Input from './Input';
import { Button } from './Button';

// or any files within the Snack


export default function Login({navigation}) {
  return (
    <View style={styles.container}>
    <Image
        style={styles.avatar}
        source={require('../assets/132skz.jpg')}
        />
    <Text style={styles.txthello} >Welcome !</Text>
    <Text style={styles.txtdefault}>Login untuk melanjutkan</Text>
    <Input placeholder="Username" />
    <Input placeholder="Password"/>
    <Button  title="Login" onPress={()=>{navigation.navigate('Porto')}}/>
    <Text  style={styles.txtbtnreg} onPress={() => {navigation.navigate('Register')}}>Register</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#def1ed',
    padding: 8,
  },
   txthello: {
  fontSize: 25,
  // fontWeight: 'bold',
  color: 'black',
  fontWeight: 600,
  marginLeft: 30,
  marginBottom : 5,
},
 txtdefault: {
  fontSize: 12,
  // fontWeight: 'bold',
  color: 'black',
  fontWeight: 600,
  marginLeft: 30,
  marginBottom : 20,
},
avatar: {
    width: 150,
    height: 150,
    marginLeft: '15%',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginBottom: 30,
    borderRadius: 20,
    },
  txtbtnreg: {
  color: 'black',
  fontWeight: 600,
  marginTop: 10,
  textAlign: 'center'
},

});