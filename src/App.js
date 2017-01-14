import React, { Component } from 'react';
import marked from 'marked';
import './App.css'

class Navbar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <nav>
                <div className="nav-wrapper light-blue lighten-1">
                    <a href="#" className="brand-logo center">Markdown</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                    </ul>
                </div>
            </nav>
        )
    }
}

class Description extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="row">
                <div className="col s12 m4">
                    <div className="card  light-blue darken-1">
                        <div className="card-content white-text">
                            <span className="card-title">Markdown</span>
                            <p>This is a Freecodecamp project made by <a style={{color: "white"}} href="#">Hoang Kien</a>
                            </p>
                        </div>
                        <div className="card-action">
                            <a href="https://github.com/kienhg96/fcc-markdown">Github</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: ''
        }
    }
    render() {
        return (
            <div>
                <Navbar/>
                <div className="row">
                    <form className="col m6 s12">
                        <div className="row">
                            <div className="input-field col s12">
                                <textarea id="textarea1" className="materialize-textarea"
                                    onChange={(e) => {this.setState({ content: e.target.value })}}></textarea>
                                <label htmlFor="textarea1">Input text here</label>
                            </div>
                        </div>
                    </form>
                    <span className="col m6 s12" dangerouslySetInnerHTML={{__html: marked(this.state.content)}} />
                </div>
                <Description/>
            </div>
        );
    }
}

export default App;
