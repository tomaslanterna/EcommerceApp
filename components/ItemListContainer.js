import React,{useEffect,useState} from 'react';
import { useSelector,useDispatch} from 'react-redux';
import { View,Text,StyleSheet} from 'react-native';
import ItemList from './ItemList';
import { URL_API } from '../constants/database';



const ItemListContainer = () => {
    const [productsList, setProductsList] = useState([]);
    const dispatch=useDispatch();

    const prods = useSelector(state => state.products.prod);


    useEffect(() => {
      return async dispatch=>{
        try {
          const response= await fetch(`${URL_API}/products.json`,{
            headers:{
              'Content-Type':'application/json',
            },
          });

          const result=await response.json();
          const products=Object.keys(result).map(key=>({
            ...result[key],
            id:key,
          }));
          console.log(result);

          dispatch({
            
          })
        } catch (error) {
          
        }
      }
      setProductsList(prods);
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Nuevos Productos</Text>
            {<ItemList products={prods}/>}
        </View>
    );
}

export default ItemListContainer

const styles = StyleSheet.create({
    container: {
      padding: 10,
      marginTop: 20,
    },
    title: {
      fontWeight: "bold",
      fontSize: 22,
      marginBottom: 10,
    },
  });