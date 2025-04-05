export const data = {
    personalData: {
        name: "Aniket Raj",
        age: 25,
        address: "Bangalore,Karnataka,In",
        phone: "+91 8840390107",
        email: "aniketraj.xyz+work@gmail.com",
        profilePhotoUrl: '/profile-pic.png'
    },
    professionalData: {
        about: `
        Full Stack Developer and Trainer with more than 4 years of professional experience building responsive web applications using modern JavaScript frameworks. Skilled in React, Node.js, Python, GenAI, Java and Next.js with experience teaching web development at multiple universities and corporations.
        `,
        designations: [
            {
                title: "Full Stack Developer",
                current: true
            },
            {
                title: "Trainer",
                current: true
            },
            {
                title: "Mobile App Developer",
                current: false
            }
        ]
    },
    socialData: [
        {
            title: "Linkedin",
            url: "https://www.linkedin.com/in/aniket-raj-1549881a3"
        },
        {
            title: "Github",
            url: "https://github.com/exewhyz"
        },
        {
            title: "Twitter",
            url: "https://twitter.com/exwhyzed_op"
        },
        // {
        //     title: "YouTube",
        //     url: "https://www.youtube.com/"
        // }
    ],
    skills: ["JavaScript", "React", "Node.js", "HTML", "CSS", "NextJs", "Python", "MongoDB", "SQL", "GenAI", "DSA", "Java"],
    interests: ["Photography", "Sports"],
    hobbies: ["Reading", "Gardening", "Hiking"],
    languages: ["English", "Hindi",],
    references: [
        {
            name: "Shivam Rai",
            phone: "+91 8318089313",
            email: "shivamvns258@gmail.com"
        },
        {
            name: "Abhishek Singh Chandel",
            phone: "+91 9621962664",
            email: "nav.abhishekchandel@gmail.com"
        }
    ],
    certifications: [
        {
            title: "Full Stack Web Developement Intership",
            institution: "Compsoft Technologies Pvt. Ltd",
            year: 2022
        },
        {
            title: "Backend Web Development",
            institution: "Triplebyte",
            year: 2022
        }
    ],
    projects: [
        {
            title: "Portfolio",
            description: "A static React website showcasing my skills and projects",
            technologies: ["HTML", "CSS", "JavaScript", "React", "NextJs"],
            url: "https://aniketraj.online/",
            githubUrl: "https://github.com/exewhyz/portfolio-web",
            startDate: "2025-04-04",
            endDate: "2025-04-05"
        },
        {
            title: "Live Docs",
            description: "Realtime collaboration features using MERN stack for live document management",
            technologies: ["HTML", "CSS", "JavaScript", "Typescript", "React", "NextJs", "NodeJS"],
            url: "https://live",
            githubUrl: "https://github.com/exewhyz/Live-Docs",
            startDate: "2024-11-06",
            endDate: "2024-11-28"
        },
        {
            title: "Robota",
            description: "SaaS AI Platform with Next.js 13, React, Tailwind, Prisma, Stripe with features of Image Generation Tool,Video Generation Tool,Conversation Generation Tool,Music Generation Tool",
            technologies: ["Typescript", "React", "NextJs", "NodeJS", "Prisma", "Stripe", "MySQL", "OpenAI", "Tailwind"],
            url: "https://robota.vercel.app",
            githubUrl: "https://github.com/exewhyz/Robota",
            startDate: "2022-08-04",
            endDate: "2022-08-22"
        },
        {
            title: "E-Commerce Admin Dashboard",
            description: "A fully functional e-commerce addmin Website built using React, NextJs, and Node.js where users can create their multiple own stores and mangae the stores",
            technologies: ["HTML", "CSS", "JavaScript", "Typescript", "React", "NextJs", "NodeJS", "Zustand", "Prisma", "Stripe", "PostgreSQL",],
            url: "https://advanceshopperscms.vercel.app/",
            githubUrl: "https://github.com/exewhyz/Advance-Ecommerce-CMS",
            startDate: "2022-09-01",
            endDate: "2022-10-31"
        }

    ],
    education: [
        {
            degree: "Bachelor of Engineering",
            institution: "Cambridge Institute of Technology",
            location: "Bangalore",
            startYear: 2019,
            present: false,
            endYear: 2023,
            stream: "Information Science and Engineering"
        },
    ],
    workExperience: {
        trainingExperience: {
            yearsOfExperience: 4,
            lists: [
                {
                    institution: "Shri Vasavi Engineering College | Andhra Pradesh",
                    course: "React, NextJs, Nodejs, PostgreSQL",
                    duration: "7 days"
                },
                {
                    institution: "IBM (Corporate Training)",
                    course: "MERN",
                    duration: "2 months"
                },
                {
                    institution: "Christ University | Bangalore",
                    course: "Nodejs",
                    duration: "15 days"
                },
                {
                    institution: "Capgemini (Corporate Training)",
                    course: "React",
                    duration: "1 months"
                },
                {
                    institution: "Parul University | Vadodara,Gujrat",
                    course: "Full Stack Web Development",
                    duration: "1 Year"
                },
                {
                    institution: "Malla Reddy University | Hyderabad, Telangana",
                    course: "MERN Stack",
                    duration: "3 months"
                },
                {
                    institution: "Guru Nanak Devasthan Mission NIT | Raipur, Chhattisgarh",
                    course: "Python and AI",
                    duration: "1 month"
                },
                {
                    institution: "Sri Venkateswara Institute of Technology | Chennai, Tamil Nadu",
                    course: "Python and SQL",
                    duration: "3 months"
                },
                {
                    institution: "RNSIT | Bangalore",
                    course: "Web Development",
                    duration: "2 months"
                },
                {
                    institution: "BIT | Bangalore",
                    course: "Python",
                    duration: "3 months"
                },
                {
                    institution: "Chitkara University | Punjab",
                    course: "SQL",
                    duration: "7 days"
                }
            ],
        },
        professionalExperience: {
            yearsOfExperience: 2,
            lists: [
                {
                    company: "LearnBie",
                    location: "Remote",
                    position: "MERN Developer",
                    startYear: 2024,
                    present: true,
                    endYear: undefined,
                    projects: [
                        "Developed a web application for managing inventory and sales",
                        "Collaborated with team members to implement new features and bug fixes",
                        "Participated in code reviews and testing"
                    ],
                    contributions: [
                        "Built a scalable web application using React and Next.js",
                        "Designed and implemented user authentication and authorization mechanisms",
                        "Worked on performance optimization and security improvements"
                    ]
                },
                {
                    company: "NordStone",
                    location: "Remote",
                    position: "React Native Developer",
                    startYear: 2023,
                    present: false,
                    endYear: 2024,
                    projects: [
                        "Developed a mobile application for managing inventory and sales",
                        "Collaborated with team members to implement new features and bug fixes",
                        "Participated in code reviews and testing"
                    ],
                    contributions: [
                        "Built a cross-platform mobile application using React Native",
                        "Integrated Backend Apis to the Native Apps"
                    ]
                }
            ],
        }
    }
}

export const tabs = ["About", "Experience", "Education", "Projects", "Contact"]

export const links = {
    navMain: [
        {
            title: "Pages",
            url: "#",
            items: [
                {
                    title: "Home",
                    url: "/",
                    isActive: true,
                },
            ],
        },
        // {
        //     title: "Experiences",
        //     url: "#experiences",
        //     items: [
        //         {
        //             title: "Routing",
        //             url: "#",
        //             isActive: false,
        //         },
        //     ],
        // },
    ],
}