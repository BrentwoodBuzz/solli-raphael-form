// core.ts (or similar)
import { createUploadthing, type FileRouter } from "uploadthing";

const uploadthing = createUploadthing();

export const ourFileRouter = {
  docUploader: uploadthing
    .fileTypes(["pdf", "docx"])  // <-- Only accept PDF and DOCX files here
    .maxSize("10MB")             // Optional: set max file size
    .onUploadComplete(({ file }) => {
      console.log("File uploaded:", file);
      // You can store file info or trigger additional actions here
    }),
};

export type OurFileRouter = typeof ourFileRouter;
