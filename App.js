import * as React from "react";

import MyApp from "./MyApp";

import { createStore, combineReducers } from "redux"; // 3.7.2
import { reducer as reduxFormReducer } from "redux-form"; // 7.2.0
import { Provider } from "react-redux"; // 5.0.6

import ThemeProvider from "./Theme/ThemeProvider";
import Theme from "./Theme";

const reducer = combineReducers({
	form: reduxFormReducer, // mounted under "form"
});
const store = createStore(reducer);

export default class App extends React.Component<*> {
	render() {
		return (
			<ThemeProvider Theme={Theme}>
				<Provider store={store}>
					<MyApp />
				</Provider>
			</ThemeProvider>
		);
	}
}
