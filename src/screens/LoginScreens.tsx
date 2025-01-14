import {
    ImageBackground,
    StyleSheet,
    Text,
    View,
    Image,
    Platform,
    TextInput,
  } from 'react-native';
  import AntDesign from 'react-native-vector-icons/AntDesign'; 
  import React from 'react';
  import {APP_Dimensions} from '../../constants/Dimensions';
  import {Colors} from '../../constants/Colors';
  import MyButton from '../../components/MyButton';
  import MyTextInput from '../../components/MyTextInput';
  import SocialMedia from '../../components/SocialMedia';
  
  const LoginScreens = () => {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../assets/background.png')}
          style={styles.bgImage}>
          <Image
            source={require('../assets/food/food.png')}
            style={styles.imageHeader}
          />
  
          <Text style={styles.title}>Fatmore</Text>
  
          <View style={styles.inputContainer}>
            <MyTextInput placeholder="E-mail" />
            <MyTextInput placeholder="Mot de passe" secureTextEntry />
  
            <Text style={styles.pasdeCompte}>
              Vous avez deja un compte ?{' '}
              <Text style={{color: 'blue'}}>Creez-en un !</Text>{' '}
            </Text>
  
            <MyButton title={'Login'} />
  
            <View style={styles.OuText}>
              <Text>Ou</Text>
              <AntDesign name="caretdown" size={30} color="black" />
            </View>
  
            <SocialMedia />
          </View>
        </ImageBackground>
      </View>
    );
  };
  
  export default LoginScreens;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    bgImage: {
      alignItems: 'center',
      height: APP_Dimensions.App_height,
      paddingHorizontal: 20,
    },
    imageHeader: {
      width: 100,
      height: 100,
      position: 'absolute',
      top: Platform.OS == 'android' ? 20 : 50,
      right: 20,
      resizeMode: 'contain',
    },
    titleWrappe: {
      flex: 1,
      marginTop: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 40,
      color: Colors.white,
      marginTop: Platform.OS == 'android' ? 100 : 110,
      fontFamily: 'Audiowide-Regular',
    },
    inputContainer: {
      width: '100%',
      backgroundColor: Colors.white,
      borderRadius: 20,
      height: 450,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 30,
      paddingHorizontal: 20,
    },
    pasdeCompte: {
      marginTop: 20,
      alignSelf: 'flex-end',
      marginRight: 10,
      fontSize: 12,
      color: 'black',
    },
    OuText: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 10,
      marginTop: 20,
    },
  });
  
