import React, {useEffect,useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity , Image} from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';

export function Detail ( props ) {
  const [ data, setData ] = useState()

  const route = useRoute()
  const {id } = route.params

  useEffect( () => {
    if( !data ) {
      props.get( id )
      .then( (document) => setData(document) )
      .catch( (error) => console.log(error) )
    }
  })

  if( !data ) {
    return <Text style={{textAlign: 'center', alignItems: 'center'}}>Loading...</Text>
  }
  else{
    return(
      <View style={{flex: 1, alignItems: 'center'}}>
        <Text>id: {data.id}</Text>
        <Image>{data.image}</Image>
        <Text>name: {data.food}</Text>
        <Text>ingredient: {data.ingredient}</Text>
        <Text>carbo: {data.carbo}</Text>
        <Text>calories: {data.calories}</Text>
        <Text>energy: {data.energy}</Text>
        <Text>protein: {data.protein}</Text>
      </View>
    )
  }
  
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    
  });