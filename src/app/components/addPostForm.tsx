import React, { useState } from "react";

const AddPostForm = ({  }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState<File[]>([]);
  const [location, setLocation] = useState("");

  const handleSave = () => {
    // You can perform any necessary validation here
    // and then save the data and close the form
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedImages = Array.from(e.target.files);
      setImages(selectedImages);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-4">Add a New Post</h2>
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700 font-medium mb-2">
          Title
        </label>
        <input
          type="text"
          id="title"
          className="w-full border rounded-lg p-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block text-gray-700 font-medium mb-2">
          Description
        </label>
        <textarea
          id="description"
          className="w-full border rounded-lg p-2"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="images" className="block text-gray-700 font-medium mb-2">
          Images
        </label>
        <input
            type="file"
            id="images"
            multiple
            accept="image/*"
            onChange={handleImageChange}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="location" className="block text-gray-700 font-medium mb-2">
          Location
        </label>
        <input
          type="text"
          id="location"
          className="w-full border rounded-lg p-2"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <div className="flex justify-end">
        <button
          className="bg-blue-500 text-white rounded-lg px-4 py-2"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default AddPostForm;
