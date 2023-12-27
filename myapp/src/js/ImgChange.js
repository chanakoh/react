import React, {useState} from 'react';
import image1 from '../img/image1.jpg';
import image2 from '../img/image2.jpg';
import image3 from '../img/image3.jpg';
function ImageChange(){
    //초기 이미지 경로는 ../img.image1.jpg로 설정돼있는 image1으로 초기 이미지 설정
    const [imageSrc,setImageSrc] = useState(image1);
    const [isClick,setIsClick] = useState(false);

    //이미지를 클릭할 때 마다 이미지가 변경될 수 있도록 클릭 함수 만들기
    const handleClick=()=>{
        if(imageSrc === image1){
            setImageSrc(image2);
    //        setIsClick(false);
        }else if(imageSrc === image2){
            setImageSrc(image3);
      //      setIsClick(true);
        }else{
            setImageSrc(image1);
        }
    }

    return (
        <div>
            <img src={imageSrc} onClick={handleClick}/>
        </div>
    

    )
       
}
export default ImageChange;