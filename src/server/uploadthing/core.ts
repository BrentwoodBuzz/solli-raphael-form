import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

export const ourFileRouter = {
  docUploader: f({ 
    "application/pdf": { maxFileSize: "4MB" }, 
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document": { maxFileSize: "4MB" }
  }).onUploadComplete(() => {}),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
