import React,{useState} from "react";
import { StyleSheet, View } from "react-native";
import { Input, Icon, Button } from "react-native-elements";
import {isEmpty} from "lodash";
import {useNavigation} from "@react-navigation/native"
import * as firebase from "firebase";
import{ validateEmail} from "../../utils/validations.js";
import Loading from "../Loading";

export default function LoginForm(props) {
const {toastRef} =props;
const [showPassword, setShowPassword] = useState(false);
const [formData,setFormData]= useState(defaultFormValue());
const [loading, setLoading] = useState(false);
const navigation = useNavigation();

const onChange=(e,type)=>{
    setFormData({...formData,[type]:e.nativeEvent.text})
};
const onSubmit =()=>{
if(isEmpty(formData.email)||isEmpty(formData.password)){
   toastRef.current.show("todos los campos son obligatorios");
}
else if(!validateEmail(formData.email)){
    toastRef.current.show("El email no es correcrto");
}
else{
    setLoading(true);
firebase
.auth()
.signInWithEmailAndPassword(formData.email,formData.password)
.then(()=>{ 
    setLoading(false);
    navigation.navigate("account");
     
}).catch(()=>{ 
    setLoading(false);
    toastRef.current.show("email o contrasena incorrecta")
})
}
};
    return(
        <View style={styles.formContainer}>
<Input type="" 
placeholder="correo electronico" 
style={styles.inputForm} 
onChange={(e)=>onChange(e,"email")}
rightIcon={
    <Icon 
    type="material-community"
    name="at"
    iconStyle={styles.iconRight}
    >

    </Icon>
}
/>
<Input 
password={true}
placeholder="Contraseña" 
style={styles.inputForm} 
onChange={(e)=>onChange(e,"password")}
secureTextEntry={showPassword ? true : false}
rightIcon={
    <Icon 
    type="material-community"
    name={showPassword ? "eye-off-outline" : "eye-outline"}
    iconStyle={styles.iconRight}
    onPress={()=>{
        setShowPassword(!showPassword)
    }}
    >

    </Icon>
}

/>
<Button title="iniciar secion" 
containerStyle={styles.btnContainerLogin}
buttonStyle={styles.btnLogin}
></Button>
<Loading isVisible={loading} text="Iniciando sesión"/>
        </View>
    )
}




function defaultFormValue(){
    return({email:"",password:""});
} 
const styles = StyleSheet.create({

    formContainer:{
        flex:1,
        alignItems:"center",
        justifyContent="center",
        marginTop:30
    },
    inputForm:{
        width:"100%",
        marginTop:20,
    },
    btnContainerLogin:{
        marginTop:20,
        width:"95%"
    },btnLogin:{
        backgroundColor:"#0a680"
    },
    iconRight:{
color:"#c1c1c1"
    }
})
