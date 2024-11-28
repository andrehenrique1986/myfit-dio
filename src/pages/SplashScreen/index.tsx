import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { PrincipalScreen } from "./styles";
import splashImage from '../../../assets/splash.png';

const SplashScreen: React.FC = () => {

    const navigation = useNavigation();

    useEffect(() => {
    setTimeout(() => {
        navigation.replace("Home");
    }, 3000);
    },[navigation]);

    return (
        <PrincipalScreen 
        source={splashImage}
        resizeMode="cover"
        />
    );
}

export default SplashScreen;