import React, { useState } from 'react';

const ImageUploader = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      const fileSize = selectedFile.size;

      if (fileSize <= 150 * 1024) {
        setFile(selectedFile);
      } else {
        // Display an alert and reset the input field
        alert('File size must be less than 150KB.');
        e.target.value = null; // Reset the input field
        setFile(null);
      }
    }
  };


  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button>
        Upload
      </button>
    </div>
  );
};

export default ImageUploader;
