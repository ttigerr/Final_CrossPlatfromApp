import React, { useEffect, useState } from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function Register (props) 
{
    const navigation = useNavigation()
    return(
        
        <View style={styles.container} >
            <Image source={ require('../assets/fresh2.png') } style={styles.bannerImage}/>
            <KeyboardAvoidingView>
                <View style={styles.inputView}>
                    <Text style={styles.mainTitle}>Register</Text>
                    <Text style={styles.title}>Email Address</Text>
                    <TextInput style={styles.textInput} />
                    <Text style={styles.title}>Password</Text>
                    <TextInput style={styles.textInput} />
                        <View style={styles.innerButtonView}>
                            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Home")}>
                                <Text style={styles.buttonText}>Log In</Text>
                            </TouchableOpacity>
                        </View>
                </View>
            </KeyboardAvoidingView>
        </View>
    )
}

// Style of Register

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: "center"
    },
    bannerImage: {
        flex: 1,
        maxWidth: 400,
        maxHeight: 300
    },
    inputView: {
        maxWidth: 400,
        
    },
    innerButtonView: {
        alignItems: "center"
    },
    button: {
        marginVertical: 20,
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
    },
    mainTitle: {
        fontWeight:"bold",
        fontSize:35,
        color:"black",
        textAlign: "center",
        margin: 30

    },

})