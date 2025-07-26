const uploadToImgbb = async (imageFile: string | Blob) => {
  const formData = new FormData();
  formData.append('image', imageFile);
  const API_KEY = '52975ba81f419dcf097bd68ab48c6fb2';

  try {
    const res = await fetch(`https://api.imgbb.com/1/upload?key=${API_KEY}`, {
      method: 'POST',
      body: formData
    });

    const data = await res.json();
    if (data.success) {
      return data.data.url;
    } else {
      throw new Error("Upload failed");
    }
  } catch (error) {
    console.error("Upload error:", error);
    return null;
  }
};

export default uploadToImgbb;