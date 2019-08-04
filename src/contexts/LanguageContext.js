import React, { Component, createContext } from "react";

export const LanguageContext = createContext();

export class LanguageProvider extends Component {
  constructor(props) {
    super(props);
    this.state = { language: "spanish" };
    this.changeLanguange = this.changeLanguange.bind(this);
  }
  changeLanguange(e) {
    this.setState({ language: e.target.value });
  }
  render() {
    return (
      <LanguageContext.Provider
        value={{ ...this.state, changeLanguage: this.changeLanguange }}
      >
        {this.props.children}
      </LanguageContext.Provider>
    );
  }
}

// HIGHER ORDER FUNCTION NEEDED TO USE 2 CONTEXTS IN A CLASS BASED COMPONENT
// export const withLanguageContext = Component => props => (
//   <LanguageContext.Consumer>
//     {value => <Component languageContext={value} {...props} />}
//   </LanguageContext.Consumer>
// );
