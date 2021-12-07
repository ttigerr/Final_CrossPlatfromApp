import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

export function Logout( props ) {

  return(
    <TouchableOpacity onPress={() => props.handler()}>
      <Text style={styles.signoutText}>Log out</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  signoutText: {
    color: "black"
  },
})