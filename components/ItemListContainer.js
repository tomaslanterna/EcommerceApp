import React,{useEffect,useState} from 'react';
import { useSelector,useDispatch} from 'react-redux';
import { View,Text,StyleSheet} from 'react-native';
import ItemList from './ItemList';
import { selectProduct } from '../store/actions/Product.action';


/*const productos = [
  { id:1,title: 'Play Station 5', price: 1200, imgUrl: "https://firebasestorage.googleapis.com/v0/b/tiendaonline-ad1a6.appspot.com/o/JBL400BT.jpg?alt=media&token=e632b098-f39f-4971-bcb8-165ee75a48da", details: "Increible Video consola para jugar con la banda unos fifas y unas nba 2k", categoryId: "1", stock: 4 },
  { id:2,title: 'Play Station 4', price: 400, imgUrl: "https://firebasestorage.googleapis.com/v0/b/tiendaonline-ad1a6.appspot.com/o/JBL400BT.jpg?alt=media&token=e632b098-f39f-4971-bcb8-165ee75a48da", details: "Increible Video consola para jugar con la banda unos fifas y unas nba 2k", categoryId: "1" , stock: 6},
  { id:3,title: 'Play Station 3', price: 200, imgUrl: "https://firebasestorage.googleapis.com/v0/b/tiendaonline-ad1a6.appspot.com/o/JBL400BT.jpg?alt=media&token=e632b098-f39f-4971-bcb8-165ee75a48da", details: "Increible Video consola para jugar con la banda unos fifas y unas nba 2k", categoryId: "1", stock: 7 },
  { id:4,title: 'Play Station 2', price: 100, imgUrl: "https://firebasestorage.googleapis.com/v0/b/tiendaonline-ad1a6.appspot.com/o/JBL400BT.jpg?alt=media&token=e632b098-f39f-4971-bcb8-165ee75a48da", details: "Increible Video consola para jugar con la banda unos fifas y unas nba 2k", categoryId: "1", stock: 9 },
  { id:5,title: 'Play Station 1', price: 50, imgUrl: "https://firebasestorage.googleapis.com/v0/b/tiendaonline-ad1a6.appspot.com/o/JBL400BT.jpg?alt=media&token=e632b098-f39f-4971-bcb8-165ee75a48da", details: "Increible Video consola para jugar con la banda unos fifas y unas nba 2k", categoryId: "1", stock: 10 },
  { id:6,title: 'Notebook hp', price: 1200, imgUrl: "https://firebasestorage.googleapis.com/v0/b/tiendaonline-ad1a6.appspot.com/o/JBL400BT.jpg?alt=media&token=e632b098-f39f-4971-bcb8-165ee75a48da", details: "Increible Video consola para jugar con la banda unos fifas y unas nba 2k", categoryId: "1", stock: 12 },
  { id:7,title: 'Notebook Acer', price: 400, imgUrl: "https://firebasestorage.googleapis.com/v0/b/tiendaonline-ad1a6.appspot.com/o/JBL400BT.jpg?alt=media&token=e632b098-f39f-4971-bcb8-165ee75a48da", details: "Increible Video consola para jugar con la banda unos fifas y unas nba 2k", categoryId: "1", stock: 5 },
  { id:8,title: 'Notebook ASUS', price: 200, imgUrl: "https://firebasestorage.googleapis.com/v0/b/tiendaonline-ad1a6.appspot.com/o/JBL400BT.jpg?alt=media&token=e632b098-f39f-4971-bcb8-165ee75a48da", details: "Increible Video consola para jugar con la banda unos fifas y unas nba 2k.", categoryId: "1", stock: 6 },
  { id:9,title: 'Notebook Toshiba', price: 100, imgUrl: "https://firebasestorage.googleapis.com/v0/b/tiendaonline-ad1a6.appspot.com/o/JBL400BT.jpg?alt=media&token=e632b098-f39f-4971-bcb8-165ee75a48da", details: "Increible Video consola para jugar con la banda unos fifas y unas nba 2k.", categoryId: "1", stock: 8 },
  { id:10,title: 'Teclado Dell', price: 50, imgUrl: "https://firebasestorage.googleapis.com/v0/b/tiendaonline-ad1a6.appspot.com/o/JBL400BT.jpg?alt=media&token=e632b098-f39f-4971-bcb8-165ee75a48da", details: "Increible Video consola para jugar con la banda unos fifas y unas nba 2k.", categoryId: "1", stock: 3 },
  { id:11,title: 'Mouse Logitech', price: 1200, imgUrl: "https://firebasestorage.googleapis.com/v0/b/tiendaonline-ad1a6.appspot.com/o/JBL400BT.jpg?alt=media&token=e632b098-f39f-4971-bcb8-165ee75a48da", details: "Increible Video consola para jugar con la banda unos fifas y unas nba 2k.", categoryId: "1", stock: 10 },
  { id:12,title: 'Auriculares JBL', price: 400, imgUrl: "https://firebasestorage.googleapis.com/v0/b/tiendaonline-ad1a6.appspot.com/o/JBL400BT.jpg?alt=media&token=e632b098-f39f-4971-bcb8-165ee75a48da", details: "Increible Video consola para jugar con la banda unos fifas y unas nba 2k.", categoryId: "1", stock: 3 },
  { id:13,title: 'AirPods', price: 200, imgUrl: "https://firebasestorage.googleapis.com/v0/b/tiendaonline-ad1a6.appspot.com/o/JBL400BT.jpg?alt=media&token=e632b098-f39f-4971-bcb8-165ee75a48da", details: "Increible Video consola para jugar con la banda unos fifas y unas nba 2k.", categoryId: "1", stock: 2 },
  { id:14,title: 'Macbook Pro', price: 100, imgUrl: "https://firebasestorage.googleapis.com/v0/b/tiendaonline-ad1a6.appspot.com/o/JBL400BT.jpg?alt=media&token=e632b098-f39f-4971-bcb8-165ee75a48da", details: "Increible Video consola para jugar con la banda unos fifas y unas nba 2k.", categoryId: "1", stock: 1 },
  { id:15,title: 'Xbox ONE', price: 50, imgUrl: "https://firebasestorage.googleapis.com/v0/b/tiendaonline-ad1a6.appspot.com/o/JBL400BT.jpg?alt=media&token=e632b098-f39f-4971-bcb8-165ee75a48da", details: "Increible Video consola para jugar con la banda unos fifas y unas nba 2k.", categoryId: "1", stock: 3 },
  { id:16,title: 'Camiseta MJ Chicago BULLS', price: 1200, imgUrl: "https://firebasestorage.googleapis.com/v0/b/tiendaonline-ad1a6.appspot.com/o/JBL400BT.jpg?alt=media&token=e632b098-f39f-4971-bcb8-165ee75a48da", details: "Camiseta NBA increible para jugar 3x3 o picados de basketball.", categoryId: "2", stock: 4 },
  { id:17,title: 'Camiseta MG San Antonio SPURS', price: 400, imgUrl: "https://firebasestorage.googleapis.com/v0/b/tiendaonline-ad1a6.appspot.com/o/JBL400BT.jpg?alt=media&token=e632b098-f39f-4971-bcb8-165ee75a48da", details: "Camiseta NBA increible para jugar 3x3 o picados de basketball.", categoryId: "2", stock: 6 },
  { id:18,title: 'Camiseta Messi PSG', price: 200, imgUrl: "https://firebasestorage.googleapis.com/v0/b/tiendaonline-ad1a6.appspot.com/o/JBL400BT.jpg?alt=media&token=e632b098-f39f-4971-bcb8-165ee75a48da", details: "Camiseta de D30S para convertirte en los futbol 5.", categoryId: "2", stock: 8 },
  { id:19,title: 'Camiseta CR7 JUVE', price: 100, imgUrl: "https://firebasestorage.googleapis.com/v0/b/tiendaonline-ad1a6.appspot.com/o/JBL400BT.jpg?alt=media&token=e632b098-f39f-4971-bcb8-165ee75a48da", details: "Camiseta de el Bicho CR7 para convertirte en los futbol 5.", categoryId: "2", stock: 10 },
  { id:20,title: 'Camiseta Nacional MI71CA GANADORA', price: 50, imgUrl: "https://firebasestorage.googleapis.com/v0/b/tiendaonline-ad1a6.appspot.com/o/JBL400BT.jpg?alt=media&token=e632b098-f39f-4971-bcb8-165ee75a48da", details: "Camiseta del Bolso en conmemoracion a la libertadores y mundial de clubes de 1971.", categoryId: "2", stock: 4 },
  { id:21,title: 'Camiseta Arg ADIDAS', price: 1200, imgUrl: "https://firebasestorage.googleapis.com/v0/b/tiendaonline-ad1a6.appspot.com/o/JBL400BT.jpg?alt=media&token=e632b098-f39f-4971-bcb8-165ee75a48da", details: "Camiseta de Argentina version Scaloneta vos te subis? Llevate esta increible casaca.", categoryId: "2", stock: 2 },
  { id:22,title: 'Camiseta Uy PUMA', price: 400, imgUrl: "https://firebasestorage.googleapis.com/v0/b/tiendaonline-ad1a6.appspot.com/o/JBL400BT.jpg?alt=media&token=e632b098-f39f-4971-bcb8-165ee75a48da", details: "Camiseta de la Celeste.", categoryId: "2", stock: 1 },
  { id:23,title: 'Zapatillas Nike Air', price: 200, imgUrl: "https://firebasestorage.googleapis.com/v0/b/tiendaonline-ad1a6.appspot.com/o/JBL400BT.jpg?alt=media&token=e632b098-f39f-4971-bcb8-165ee75a48da", details: "Zapatillas para jugar al basketball", categoryId: "2", stock: 9 },
  { id:24,title: 'Zapatillas Nike TIEMPO', price: 100, imgUrl: "https://firebasestorage.googleapis.com/v0/b/tiendaonline-ad1a6.appspot.com/o/JBL400BT.jpg?alt=media&token=e632b098-f39f-4971-bcb8-165ee75a48da", details: "Zapatillas para romperla en los futbol 11", categoryId: "2", stock: 4 },
  { id:25,title: 'Short dry fit', price: 50, imgUrl: "https://firebasestorage.googleapis.com/v0/b/tiendaonline-ad1a6.appspot.com/o/JBL400BT.jpg?alt=media&token=e632b098-f39f-4971-bcb8-165ee75a48da", details: "Increible Video consola para jugar con la banda unos fifas y unas nba 2k", categoryId: "2", stock: 5 },
  { id:26,title: 'Camiseta deportiva', price: 1200, imgUrl: "https://firebasestorage.googleapis.com/v0/b/tiendaonline-ad1a6.appspot.com/o/JBL400BT.jpg?alt=media&token=e632b098-f39f-4971-bcb8-165ee75a48da", details: "Increible Video consola para jugar con la banda unos fifas y unas nba 2k", categoryId: "2", stock: 9 },
  { id:27,title: 'Camiseta color negro', price: 1200, imgUrl: "https://firebasestorage.googleapis.com/v0/b/tiendaonline-ad1a6.appspot.com/o/JBL400BT.jpg?alt=media&token=e632b098-f39f-4971-bcb8-165ee75a48da", details: "Increible Video consola para jugar con la banda unos fifas y unas nba 2k", categoryId: "3", stock: 2 },
  { id:28,title: 'Pantalon Jean negro', price: 400, imgUrl: "https://firebasestorage.googleapis.com/v0/b/tiendaonline-ad1a6.appspot.com/o/JBL400BT.jpg?alt=media&token=e632b098-f39f-4971-bcb8-165ee75a48da", details: "Increible Video consola para jugar con la banda unos fifas y unas nba 2k", categoryId: "3", stock: 4 },
  { id:29,title: 'Zapatillas skate Nike', price: 200, imgUrl: "https://firebasestorage.googleapis.com/v0/b/tiendaonline-ad1a6.appspot.com/o/JBL400BT.jpg?alt=media&token=e632b098-f39f-4971-bcb8-165ee75a48da", details: "Increible Video consola para jugar con la banda unos fifas y unas nba 2k", categoryId: "3", stock: 2 },
  { id:30,title: 'Gorro Snapback Nike', price: 100, imgUrl: "https://firebasestorage.googleapis.com/v0/b/tiendaonline-ad1a6.appspot.com/o/JBL400BT.jpg?alt=media&token=e632b098-f39f-4971-bcb8-165ee75a48da", details: "Increible Video consola para jugar con la banda unos fifas y unas nba 2k", categoryId: "3", stock: 6 }
];*/

const ItemListContainer = () => {
    const [productsList, setProductsList] = useState([]);
    const dispatch=useDispatch();

    const prods = useSelector(state => state.products.prod);


    useEffect(() => {
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