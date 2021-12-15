import React, { useState } from 'react'
import { KeyboardAvoidingView, Text, TextInput, View } from 'react-native'
import { Button } from 'react-native-paper';
import { useDispatch } from 'react-redux';

const FormUsrPsw = ({value}) => {


    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [psw, setPsw] = useState('');

    const signUpFunction=()=>{
        dispatch(signUp(email,psw));
    }

    const signInFunction=()=>{
        dispatch(signIn(email,psw));
    }
    return (
        <KeyboardAvoidingView>
            {value ?
        <View>
                <Text>Email</Text>
                <TextInput
                    keyboardType="email-address"
                    autoCapitalize="none"
                    value={email}
                    onChangeText={setEmail} />
                <Text>Password</Text>
                <TextInput
                    secureTextEntry
                    autoCapitalize="none"
                    value={psw}
                    onChangeText={setPsw} />
                <Button onPress={signUpFunction}>SignUp</Button>
            </View>
            :
            <View>
                <Text>Email</Text>
                <TextInput
                    keyboardType="email-address"
                    autoCapitalize="none"
                    value={email}
                    onChangeText={setEmail} />
                <Text>Password</Text>
                <TextInput
                    secureTextEntry
                    autoCapitalize="none"
                    value={psw}
                    onChangeText={setPsw} />
                <Button onPress={signInFunction}>Login</Button>
            </View>
    }
        </KeyboardAvoidingView>
    )
}

export default FormUsrPsw
