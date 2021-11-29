import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Import components
import { Login } from './components/Login';
import { Register } from './components/Register';
import { BottomNavigation } from './BottomNavigation';

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
  
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="welcome" component={Login}/>
        <Stack.Screen name="Register" component={Register}/>
        <Stack.Screen 
          name="Home" 
          component={BottomNavigation}
          options={{headerShown: false}}/>
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
  tabNavigator: {
    backgroundColor: 'black',
    borderTopWidth: 0,
  }
});
