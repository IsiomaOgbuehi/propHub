import { View, Text, Pressable, TextInput, SafeAreaView, Platform } from 'react-native'
import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView } from 'react-native'
import { styles } from '../styles';
import { useFonts, Exo2_600SemiBold } from '@expo-google-fonts/exo-2';
import { router } from 'expo-router';
import { AgentPage2 } from '../types';
const AuthDetailsScreen = ({ data }: any) => {

  const [formData, setFormData] = useState<AgentPage2>({
    ...data,
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  })

  const [error, setError] = useState({
    value: '',
    type: ''
  })

  let [fontsLoaded, fontError] = useFonts({
    Exo2_600SemiBold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const setData = (type: string, text: string) => {
    setFormData((prev: any) => ({
      ...prev,
      [type]: text
    }));
  }

  const setErrorType = (type: string, value: string) => {
    setError({
      value: value,
      type: type
    });
  }

  const validateForm = () => {
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)) {
      setErrorType('email', 'Please enter a valid email address');
    }
    else if (!/^\d{11}$/.test(formData.phone)) {
      setErrorType('phone', 'Please enter a valid phone number');
    }
    else if (!/^.{7,}$/.test(formData.password)) {
      setErrorType('password', "Password should have at least 7 characters.");
    }

    else if (formData.password !== formData.confirmPassword) {
      setErrorType('confirmPassword', 'Passwords must match');
    } else {
      setErrorType('', '')
      router.push(`/locationDetailsPage?firstname=${formData.firstname}&middlename=${formData.middlename}&lastname=${formData.lastname}&gender=${formData.gender}&email=${formData.email}&phone=${formData.phone}&password=${formData.password}&confirmPassword=${formData.confirmPassword}`)
    }
    setTimeout(() => {
      setErrorType('', '')
    }, 1000)
    return
  };


  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.headerPage2}>
        <Text style={[styles.h1, { fontFamily: 'Exo2_600SemiBold' }]}>welcome</Text>
        <Text style={[styles.h2, { fontFamily: 'Exo2_600SemiBold' }]}>probhub real estate</Text>
      </View>

      <KeyboardAvoidingView
        style={{ width: '100%' }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === "ios" ? -100 : 0}>
        <Text style={styles.label}>Email Address</Text>
        <TextInput
          value={formData.email}
          onChangeText={(text) => setData('email', text)}
          style={[styles.inputField, styles.margin]}
          inputMode='email'
          keyboardAppearance='dark'
          keyboardType='email-address'
        />
        {error.type == 'email' && <Text style={{ color: '#ffc107', marginTop: -10, marginBottom: 10 }}>{error.value}</Text>}

        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          value={formData.phone}
          onChangeText={(text) => setData('phone', text)}
          style={[styles.inputField, styles.margin]}
          inputMode='tel'
          keyboardAppearance='dark'
        />
        {error.type == 'phone' && <Text style={{ color: '#ffc107', marginTop: -10, marginBottom: 10 }}>{error.value}</Text>}

        <Text style={styles.label}>Password</Text>
        <TextInput
          secureTextEntry={true}
          value={formData.password}
          onChangeText={(text) => setData('password', text)}
          style={[styles.inputField, styles.margin]}
          inputMode='text'
          keyboardAppearance='dark'
        />
        {error.type == 'password' && <Text style={{ color: '#ffc107', marginTop: -10, marginBottom: 10 }}>{error.value}</Text>}

        <Text style={styles.label}>Confirm password</Text>
        <TextInput
          secureTextEntry={true}
          value={formData.confirmPassword}
          onChangeText={(text) => setData('confirmPassword', text)}
          style={[styles.inputField, { marginBottom: 50 }]}
          inputMode='text'
          keyboardAppearance='dark'
        />

        {error.type == 'confirmPassword' && <Text style={{ color: '#ffc107', marginTop: -30, marginBottom: 10 }}>{error.value}</Text>}
        <Pressable style={[styles.button, { marginBottom: 40 }]} onPress={validateForm}>
          <Text style={styles.buttonValue}>Next</Text>
        </Pressable>
      </KeyboardAvoidingView>

    </SafeAreaView>
  )
}

export default AuthDetailsScreen