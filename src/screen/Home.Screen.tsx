import {
  FlatList,
  ListRenderItem,
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
} from 'react-native';
import {ScreenContainerStyle} from '../styles/general.style';
import {useEffect, useState} from 'react';
import getAxiosInstance from '../helper/AxiosInstance';
import {Pokemon, PokemonListResponse, PokemonResult} from '../types/interface';
import Text from '../components/Text';
import PokeDexItem from '../components/PokeDexItem';

const HomeScreen = () => {
  const [pokemonListResponse, setpokemonListResponse] =
    useState<PokemonListResponse>();
  const [pokemonList, setpokemonList] = useState<PokemonResult[]>([]);
  const renderItemPokedexItem: ListRenderItem<PokemonResult> = ({item}) => {
    return <PokeDexItem pokemon={item} />;
  };
  const getPokemonsList = async () => {
    const res: PokemonListResponse = await getAxiosInstance().get(
      'pokemon?limit=27&offset=0',
    );
    setpokemonListResponse(res);
    setpokemonList(res.results);
  };
  useEffect(() => {
    getPokemonsList();
  }, []);
  return (
    <SafeAreaView style={{backgroundColor: '#2a282b'}}>
      <StatusBar backgroundColor={'#d43b46'} />
      <View
        style={{
          padding: 20,
          justifyContent: 'center',
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          backgroundColor: '#d43b46',
          height: 80,
          width: '100%',
        }}>
        <Text style={{color: 'white', fontSize: 22}}>P O K E D E X</Text>
      </View>
      <FlatList
        style={{padding: 20}}
        showsVerticalScrollIndicator={false}
        data={pokemonList}
        renderItem={renderItemPokedexItem}
        keyExtractor={item => item.name}
      />
    </SafeAreaView>
  );
};
export default HomeScreen;
