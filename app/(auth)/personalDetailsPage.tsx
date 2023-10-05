import React from 'react';
import { StyleSheet, View, ImageBackground, Dimensions, KeyboardAvoidingView, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import RegisterScreen1 from '../../src/screens/Auth/register/personalDetails/Index';
const PersonalDetailspage = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ImageBackground
        source={require('../../assets/register.jpg')}
        style={styles.image}
      >
        <View style={styles.imageChild} />
        <View style={styles.circle} />
      </ImageBackground>
      <RegisterScreen1 />
      
    </View>
  );
};

export default PersonalDetailspage;


const styles = StyleSheet.create({
  image: {
    resizeMode: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
    width: "112%",
    height: Dimensions.get('window').height + 50,
  },
  imageChild: {
    backgroundColor: 'rgba(0,0,0,0.8)',
    flex: 1,
  },
  circle: {
    width: 200,
    height: 200,
    position: 'absolute',
    top: 40,
    right: -50,
    backgroundColor: 'transparent',
    borderRadius: 200 / 2,
    borderWidth: 20,
    borderColor: '#222'

  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.89)',
    alignItems: 'center',
    justifyContent: 'flex-end'
  }
})