import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// 라우팅
import { BrowserRouter } from "react-router-dom";
// // 우리의 버킷리스트에 리덕스를 주입해줄 프로바이더를 불러옵니다!
import { Provider } from "react-redux";
// import store from './redux/sotre';
// 툴킷 연결할 스토어도 가지고 와요.
import {store} from "./store/index";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
