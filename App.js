import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Import components
import { Login } from './components/Login';
import { Register } from './components/Register';
import { BottomNavigation } from './components/BottomNavigation';
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
    const unsubscribe = onAuthStateChanged( FBauth, (user) => {
      if( user ) { 
        setAuth(true) 
        setUser(user)
        if( !data ) { getData() }
      }
      else {
        setAuth(false)
        setUser(null)
      }
    })
    unsubscribe()
  })
  // get user's auth status
  const getAuthStatus = () => {
    return new Promise( ( resolve, reject ) => {
      if( FBauth.currentUser ) {
        resolve( true )
      }
      else {
        reject( false )
      }
    })
  }

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

  const LogoutHandler = () => {
    signOut( FBauth ).then( () => {
      setAuth( false )
      setUser( null )
    })
    .catch( (error) => console.log(error.code) )
  }

  const getData = () => {
    const FSquery = query( collection( FSdb, `foods`) )
    const unsubscribe = onSnapshot( FSquery, ( querySnapshot ) => {
      let FSdata = []
      querySnapshot.forEach( (doc) => {
        let item = {}
        item = doc.data()
        item.id = doc.id
        FSdata.push( item )
      })
      setData( FSdata )
    })
  }

  const getDetail = ( FScollection, id ) => {
    const ref = doc( FSdb, FScollection, id )

  }

  const addDocument = async ( FScollection , data ) => {
    // adding data to a collection with automatic id
    const ref = await addDoc( collection( FSdb, FScollection) , data )
    // log the id of the new document
    //console.log( ref.id )
    //return ref
  }

  const setDocument = async ( FScollection, id, data ) => {
    // adding a document with the id set manually
    const ref = doc( FSdb, FScollection, id )
    await setDoc( ref, data )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Splash" >
        <Stack.Screen name="Splash" options={{ headerShown: false }}>
          { (props) => <Splash {...props} loadingText="Hello App" auth={auth} authTest={getAuthStatus} /> }
        </Stack.Screen>
        <Stack.Screen name="Login" options={{title:'Log In'}}>
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
          { 
          (props) => 
            <BottomNavigation {...props} 
              auth={auth}
              data={data}
              logout={<Logout handler={LogoutHandler} />}
            /> 
          }
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
