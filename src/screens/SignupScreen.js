/**
 * Created by chalosalvador on 27/11/20
 */
import React, { useContext, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { NavigationEvents } from 'react-navigation';

const SignupScreen = () => {
  const { state, signup, clearErrorMessage } = useContext( AuthContext );

  console.log( state );
  return (
    <View style={ styles.container }>
      <NavigationEvents
        onWillBlur={ clearErrorMessage }
        onWillFocus={ clearErrorMessage }
        // onDidBlur={ () => {} }
        // onDidFocus={ () => {} }
      />
      <AuthForm
        headerText='Sign up for tracker'
        errorMessage={ state.errorMessage }
        submitButtonText='Sign Up'
        onSubmit={ signup }
      />

      <NavLink
        routeName='Signin'
        text='Already have an account? Sign in instead.' />
    </View>
  );
};

SignupScreen.navigationOptions = {
  headerShown: false,
};

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 200
  }
} );

export default SignupScreen;
