import { useEffect, useState } from "react";

const Avata = () => {
    const [avatar, setAvatar] = useState();


    useEffect(() => {
        return () => avatar && URL.revokeObjectURL(avatar.preview);
    }, [avatar])


    const onHandlePreview = (e) => {
        const file = e.target.files[0];
        file.preview = URL.createObjectURL(file);
        setAvatar(file);
        console.log(file.preview);
    }

  
  return (
    <div>
    <h1>Preview Avata</h1>
    <input type="file" onChange={onHandlePreview}/>
    {avatar && <img src={avatar.preview} style={{width:"100px", height:"100px"}}/>}
    </div>
  )
}

export default Avata
