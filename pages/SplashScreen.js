import React, {useEffect} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 2000);
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selamat Datang Mahasiswa Baru</Text>
      <Image
        source={require('../src/assets/illustrasi-image-splash-screen.png')}
        style={styles.image}
      />
      <View style={styles.logoWrap}>
        <Image
          source={require('../src/assets/logo-zee.png')}
          style={styles.logoZee}
        />
        <Image
          source={require('../src/assets/logo-fitbar.png')}
          style={styles.logoFitbar}
        />
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {height: '100%', backgroundColor: '#74B9FF'},
  title: {color: 'white', textAlign: 'center', padding: 15, fontSize: 28},
  image: {width: 360, height: 360},
  logoWrap: {flexDirection: 'row', justifyContent: 'space-around', padding: 15},
  logoZee: {width: 112, height: 60},
  logoFitbar: {width: 128, height: 69},
});
