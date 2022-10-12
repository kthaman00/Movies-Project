import React, { useState } from 'react'
import axios from "axios";
import { View, FlatList } from 'react-native'
import { API, URL } from './constants'
import MyCard from './MyCard';
import { Dropdown } from 'react-native-element-dropdown';


const Movies = ({navigation}) => {

    const [sort, setSort] = useState("upcoming");
    const [data, setData] = useState([]);

    function getData() {
        axios.get(`${URL}/movie/${sort}?api_key=${API}&language=en-US&page=1`).then(function (response) {
            setData(response.data.results);
        })
    };

    const renderItem = (myData) => {
        return (
            <View>
                <MyCard category={"movie"} movie={myData} navigation={navigation} />
            </View>
        )
    }

    React.useEffect(function () {
        getData();
    }, [])

    return (
        <View>
        <FlatList
            horizontal={false}
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.name}
        />
        </View>
    )
}

export default Movies