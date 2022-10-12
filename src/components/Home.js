import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import Movies from './Movies';
import Search from './Search';
import Tv from './Tv';

const Tab = createMaterialTopTabNavigator();

const Home = ({navigation}) => {
    return (
        <>
            <Tab.Navigator>
                <Tab.Screen name="AllMovies"
                    children={() => <Movies navigation={navigation} />}
                />
                <Tab.Screen name="Search Movies"
                    children={() => <Search navigation={navigation} />}
                />
                <Tab.Screen name="TV"
                    children={() => <Tv navigation={navigation} />}
                />
            </Tab.Navigator>
        </>
    );
};

export default Home;