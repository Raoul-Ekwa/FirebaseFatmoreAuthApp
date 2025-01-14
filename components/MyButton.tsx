import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '../constants/Colors'


interface Props {
    title: string;
}
const MyButton : FC<Props>  = ({ title }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.titleText}>{title}</Text>
    </TouchableOpacity>
  )
}

export default MyButton

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#ff0036',
      borderRadius: 30,
      height: 50,
      width: "100%",
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
      marginTop: 20,

    },
    titleText: {
        fontFamily: "Redressed-Regular",
        color: Colors.white,
        fontSize: 16,
    },
  
})