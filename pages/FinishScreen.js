import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const FinishScreen = () => {
  return (
    <View style={styles.page}>
      <Image
        source={require('../src/assets/illust-finish-screen.png')}
        style={styles.image}
      />
      <Text style={styles.text}>
        Tunggu..... Paket Sedang Di Antar Menggunakan DRONE.
      </Text>
    </View>
  );
};

export default FinishScreen;

const styles = StyleSheet.create({
  page: {backgroundColor: '#FFEF78', height: '100%'},
  image: {width: 360, height: 360, marginTop: 50},
  text: {fontSize: 24, padding: 30, textAlign: 'center'},
});
