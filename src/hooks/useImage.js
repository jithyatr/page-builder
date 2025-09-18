import { useRef } from "react";

const useImage = ({ onUpdate, image }) => {
    const fileInputRef = useRef(null);

    const handleImageClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onUpdate("image", reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

    return {
        image,
        handleFileChange,
        handleImageClick,
        fileInputRef,
    };
};

export default useImage;
