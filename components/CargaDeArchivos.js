import React from 'react'
import { Button } from 'react-native';
import { URL_API } from '../constants/database';
import { productos } from '../Products';

const CargaDeArchivos = () => {
    const uploadData=()=>{
            try {
                productos.forEach(item=> {const response= fetch(`${URL_API}/products.json`,{
                    method:'POST',
                    header:{
                        'Content-Type':'application/json',
                    },
                    body:JSON.stringify({
                        title:item.title,
                        price:item.price,
                        imgUrl:item.imgUrl,
                        details:item.details,
                        categoryId:item.categoryId,
                        sotck:item.stock,
                        dateCreated:Date.now()
                    }),
                
                })
                const result=response.json();
                console.log(result);
            })
            } catch (error) {
                console.log(error);
            }
    }
    return (
        <Button onPress={uploadData} title="Save Data"/>
    )
}

export default CargaDeArchivos
