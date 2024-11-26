import React from "react";
import { StatusBar } from "expo-status-bar";
import Routes from "./routes";

const Main: React.FC = () => {
  return (
    <>
      <StatusBar style="light" />
      <Routes />
    </>
  );
};

export default Main;
