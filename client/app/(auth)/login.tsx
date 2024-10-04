import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, TouchableWithoutFeedback, Switch } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Colors } from '@/constants/Colors';
import { Link } from 'expo-router';
import { router } from 'expo-router';
;

export default function Login() {

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(6, 'Password too short').required('Password is required'),
  });

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);


  return (
    <View style={styles.container}>
        <View style={styles.textContainer}>
            <Text style={styles.title}>Welcome Back</Text>
            <Text style={styles.heading}>Sign in to continue</Text>
        </View>
      <Formik
        initialValues={{ email: '', password: ''}}
        // validationSchema={LoginSchema}
        onSubmit={(values: any) => {
          // Handle form submission
          console.log(values);
          router.push("(tabs)")
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View style={styles.loginContainer}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#CCCCCC"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            {touched.email && errors.email && typeof errors.email === 'string' && (
                <Text style={styles.error}>{errors.email}</Text>
            )}
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#CCCCCC"
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              secureTextEntry
            />
            {touched.password && errors.password && typeof errors.password === 'string' && (
                <Text style={styles.error}>{errors.password}</Text>
            )}
            <View style={{display: "flex", flexDirection: "row", alignItems:"center",justifyContent:"space-between"}}>
                <View style={{display: "flex", flexDirection: "row", alignItems:"center", justifyContent:"center", gap: 1}}>
                    <Switch
                        trackColor={{false: '#FF6000', true: '#FF6000'}}
                        thumbColor={isEnabled ? '#ffffff' : '#373640'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                    <Text style={{color: Colors.white}}>Remember me</Text>
                </View>
                <Link style={{color: Colors.white, textDecorationLine:"underline"}} href="/">forgot password?</Link>
            </View>
            <TouchableWithoutFeedback onPress={handleSubmit as any} >
                <View style={styles.buttonContainer}>
                    <Text style={{fontSize: 16, color: Colors.white, fontWeight: "700"}}>SIGN IN</Text>
                </View>
            </TouchableWithoutFeedback>
            <View style={{display: "flex", flexDirection: "row", gap: 2, justifyContent:"center", marginTop: 15}}>
                <Text style={{color: Colors.white}} >Don't have an account?</Text>
                <Link style={{color: Colors.white, textDecorationLine:"underline"}} href="/signup">Sign Up</Link>
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
}

// Styles for the login screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#373640',
    justifyContent: 'center',
    padding: 20,
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    textAlign: 'center',
    marginBottom: 60,
  },
  title: {
    fontSize: 50,
    color: Colors.white, 
    width: "50%",
    fontWeight: 'bold',
  },
  heading: {
    fontSize: 22,
    fontWeight: 'semibold',
    color: Colors.white
  },
  loginContainer: {
    display: 'flex',
    backgroundColor: "#0F1123",
    padding: 20,
    borderRadius: 20
  },
  input: {
    backgroundColor: "#0F1123", 
    color: Colors.white,
    borderBottomWidth: 0.5,  
    borderBottomColor: Colors.white,  
    borderRadius: 0,  
    paddingHorizontal: 10,
    paddingBottom: 3,
    marginBottom: 15,
  },
  error: {
    color: 'orange',
    marginBottom: 10,
    fontSize: 14,
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    marginTop: 20,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor:"#FF6000"
  },
});
