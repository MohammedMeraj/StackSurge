"use client"
import { Progress } from '@/components/ui/progress'
import React, { useEffect, useState } from 'react'

const Loading = () => {

  const [progress, setProgress] = useState<number>(0)
 

  
  useEffect(() => {
    if (progress <= 70) {
     
      const interval = setInterval(() => {
        setProgress((prevProgress) => {
       
          if (prevProgress < 79) {
            return prevProgress + 1;
          } else {
            clearInterval(interval);
            return prevProgress; 
          }
        });
      }, 1); 
      return () => clearInterval(interval);
    }
  }, [progress]);



  useEffect(() => {
    if (progress >= 70 && progress <=100) {
  
      const interval = setInterval(() => {
        setProgress((prevProgress) => {
        
          if (prevProgress < 100) {
            return prevProgress + 1;
          } else {
            clearInterval(interval); 
            return prevProgress; 
          }
        });
      }, 100); 


      return () => clearInterval(interval);
    }
  }, [progress]);




 


  return (
    <div className='h-[70vh] flex items-center justify-center '>
      
      <Progress value={progress} className='h-2 w-[40%] mx-auto my-auto'/>
     
      
      </div>
  )
}

export default Loading