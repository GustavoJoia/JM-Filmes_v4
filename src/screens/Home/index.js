import { StyleSheet, Text, View, FlatList } from 'react-native';
import style from '../../components/header/style';

import Header from '../../components/header/index';
import Search from '../../components/searchBar/index';
import BannerFilmes from '../../components/bannerFilmes/index';
import Card from '../../components/cardFilmes';

import filmes from '../../data/movies';
import series from '../../data/series';
import titulo from '../../components/bannerFilmes/style';

import React,{useState, useEffect} from 'react';

export default function App() {

  const [movies,setMovies] = useState([]);
  const [series,setSeries] = useState([]);

  useEffect(()=>{

    async function getMovies(){

      try{
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=cb67daeb058ea76844b44ee194f97399&language=pt-BR');
        const data = await response.json();
        setMovies(data.results)
      } catch(error){
        console.error('QUEBROU TUDO MANO',error)
      }
    }  

    getMovies()

  },[])

  useEffect(()=>{

    async function getSeries(){

      try{
        const response = await fetch('https://api.themoviedb.org/3/tv/popular?api_key=cb67daeb058ea76844b44ee194f97399&language=pt-BR');
        const data = await response.json();
        setSeries(data.results)
      } catch(error){
        console.error('QUEBROU TUDO MANO',error)
      }
    }  

    getSeries()

  },[])

  document.title = 'JM Stream';

  return (
    <View style={style.container}>
      
      {/* <Header/> */}
      <Search/>
      <BannerFilmes/>

      <Text style={titulo.textoBanner}>Filmes</Text>
      <View style ={{width: '90%'}}>
        <FlatList
          horizontal = {true}
          showsHorizontalScrollIndicator = {false}
          data = {movies}
          keyExtractor = {(item) => item.id}
          renderItem = { ({item}) => (

            <Card
            
            nome = {item.title}
            nota = {item.vote_average}
            imagem = {item.poster_path}
            
            />

          )}
        
        />
      </View>  

      <Text style={titulo.textoBanner}>Séries</Text>
      <View style ={{width: '90%'}}>
        <FlatList
          horizontal = {true}
          showsHorizontalScrollIndicator = {false}
          data = {series}
          keyExtractor = {(item) => item.id}
          renderItem = { ({item}) => (

            <Card
            
              nome = {item.name}
              nota = {item.vote_average}
              imagem = {item.poster_path}
            
            />

          )}
        
        />
      </View>  

    </View>
  );
}
