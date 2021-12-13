import React, { useEffect, useState } from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Message } from './Message'; 

export function Register (props) 
{
    const[validEmail, setValidEmail ] = useState( false )
    const[validPassword,setValidPassword ] = useState( false )
    const[validForm,setValidForm] = useState(false)

    const[email,setEmail] = useState()
    const[password,setPassword] = useState()

    const navigation = useNavigation()

    // Validate email from user
    const validateEmail = ( emailVal ) => {
        if( emailVal.indexOf('@') > 0 ) {
          setValidEmail( true )
        }
        else {
          setValidEmail( false )
        }
        setEmail( emailVal )
    }
    
    // Validate password from user
    const validatePassword = ( passwordVal ) => {
        if( passwordVal.length >= 8 ) {
          setValidPassword( true )
        }
        else {
          setValidPassword( false )
        }
        setPassword( passwordVal )
    }
    
      const submitHandler = () => {
        props.handler( email, password )
      }

    useEffect( () => {
        if(validEmail && validPassword) {
         setValidForm( true )
       }
       else {
         setValidForm( false )
       }
    }, [validEmail, validPassword])
   
   useEffect( () => {
       if( props.auth === true ) {
         navigation.reset({ index: 0, routes: [ {name: 'Home'} ] })
       }
    }, [props.auth])
    
    return(
        
        <View style={styles.container} >
            <Image source={ require('../assets/fresh2.png') } style={styles.bannerImage}/>
            <KeyboardAvoidingView>
                <View style={styles.inputView}>
                    <Text style={styles.mainTitle}>Register</Text>
                    <Text style={styles.title}>Email Address</Text>
                    <TextInput style={styles.textInput} onChangeText={ (val) => validateEmail(val)} />
                    <Text style={styles.title}>Password</Text>
                    <TextInput style={styles.textInput} onChangeText={ (val) => validatePassword(val) } secureTextEntry={true}/>
                        <View style={styles.innerButtonView}>
                            <Message message={props.error} />
                            <TouchableOpacity 
                                style={ (validForm) ? styles.button : styles.disableButton} 
                                disabled={ (validForm) ? false : true }
                                onPress={ () => submitHandler() }
                            >
                                <Text style={styles.buttonText}>Register</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={ () => navigation.navigate("Login") }>
                                <Text style={styles.metaText}>Have an account? Log in here</Text>
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
        
        maxWidth: 400,
        maxHeight: 300,
        margin: 50
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
    disableButton: {
        marginVertical: 20,
        backgroundColor: "#b2b2b2",
        padding: 10,
        borderRadius: 10,
        width: 150
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
        marginBottom: 30

    },
    metaText: {
        textAlign:"center"
    }

})