import React, {Component} from "react";

// Компоненты js
import Head from "./Components/Head.jsx";
import Footer from "./Components/Footer.jsx";

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