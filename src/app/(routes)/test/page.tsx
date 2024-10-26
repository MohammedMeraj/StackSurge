"use client";
 
import { UploadButton } from "@/utils/uploadthing";
 
export default function Test() {
  return (
    <div className="w-[90%] flex items-center justify-between mx-auto rounded-md py-2 px-4 border">
      <UploadButton

      appearance={{
            
        button:{
          background: "black"
            }
      }
        
      }
        endpoint="imageUploader"
       
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res[0].url);
          
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
      <div className="text-base w-fit">
      <div >Upload your Company Logo </div>
      <div className="text-sm text-center">&#91; Preferred image ratio is 1:1  &#93;</div>
      </div>
      
    </div>
  );
}