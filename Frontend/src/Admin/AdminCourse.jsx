import { useState } from 'react'
import axios from "axios"
import {toast} from "react-toastify"
const course = () => {

  const token = localStorage.getItem("token")
  const [file, setFile] = useState(null);
  const[title,setTitle] = useState('')
  const[description,setDescription] = useState('')
  const[price,setPrice] = useState('')
  const[content,setContent] = useState('')
  const[duration,setDuration] = useState('')
 
  

  const fileHandler = (e) => {
  setFile(e.target.files[0]);  }

   const handleSubmit = async(e) => {
    e.preventDefault();
        const toastId = toast.loading("Loading...");
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('price', price);
        formData.append('content', content);
        formData.append('duration', duration);
        formData.append('thumbnail', file);
    try {
      
      const response = await axios.post("http://localhost:4000/admin/courseUpload", formData, {
        headers: {
          Authorization: `bearer ${token}`,
        },
      })
      toast.success("Course Added Successfull")
    } catch (error) {
      console.log("Error in Submission");
    }
        toast.dismiss(toastId);

  }

  return (
     <>
 <div className="w-full h-[100vh] overflow-y-scroll">
     <h2 className="text-center text-blue-400 font-bold pt-12 text-2xl uppercase mb-10">Add  new Course</h2>
     <div className="bg-white p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
       <form onSubmit={handleSubmit}>
         <div className="mb-5">
           <label htmlFor="name" className="block mb-2 font-bold text-gray-600">Course Thumbnail</label>
           <input onChange={fileHandler} type="file" id="name" name="thumbnail" placeholder="Put in your Thumbnail."  className="border border-gray-300 shadow p-3 w-full rounded mb-" />
         </div>
         <div className="mb-5">
           <label htmlFor="name" className="block mb-2 font-bold text-gray-600">Course Title</label>
           <input onChange={(e)=>setTitle(e.target.value)} type="text" id="name" name="title" placeholder="Put in your Course Title."  className="border border-gray-300 shadow p-3 w-full rounded mb-" />
         </div>
         <div className="mb-5">
           <label htmlFor="name" className="block mb-2 font-bold text-gray-600">Description</label>
           <input onChange={(e)=>setDescription(e.target.value)} type="text" id="name" name="description" placeholder="Put in your Description."  className="border border-gray-300 shadow p-3 w-full rounded mb-" />
         </div>
         <div className="mb-5">
           <label htmlFor="name" className="block mb-2 font-bold text-gray-600 ">Content</label>
           <textarea  onChange={(e)=>setContent(e.target.value)}  type="text" id="name" name="content" placeholder="Put in your Content."  className=" border border-gray-300 shadow p-3 w-full rounded mb-" />
         </div>

         <div className="mb-5">
           <label htmlFor="name" className="block mb-2 font-bold text-gray-600">Price</label>
           <input onChange={(e)=>setPrice(e.target.value)} type="text" id="number" name="price" placeholder="Put in your Course Price." className="border border-gray-300 shadow p-3 w-full rounded mb-" />
         </div>
         <div className="mb-5">
           <label htmlFor="name" className="block mb-2 font-bold text-gray-600">Duration (Year)</label>
           <input onChange={(e)=>setDuration(e.target.value)} type="text" id="number" name="duration" placeholder="Put in your Course Duration." className="border border-gray-300 shadow p-3 w-full rounded mb-" />
         </div>
         <button className="block w-full bg-blue-500 text-white font-bold p-4 rounded-lg">Update</button>
       </form>
     </div>
   </div>
    </>
  )
}

export default course