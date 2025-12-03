export interface ContactInfo {
  email: string;
  github: string;
  linkedin: string;
  instagram: string;
  twitter: string; // REQUIRED
}

export interface SocialInfo {
  github: string;
  email: string;
  location: string;
  instagram: string;
  linkedin: string;
  twitter: string; // REQUIRED
}
export const config = {
    developer: {
        name: "Samraat",
        fullName: "Samraat Sharma ",
        title: "Software Engineer | Java • C/C++ • DSA 💻 | Clean-Code Mindset ",
        description: "I’m a Java developer who focuses on writing logical, clean, and structured code. I enjoy backend logic, problem-solving, and improving my skills every day."
    },
    social: {
  github: "https://github.com/Samraatsharma",
  email: "worksamraat@gmail.com",
  location: "India",
  instagram: "https://www.instagram.com/mr_samraat_/",
  linkedin: "https://www.linkedin.com/in/samraatsharma/",
  twitter: "",
} as SocialInfo,


    about: {
        title: "About Me",
        description: "I’m a Software Engineer  who  enjoys understanding , why things work—not just making them work.Working with: Java, C++, C, DSA, OOP"
    },
    experiences: [
    {
        position: "Java Full Stack Developer Intern",
        company: "Amdox Technologies",
        period: "2024 - Present",
        location: "Remote",
        description: "Working as a Java Full Stack Developer intern on real-world production modules. Responsible for backend logic, UI development, and integration of company-specific tools and technologies.",
        responsibilities: [
            "Building scalable backend modules using Java and Spring-based tools",
            "Developing responsive UIs using HTML, CSS, JavaScript, and Swing",
            "Integrating internal APIs and debugging company-specific software systems",
            "Collaborating with senior developers for feature delivery and testing"
        ],
        technologies: ["Java", "JDBC", "Swing", "APIs", "JavaScript", "MySQL"]
    },
    {
        position: "Content Writer Intern",
        company: "Nova Social",
        period: "2023",
        location: "Remote",
        description: "Created high-quality content for social impact and sustainability-focused initiatives. Helped the team in creating engaging articles, scripts, and marketing material.",
        responsibilities: [
            "Wrote blogs, articles, and social media content aligned with the brand’s vision",
            "Conducted research on sustainability and social entrepreneurship topics",
            "Collaborated with the content team to refine messaging and tone",
            "Helped create scripts for awareness and community-building campaigns"
        ],
        technologies: ["Content Writing", "Research", "SEO Basics", "Script Writing"]
    },
    {
        position: "Content Writer Intern",
        company: "Knewspaper",
        period: "2023",
        location: "Remote",
        description: "Worked as a content writer delivering news, blogs, and structured informational content tailored for young audiences.",
        responsibilities: [
            "Wrote well-researched articles and news breakdowns",
            "Developed engaging headlines and summaries for digital platforms",
            "Researched trending topics and maintained writing consistency",
            "Collaborated with editors for final content refinement"
        ],
        technologies: ["Content Writing", "Editing", "Research", "SEO Writing"]
    },
    {
        position: "Content Writer Intern",
        company: "Humari Pehchan NGO",
        period: "2022",
        location: "Remote",
        description: "Contributed to NGO campaigns by creating emotionally-driven content aimed at raising awareness and promoting social causes.",
        responsibilities: [
            "Created impactful stories and posts for awareness campaigns",
            "Developed blogs highlighting social issues and community work",
            "Coordinated with NGO volunteers for real case references",
            "Helped boost social reach through creative content writing"
        ],
        technologies: ["Content Writing", "Storytelling", "NGO Campaign Writing"]
    },
    {
        position: "Environmental Content Intern",
        company: "Earth5R",
        period: "2022",
        location: "Remote",
        description: "Worked with India’s leading environmental organization to produce research-backed content focused on sustainability and eco-solutions.",
        responsibilities: [
            "Researched environmental issues and sustainability projects",
            "Wrote blogs and reports on ecological challenges",
            "Created educational content for environmental awareness",
            "Participated in documentation of green initiatives"
        ],
        technologies: ["Research", "Content Writing", "Environmental Studies"]
    },
    {
        position: "Content Creator Intern",
        company: "Inamigos",
        period: "2021",
        location: "Remote",
        description: "Worked as a creative content creator for social and lifestyle-based projects, contributing to marketing campaigns and content strategy.",
        responsibilities: [
            "Created creative copy, captions, and script concepts",
            "Helped in planning and execution of marketing content",
            "Ensured content style matched the brand’s tone and audience",
            "Collaborated with the social team for posting schedules"
        ],
        technologies: ["Content Writing", "Copywriting", "Creative Strategy"]
    }
],

   projects: [
    {
        id: 1,
        title: "Snake Game (Java)",
        category: "Java Application",
        technologies: "Java, Swing, OOP",
        image: "/images/project-1.webp"
    },
    {
        id: 2,
        title: "Tic Tac Toe (Java)",
        category: "Java Application",
        technologies: "Java, Swing, Event Handling",
        image: "/images/project-2.webp"
    },
    {
        id: 3,
        title: "Calculator (Java)",
        category: "Java Application",
        technologies: "Java, Swing, UI Logic",
        image: "/images/project-3.webp"
    }
],
  contact: {
   email: "worksamraat@gmail.com",
   github: "https://github.com/Samraatsharma",
   linkedin: "https://www.linkedin.com/in/samraatsharma/",
   instagram: "https://www.instagram.com/mr_samraat_/",
   twitter: "",
} as ContactInfo,


    skills: {
        develop: {
    title: "Java Development",
    description: "Building logical and maintainable applications.",
    details:
        "I work with Java to build strong backend logic, structured architecture, and clean application flow. My focus is writing understandable and scalable code using OOP and DSA.",
    tools: ["Java", "C++", "C", "OOP", "DSA", "Swing (GUI)", "Git", "APIs"]
},
        design: {
    title: "Automation & Optimization",
    description: "Streamlining workflows using smart automation concepts.",
    details:
        "I explore practical automation ideas that reduce manual effort and simplify development workflows. My focus is on real-world productivity improvements.",
    tools: ["Automation Scripts", "AI Tools", "Task Optimization", "Workflow Simplification"]
}
    }
};


