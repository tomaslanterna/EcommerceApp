import React from 'react';
import { View,StyleSheet} from 'react-native';

const ItemList = ({products}) => {
    return (
        <View style={styles.container}>
            {map(products,(product)=>(
                <Item product={product}/>
            ))}
        </View>
    );
}

export default ItemList

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "row",
      flexWrap: "wrap",
      alignItems: "flex-start",
      margin: -3,
    },
});