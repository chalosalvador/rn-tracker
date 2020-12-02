/**
 * Created by chalosalvador on 27/11/20
 */
import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import AuthForm from '../components/AuthForm';
import { Context as AuthContext } from '../context/AuthContext';
import NavLink from '../components/NavLink';

const SigninScreen = () => {
  const { state, signin, clearErrorMessage } = useContext( AuthContext );

  return (
    <View style={ styles.container }>
      <NavigationEvents
        onWillBlur={ clearErrorMessage }
        onWillFocus={ clearErrorMessage }
        // onDidBlur={ () => {} }
        // onDidFocus={ () => {} }
      />
      <AuthForm
        headerText='Sign In for Tracker'
        submitButtonText='Sign In'
        onSubmit={ signin }
        errorMessage={ state.errorMessage }
      />

      <NavLink
        routeName='Signup'
        text="Don't have an account? Go back to sign up."
      />
    </View>
  );
};

SigninScreen.navigationOptions = {
  headerShown: false,
};


const styles = StyleSheet.create( {
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 200
  }
} );

export default SigninScreen;
