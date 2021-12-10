import store from './Social/redux/store';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './Social/App';


let rerenderEntireTree = (props) => {
  
  ReactDOM.render(
    <App
      appState={props}
      dispatch={store.dispatch.bind(store)}
    />,
    document.getElementById('root')
  )
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree); 