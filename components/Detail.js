import React, {useEffect,useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
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
    return <Text>Loading...</Text>
  }
  else{
    return(
      <View>
        <Text>id: {data.id}</Text>
        <Text>name: {data.time}</Text>
        <Text>ingredient: {data.user}</Text>
      </View>
    )
  }
  
}