import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, TouchableWithoutFeedback, Switch } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Colors } from '@/constants/Colors';
import { Link } from 'expo-router';
;

export default function SignUp() {

  const LoginSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    phoneNumber: Yup.string().required('Phone number is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(6, 'Password too short').required('Password is required'),
  });

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);


  return (
    <View style={styles.container}>
        <View style={styles.textContainer}>
            <Text style={styles.title}>Create an Account</Text>
            <Text style={styles.heading}>Join us!</Text>
        </View>
      <Formik
        initialValues={{firstName: '', lastName: '', phoneNumber: '', email: '', password: ''}}
        validationSchema={LoginSchema}
        onSubmit={(values: any) => {
          // Handle form submission
          console.log(values);
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View style={styles.loginContainer}>
            <TextInput
              style={styles.input}
              placeholder="First name"
              placeholderTextColor="#CCCCCC"
              onChangeText={handleChange('firstName')}
              onBlur={handleBlur('firstName')}
              value={values.firstName}
              autoCapitalize="none"
            />
            {touched.firstName && errors.firstName && typeof errors.firstName === 'string' && (
                <Text style={styles.error}>{errors.firstName}</Text>
            )}
            <TextInput
              style={styles.input}
              placeholder="Last name"
              placeholderTextColor="#CCCCCC"
              onChangeText={handleChange('lastName')}
              onBlur={handleBlur('lastName')}
              value={values.lastName}
              autoCapitalize="none"
            />
            {touched.lastName && errors.lastName && typeof errors.lastName === 'string' && (
                <Text style={styles.error}>{errors.lastName}</Text>
            )}
            <TextInput
              style={styles.input}
              placeholder="Phone Number"
              placeholderTextColor="#CCCCCC"
              onChangeText={handleChange('phoneNumber')}
              onBlur={handleBlur('phoneNumber')}
              value={values.phoneNumber}
              autoCapitalize="none"
            />
            {touched.phoneNumber && errors.phoneNumber && typeof errors.phoneNumber === 'string' && (
                <Text style={styles.error}>{errors.phoneNumber}</Text>
            )}
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
            <TouchableWithoutFeedback onPress={handleSubmit as any} >
                <View style={styles.buttonContainer}>
                    <Text style={{fontSize: 16, color: Colors.light, fontWeight: "700"}}>SIGN UP</Text>
                </View>
            </TouchableWithoutFeedback>
            <View style={{display: "flex", flexDirection: "row", gap: 2, justifyContent:"center", marginTop: 15}}>
                <Text style={{color: Colors.light}} >Already have an account?</Text>
                <Link style={{color: Colors.light, textDecorationLine:"underline"}} href="/login">Login</Link>
            </View>
            <View style={{display: "flex", flexDirection: "row", gap: 2, justifyContent:"center", marginTop: 15}}>
                <Text style={{color: Colors.light, textAlign:"center"}} >By continuing you agree to Terms & Conditions and Privacy Policy</Text>
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
    color: Colors.light, 
    width: "50%",
    fontWeight: 'bold',
  },
  heading: {
    fontSize: 22,
    fontWeight: 'semibold',
    color: Colors.light
  },
  loginContainer: {
    display: 'flex',
    backgroundColor: "#0F1123",
    padding: 20,
    borderRadius: 20
  },
  input: {
    backgroundColor: "#0F1123", 
    color: Colors.light,
    borderBottomWidth: 0.5,  
    borderBottomColor: Colors.light,  
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
