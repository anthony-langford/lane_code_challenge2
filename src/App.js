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
      opacified: false
    };
  };

  _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
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

  render() {
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img className="imageDisplay" src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<div className="previewText"><h2>Upload an image</h2></div>);
    };

    return (
      <div id="pagewrap">

        <section id="content">
          <div className="previewComponent">
            <div className="imgPreview">
              {$imagePreview}
            </div>
            <form onSubmit={(e)=>this._handleSubmit(e)}>
              <input className="fileInput"
                type="file"
                onChange={(e)=>this._handleImageChange(e)} />
            </form>
          </div>
        </section>

        <section id="middle">
          <h2>Available Actions</h2>
          <button className="rotateButton"
            type="submit"
            onClick={(e)=>this._handleSubmit(e)}>Rotate
          </button>
          <br/>
          <button className="translateButton"
            type="submit"
            onClick={(e)=>this._handleSubmit(e)}>Translate
          </button>
          <br/>
          <button className="opacityButton"
            type="submit"
            onClick={(e)=>this._handleSubmit(e)}>Opacity
          </button>
        </section>

        <aside id="sidebar">
          <h2>Applied Actions</h2>
          <p>Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.</p>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
          <p>Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.</p>
        </aside>

        <footer>
        </footer>

      </div>

    )
  }
}

export default App;