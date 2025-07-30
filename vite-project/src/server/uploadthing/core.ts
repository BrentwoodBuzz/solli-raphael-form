import { createUploadthing} from "uploadthing";
import type { FileRouter } from "uploadthing/types";

const f = createUploadthing();

export const ourFileRouter = {
  imageUploader: f({
    image: {  
      maxFileSize: "4MB",
      maxFileCount: 3,
    },
  }).onUploadComplete(async ({ file }) => {
    console.log("upload complete", file);
  }),

  documentUploader: f({
    "application/pdf": { maxFileSize: "8MB" },
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document": {
      maxFileSize: "64MB",
    },
  }).onUploadComplete(async ({ file }) => {
    console.log("doc upload complete", file);
  }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
