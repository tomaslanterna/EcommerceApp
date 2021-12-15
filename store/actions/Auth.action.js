import { Alert } from "react-native";
import { SIGN_UP_URL } from "../../constants/database";
import { SIGN_IN_URL } from "../../constants/database";

export const SIGN_UP='SIGN_UP';
export const SIGN_IN=`SIGN_IN`;

const ERROR={
    'EMAIL_EXISTS':'El email ya esta registrado',
};

export const signUp=(email,password)=>{
    return async dispatch=>{
        try {

            const response=await fetch(SIGN_UP_URL,{
                method:'POST',
                header:{
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({
                    email,
                    password,
                    returnSecureToken:true,
                }),
            });

            const data= await response.json();

            if(response.ok){
                dispatch({
                    type:SIGN_UP,
                    token:data.idToken,
                    userId:data.localId,
                });
            }else{
                const message=data.error.message;
                const messageText=message in ERROR
                ? ERROR[message]
                : 'Intente nuevamente';

                Alert.alert(
                    'Ha ocurrido un error',
                    messageText,
                    [{text:'Ok'}],
                );
            }
            
        } catch (error) {

            console.log(error.message)
            
        }
    }
}

export const signIn=(email,password)=>{
    return async dispatch=>{
        try {
            const response=await fetch(SIGN_IN_URL,{
                method:'POST',
                header:{
                   'Content-Type':'application/json',
                },
                body:JSON.stringify({
                    email,
                    password,
                    returnSecureToken:true,
                })
            })

            const data= await response.json();

            if(response.ok){
                dispatch({
                    type:SIGN_IN,
                    token:data.idToken,
                    userId:data.localId,
                });
            }else{
                const message=data.error.message;
                const messageText=message in ERROR
                ? ERROR[message]
                : 'Intente nuevamente';

                Alert.alert(
                    'Ha ocurrido un error',
                    messageText,
                    [{text:'Ok'}],
                );
            }
            
        } catch (error) {
            
        }
    }
}