import React, {Component} from 'react';
import DrawerLeft from "./components/layout/Drawer";
import Header from "./components/layout/Header";

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <DrawerLeft/>
      </div>
    );
  }
}

export default App;
