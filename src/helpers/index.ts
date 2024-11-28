import AsyncStorage from '@react-native-async-storage/async-storage';
import moment, { MomentInput } from 'moment';
import 'moment/locale/pt-br'; // Importa o idioma português do Brasil
import { Item } from '../types';

// Configura o idioma para português do Brasil
moment.locale('pt-br');

export const generateUniqueId = (): string => {
    // Gera um ID único baseado na data atual e um número aleatório
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
};

export const filterIsToday = (date: MomentInput, currentData: MomentInput): boolean => {
    // Compara se a data é o dia de hoje, usando o formato correto para comparação
    return moment(currentData).format('YYYY-MM-DD') === moment(date).format('YYYY-MM-DD');
}

export const formatMonthYear = (date: MomentInput): string => {
    return moment(date).format('MMMM [de] YYYY'); 
}

export const setLocalStorage = async (list: Item[]) => {
    // Armazena a lista no AsyncStorage em formato JSON
    const jsonValue = JSON.stringify(list);
    await AsyncStorage.setItem('@listITems', jsonValue);
    return;
}

export const getLocalStorage = async () => {
    // Recupera a lista do AsyncStorage
    const jsonValue = await AsyncStorage.getItem('@listITems');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
}


  
  