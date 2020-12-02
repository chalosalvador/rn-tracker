/**
 * Created by chalosalvador on 27/11/20
 */
import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const TrackListScreen = ( { navigation } ) => {
  return (
    <View>
      <Text>TrackListScreen</Text>
      <Button title='Go to track detail'
              onPress={ () => navigation.navigate( 'TrackDetail' ) }
      />
    </View>
  );
};

const styles = StyleSheet.create( {} );

export default TrackListScreen;
