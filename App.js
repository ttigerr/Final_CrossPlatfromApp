import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Import components
import { Login } from './components/Login';
import { Register } from './components/Register';
import { BottomNavigation } from './BottomNavigation';
import { Logout } from './components/Logout';
import { Splash } from './components/Splash';

// Import firebase
import { firebaseConfig } from './Config';
import {initializeApp,} from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { initializeFirestore, getFirestore, setDoc, doc, addDoc, collection } from 'firebase/firestore'

// Initialize the stack
const Stack = createNativeStackNavigator()

// Initialize the firebase variable
const FBapp = initializeApp( firebaseConfig)
const FSdb = initializeFirestore(FBapp, {useFetchStreams: false})
const FBauth = getAuth()

export default function App() {

  // Initialize
  const[ auth, setAuth ] = useState()
  const[ user, setUser ] = useState()
  const [ data, setData ] = useState()
  const [registerError, setRegisterError ] = useState()
  const [loginError, setLoginError ] = useState()

  useEffect(() => {
    onAuthStateChanged( FBauth, (user) => {
      if( user ) { 
        setAuth(true) 
        setUser(user)
        console.log( 'authed')
        if( !data ) { getData() }
      }
      else {
        setAuth(false)
        setUser(null)
      }
    })
  })
  // Registration
  const RegisterHandler = ( email, password ) => {
    setRegisterError(null)
    createUserWithEmailAndPassword( FBauth, email, password )
    .then( ( userCredential ) => { 
      setUser(userCredential.user)
      setAuth( true )
    } )
    .catch( (error) => { setRegisterError(error.code) })
  }

  // Log in
  const LoginHandler = ( email, password ) => {
    signInWithEmailAndPassword( FBauth, email, password )
    .then( (userCredential) => {
      setUser(userCredential.user)
      setAuth(true)
    })
    .catch( (error) => { 
      const message = (error.code.includes('/') ) ? error.code.split('/')[1].replace(/-/g, ' ') : error.code
      setLoginError(message) 
    })
  }

  // const LogoutHandler = () => {
  //   signOut( FBauth ).then( () => {
  //     setAuth( false )
  //     setUser( null )
  //   })
  //   .catch( (error) => console.log(error.code) )
  // }

  // const getData = () => {
  //   const FSquery = query( collection( FSdb, `foods/${user.uid}/documents`) )
  //   const unsubscribe = onSnapshot( FSquery, ( querySnapshot ) => {
  //     let FSdata = []
  //     querySnapshot.forEach( (doc) => {
  //       let item = {}
  //       item = doc.data()
  //       item.id = doc.id
  //       FSdata.push( item )
  //     })
  //     setData( FSdata )
  //   })
  // }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} >
        <Stack.Screen name="Splash">
          { (props) => <Splash {...props} loadingText="Hello App" /> }
        </Stack.Screen>
        <Stack.Screen name="Login" options={{title: 'Log In'}}>
          { (props) => 
              <Login {...props} 
              handler={LoginHandler} 
              auth={auth} 
              error={loginError} 
          /> }
        </Stack.Screen>
        <Stack.Screen name="Register" options={{title: 'Registration'}}>
          { (props) => 
            <Register {...props} 
            handler={RegisterHandler} 
            auth={auth} 
            error={registerError} 
          /> }
        </Stack.Screen>
        <Stack.Screen name="Home" >
          { (props) => 
            <BottomNavigation {...props} 
            auth={auth}
          /> }
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
