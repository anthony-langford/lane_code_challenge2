import React, { Component } from 'react';
import './App.css';
import ContactForm from './ContactForm';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      uploadedFile: null,
      uploadedFileCloudinaryUrl: ''
    };
  }
  render() {
    return (
      <div className="App">
        <ContactForm className="form" />
        <img src={this.state.uploadedFileCloudinaryUrl} />
      </div>
    );
  }
}

export default App;
