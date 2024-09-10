import React, { useState } from 'react';

function FileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);

  // Handle file selection
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  // Handle file submission (optional)
  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedFile) {
      console.log('File uploaded:', selectedFile);
      // Here you can implement further logic to upload the file to a server
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
        <label
          htmlFor="file-upload"
          className="block mb-2 text-lg font-medium text-gray-700"
        >
          Upload a File
        </label>
        <input
          type="file"
          id="file-upload"
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          onChange={handleFileChange}
        />
     </form>
    </div>
  );
}

export default FileUpload;
