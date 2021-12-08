import React, { useState } from 'react'
import { KeyboardAvoidingView, Text, TextInput, View } from 'react-native'
import { Button } from 'react-native-paper';
import { useDispatch } from 'react-redux';

const FormUsrPsw = () => {


    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [psw, setPsw] = useState('');

    const sendData=()=>{
        dispatch(signUp(email,psw));
    }
    return (
        <KeyboardAvoidingView>
            <View>
                <Text>SignUp</Text>
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
                <Button onPress={sendData}>SignUp</Button>
            </View>

        </KeyboardAvoidingView>
    )
}

export default FormUsrPsw
