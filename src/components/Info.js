import React, { useEffect, useState } from 'react';
import { Text, Image, Center, Flex, Box } from 'native-base';
import axios from 'axios';

import { API, URL } from "./constants";

const Info = ({ route }) => {
    const { id, category } = route.params;

    const [showDetail, setShowDetail] = useState();

    const loadInformation = () => {
        axios.get(
            `${URL}/${category}/${id}?api_key=${API}&language=en-US`
        ).then((result) => {
            setShowDetail(result.data);
        }).catch(error => console.log(error));
    }

    useEffect(loadInformation, [])

    return (
        <Center>
            {showDetail && (
                <>
                    <Text fontWeight="bold" fontSize={24} mb={25} mt={25}>
                        {showDetail.title ? showDetail.title : showDetail.name}
                    </Text>
                    {showDetail.poster_path ? (
                        <Image
                            source={{
                                uri: `https://image.tmdb.org/t/p/original${showDetail.poster_path}`,
                            }}
                            height={286}
                            width={276}
                            alt={showDetail.title ? showDetail.title : showDetail.name}
                            mb={10}
                        />
                    ) : (
                        <Flex
                            height={314}
                            width={313}
                            mb={15}
                            justify="center"
                            align="center"
                            bg="#a8a8a8"
                        >
                            <Text color="white">Image not available</Text>
                        </Flex>
                    )}
                    <Box width="80%" mb={20}>
                        <Text>{showDetail.overview}</Text>
                    </Box>
                    <Box width="80%">
                        <Text fontSize={14}>
                            Popularity: {showDetail.popularity} | Release Date:{" "}
                            {showDetail.releaseDate}
                        </Text>
                    </Box>
                </>
            )}
        </Center>
    );
}

export default Info;

{

}