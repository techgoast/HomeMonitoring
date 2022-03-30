import React, { Component, Fragment }  from "react";
import { Container } from "./components/template/style";
import Nav from "./components/nav";
import Main from "./components/main";
import Aside from "./components/aside";


class App extends Component {
  state = {
    navIcons: [
      {id : "1", class: "fa-solid fa-chart-simple", active: true},
      {id : "2", class: "fa-solid fa-sd-card", active: false},
      {id : "3", class: "fa-solid fa-bookmark", active: false},
      {id : "4", class: "fa-solid fa-gear", active: false},
    ]
  }

  render() {
    return (
      <Fragment>
        <Container>
          <Nav icons={this.state.navIcons}/>
          <Main />
          <Aside />
        </Container>
      </Fragment>
    );
  }
}

export default App;
