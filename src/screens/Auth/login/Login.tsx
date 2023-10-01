import { router } from 'expo-router';
import React, { useState } from 'react';
import { View, TextInput, Pressable, Text, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native';
import styles from './styles';
import { FontAwesome } from '@expo/vector-icons';

const LoginScreen = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

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

    const validateForm = () => {
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)) {
            setErrorType('email', 'Please enter a valid email address');
        }
        else if (!/^.{7,}$/.test(formData.password)) {
            setErrorType('password', "Please enter a valid password");
        }
        else {
            setErrorType('', '')
            // Validate form
        }
        setTimeout(() => {
            setErrorType('', '')
        }, 1000)
        return
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <FontAwesome name="user-circle-o" size={150} color="#5b7c99" style={{ marginTop: 40, marginBottom: 40 }} />
                <Text style={[styles.h1, { fontFamily: 'Exo2_600SemiBold' }]}>welcome back</Text>
            </View>
            <KeyboardAvoidingView
                style={{ width: '100%' }}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={Platform.OS === "ios" ? -100 : 0}
            >
                <Text style={styles.label}>Email Address</Text>
                <TextInput
                    value={formData.email}
                    onChangeText={(text) => setData('email', text)}
                    style={[styles.inputField, styles.margin]}
                    inputMode='text'
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
