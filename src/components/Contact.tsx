import { useState } from "react";
import { UploadButton } from "../utils/uploadthing";
import type { OurFileRouter } from "../server/uploadthing/core";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const [fileUrl, setFileUrl] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const emailInit = () => {
    emailjs.init({
      publicKey: process.env.VITE_PUBLIC_KEY,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      uploaded_file_url: fileUrl || null,
    };

    

    emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_PUBLIC_KEY!
      )
      .then(() => {
        alert("Submitted successfully!");
        setFormData({ name: "", email: "", message: "" });
        setFileUrl(null);
      })
      .catch((error) => {
        console.error("Email sending error:", error);
        alert("Failed to send email.");
      });
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="px-4 w-160">
        <h2 className="text-6xl font-bold mb-10 bg-gradient-to-r from-green-400 to-blue-200 bg-clip-text text-transparent">
          Submit your response
        </h2>
        <form className="space-y-6 rounded-3xl" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            required
            placeholder="Your Name                                                                                         E.g.John Doe"
            className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            required
            placeholder="Your email                                                                        E.g. johndoe@gmail.com"
            className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <textarea
            name="message"
            value={formData.message}
            required
            placeholder="Lorem ipsum ..."
            className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white"
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          />

          {fileUrl && (
            <img
              src={fileUrl}
              alt="image preview"
              className="w-full mb-4 rounded-md max-h-48 object-cover"
            />
          )}

          <UploadButton<OurFileRouter, "docUploader">
            endpoint="docUploader"
            onClientUploadComplete={(res) => {
              if (res && res[0]?.url) setFileUrl(res[0].url);
            }}
            onUploadError={(error) => {
              console.error("upload failed:", error); 
            }}
          />

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium hover:-translate-y-0.5 transition"
          >
            Send Away
          </button>
        </form>
      </div>
    </section>
  );
};
