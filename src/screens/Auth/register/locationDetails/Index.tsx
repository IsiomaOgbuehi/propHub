import { View, Text, Pressable, TextInput, SafeAreaView, Platform, Alert } from 'react-native'
import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import RNPickerSelect from "react-native-picker-select";
import { styles, pickerOptions } from '../styles';
import { useFonts, Exo2_600SemiBold } from '@expo-google-fonts/exo-2';
import { Ionicons } from '@expo/vector-icons';
import { NigeriaState, getNigeriaStates } from 'geo-ng';
import { AgentPage3, State } from '../types';
import { useAuth } from '../../../../../context/AuthContext';
import Spinner from 'react-native-loading-spinner-overlay';

const RegisterScreen3 = ({ data }: any) => {
  const { register } = useAuth()
  const [formData, setFormData] = useState<AgentPage3>({
    ...data,
    businessAddress: '',
    lga: '',
    state: '',
    agentType: null
  })
  const [states, setStates] = useState<State[]>([]);
  const [lga, setLgas] = useState<State[]>([]);
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState({
    value: '',
    type: ''
  })

  let [fontsLoaded, fontError] = useFonts({
    Exo2_600SemiBold,
  });

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

  const validateForm = async () => {
    if (formData.businessAddress == '') {
      setErrorType('businessAddress', 'Please enter a valid address');
    }
    else if (formData.state == '' || formData.state == null) {
      setErrorType('state', 'Please select a state');
    }
    else if (formData.lga == '' || formData.lga == null) {
      setErrorType('lga', "Please select a valid LGA");
    }

    else if (formData.agentType == null) {
      setErrorType('agentType', "Please select a valid agent type");
    }

    else {
      setErrorType('', '')
      setLoading(true);
      try {
        const message = await register?.(formData)
        if (message?.message != 'Agent registered successfully!') {
          Alert.alert(
            'Error',
            message?.message,
            [{ text: 'Cancel' }]
          )
        }
      } finally {
        setLoading(false);
      }
    }
    setTimeout(() => {
      setErrorType('', '')
    }, 2000)
    return
  };

  useEffect(() => {
    const stateArray = getNigeriaStates();
    const resultArray = stateArray.reduce(
      (accumulator: State[], currentValue: Omit<NigeriaState, "subs">) => {
        let value = currentValue.name
        return [
          ...accumulator,
          {
            label: `${value.charAt(0).toUpperCase()}${value.slice(1).toLowerCase()}`,
            value: `${value.charAt(0).toUpperCase()}${value.slice(1).toLowerCase()}`
          }
        ]
      },
      []
    );
    setStates(resultArray);

  }, []);

  useEffect(() => {
    if (formData.state != null || formData.state != undefined) {
      const stateArray = getNigeriaStates();
      let filteredState = stateArray.filter(state => state.name === formData.state.toUpperCase());
      let resultArray = filteredState[0]?.lgas.reduce((acc: State[], lga: string) => {
        let lgaStr = `${lga.charAt(0).toUpperCase()}${lga.slice(1).toLowerCase()}`
        return [
          ...acc,
          {
            label: lgaStr,
            value: lgaStr
          }
        ]
      }, [])
      setLgas(resultArray)
    }
  }, [formData.state])

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Spinner visible={loading} />

      <View style={styles.header}>
        <Text style={[styles.h1, { fontFamily: 'Exo2_600SemiBold' }]}>welcome</Text>
        <Text style={[styles.h2, { fontFamily: 'Exo2_600SemiBold' }]}>noxa real estate</Text>
      </View>

      <KeyboardAvoidingView
        style={{ width: '100%' }}
        behavior={'padding'}
        keyboardVerticalOffset={-100}>
        <Text style={styles.label}>Business Address</Text>
        <TextInput
          value={formData.businessAddress}
          onChangeText={(text) => setData('businessAddress', text)}
          style={[styles.inputField, { marginBottom: 40 }]}
          inputMode='text'
          keyboardAppearance='dark'
        />
        {error.type == 'businessAddress' && <Text style={{ color: '#ffc107', marginTop: -30, marginBottom: 10 }}>{error.value}</Text>}
        <RNPickerSelect
          placeholder={{ label: "State", value: null }}
          onValueChange={(value: any) => setData('state', value)}
          style={pickerOptions}
          items={states}
          useNativeAndroidPickerStyle={false}
          Icon={() => {
            return <Ionicons name="chevron-down" size={20} color="#fff" /> }}
          darkTheme={true}
        />
        {error.type == 'state' && <Text style={{ color: '#ffc107', marginTop: -30, marginBottom: 10 }}>{error.value}</Text>}
        <RNPickerSelect
          placeholder={{ label: "LGA", value: null }}
          onValueChange={(value: any) => setData('lga', value)}
          style={pickerOptions}
          items={lga || []}
          Icon={() => {
            return <Ionicons name="chevron-down" size={20} color="#fff" /> }}
          darkTheme={true}
          useNativeAndroidPickerStyle={false}
        />
        {error.type == 'lga' && <Text style={{ color: '#ffc107', marginTop: -30, marginBottom: 10 }}>{error.value}</Text>}
        <RNPickerSelect
          placeholder={{ label: "Agent type", value: '' }}
          onValueChange={(value: any) => setData('agentType', value)}
          style={pickerOptions}
          items={[
            { label: "Business", value: "business" },
            { label: "Artisan", value: "artisan" },
            { label: "Advertising", value: "advertising" }
          ]}
          useNativeAndroidPickerStyle={false}
          Icon={() => {
            return <Ionicons name="chevron-down" size={20} color="#fff" /> }}
          darkTheme={true}
        />
        {error.type == 'agentType' && <Text style={{ color: '#ffc107', marginTop: -30, marginBottom: 10 }}>{error.value}</Text>}

        <Pressable style={[styles.button, { marginBottom: 40 }]} onPress={validateForm}>
          <Text style={styles.buttonValue}>Submit</Text>
        </Pressable>
      </KeyboardAvoidingView>

    </SafeAreaView >
  )
}

export default RegisterScreen3