import {
  FlatList,
  Image,
  ListRenderItem,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useEffect, useState} from 'react';
import getAxiosInstance from '../helper/AxiosInstance';
import {PokemonListResponse, PokemonResult} from '../types/interface';
import Text from '../components/Text';
import PokeDexItem from '../components/PokeDexItem';
import LottieView from 'lottie-react-native';

const HomeScreen = () => {
  const [pokemonListResponse, setpokemonListResponse] =
    useState<PokemonListResponse>();
  const [pokemonList, setpokemonList] = useState<PokemonResult[]>([]);
  const renderItemPokedexItem: ListRenderItem<PokemonResult> = ({item}) => {
    return <PokeDexItem pokemon={item} />;
  };
  const getPokemonsList = async (
    queryString: string = 'pokemon?limit=10&offset=0',
  ) => {
    const res: PokemonListResponse = await getAxiosInstance().get(queryString);
    setpokemonListResponse(res);
    setpokemonList([...pokemonList, ...res.results]);
  };
  const renderFooter = () => {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <LottieView
          style={{width: 100, height: 100, margin: 5}}
          autoPlay
          loop
          source={require('../assets/animation/loading.json')}
        />
      </View>
    );
  };
  useEffect(() => {
    getPokemonsList();
  }, []);
  return (
    <SafeAreaView style={styles.screenContainer}>
      <StatusBar backgroundColor={'#d43b46'} />
      <View style={styles.toolbar}>
        <Text style={styles.toolbarText}>P O K E D E X</Text>
        <TextInput style={styles.searchInput} />
        <TouchableOpacity>
          <Image
            style={styles.icon}
            source={require('../assets/icon/ic_search.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={{flex: 1, padding: 20}}>
        <FlatList
          numColumns={2}
          onEndReachedThreshold={0.1}
          onEndReached={() => {
            console.log(pokemonListResponse?.next);
            console.log('load more...');
            getPokemonsList(pokemonListResponse?.next);
          }}
          columnWrapperStyle={styles.columnWrapFlatlist}
          showsVerticalScrollIndicator={false}
          data={pokemonList}
          renderItem={renderItemPokedexItem}
          keyExtractor={item => item.name}
          ListFooterComponent={renderFooter}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: '#2a282b',
    flex: 1,
  },
  toolbarText: {
    color: 'white',
    fontSize: 17,
  },
  columnWrapFlatlist: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  searchInput: {
    fontFamily: 'pixel',
    paddingHorizontal: 10,
    width: '50%',
    borderColor: '#7a7a77',
    borderWidth: 1.5,
    height: 40,
    backgroundColor: '#e3e3e3',
    elevation: 3,
    borderRadius: 12,
  },
  icon: {
    width: 30,
    height: 30,
    tintColor: 'white',
  },
  toolbar: {
    flexDirection: 'row',
    padding: 30,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: '#d43b46',
    height: 80,
    width: '100%',
  },
});
export default HomeScreen;
