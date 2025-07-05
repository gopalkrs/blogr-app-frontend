import axios from 'axios';
import React, { useState } from 'react'

const ImageUploader = ({setValue}) => {
    
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
    
  const handleFileChange = (event) =>{
    const file = event.target.files[0];
    if(file){
      setFile(file);
    }
  }

  const handleImageUpload = async () => {
    const formdata = new FormData();
    formdata.append("file", file);

    const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/posts/upload`,
        formdata,
        { 
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data", // ✅ CRUCIAL
          },
         }
    );
    if(res){
      setImageUrl(res?.data?.imageUrl);
      setValue("imageUrl", res?.data?.imageUrl);
    console.log(res);
    }
  }

  return (
    <div className='flex flex-row gap-2'>
        <input type="file" onChange={handleFileChange} className="border border-gray-200 text-xs bg-red-100 rounded-md p-1" />
        <button onClick={handleImageUpload} className='bg-blue-500 text-white text-sm px-2 py-1 rounded-md'>Upload</button>
    </div>
  )
}

export default ImageUploader