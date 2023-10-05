import { router } from 'expo-router';
import React, { useState } from 'react';
import { View, TextInput, Pressable, Text, SafeAreaView, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import styles from './styles';
import { FontAwesome } from '@expo/vector-icons';
import { LoginType } from './types';
import { useFonts, Exo2_600SemiBold } from '@expo-google-fonts/exo-2';
import { useAuth } from '../../../../context/AuthContext';
import Spinner from 'react-native-loading-spinner-overlay';

const LoginScreen = () => {
    const { login } = useAuth();
    const [formData, setFormData] = useState<LoginType>({
        email: '',
        password: '',
    })

    const [loading, setLoading] = useState<boolean>(false)

    let [fontsLoaded, fontError] = useFonts({
        Exo2_600SemiBold,
    });

    const setData = (type: string, text: string) => {
        setFormData((prev) => ({
            ...prev,
            [type]: text
        }));
    }
    const [error, setError] = useState({
        value: '',
        type: ''
    })

    const setErrorType = (type: string, value: string) => {
        setError({
            value: value,
            type: type
        });
    }

    const validateForm = async () => {
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)) {
            setErrorType('email', 'Please enter a valid email address');
        }
        else if (!/^.{7,}$/.test(formData.password)) {
            setErrorType('password', "Please enter a valid password");
        }
        else {
            setErrorType('', '')
            setLoading(true);
            try {
                const message = await login?.(formData)
                if (message?.message != 'Logged in successfully') {
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
        }, 1000)
        return
    };
    if (!fontsLoaded && !fontError) {
        return null;
    }

    return (
        <SafeAreaView style={styles.container}>
            <Spinner visible={loading} />
            <View style={styles.header}>
                <FontAwesome name="user-circle-o" size={Platform.OS == 'ios' ? 150 :150} color="#5b7c99" style={styles.icon} />
                <Text style={[styles.h1, { fontFamily: 'Exo2_600SemiBold' }]}>welcome back</Text>
            </View>
            <KeyboardAvoidingView
                style={{ width: '100%' }}
                behavior={'padding'}
                keyboardVerticalOffset={-100}
            >
                <Text style={styles.label}>Email Address</Text>
                <TextInput
                    value={formData.email}
                    onChangeText={(text) => setData('email', text)}
                    style={[styles.inputField, styles.margin]}
                    inputMode='email'
                    keyboardAppearance='dark'
                />
                {error.type == 'email' && <Text style={{ color: '#ffc107', marginTop: -10, marginBottom: 10 }}>{error.value}</Text>}
                <Text style={styles.label}>Password</Text>
                <TextInput
                    secureTextEntry={true}
                    value={formData.password}
                    onChangeText={(text) => setData('password', text)}
                    style={[styles.inputField, { marginBottom: 40 }]}
                    inputMode='text'
                    keyboardAppearance='dark'
                />
                {error.type == 'password' && <Text style={{ color: '#ffc107', marginTop: -30, marginBottom: 10 }}>{error.value}</Text>}
                <Pressable style={styles.button} onPress={validateForm}>
                    <Text style={styles.buttonValue}>Next</Text>
                </Pressable>

                <Pressable style={styles.signIn} onPress={() => router.back()}>
                    <Text style={{ color: '#fff' }}>Don't have an account? <Text style={{ color: '#5b7c99' }}>Sign Up</Text></Text>
                </Pressable>
            </KeyboardAvoidingView>

        </SafeAreaView>
    );
};

export default LoginScreen;
