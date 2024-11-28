import React, { useState } from "react";
import { Button, Input } from "react-native-elements";
import { useData } from "../../hooks/data"; 
import { generateUniqueId } from "../../helpers";
import { useNavigation } from "@react-navigation/native";

import { 
    Container, 
    FormContainer, 
    ButtonContainer 
} from "./styles";
import moment from "moment";
import { Text } from "react-native";

const NewItem: React.FC = () => {
    const { addItem } = useData();
    const navigation = useNavigation();

    const [name, setName] = useState<string>('');
    const [kcal, setKcal] = useState<number>('');
    const [error, setError] = useState<string>('');

    const handleNameChange = (value: string) => {
        const sanitizedValue = value.replace(/[^a-zA-Záéíóúãõâêîôûàèìòùäëïöüç]/g, '');
        const formattedValue = sanitizedValue.charAt(0).toUpperCase() + sanitizedValue.slice(1).toLowerCase();
        setName(formattedValue);
    }

    const handleKcalChange = (value: string) => {
        const sanitizedValue = value.replace(/[^0-9]/g, '');
        setKcal(Number(sanitizedValue));
    }

    const handleOnSave = () => {
        if (name && kcal > 0) {
            addItem({ 
                id: generateUniqueId(),
                name,
                kcal,
                date: moment()
            });
            navigation.goBack();
        } 
    };

    return (
        <Container>
            <FormContainer>
                <Input
                    label="Nome"
                    value={name}
                    onChangeText={handleNameChange}
                    placeholder="Descrição"
                />
                <Input
                    label="kcal"
                    value={String(kcal)}
                    onChangeText={handleKcalChange}
                    keyboardType="numeric"
                    placeholder="Somente Números"
                />
                {error ? <Text style={{ color: 'red' }}>{error}</Text> : null}
            </FormContainer>
            <ButtonContainer>
                <Button title="Salvar" onPress={handleOnSave} />
            </ButtonContainer>
        </Container>
    );
};

export default NewItem;
