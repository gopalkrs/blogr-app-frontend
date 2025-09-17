import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'sonner';

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
      toast.success("Image uploaded successfully")
    //console.log(res);
    }
  }

  return (
    <div className='flex flex-row gap-2'>
        <input type="file" required={true} onChange={handleFileChange} className="border border-gray-200 text-xs bg-red-100 rounded-md p-1" />
        <button onClick={handleImageUpload} className='bg-gradient-to-r from-orange-500 to-amber-500 text-white text-sm px-2 py-1 shadow-md rounded-md'>Upload</button>
    </div>
  )
}

export default ImageUploader