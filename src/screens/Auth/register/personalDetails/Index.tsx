import { View, Text, Pressable, TextInput, SafeAreaView, Platform } from 'react-native'
import React, { useState } from 'react';
import { KeyboardAvoidingView } from 'react-native'
import RNPickerSelect from "react-native-picker-select";
import { Ionicons } from '@expo/vector-icons';
import { styles, pickerOptions } from '../styles';
import { useFonts, Exo2_600SemiBold } from '@expo-google-fonts/exo-2';
import { useRouter } from 'expo-router';
import { AgentPage1 } from '../types';

const PersonalDetailsScreen = () => {
  const router = useRouter()

  const [formData, setFormData] = useState<AgentPage1>({
    firstname: '',
    middlename: '',
    lastname: '',
    gender: '',
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
    setFormData((prev) => ({
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
    if (formData.firstname === '') {
      setErrorType('firstname', 'First name is required');
    }
    else if (formData.lastname === '') {
      setErrorType('lastname', 'Last name is required');
    }
    else if (formData.gender === null || formData.gender === '') {
      setErrorType('gender', 'Gender is required');
    } else {
      setErrorType('', '')
      router.push(`/authDetailsPage?firstname=${formData.firstname}&middlename=${formData.middlename}&lastname=${formData.lastname}&gender=${formData.gender}`)
    }
    setTimeout(() => {
      setErrorType('', '')
    }, 1000)
    return
  };


  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.header}>
        <Text style={[styles.h1, { fontFamily: 'Exo2_600SemiBold' }]}>welcome</Text>
        <Text style={[styles.h2, { fontFamily: 'Exo2_600SemiBold' }]}>probhub real estate</Text>
      </View>

      <KeyboardAvoidingView
        style={{ width: '100%' }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === "ios" ? -100 : 0}>
        <Text style={styles.label}>First Name</Text>
        <TextInput
          value={formData.firstname}
          onChangeText={(text) => setData('firstname', text)}
          style={[styles.inputField, styles.margin]}
          inputMode='text'
          keyboardAppearance='dark'
        />
        {error.type == 'firstname' && <Text style={{ color: '#ffc107', marginTop: -10, marginBottom: 10 }}>{error.value}</Text>}
        <Text style={styles.label}>Middle Name</Text>
        <TextInput
          value={formData.middlename}
          onChangeText={(text) => setData('middlename', text)}
          style={[styles.inputField, styles.margin]}
          inputMode='text'
          keyboardAppearance='dark'
        />
        <Text style={styles.label}>Last Name</Text>
        <TextInput
          value={formData.lastname}
          onChangeText={(text) => setData('lastname', text)}
          style={[styles.inputField, { marginBottom: 40 }]}
          inputMode='text'
          keyboardAppearance='dark'
        />
        {error.type == 'lastname' && <Text style={{ color: '#ffc107', marginTop: -30, marginBottom: 10 }}>{error.value}</Text>}
        <RNPickerSelect
          placeholder={{ label: "Gender", value: null }}
          onValueChange={(value: any) => setData('gender', value)}
          items={[
            { label: "Male", value: "Male" },
            { label: "Female", value: "Female" }
          ]}
          style={pickerOptions}
          darkTheme={true}
          Icon={() => { return <Ionicons name="chevron-down" size={20} color="#fff" /> }}
        />
        {error.type == 'gender' && <Text style={{ color: '#ffc107', marginTop: -30, marginBottom: 10 }}>{error.value}</Text>}

        <Pressable style={styles.button} onPress={validateForm}>
          <Text style={styles.buttonValue}>Next</Text>
        </Pressable>

        <Pressable style={styles.signIn} onPress={() => router.push('/loginPage')}>
          <Text style={{ color: '#fff' }}>Already have an account? <Text style={{ color: '#5b7c99' }}>Sign In</Text></Text>
        </Pressable>
      </KeyboardAvoidingView>

    </SafeAreaView>
  )
}

export default PersonalDetailsScreen