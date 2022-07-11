import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, StatusBar} from 'react-native';
import Coquinha from './assets/coquinha.png'
import { Button } from 'react-native-paper';
import { api } from './src/service/api';

export default function App() {
  const [sortudo, setSortudo] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  function handleSearchName() {
    setIsLoading(true)
    api.get('sortudo').then(response => {
      setSortudo(response.data.sortudo)
      setIsLoading(false)
    })
  }


  return (
    <View style={{flex: 1}}>
      <StatusBar translucent />
      <View style={styles.corVermelha}>
        <Image source={Coquinha} style={styles.imgCoq}/>
        <Text style={styles.text}>Qual a coquinha da vez?</Text>

      <Text style={styles.textSort}>
        {sortudo}
      </Text>
      </View>

      <Button 
        color='#000000' 
        mode="contained" 
        onPress={handleSearchName} 
        style={styles.but}
        loading={isLoading}
        labelStyle={{fontSize: 25, padding: 15}}
        >
          Sortear
      </Button>

    </View>
  );
}

const styles = StyleSheet.create({
  corVermelha: {
    flex: 1,
    backgroundColor: '#d51909',
    width: "100%",
    maxHeight: "60%"
  },
  imgCoq: {
    width: 305,
    height: 100,
    marginTop: 100,
    alignSelf: 'center',
  },
  text:{
    fontSize: 35,
    textAlign: 'center',
     marginTop: 30,
     color: '#fff'
  },
  but: {
    marginTop: 50, 
    height: 80,
    width: 250,
    alignSelf:'center',
    borderRadius: 20
  },
  textSort:{
    fontSize: 45,
    textAlign: 'center',
     marginTop: 70,
     color: '#fff'
  }
});
