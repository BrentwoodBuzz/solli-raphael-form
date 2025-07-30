import express from "express";
import { createUploadthing } from "uploadthing";

const app = express();
const f = createUploadthing();

const ourFileRouter = {
  imageUploader: f({ image: { maxFileSize: "4MB" } }).onUploadComplete(
    ({ file }) => {
      console.log("File uploaded:", file);
    }
  ),
};

app.use("/api/uploadthing", createUploadthing().middleware(ourFileRouter));

app.listen(4000, () => {
  console.log("Server running on http://localhost:4000");
});
