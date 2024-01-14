import { Text, SafeAreaView, StyleSheet, TextInput, Pressable, Image, Button} from 'react-native';

// You can import supported modules from npm


// or any files within the Snack


const Input = (props) => {
  return (
     <TextInput
        style={styles.input}
        placeholder={props.placeholder}
      />
  )
}

export default Input;

const styles = StyleSheet.create({
  input: {
    width: 280,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    marginTop: '25',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
});