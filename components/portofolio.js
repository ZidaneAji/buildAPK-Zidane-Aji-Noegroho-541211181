import { Text,View, SafeAreaView, StyleSheet, Image, Button, Pressable } from 'react-native';

// You can import supported modules from npm

// or any files within the Snack
import {Project} from './project';
export default function Portofolio({navigation}) {
  return (
    <View style={styles.container}>
    <Image
        style={styles.avatar}
        source={require('../assets/ndasaji.jpg')}
        />
     <Text style={styles.title}>Zidane Aji Noegroho</Text>
     <Text style={styles.su}>Hallo, Perkenalkan saya Zidane Aji Noegroho dari SMK Telkom kelas XII RPL 5, saya lahir di cilacap 01 Januari 2006, dan saya berasal dari Purwokert, Dukuhwaluh, Perum GTSI Jl.Pandawa 2 No.73.
     </Text> 
 <Pressable style={styles.btncontact} onPress={() => {navigation.navigate('Login')}}>
  <Text  style={styles.txtcontact}>Contact</Text>
</Pressable>

 <Text style={styles.project}> Project Recent </Text> 
  <Project
  image={require('../assets/kalkulator.png')}
  title="Website Kalkulator"
  desc="ini adalah website"
  />
     </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#def1ed',
    justifyContent:"center",
  },
  title: {
    color: '#20232a',
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: '16%',
    marginBottom: 20,
  },
  su: {
    color: 'black',
    // fontWeight: 'bold',
    fontFamily:'poppins',
    fontSize: 10,
    marginBottom: 10,
  },
  avatar: {
    width: 100,
    height: 100,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 20,

  },
   btncontact: {
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
 txtcontact: {
  color: 'white',
  fontWeight: 600,
},
  project: {
    color: 'black',
    // fontWeight: 'bold',
    fontFamily:'poppins',
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: 18,
    marginBottom: 10,
    marginTop: 30
  },
});