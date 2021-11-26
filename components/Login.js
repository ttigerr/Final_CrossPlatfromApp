import React, { useEffect, useState } from 'react';
import {View, Text, StyleSheet, Button, ImageBackground} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function Login (props) 
{
    const navigation = useNavigation()
    return(

        <View style={styles.container}>
            <ImageBackground source={ require('../assets/fresh1.jpeg') } style={styles.backgroundImage}>
                <Text>Log In</Text>
                <Text>Don'tmhave account yet</Text>
                <Button title="Register" onPress={() => navigation.navigate("Register")}/>
            </ImageBackground>
        </View>
    )
}

// Style of Log in

const styles = StyleSheet.create ({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        justifyContent: "center", 
    }
})