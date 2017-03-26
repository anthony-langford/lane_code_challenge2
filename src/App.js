import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      file: '',
      imagePreviewUrl: ''
    };
  };

  _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    console.log('handle uploading-', this.state.file);
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
      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    };

    return (
      <div id="pagewrap">

        <section id="content">
          <h2>1st Content Area</h2>
          <p>This page demonstrates a 3 column responsive layout, complete with responsive images and jquery slideshow.</p>
          <div className="previewComponent">
            <div className="imgPreview">
              {$imagePreview}
            </div>
            <form onSubmit={(e)=>this._handleSubmit(e)}>
              <input className="fileInput"
                type="file"
                onChange={(e)=>this._handleImageChange(e)} />
              <button className="submitButton"
                type="submit"
                onClick={(e)=>this._handleSubmit(e)}>Upload Image
              </button>
            </form>
          </div>
        </section>

        <section id="middle">
          <h2>2nd Content Area</h2>
          <button className="rotateButton"
            type="submit"
            onClick={(e)=>this._handleSubmit(e)}>Rotate Image
          </button>
          <button className="rotateButton"
            type="submit"
            onClick={(e)=>this._handleSubmit(e)}>Rotate Image
          </button>
          <button className="rotateButton"
            type="submit"
            onClick={(e)=>this._handleSubmit(e)}>Rotate Image
          </button>
        </section>

        <aside id="sidebar">
          <h2>3rd Content Area</h2>
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