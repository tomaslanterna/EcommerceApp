import React from 'react';
import { View,Button} from 'react-native';

const HomeScreen = ({navigation,route}) => {
    return (
        <View>
            <Button onPress={()=>{navigation.navigate('Products')}} title='Ver Productos'/>
        </View>
    )
}

export default HomeScreen
