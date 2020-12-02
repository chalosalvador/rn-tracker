/**
 * Created by chalosalvador on 2/12/20
 */
import React, { useEffect, useContext } from 'react';
import { Context as AuthContext } from '../context/AuthContext';
import { View, StyleSheet, Text } from 'react-native';

const ResolveAuthScreen = () => {
  const { tryLocalSignin } = useContext( AuthContext );

  useEffect( () => {
    tryLocalSignin();
  }, [] );

  return null;
};

export default ResolveAuthScreen;
