import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary.js";

export const createStorage = (folderPath) => {
    return new CloudinaryStorage({
        cloudinary,
        params: {
            folder: folderPath,
            allowed_formats: ["jpg", "jpeg", "png", "webp", "pdf", "doc", "docx"],
            transformation: [{ width: 500, height: 500, crop: "limit" }],
        }
    })
}

export const createImageStorage = (folderPath) => {
    return new CloudinaryStorage({
        cloudinary,
        params: {
            folder: folderPath,
            resource_type: "image",
            allowed_formats: ["jpg", "jpeg", "png", "webp"],
            transformation: [{ width: 500, height: 500, crop: "limit" }],
        }
    });
};

export const createCVStorage = (folderPath) => {
    return new CloudinaryStorage({
        cloudinary,
        params: {
            folder: folderPath,
            resource_type: "auto", // Để Cloudinary tự nhận diện PDF
            allowed_formats: ["pdf", "doc", "docx"],
            // 🛑 CHÌA KHÓA: Ép quyền truy cập công khai và hiển thị inline
            type: "upload", 
            access_mode: "public",
            flags: "attachment:false", // Tắt tính năng bắt tải về
            content_disposition: "inline", // Ép trình duyệt mở trực tiếp
        }
    });
};