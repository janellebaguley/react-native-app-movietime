import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect}from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';

const DetailsScreen = ({navigation, route}) => {
    console.log(route)
    // const {screenNumber}= route.params
    const movie = route.params.movie;

    useEffect(() => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', "http://www.omdbapi.com/?apikey=e2f213c1&t=Star+Wars&y=1977")
        xhr.send();
        xhr.onload = () => {
            if (xhr.status == 200){
                let response = JSON.parse(xhr.response)
                setMovieDetails(response)
            }else {
                console.log(`HTTP Request failed ${xhr.status}`)
            }
        }
    }, []);
    
    return (
        <View style={styles.mainView}>
           <Text>{
           (movieDetails == null ? "" : movieDetails.Title)}
           </Text>
           <Text>{
           (movieDetails == null ? "" : movieDetails.Released)}
           </Text>
           <Text>{
           (movieDetails == null ? "" : movieDetails.Plot)}
           </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
})

export default DetailsScreen;