import { View, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Dropdown } from 'react-native-element-dropdown';
import { Button, FlatList } from 'native-base';
import MyCard from './MyCard';
import { API, URL } from './constants';
import axios from 'axios';

const Search = ({ navigation }) => {

  const [text, onChangeText] = React.useState("Initiate a search");
  const data = [
    { label: 'Movie', value: 'movie' },
    { label: 'TV', value: 'tv' },
    { label: 'Multi', value: 'multi' },
  ];
  const [value, setValue] = useState(null);
  const [moviesData, setMoviesData] = useState([]);

  function searchMovies() {
    axios
      .get(
        `${URL}/search/${value}?api_key=${API}&language=en-US&page=1&query=${text}`
      )
      .then((result) => {
        setMoviesData(result.data.results);
      })
  };

  const renderItem = (myData) => {
    return (
      <View>
        <MyCard category={value} movie={myData} navigation={navigation} />
      </View>
    )
  }

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />

        <Dropdown
        data={data}
        search
        maxHeight={240}
        labelField="label"
        valueField="value"
        searchPlaceholder="Search Your Movie Here"
        value={value}
        onChange={item => {
            setValue(item.value);
        }} />
            <Button onPress={searchMovies}>Search</Button>
        <FlatList
            horizontal={false}
            data={moviesData}
            renderItem={renderItem}
            keyExtractor={(item) => item.name}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 45,
    margin: 15,
    borderWidth: 1.2,
    padding: 15,
  },
});


export default Search