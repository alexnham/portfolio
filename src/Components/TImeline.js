import React from "react"
import { Chrono } from "react-chrono";
import GL from "../Images/GL.png"

const Timeline = () => {
    const items = [
        {
            title: "August 2023",
            cardSubtitle: "Website Coordinator",
            cardDetailedText: "As a Website Coordinator, I utilize CSS to enhance client web stores for exceptional digital experiences. I design custom Python automation scripts, improving workflow processes by over 100%. Additionally, I proficiently manage client data with Microsoft Excel, contributing to streamlined operations. My focus on innovation and attention to detail ensures optimal performance and outstanding results.",
            media: {
                name: "Gagnon Levesque",
                source: {
                    url: `${GL}`
                },
                type: "IMAGE"
            },

        },
        {
            title: "March 2024",
            cardTitle: "S & P Agricultural Services",
            cardSubtitle: "Web Developer",
            cardDetailedText: "Developed and launched the company website, achieving a modern and user-friendly online presence. Conduct regular updates and enhancements to maintain optimal performance and usability. Utilize React, Tailwind, and other web development technologies to craft engaging and responsive user interfaces. Perform ongoing maintenance and troubleshooting to address technical issues and enhance site functionality.",

        },
    ];

    return (
        <div className="">
            <Chrono items={items}
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