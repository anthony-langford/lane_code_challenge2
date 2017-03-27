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

  // event handlers

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

  _handleReset(e) {
    e.preventDefault();
    console.log('handle reset');
    this.setState({
      rotated: false,
      translated: false,
      scaled: false,
      opacified: false
    });
  };

  render() {
    let { imagePreviewUrl } = this.state;
    let $imagePreview = null;
    let imgStyle = {};
    let transformations = [];

    if (imagePreviewUrl) {
      $imagePreview = (
        <div className="imageContainer">
          <img className="imageDisplay" src={ imagePreviewUrl } alt="" style={ imgStyle } />
        </div>
      );
    } else {
      $imagePreview = (<div className="previewText"><h2>Upload an image</h2></div>);
    };

    // state listeners

    if (this.state.rotated) {
      transformations.push("rotate(45deg)");
      imgStyle["transform"] = transformations.join(" ");
    } else {
      let index = transformations.indexOf("rotate(45deg)");
      if (index > -1) {
        transformations.splice(index, 1);
      }
    }

    if (this.state.translated) {
      transformations.push("translate(0px,20px)");
      imgStyle["transform"] = transformations.join(" ");
    } else {
      let index = transformations.indexOf("translate(0px,20px)");
      if (index > -1) {
        transformations.splice(index, 1);
      }
    }

    if (this.state.scaled) {
      transformations.push("scale(0.5)");
      imgStyle["transform"] = transformations.join(" ");
    } else {
      let index = transformations.indexOf("scale(0.5)");
      if (index > -1) {
        transformations.splice(index, 1);
      }
    }

    if (this.state.opacified) {
      imgStyle["opacity"] = 0.5;
    } else {
      imgStyle["opacity"] = null;
    }

    // buttons

    let $rotateButton =
    <div>
      <button className="rotateButton"
        type="submit"
        onClick={ (e) => this._handleRotate(e) }>Rotate
      </button>
      <br/>
    </div>

    let $translateButton =
    <div>
      <button className="translateButton"
        type="submit"
        onClick={ (e) => this._handleTranslate(e) }>Translate
      </button>
      <br/>
    </div>

    let $scaleButton =
    <div>
      <button className="scaleButton"
        type="submit"
        onClick={ (e) => this._handleScale(e) }>Scale
      </button>
      <br/>
    </div>

    let $opacityButton =
    <div>
      <button className="opacityButton"
        type="submit"
        onClick={ (e) => this._handleOpacity(e) }>Opacity
      </button>
      <br/>
    </div>

    let $resetButton =
    <div>
      <button className="opacityButton"
        type="submit"
        onClick={ (e) => this._handleReset(e) }>Reset
      </button>
      <br/>
    </div>

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
          { !this.state.translated && $translateButton }
          { !this.state.scaled && $scaleButton }
          { !this.state.opacified && $opacityButton }
          { $resetButton }
        </section>

        <aside id="sidebar">
          <h2>Applied Actions</h2>
          { this.state.rotated && $rotateButton }
          { this.state.translated && $translateButton }
          { this.state.scaled && $scaleButton }
          { this.state.opacified && $opacityButton }
        </aside>

        <footer>
        </footer>

      </div>

    )
  }
}

export default App;