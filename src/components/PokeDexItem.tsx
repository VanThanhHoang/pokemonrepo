import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Pokemon, PokemonResult} from '../types/interface';
import Text from '../components/Text';
import {memo, useEffect, useState} from 'react';
import getAxiosInstance from '../helper/AxiosInstance';
import LottieView from 'lottie-react-native';

type PokeDexItemProps = {
  pokemon: PokemonResult;
};
const PokeDexItem: React.FC<PokeDexItemProps> = ({pokemon}) => {
  const [detailPokemonInfo, setDetailPokemonInfo] = useState<Pokemon>();

  useEffect(() => {
    (async function getdata() {
      const res: Pokemon = await getAxiosInstance().get(
        'pokemon/' + pokemon.name,
      );
      setDetailPokemonInfo(res);
    })();
  }, []);
  return (
    <TouchableOpacity style={styles.container}>
      {detailPokemonInfo ? (
        <Image
          style={styles.image}
          source={{uri: detailPokemonInfo.sprites.front_default}}
        />
      ) : (
        <LottieView
          style={{width: 100, height: 100, margin: 5}}
          autoPlay
          loop
          source={require('../assets/animation/loading.json')}
        />
      )}
      <Text style={styles.name}>{pokemon.name}</Text>
      {detailPokemonInfo && (
        <Text style={styles.id}>{`#${detailPokemonInfo.id}`}</Text>
      )}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  nameContainer: {
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  container: {
    elevation: 3,
    alignItems: 'center',
    marginVertical: 10,
    padding: 10,
    height: 180,
    width: '48%',
    backgroundColor: '#cccccc',
    borderRadius: 15,
  },
  name: {
    fontSize: 18,
    marginVertical: 5,
    color: 'black',
  },
  id: {
    fontSize: 15,
    color: 'black',
  },
});
export default memo(PokeDexItem);
