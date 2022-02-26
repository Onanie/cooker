import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import reducers from "./Redux/Reducers/Index";
import thunk from "redux-thunk";
import SplashScreen from "react-native-splash-screen";
import Navigation from "./Components/Navigation";
export default function App() {
  return (
    <Provider store={createStore(reducers, applyMiddleware(thunk))}>
      <Navigation />
    </Provider>
  );
}
