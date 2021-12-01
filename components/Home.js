import React, { useEffect, useState } from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



export function Home (props) 
{
    const navigation = useNavigation()
    return(

        <View style={styles.container}>
            <Text>Welcome to home screen</Text>
            {/* <TouchableOpacity onPress={ () => navigation.navigate('Logout') }>
                <Text style={styles.metaText}>Log out</Text>
            </TouchableOpacity> */}
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