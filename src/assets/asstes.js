import { FaCode, FaMicrochip, FaReact, FaSchool } from 'react-icons/fa6'
import profileImg from '../assets/profile.jpeg'
import { FaProjectDiagram } from 'react-icons/fa'

export const assets = {
    profileImg,
}

export const navMenu = ['Home', 'About', 'Work', 'Skills',  'Contact']

export const skillsData = [
    {
        icon: FaReact,
        title: 'Frontend',
        technologies: ['Html', 'CSS', 'JavaScript', 'Bootstrap', 'Tailwindcss', 'React.js']
    },
    {
        icon: FaMicrochip,
        title: 'Backend',
        technologies: ['Node.js', 'express.js', 'MongoDB']
    },
    {
        icon: FaCode ,
        title: 'Tools & Technology',
        technologies: ['Git Bash', 'Git', 'Github', 'Terminal', 'VS Code']
    },
]



export const projectData = [
    {
        title: 'Food Delivery',
        description: 'A modern immersive food delivery experience with HTML, CSS, JavaScript, tailwindcss and react.',
        image: 'https://tse2.mm.bing.net/th/id/OIP.sRInsIEHa47BesDvKlp02AHaFi?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
        tech: ['HTML', 'CSS', 'React', 'Tailwindcss', 'JavaScript'],
        link: 'https://food-delivery-king.netlify.app/'
    },
    {
        title: 'Smart AI Bot',
        description: 'immersive AI platform offering uploading image to ask questions and chats.',
        image: 'https://static.vecteezy.com/system/resources/thumbnails/068/023/286/small_2x/futuristic-ai-concept-half-human-half-digital-brain-for-technology-ai-illustration-vector.jpg',
        tech: ['HTML', 'CSS', 'React', 'Tailwindcss', 'JavaScript'],
        link: 'https://ainoob.netlify.app/'
    },
    {
        title: "Digital Clock",
        description: 'A modern digital clock displaying accurate time with a clean, responsive interface, smooth design, and easy-to-read format, built using HTML, CSS, and JavaScript for seamless real-time updates.',
        image: 'https://th.bing.com/th/id/OIP.Tx31uJsouXYCNekLC6rPVQHaEo?w=255&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3',
        tech: ['HTML', 'CSS', 'JavaScript'],
        link: 'https://digitalclockind.netlify.app/',
    },
]

export const profileData = [
    {
        icon: FaCode ,
        title: 'Language',
        technologies : ['Tailwindcss', 'JavaScript', 'MERN Stack']
    },
    {
        icon: FaSchool ,
        title: 'Education',
        technologies : ['Pursuing B.Tech in Information Technology']
    },
    {
        icon: FaProjectDiagram ,
        title: 'Projects',
        technologies : ['Built more than 3+']
    },
]