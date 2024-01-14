import { Text, View, StyleSheet, TextInput, Pressable, Image} from 'react-native';

// You can import supported modules from npm

// or any files within the Snack

import { Button } from './Button';

export default function Register({navigation}) {
  return (
    <View style={styles.container}>
    <Text style={styles.txthello}>Hello !</Text>
    <Text style={styles.txtdefault}>Register untuk membuat akun</Text>
     <TextInput
        style={styles.input}
        value={"Username"}
      />
     <TextInput
        style={styles.input}
        value={"Email"}
      />
       <TextInput
        style={styles.input}
        value={"Password"}
      />
       <TextInput
        style={styles.input}
        value={"Address"}
      />
      <Button title="Register" onPress={()=>{navigation.navigate('Porto')}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 8,
  },
   txthello: {
  fontSize: 30,
  // fontWeight: 'bold',
  color: 'black',
  fontWeight: 600,
  textAlign: 'center',
  marginBottom : 5,
},
 txtdefault: {
  fontSize: 12,
  // fontWeight: 'bold',
  color: 'black',
  fontWeight: 600,
  textAlign: 'center',
  marginBottom : 20,
},
  input: {
    width: 280,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  btnregister: {
    width : 200,
    height:35,
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
    justifyContent:'center',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: 20,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#000'
  },
  txtbtnlog: {
  color: 'white',
  fontWeight: 600,
  
},

});