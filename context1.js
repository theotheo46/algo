import React, { Component, createContext } from "react";

const FormContext = createContext({});

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {}
    };
  }

  _handleChangeData = (name, value) => {
    this.setState(
      (prevState) => ({
        ...prevState,
        data: {
          ...prevState.data,
          [name]: value
        }
      }),
      () => {
        this.props.onChange(this.state.data);
      }
    );
  };

  render() {
    return (
      <div>
        <span id="result">{JSON.stringify(this.state.data)}</span>
        <FormContext.Provider
          value={{
            data: this.state.data,
            changeData: this._handleChangeData
          }}
        >
          {this.props.children}
        </FormContext.Provider>
      </div>
    );
  }
}

class Field extends Component {
  render() {
    return (
      <div>
        <FormContext.Consumer>
          {({ data, changeData }) => (
            <input
              type="text"
              name={this.props.name}
              value={data[this.props.name] || ""}
              onChange={(e) => {
                const { value } = e.target;
                changeData(this.props.name, value);
              }}
            />
          )}
        </FormContext.Consumer>
      </div>
    );
  }
}

export default class App extends Component {
  render() {
    return (
      <Form onChange={(data) => console.log("FormData: ", data)}>
        <Field name="firstName" />
        <Field name="lastName" />
      </Form>
    );
  }
}