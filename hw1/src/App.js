import React, { Component } from "react";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Main from "./components/main/main";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />
        <Main fetchFunction={this.myRequest} />
        <Footer />
      </div>
    );
  }
}

export default App;
