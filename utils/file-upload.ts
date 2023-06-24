import { storage } from "@/config/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";

// 'file' comes from the Blob or File API

export const uploadFileToStorage = async (file: any, path?: string) => {
  try {
    const filePath = path ? `${path}/${uuidv4()}` : `${uuidv4()}`;
    const storageRef = ref(storage, filePath);
    const snapshot = await uploadBytes(storageRef, file);
    const url = await getDownloadURL(snapshot.ref);
    console.log(url);
    return url;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
