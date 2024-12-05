import landing from "../Screens/images/landingpage.png";
import  dashboard from "../Screens/images/dashboard.png";


export const blogsData = [
    {
      id: 'overseas-companion-dashboard',
      title: "Overseas Companion Dashboard",
      date: "December 4, 2024",
      description: "A React-based web app designed to help students find their dream universities with enhanced engagement and seamless performance.",
      image: dashboard, 
      link: "/blog/overseas-companion-dashboard", 
      site:"https://overseas-companion.vercel.app/",
      techStack: [
        "Frontend: React.js, Bootstrap@5, AntD",
        "Backend: Node.js",
        "Database: MongoDB",
        "Authentication: JWT, Zod",
        "Hosting: Vercel"
      ],
      services: [
        "University Application Guidance",
        "Visa Assistance",
        "Accommodation Support",
        "Pre-departure Orientation",
        "Student Health and Insurance Services",
        "Local Support After Arrival"
      ],
      features: [
        "Personalized Consultation",
        "Streamlined Visa Process",
        "Accommodation Assistance",
        "Post-Arrival Support"
      ],
      howItWorks: [
        "Browse Universities",
        "Request a Consultation",
        "Submit Your Application",
        "Get Your Visa",
        "Prepare for Departure",
        "Arrive and Get Support"
      ],
      whyChooseUs: [
        "Expert Guidance",
        "Personalized Service",
        "Trusted Partners",
        "Comprehensive Support",
        "Global Reach"
      ]
    },
    {
        id: 'overseas-companion-landing',
        title: "Overseas Companion Landing",
        date: "November 21, 2024",
        description: "A React-based landing page designed to help students explore and connect with their ideal universities, featuring smooth performance and high engagement.",
        image: landing, 
        link: "/blog/overseas-companion-landing",
        site:"https://overseascompanion.vercel.app/",
        techStack: [
          "Frontend: React.js, Bootstrap@5, Material UI (MUI)",
          "Hosting: Vercel"
        ],
        services: [
          "University Search Assistance",
          "Interactive User Interface",
          "High-Performance Design"
        ],
        features: [
          "User-friendly Landing Page",
          "Real-time University Recommendations",
          "Dynamic University Search Filters"
        ],
        howItWorks: [
          "Explore Available Universities",
          "Filter by Location, Course, and Budget",
          "View University Details and Apply"
        ],
        whyChooseUs: [
          "Smooth and Fast User Experience",
          "Responsive Design Across Devices",
          "Easy Access to Information"
        ]
      }
      
    
  ];
  