import store from "./Social/redux/reduxStore";
import React from "react";
import ReactDOM from "react-dom";
import App from "./Social/App";
import { Provider } from "react-redux";

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
