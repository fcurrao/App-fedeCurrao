import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TextInput, Button} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>My ecomerce</Text>
      <TextInput
        editable 
        numberOfLines={4}
        maxLength={40}  
        
        style={{paddingHorizontal: 100,backgroundColor: 'gray'}}
      />
      <Button title="agregar">Agregar</Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
