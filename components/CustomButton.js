import { Text, SafeAreaView, StyleSheet, TextInput, Pressable, Image,Button, View, TouchableOpacity} from 'react-native';

// You can import supported modules from npm


// or any files within the Snack
import AssetExample from '../components/AssetExample';

export default function Login(props, navigation) {
  return (
    <SafeAreaView style={styles.container}>
     <View style={styles.btnlogin}><Button title={props.title} color="black" onPress={() => {navigation.navigate('Porto')}}/></View>
      <View>
      <TouchableOpacity style={[styles.btnlogin, { marginTop: 20 }]} onPress={onPress}>
      <Text style={styles.loginButtonText}>{title}</Text>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
  btnlogin: {
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
    backgroundColor: 'black'
  },

});