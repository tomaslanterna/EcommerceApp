import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';

const ItemCount = ({stock}) => {

    const [cant, setCant] = useState(0);
    return (
        <View style={styles.container}>
            <Button onPress={()=>{setCant(cant-1)}} mode="text">
                -
            </Button>
            <Text>{cant}</Text>
            <Button onPress={()=>{setCant(cant+1)}} mode="text">
                +
            </Button>
        </View>
    )
}

export default ItemCount

const styles=StyleSheet.create({
    container:{
        display:"flex",
        flexDirection:"row",
        alignItems:"stretch"
    }
})