import React, { Component } from 'react';
import Dropzone from 'react-dropzone';

class ContactForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      UploadedFile: ''
    };
  }

  onImageDrop(files) {
    let image = files[0];
    console.log('uploaded file', image);
    this.setState({
      uploadedFile: files[0]
    });
  }

  render() {
    return (
      <div>
        <Dropzone
          multiple={false}
          accept="image/*"
          onDrop={this.onImageDrop.bind(this)}>
          <p>Drop an image or click to select a file to upload.</p>
        </Dropzone>
      </div>
    )
  }
}

export default ContactForm