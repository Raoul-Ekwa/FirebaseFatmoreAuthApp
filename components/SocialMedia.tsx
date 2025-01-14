import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { APP_Dimensions } from '../constants/Dimensions'

const SocialMedia = () => {
  return (
    <View style={styles.iconContainer}>
      <Image source={require("../src/assets/SocialMediaIcons/google.png")} style={styles.icon} resizeMode='contain'/>
      <Image source={require("../src/assets/SocialMediaIcons/facebook.png")} style={styles.icon} resizeMode='contain'/>
      <Image source={require("../src/assets/SocialMediaIcons/twitter.png")} style={[styles.icon, {height:80, width:80}]} resizeMode='contain'/>
    </View>
  )
}

export default SocialMedia

const styles = StyleSheet.create({
    iconContainer: {
      flexDirection: 'row',
      justifyContent:'space-evenly',
      alignItems:'center',
      gap: APP_Dimensions.App_gap,
      marginTop: 30,
      width: '100%',
    },
    icon: {
      width: 60,
      height: 60,
      resizeMode: 'stretch',
    }
  
})