import React from 'react';
import { View, Dimensions, TouchableWithoutFeedback, Image, StyleSheet } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';


const width = Dimensions.get("window").width;
const height = 160;

const bannerImage = ({ item }) => {
    return (
        <TouchableWithoutFeedback>
            <Image
                style={styles.carousel}
                source={item.url} />
        </TouchableWithoutFeedback>
    );
}

const Banners = ({ images }) => {
    return (
        <View style={styles.container}>
            <Carousel
                layout={"default"}
                data={images}
                sliderWidth={width}
                itemWidth={width}
                renderItem={bannerImage} />
            <Pagination
                dotsLength={size(images)}
                inactiveDotOpacity={0.6}
                inactiveDotScale={0.6}
                containerStyle={styles.dotsContainer}
                dotStyle={styles.dot}
                inactiveDotStyle={styles.dot} />
        </View>
    )
}

export default Banners

const styles = StyleSheet.create({
    container: {
        position: "relative",
    },
    carousel: {
        width,
        height,
    },
    dotsContainer: {
        position: "absolute",
        bottom: -20,
        width: "100%",
    },
    dot: {
        backgroundColor: "#fff",
    },
});