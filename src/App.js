import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      file: '',
      imagePreviewUrl: '',
      actions: {
        rotated: false,
        translated: false,
        opacified: false
      }
    };
  };

  _handleSubmit(e) {
    e.preventDefault();
    console.log('handle uploading', this.state.file);
  };

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    };

    reader.readAsDataURL(file);
  };

  _handleRotate(e) {
    e.preventDefault();
    console.log('handle rotate');
    if (this.state.actions.rotated) {
      this.state.actions.rotated = false;
      this.setState({ actions: this.state.actions });
    } else {
      this.state.actions.rotated = true;
      this.setState({ actions: this.state.actions });
    }
  };

  _handleTranslate(e) {
    e.preventDefault();
    console.log('handle translate');
    if (this.state.actions.translated) {
      this.state.actions.translated = false;
      this.setState({ actions: this.state.actions });
    } else {
      this.state.actions.translated = true;
      this.setState({ actions: this.state.actions });
    }
  };

  _handleOpacity(e) {
    e.preventDefault();
    console.log('handle opacity');
    if (this.state.actions.opacified) {
      this.state.actions.opacified = false;
      this.setState({ actions: this.state.actions });
    } else {
      this.state.actions.opacified = true;
      this.setState({ actions: this.state.actions });
    }
  };

  render() {
    let { imagePreviewUrl } = this.state;
    let $imagePreview = null;
    let divStyle = null;

    if (this.state.opacified) {
      divStyle = {
        opacity: 0.5
      };
    }

    if (imagePreviewUrl) {
      $imagePreview = (<img className="imageDisplay" src={ imagePreviewUrl } style={ divStyle } />);
    } else {
      $imagePreview = (<div className="previewText"><h2>Upload an image</h2></div>);
    };

    let $rotateButton = <button className="rotateButton"
      type="submit"
      onClick={ (e) => this._handleRotate(e) }>Rotate
    </button>

    let $translateButton = <button className="translateButton"
      type="submit"
      onClick={ (e) => this._handleTranslate(e) }>Translate
    </button>

    let $opacityButton = <button className="opacityButton"
      type="submit"
      onClick={ (e) => this._handleOpacity(e) }>Opacity
    </button>

    return (
      <div id="pagewrap">

        <section id="content">
          <div className="previewComponent">
            <div className="imgPreview">
              { $imagePreview }
            </div>
            <form onSubmit={ (e) => this._handleSubmit(e) }>
              <input className="fileInput"
                type="file"
                onChange={ (e) => this._handleImageChange(e) } />
            </form>
          </div>
        </section>

        <section id="middle">
          <h2>Available Actions</h2>
          { !this.state.actions.rotated && $rotateButton }
          <br/>
          { !this.state.actions.translated && $translateButton }
          <br/>
          { !this.state.actions.opacified && $opacityButton }
        </section>

        <aside id="sidebar">
          <h2>Applied Actions</h2>
          { this.state.actions.rotated && $rotateButton }
          <br/>
          { this.state.actions.translated && $translateButton }
          <br/>
          { this.state.actions.opacified && $opacityButton }
        </aside>

        <footer>
        </footer>

      </div>

    )
  }
}

export default App;