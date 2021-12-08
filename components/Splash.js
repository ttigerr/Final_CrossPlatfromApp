import React, { useEffect } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import Constants from 'expo-constants'
import { useNavigation } from '@react-navigation/native'

export function Splash(props) {
  const navigation = useNavigation()

  useEffect(() => {
    const timer = setTimeout(() => {
      props.authTest().then((response) => {
        navigation.reset({ index: 0, routes: [{ name: "Home" }] })
      })
        .catch((error) => {
          navigation.reset({ index: 0, routes: [{ name: "Register" }] })
        })
    }, 3000)
  }, [props.loadingText])

  return (
    <View style={styles.container}>
      <Text>{props.loadingText}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
    minHeight: 150,
  },
})