import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
  Button,
  Alert,
  TouchableOpacity,
} from 'react-native';

const Home = ({onPress, navigation}) => {
  const [value, setValue] = useState(1);

  const onCount = type => {
    if (type === 'plus') {
      setValue(value + 1);
    }
    if (type === 'minus') {
      if (value > 1) {
        setValue(value - 1);
      }
    }
  };

  const [values, setValues] = useState(1);

  const onCounts = type => {
    if (type === 'plus') {
      setValues(values + 1);
    }
    if (type === 'minus') {
      if (values > 1) {
        setValues(values - 1);
      }
    }
  };
  return (
    <ScrollView>
      <View>
        <Image
          source={require('../src/assets/Header.png')}
          style={styles.header}
        />
        <View style={styles.content}>
          <Image
            source={require('../src/assets/Image-Profile.png')}
            style={styles.imageProfile}
          />
          <Text style={styles.name}>FAUZI SHURENDRA</Text>
          <Text style={styles.location}>Bandung</Text>
          <View>
            <Text style={styles.productSponsor}>Product Sponsor</Text>
            <View style={styles.containerProduct}>
              <View style={styles.productWrapper}>
                <Image
                  source={require('../src/assets/susu-zee.png')}
                  style={styles.susuZee}
                />
                <Text style={styles.productName}>Zee Susu Bubuk</Text>
                <Text style={styles.productVariant}>Variant Coklat</Text>
                <View style={styles.quantity}>
                  <TouchableOpacity onPress={() => onCounts('minus')}>
                    <Image
                      source={require('../src/assets/btn_min.png')}
                      style={styles.btnMinAdd}
                    />
                  </TouchableOpacity>

                  <Text style={styles.quantityText}>{values}</Text>

                  <TouchableOpacity onPress={() => onCounts('plus')}>
                    <Image
                      source={require('../src/assets/btn_add.png')}
                      style={styles.btnMinAdd}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.productWrapper}>
                <Image
                  source={require('../src/assets/fitbar.png')}
                  style={styles.fitbar}
                />
                <Text style={styles.productNameFitbar}>Fitbar</Text>
                <Text style={styles.productVariantFitbar}>Variant Coklat</Text>
                <View style={styles.quantityFitbar}>
                  <TouchableOpacity onPress={() => onCount('minus')}>
                    <Image
                      source={require('../src/assets/btn_min.png')}
                      style={styles.btnMinAdd}
                    />
                  </TouchableOpacity>

                  <Text style={styles.quantityText}>{value}</Text>

                  <TouchableOpacity onPress={() => onCount('plus')}>
                    <Image
                      source={require('../src/assets/btn_add.png')}
                      style={styles.btnMinAdd}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <TouchableOpacity onPress={onPress}>
              <View style={styles.button}>
                <Button
                  title="Kirim Mang"
                  color="#22577A"
                  onPress={() => navigation.navigate('FinishScreen')}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  header: {width: 364, height: 204},
  content: {
    height: '100%',
    backgroundColor: '#3DB2FF',
    marginTop: -25,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  imageProfile: {width: 75, height: 86, marginHorizontal: 143, marginTop: -20},
  name: {fontSize: 24, textAlign: 'center', fontWeight: 'bold', color: 'white'},
  location: {fontSize: 12, textAlign: 'center', color: 'white'},
  productSponsor: {
    fontSize: 14,
    color: 'white',
    paddingVertical: 20,
    marginLeft: 15,
  },
  containerProduct: {flexDirection: 'row'},
  productWrapper: {
    backgroundColor: 'white',
    width: 151,
    height: 215,
    borderRadius: 15,
    marginLeft: 15,
  },
  susuZee: {width: 83, height: 105, marginHorizontal: 34, marginTop: 14},
  fitbar: {width: 143, height: 57, marginTop: 52, marginHorizontal: 4},
  productName: {textAlign: 'center', marginTop: 15},
  productNameFitbar: {textAlign: 'center', marginTop: 25},
  productVariant: {textAlign: 'center', fontSize: 10},
  productVariantFitbar: {textAlign: 'center', fontSize: 10},
  quantity: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  quantityFitbar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  btnMinAdd: {width: 26, height: 26},
  quantityText: {paddingHorizontal: 7},
  button: {padding: 40},
});
