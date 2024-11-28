import React from "react";
import { StatusBar } from "expo-status-bar";
import Routes from "./routes";
import { DataProvider } from "./hooks/data";

const Main: React.FC = () => {
  return (
    <DataProvider>
      <StatusBar style="light" />
      <Routes />
    </DataProvider>
  );
};

export default Main;
