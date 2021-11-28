import React, { useEffect, useState } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function Login (props) 
{
    const navigation = useNavigation()
    return(

        <View style={styles.container}>
            <Image source={ require('../assets/fresh4.jpeg') } style={styles.backgroundImage}/>
            <View style={styles.inputView}>
                    <Text style={styles.welcomeTitle}>WELCOME TO FRESHMADE</Text>
                    <Text style={styles.title}>Email Address</Text>
                    <TextInput style={styles.textInput} />
                    <Text style={styles.title}>Password</Text>
                    <TextInput style={styles.textInput} />
                    <View style={styles.innerButtonView}>
                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Home")}>
                            <Text style={styles.buttonText}>Log In</Text>
                        </TouchableOpacity>
                        <Text>OR</Text>
                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Register")}>
                            <Text style={styles.buttonText}>Register</Text>
                        </TouchableOpacity>
                    </View>
            </View>
        </View>
    )
}

// Style of Log in

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: "center"
    
    },
    backgroundImage: {
        maxWidth: 400,
        maxHeight: 300,
        margin: 10
    },
    welcomeTitle: {
        fontWeight:"bold",
        fontSize:35,
        color:"black",
        textAlign: "center",
        marginBottom: 30

    },
    inputView: {
        maxWidth: 400,
        
    },
    innerButtonView: {
        alignItems: "center"
    },
    button: {
        marginVertical: 10,
        backgroundColor: "#f08f11",
        padding: 10,
        borderRadius: 10,
        width: 150
    },
    buttonText: {
        color: 'white',
        textAlign: "center"
    },
    textInput: {
        backgroundColor: '#f1f1f1',
        fontSize: 12,
        padding: 10,
        borderRadius: 4,
        marginVertical: 15,
        width: 250
    },
    title: {
        fontSize: 15,
        color:'black',
        //fontWeight:"bold",
    }
})