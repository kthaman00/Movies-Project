import React, { useState } from 'react'
import axios from "axios";
import { View, FlatList } from 'react-native'
import { API, URL } from './constants'

import MyCard from './MyCard';

const Tv = ({navigation}) => {

    const [sort, setSort] = useState("popular");
    const [data, setData] = useState([]);

    function getData() {
        axios.get(`${URL}/tv/${sort}?api_key=${API}&language=en-US&page=1`).then(function (response) {
            setData(response.data.results);
            console.log(response.data);
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

export default Tv;