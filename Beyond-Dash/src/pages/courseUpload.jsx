import React, { useState } from 'react';
import axios from 'axios';

const CourseUpload = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [duration, setDuration] = useState('');
  const [week, setWeek] = useState([]);
  const [classDetails, setClassDetails] = useState([{ className: '', instructor: '', schedule: '' }]);
  const [image, setImage] = useState(null);
  const [keypointInput, setKeypointInput] = useState('');
  const [keypoints, setKeypoints] = useState([]);
  const [classkey,setClassKey]=useState()
  const [link,setLink]=useState("")
  const [course,setCourse]=useState()
  const [loader,setLoader]=useState(false)
  const handleChange = (e) => {
    const { name, value, files, dataset } = e.target;

    if (name === 'image' && files && files.length > 0) {
      setImage(files[0]);
    } else if (dataset.arrayName) {
      const updatedArray = [...week];
      updatedArray[dataset.index] = value;
      setWeek(updatedArray);
    } else if (dataset.objectName) {
      const updatedArray = [...classDetails];
      updatedArray[dataset.index][dataset.subKey] = value;
      setClassDetails(updatedArray);
    }
  };

  const addArrayField = () => setWeek([...week, '']);
  const removeArrayField = (index) => setWeek(week.filter((_, i) => i !== index));

  const addObjectField = () => setClassDetails([...classDetails, { className: '', instructor: '', schedule: '' }]);
  const removeObjectField = (index) => setClassDetails(classDetails.filter((_, i) => i !== index));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true)

    if (!title || !description || !price || !duration || !image) {
      alert("Please fill all required fields.");
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('duration', duration);
    formData.append('week', JSON.stringify(week));
    formData.append('classDetails', JSON.stringify(classDetails));
    formData.append('keypoint',JSON.stringify(keypoints));
    formData.append('classkey', classkey);
    formData.append('link', link);
    formData.append('course', course); 
  
    formData.append('image', image);

    try {
      const response = await axios.post('http://localhost:4000/admin/courseUpload',formData);

      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error:', error.response?.data || error.message);
      alert('Failed to upload course.');
    }finally {
      setLoader(false)
    }
  };

  const handleKeyPointInput = (e) => {
    setKeypointInput(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && keypointInput.trim() !== '') {
      e.preventDefault();
      setKeypoints([...keypoints, keypointInput.trim()]);
      setKeypointInput('');
    }
  };

  const removeKeypoint = (index) => {
    setKeypoints(keypoints.filter((_, i) => i !== index));
  };




  return (
    <div className="flex items-center justify-center p-6 bg-gray-100 min-h-screen">
      <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Add New Course</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700">Title</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full p-2 border rounded-md" required />
          </div>
          <div>
            <label className="block text-gray-700">Description</label>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="w-full p-2 border rounded-md" required />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">Price</label>
              <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} className="w-full p-2 border rounded-md" required />
            </div>
            <div>
              <label className="block text-gray-700">Duration</label>
              <input type="text" value={duration} onChange={(e) => setDuration(e.target.value)} className="w-full p-2 border rounded-md" required />
            </div>
          </div>
          <div>
            <label className="block text-gray-700">Weeks</label>
            {week.map((item, index) => (
              <div key={index} className="flex items-center space-x-2 mb-2">
                <input type="text" value={item} data-array-name="week" data-index={index} onChange={handleChange} className="w-full p-2 border rounded-md" />
                <button type="button" className="text-red-600 hover:underline" onClick={() => removeArrayField(index)}>Remove</button>
              </div>
            ))}
            <button type="button" className="text-blue-600 hover:underline" onClick={addArrayField}>Add Week</button>
          </div>
          <div>
            <label className="block text-gray-700">Class Details</label>
            {classDetails.map((item, index) => (
              <div key={index} className="space-y-2">
                <input type="text" placeholder="Class Name" value={item.className} data-object-name="classDetails" data-index={index} data-sub-key="className" onChange={handleChange} className="w-full p-2 border rounded-md" />
                <input type="text" placeholder="Instructor" value={item.instructor} data-object-name="classDetails" data-index={index} data-sub-key="instructor" onChange={handleChange} className="w-full p-2 border rounded-md" />
                <input type="text" placeholder="Schedule" value={item.schedule} data-object-name="classDetails" data-index={index} data-sub-key="schedule" onChange={handleChange} className="w-full p-2 border rounded-md" />
                <button type="button" className="text-red-600 hover:underline" onClick={() => removeObjectField(index)}>Remove</button>
              </div>
            ))}
            <button type="button" className="text-blue-600 hover:underline mt-2" onClick={addObjectField}>Add Class Detail</button>
          </div>
          <div>
            <label className="block text-gray-700">Key Points</label>
            <input
              type="text"
              placeholder="Enter Key Point and press Enter"
              value={keypointInput}
              onChange={handleKeyPointInput}
              onKeyDown={handleKeyPress}
              className="w-full p-2 border rounded-md"
            />
            <ul className="mt-2">
              {keypoints.map((point, index) => (
                <li key={index} className="flex items-center justify-between bg-gray-200 p-2 rounded-md mb-2">
                  <span>{point}</span>
                  <button type="button" className="text-red-600 hover:underline" onClick={() => removeKeypoint(index)}>
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </div>   
          <div>     
          <label className="block text-gray-700">Class Key</label>
            <input
              type="text"
              placeholder="Enter Class Key"
              value={classkey}
              onChange={(e)=>setClassKey(e.target.value)}
              onKeyDown={handleKeyPress}
              className="w-full p-2 border rounded-md"
            />
            </div>

            <div>     
          <label className="block text-gray-700">Link</label>
            <input
              type="text"
              placeholder="Enter Class Link"
              value={link}
              onChange={(e)=>setLink(e.target.value)}
              onKeyDown={handleKeyPress}
              className="w-full p-2 border rounded-md"
            />
            </div>

            <div>     
          <label className="block text-gray-700">Course Type</label>
            <input
              type="text"
              placeholder="Enter Course Type"
              value={course}
              onChange={(e)=>setCourse(e.target.value)}
              onKeyDown={handleKeyPress}
              className="w-full p-2 border rounded-md"
            />
            </div>
            <div>
            <label className="block text-gray-700">Image</label>
            <input type="file" accept="image/*" name="image" onChange={handleChange} className="w-full p-2 border rounded-md" />
          </div>
          <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">{loader?"Submitting":"Submit"}</button>
        </form>
      </div>
    </div>
  );
};

export default CourseUpload;
