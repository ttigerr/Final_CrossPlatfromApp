import React, { useEffect, useState } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, TextInput, FlatList, ScrollView, StatusBar} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function ItemLists (props) 
{
    // Initialise states
    const [ listData, setListData ] = useState()
    const [ validInput, setValidInput ] = useState(false)
    const [userInput, setUserInput] = useState()
    const [appData, setAppData] = useState(true)

  // check and define the length of the input 
  const onTextChange = (value) => {
    setUserInput(value)
    if(value.length >= 4)
    {
      setValidInput(true)
    }
    else
    {
      setValidInput(false)
    }
  }
    useEffect( () => {
        setListData( props.data )
    }, [props.data])

    const data = { time: new Date().getTime(), user: Math.random() * 100 }

    return (
        <View style={styles.container}>
            <View style={styles.inner}>
                <Text style={styles.text}>Your Plans</Text>
                <View style={styles.itemContainer}>
                    {/* <Image source={ require('./assets/fresh4.jpeg') } style={styles.image}/> */}
                    <TextInput 
                        style={styles.inputBar}
                        placeholder="Enter a task name" 
                        onChangeText={onTextChange}
                    />
                    <TouchableOpacity style={ styles.button } onPress={ () => { props.add('users', data ) }}>
                        <Text style={styles.textButton}>Create</Text>
                    </TouchableOpacity>
                </View>
                <FlatList  />
                <StatusBar style="auto" />
            </View>
        </View>
    );

}

 // Style of Home
const styles = StyleSheet.create ({
    container:{
        flex: 1,
        backgroundColor: 'white',
    },
    inner: {
        marginHorizontal: 20
    },
    text: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#D45964',
        marginTop: 30,

    },
    image: {
        marginTop: 30,
        height: 250,
        width: 380,
        alignItems: 'center',
    },
    itemContainer: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: "row",
        justifyContent: 'center',
        marginVertical: 20,
    },
    inputBar: {
        borderColor: '#DDDDDD',
        borderRadius: 10,
        borderWidth: 1,
        padding: 10,
        width: 250,
        marginRight: 20   
    },
    button: {
        backgroundColor: '#D45964',
        width: 100,
        padding: 10,
        borderRadius: 5,
        //margin: 30,
    },
    buttonDisabled: {
        backgroundColor: "lightgray",
        width: 100,
        padding: 10,
        borderRadius: 5,
        margin: 30,
    },
    textButton: {
        color: 'white',
        textAlign: 'center',
    },
    
})