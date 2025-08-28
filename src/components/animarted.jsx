import React from 'react'
import {
    ScrollVelocityContainer,
    ScrollVelocityRow,
} from "@/components/magicui/scroll-based-velocity";
import Active from '@/components/active';
const IMAGES_ROW_A = [
    {
        image: "/Screenshot 2025-08-19 at 15-15-14 Welth.png",
        title: "Advanced Analytics",
        description: "Get detailed insights into\nyour spending patterns with AI-powered analytics",
    },
    {
        image: "/Screenshot 2025-08-19 at 15-11-45 Welth.png",
        title: "Smart Receipt \nScanner ",
        description: "Extract data automatically \nfrom receipts using \nadvanced AI technology",
    },
    {
        image:"/Screenshot 2025-08-19 at 15-15-25 Welth.png",
        title:"Budget Planning",
        description:"Create and manage \nbudgets with intelligent \nrecommendations"
    }
];

const IMAGES_ROW_B = [
    {
        image: "/Screenshot 2025-08-19 at 15-15-14 Welth.png",
        title: "Advanced Analytics",
        description: "Get detailed insights into\nyour spending patterns with AI-powered analytics",
    },
    {
        image: "/Screenshot 2025-08-19 at 15-11-45 Welth.png",
        title: "Smart Receipt \nScanner ",
        description: "Extract data automatically \nfrom receipts using \nadvanced AI technology",
    },
    {
        image:"/Screenshot 2025-08-19 at 15-15-25 Welth.png",
        title:"Budget Planning",
        description:"Create and manage \nbudgets with intelligent \nrecommendations"
    }
    
];


const animarted = () => {
    return (
        <div className='pb-20 px-4 min-h-screen mt-20 '>
      <div className='container mx-auto text-center '>
       
            <div className='mt-10'>
            <h3 className='text-3xl font-bold'>Everything you need to manage your finances</h3>

                <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-8 ">
                    <ScrollVelocityContainer className="w-full">
                        <ScrollVelocityRow baseVelocity={6} direction={1} className="py-4 ">
                            {IMAGES_ROW_A.map((item, idx) => (
                                <div key={idx} className="mx-4 h-65 w-68 rounded-lg object-cover shadow-sm overflow-hidden border-2  flex justify-center items-center ">
                                    
                                    <div className='mt-7 flex flex-col gap-5'>
                                    <img src={item.image} alt="" className='  w-10  '/>
                                        <h3 className='text-start  break-words whitespace-pre-line text-xl font-bold'>
                                            {item.title}
                                        </h3>
                                        <div className='w-50 h-20 relative bottom-2'>
                                            <p className="  leading-relaxed text-start text-muted-foreground break-words whitespace-pre-line text-sm">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </ScrollVelocityRow>
                        <ScrollVelocityRow baseVelocity={6} direction={-1} className="py-4">
                            {IMAGES_ROW_B.map((item, idx) => (
                                 <div key={idx} className="mx-4 h-65 w-68 rounded-lg object-cover shadow-sm overflow-hidden border-2  flex justify-center items-center   ">
                                    
                                 <div className='mt-7 flex flex-col gap-5'>
                                 <img src={item.image} alt="" className='  w-10  '/>
                                     <h3 className='text-start  break-words whitespace-pre-line text-xl font-bold'>
                                         {item.title}
                                     </h3>
                                     <div className='w-50 h-20 relative bottom-2'>
                                         <p className="  leading-relaxed text-start text-muted-foreground break-words whitespace-pre-line text-sm">
                                             {item.description}
                                         </p>
                                     </div>
                                 </div>
                             </div>
                                
                            ))}
                        </ScrollVelocityRow>
                    </ScrollVelocityContainer>

                    <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
                </div>
                </div>
                </div>
                </div>
        
    )
}

export default animarted