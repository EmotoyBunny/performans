import React, {Component} from "react";

// Компоненты js
import Head from "./Components/Head";
import Footer from "./Components/Footer";

class App extends Component {
    render() {
        return (
            <div>
                <Head />
                <Footer/>
            </div>
        );
    }
}

export default App;
