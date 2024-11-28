import React from "react";
import { FlatList } from "react-native";
import CalendarStrip from "react-native-calendar-strip";
import { Feather } from '@expo/vector-icons';
import { FAB } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import moment from "moment";
import 'moment/locale/pt-br'; 
import ItemList from "../../components/ItemList";

import { useData } from "../../hooks/data";

import {
  Container,
  HeaderContainer,
  HeaderContainerHighlight,
  HeaderTextCounterHighlight,
  HeaderTitle,
  BodyContainer,
  HeaderTextHighlight,
} from "./styles";



moment.locale('pt-br');

const Home: React.FC = () => {

  const navigation = useNavigation();
  const { handleChangeDate, currentList, currentKcal } = useData();
 

  const handleOnNewItem = (): void => {
    navigation.navigate("NewItem");
  }

  return (
    <Container>
      <HeaderContainer>
        <CalendarStrip
          
          daySelectionAnimation={{
            type: "border",
            duration: 200,
            borderWidth: 1,
            borderHighlightColor: "white",
          }}
          style={{ height: 100, paddingTop: 20, paddingBottom: 5 }}
          calendarHeaderStyle={{
            color: "white",
            marginBottom: 15,
            fontSize: 16,
          }}
          dateNumberStyle={{ color: "white", fontSize: 14 }}
          dateNameStyle={{ color: "white", fontSize: 12 }}
          scrollable={true}
          highlightDateNumberStyle={{ color: "yellow", fontSize: 14 }}
          highlightDateNameStyle={{ color: "yellow", fontSize: 14 }}
          disabledDateNameStyle={{ color: "grey", fontSize: 12 }}
          disabledDateNumberStyle={{ color: "grey", fontSize: 12 }}
          iconContainer={{ flex: 0.1 }}
          onDateSelected={handleChangeDate}
          startingDate={moment().subtract(3, "days")}
          selectedDate={moment()}
          scrollerPaging={true}
          iconLeft={require("../../assets/img/arrow-left.png")}
          iconRight={require("../../assets/img/arrow-right.png")}
          
        />
        <HeaderTitle>Consumido no dia</HeaderTitle>
        <HeaderContainerHighlight>
          <HeaderTextCounterHighlight>{currentKcal}</HeaderTextCounterHighlight>
          <HeaderTextHighlight> /kcal</HeaderTextHighlight>
        </HeaderContainerHighlight>
      </HeaderContainer>
      <BodyContainer>
        <FlatList
          data={currentList}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ItemList item={item} />}
        />
        <FAB
        icon={<Feather name="plus" size={24} color="white"/>} 
        visible={true}
        placement="right"
        color="#1E3BA1"
        style={{ marginRight: 20 }}
        onPress={handleOnNewItem}
        />
      </BodyContainer>
    </Container>
  );
};

export default Home;

