import {
  FlatList,
  Image,
  ListRenderItem,
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
} from 'react-native';
import Text from '../components/Text';

const DetailInfoPokemonScreen = () => {
  return (
    <SafeAreaView style={{backgroundColor: '#2a282b', flex: 1}}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor="transparent" // Đặt màu nền của StatusBar thành trong suốt
        translucent={true}
      />
      <View>
        <Image
          source={require('../assets/image/br_pokedex.png')}
          style={{
            padding: 20,
            justifyContent: 'center',
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            backgroundColor: '#d43b46',
            height: 300,
            width: '100%',
          }}
        />
      </View>
    </SafeAreaView>
  );
};
export default DetailInfoPokemonScreen;
