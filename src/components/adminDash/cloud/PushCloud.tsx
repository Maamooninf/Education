import React from "react";

function PushCloud() {
  // const handlesetuploaded=(e:any)=>{

  //     if (e.target.files && e.target.files[0]){

  //     let type=e.target.files[0].type.substr(0,5)

  //     if (type ==="video"||type==="image"){

  //     const content=e.target.files[0]

  //     const formData=new FormData()

  //     formData.append("file",content)

  //     formData.append("upload_preset","yn84ei0z")

  //     axios.request({method:'post',

  //     url:`http://api.cloudinary.com/v1_1/dezb1a07c/${type}/upload`,

  //     data:formData,

  //     onUploadProgress: (p) => {

  //       setprog((p.loaded / p.total)*100)

  //     }

  //     })

  //     .then((res:any)=>{

  //      setmovie((prevState:any) => ({
  //       ...prevState,
  //       [e.target.name]:res.data.secure_url
  //      }))

  //      setprog(0)

  //     })

  //    .catch((err)=>{

  //     console.log(err)

  //     })
  //       }

  //     }
  //   }
  return <div>PushCloud</div>;
}

export default PushCloud;
