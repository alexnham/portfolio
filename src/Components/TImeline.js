import React from "react"
import { Chrono } from "react-chrono";

const items = [
    {
        title: "August 2023",
        cardTitle: "Gagnon Levesque",
        cardSubtitle: "Website Coordinator",
        cardDetailedText: "As a Website Coordinator, I utilize CSS to enhance client web stores for exceptional digital experiences. I design custom Python automation scripts, improving workflow processes by over 100%. Additionally, I proficiently manage client data with Microsoft Excel, contributing to streamlined operations. My focus on innovation and attention to detail ensures optimal performance and outstanding results.",
      
    },
    {
        title: "April 2024",
        cardTitle: "AQX AI",
        cardSubtitle: "Software Developer Intern",    
        cardDetailedText: "In this role, I developed and optimized a real-time communication server integrated with AI, significantly reducing latency by over 90%. I integrated various speech-to-text and text-to-speech solutions, designed a user-friendly interface for initiating outbound calls, and enhanced system performance by 50%. Additionally, I conducted extensive testing on Azure cloud services to improve scalability and integration.",      
    }
];

const Timeline = () => {
   
    return (
        <div className="">
            <Chrono items={items}
                mediaSettings={{
                    fit: 'cover',
                    align: 'center'
                }}
                disableToolbar
                disableClickOnCircle
                activeItemIndex
                mode="VERTICAL_ALTERNATING"
                theme={{
                    titleColor: 'white',
                    primary: 'black',
                    secondary: '#333',
                    titleColorActive: 'white',
                    cardTitleColor: "black"

                }}
                classNames={{
                    cardTitle: 'card-title',
                    cardText: 'card-text'
                }}
            />
        </div>
    )
}

export default Timeline