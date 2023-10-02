import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import RegisterScreen2 from '../../src/screens/Auth/register/authDetails/Index';
import { useLocalSearchParams } from 'expo-router';
const AuthDetailsPage = () => {
  const { firstname, middlename, lastname, gender } = useLocalSearchParams();
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ImageBackground
        source={require('../../assets/register.jpg')}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.imageChild} />
        <View style={styles.circle} />
      </ImageBackground>

      <RegisterScreen2 data={{ firstname, middlename, lastname, gender }} />
    </View>
  );
};

export default AuthDetailsPage;


const styles = StyleSheet.create({
  image: {
    height: '100%',
    resizeMode: 'cover',
    width: '112%',
    position: 'absolute',
    top: 0,
    left: 0
  },
  imageChild: {
    backgroundColor: 'rgba(0,0,0,0.89)',
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
    width: '100%',
    justifyContent: 'flex-end'
  }
})