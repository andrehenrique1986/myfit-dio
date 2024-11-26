import React from "react";
import { FlatList, Text } from "react-native";
import CalendarStrip from "react-native-calendar-strip";
import moment from "moment";
import ItemList from "../../components/ItemList";

import {
  Container,
  HeaderContainer,
  HeaderContainerHighlight,
  HeaderTextCounterHighlight,
  HeaderTitle,
  BodyContainer,
  HeaderTextHighlight,
} from "./styles";

const Home: React.FC = () => {
  const data = [
    {
      id: "andegue",
      name: "Pão",
      kcal: 400,
      date: moment()
    },
    {
        id: "senhor",
        name: "Arroz",
        kcal: 350,
        date: moment()
      }
  ];

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
          onDateSelected={() => null}
          startingDate={moment().subtract(3, "days")}
          selectedDate={moment()}
          scrollerPaging={true}
          iconLeft={require("../../assets/img/arrow-left.png")}
          iconRight={require("../../assets/img/arrow-right.png")}
        />
        <HeaderTitle>Consumido no dia</HeaderTitle>
        <HeaderContainerHighlight>
          <HeaderTextCounterHighlight>100</HeaderTextCounterHighlight>
          <HeaderTextHighlight> /kcal</HeaderTextHighlight>
        </HeaderContainerHighlight>
      </HeaderContainer>
      <BodyContainer>
        <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => <ItemList item={item}/>}
        />
      </BodyContainer>
    </Container>
  );
};

export default Home;
