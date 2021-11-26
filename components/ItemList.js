import React from 'react';
import { View,StyleSheet, FlatList, ScrollView} from 'react-native';
import Item from './Item';


const ItemList = ({products}) => {

    return (
        <View style={styles.container}>
            {/*<FlatList
            data={products}
            keyExtractor={item=>item.id}
            renderItem={({item})=>(
                <Item product={item}/>
            )}/>*/}
            {products.map(prod=>
                <Item product={prod} key={prod.id}/>
            )}
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