/**
 * Created by chalosalvador on 27/11/20
 */
import React from 'react';
import { StyleSheet, Text } from 'react-native';

const TrackCreateScreen = () => {
  return (
    <>
      <Text style={ styles.headerStyle }>TrackCreateScreen</Text>
    </>
  );
};

const styles = StyleSheet.create( {
  headerStyle: {
    fontSize: 32
  }
} );

export default TrackCreateScreen;
