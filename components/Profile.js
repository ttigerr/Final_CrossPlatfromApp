import React, { useEffect, useState } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function Profile (props) 
{
    const navigation = useNavigation()
    // useEffect( () => {
    //     if(!props.auth) {
    //      navigation.reset({ index: 0, routes: [ {name: ''} ] })
    //     }
    //     console.log( props.user )
    //    }, [props.auth])
    return(

        <View style={styles.container}>
            
        </View>
    )

}

// Style of Home
const styles = StyleSheet.create ({
    container:{
        flex: 1,
        backgroundColor: 'white',
    },
    metaText: {
        textAlign: 'center'
    }
})