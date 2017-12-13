# redux-form-styled-for-react-native

## Table of Contents

* [What's on it](#whatsonit)
* [Usage](#usage)
* [Theme](#theme)
* [Rules](#rules)
* [Normalize](#normalize)
* [Examples](#examples)

## What is on it?

* A clean way to set custom styles to react native components with `redux-form`.

* Used `redux-form` transparently to instance layout components and set my own `theme` through the context efficiently.

* Used `getRenderedComponent()` to return reference to the UI component that has been rendered. This is useful for calling instance methods on the UI components. For example, if you wanted to focus any given field

* Usee `errorMessage` string to display a message when it is due.

* Usee a generic `ruleRunner` to eval my own validation `rules`.

## Usage

```js
import * as React from "react";
import { UIField } from "./UIField";
import { rules, runner } from "../rules";
import { ThemeProvider, withTheme } from "../Theme";

import { Field, reduxForm } from "redux-form";
import { TextInput } from "react-native";
import { reduxForm } from "redux-form";

const SimpleTheme = {
  TextInput: {
    borderColor: "red"
  },
  ErrorText: {
    color: "red"
  }
};
class MyApp extends React.PureComponent<{}> {
  render() {
    return (
      <ThemeProvider theme={SimpleTheme}>
        <MyFieldWrapped />
      </ThemeProvider>
    );
  }
}

const MyTextField = UIField(SimpleInputTextField);
class MyFieldWrapped extends Component<{}> {
  render() {
    // redux-form field
    return (
      <Field
        name="name"
        component={MyTextField}
        hintText="Name"
        floatingLabelText="Name"
        placeholder="Name"
        autoCapitalize="none"
        autoCorrect={false}
      />
    );
  }
}

const SimpleInputTextField = props => {
  const { theme, errorText, onChange, onBlur, onFocus, value } = props;

  // Injected theme and input props
  return (
    <View>
      <TextInput
        style={[theme.TextInput]}
        underlineColorAndroid="transparent"
        onChangeText={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        value={value}
      />
      {!!errorText && <Text theme={theme.ErrorText}>{errorText}</Text>}
    </View>
  );
};
// Use reduxForm transparently
export default reduxForm({
  form: "example",
  initialValues: {
    name: "Jane Doe"
  },
  validate: values =>
    runner.run(values, [runner.ruleRunner("name", "Name", rules.required)])
})(MyForm);
```

## Theme

It uses `react-broadcast` to emit a context change notification.

`Themes` uses React's context feature to provide available to children
regardless of how deep they are in the tree of Component.

* `<ThemeProvider Theme>`

makes `Theme` available from `context.Theme` to children of the Provider via
`props` using `withTheme()` HOC as in react-router.

While this is powerful it also can be abused and make it hard to manage.

## Rules

Using `ruleRunner` useful pattern taken from:

* https://gist.github.com/JSchaenzle/3727f5bda08cd6a31e18c24e61c263ce

#### Available Rules

* Required
* ...

## Normalization

* toPhone
* ...

## Related cool projects

* [react-native-clean-form](https://github.com/esbenp/react-native-clean-form)
* [redux-form-material-ui](https://github.com/erikras/redux-form-material-ui)
* [react-broadcast](https://github.com/ReactTraining/react-broadcast)
* [redux-form](https://redux-form.com/7.2.0/)

## Sample Expo

Scan this QR code with your Expo mobile app to load the project immediately.

https://expo.io/@agrcrobles/redux-form-ui-generic-example


![QR](https://raw.githubusercontent.com/agrcrobles/redux-form-styled-for-react-native/master/assets/expo-qr.png "QR Expo")

