import React from "react";
import Head from "./Head";
import Foot from "./Foot";
import Left from "./Left";
import Right from "./Right";
import { Provider } from 'react-redux'
import reducer from './reducer'
import { createStore } from 'redux'
const store = createStore(reducer)
export default function Layout(){
    return (
      <Provider store={store}>
        <div>
          <Head />
          <Left />
          <Right />
          <Foot />
        </div>
      </Provider>
    )
}