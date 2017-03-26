import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      file: '',
      imagePreviewUrl: '',
      rotated: false,
      translated: false,
      scaled: false,
      opacified: false
    };
  };

  // handler functions

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
    if (this.state.rotated) {
      this.setState({ rotated: false });
    } else {
      this.setState({ rotated: true });
    }
  };

  _handleTranslate(e) {
    e.preventDefault();
    console.log('handle translate');
    if (this.state.translated) {
      this.setState({ translated: false });
    } else {
      this.setState({ translated: true });
    }
  };

  _handleScale(e) {
    e.preventDefault();
    console.log('handle scale');
    if (this.state.scaled) {
      this.setState({ scaled: false });
    } else {
      this.setState({ scaled: true });
    }
  };

  _handleOpacity(e) {
    e.preventDefault();
    console.log('handle opacity');
    if (this.state.opacified) {
      this.setState({ opacified: false });
    } else {
      this.setState({ opacified: true });
    }
  };

  render() {
    let { imagePreviewUrl } = this.state;
    let $imagePreview = null;
    let divStyle = {};

    if (this.state.rotated) {
      divStyle["transform"] = "rotate(45deg)";
    } else {
      divStyle["transform"] = null;
    }

    // better way to do this for scaling? appending?
    if (this.state.translated && this.state.scaled) {
      divStyle["transform"] = "translate(0px,20px) scale(0.5)";
    } else if (this.state.translated && !this.state.scaled) {
      divStyle["transform"] = "translate(0px,20px)";
    } else if (!this.state.translated && this.state.scaled) {
      divStyle["transform"] = "scale(0.5)";
    } else {
      divStyle["transform"] = null;
    }

    if (this.state.opacified) {
      divStyle["opacity"] = 0.5;
    } else {
      divStyle["opacity"] = null;
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

    let $scaleButton = <button className="scaleButton"
      type="submit"
      onClick={ (e) => this._handleScale(e) }>Scale
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
          { !this.state.rotated && $rotateButton }
          <br/>
          { !this.state.translated && $translateButton }
          <br/>
          { !this.state.scaled && $scaleButton }
          <br/>
          { !this.state.opacified && $opacityButton }
        </section>

        <aside id="sidebar">
          <h2>Applied Actions</h2>
          { this.state.rotated && $rotateButton }
          <br/>
          { this.state.translated && $translateButton }
          <br/>
          { this.state.scaled && $scaleButton }
          <br/>
          { this.state.opacified && $opacityButton }
        </aside>

        <footer>
        </footer>

      </div>

    )
  }
}

export default App;