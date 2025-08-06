type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
  github?: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
  logo?: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

type Skill = {
  name: string
  logo: string
  id: string
}

type SmallWin = {
  title: string
  description: string
  image: string
  date: string
  id: string
  link?: string
}

type MoreProject = {
  name: string
  description: string
  tags: string[]
  images: string[]
  id: string
  link?: string
  github?: string
}

export const MORE_PROJECTS: MoreProject[] = [
  {
    name: 'Exam Seat Planner',
    description:
      'A comprehensive MERN stack application for managing exam seating arrangements in educational institutions with intelligent seat allocation algorithms. ',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    images: ['/task-app-1.jpg', '/task-app-2.jpg', '/task-app-3.jpg'],
    id: 'more-project-1',
    link: 'https://github.com/whotfvasu/task-manager',
    github: 'https://github.com/whotfvasu/Exam-Seat-Planner',
  },
]

export const SMALL_WINS: SmallWin[] = [
  {
    title: 'Won HSBC Hackathon 2025',
    description:
      'Worked on the problem statement for full stack financial dashboard platfrom and delivered the desired result that led to win and Internship at HSBC.',
    image: '/hsbc.png',
    date: 'Aug 2025',
    id: 'win1',
    link: 'https://github.com/example/repo/pull/123',
  },
]

export const SKILLS: Skill[] = [
  {
    name: 'HTML',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    id: 'html',
  },
  {
    name: 'CSS',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    id: 'css',
  },
  {
    name: 'JavaScript',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    id: 'javascript',
  },
  {
    name: 'React',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    id: 'react',
  },
  {
    name: 'Next.js',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    id: 'nextjs',
  },
  {
    name: 'Node.js',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    id: 'nodejs',
  },
  {
    name: 'Express.js',
    logo: 'https://skillicons.dev/icons?i=express',
    id: 'express',
  },
  {
    name: 'NestJS',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nestjs/nestjs-original.svg',
    id: 'nestjs',
  },
  {
    name: 'PostgreSQL',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    id: 'postgresql',
  },
  {
    name: 'TypeORM',
    logo: 'https://avatars.githubusercontent.com/u/20165699?s=200&v=4',
    id: 'typeorm',
  },
]

export const PROJECTS: Project[] = [
  {
    name: 'Alum Connect',
    description:
      'A seamless platform connecting alumni and students through announcements, events, and networking.',
    link: 'https://bit.ly/Alum-Connect',
    video:
      'https://res.cloudinary.com/dffikjcwb/video/upload/v1742478724/alumconnectWalkthrough_t2elup.mp4',
    id: 'project1',
    github: 'https://github.com/AnujSinghML/ALUM_CONNECT',
  },
  {
    name: 'Prescripto',
    description: 'Platform to Book Appointment With Trusted Doctors',
    link: 'https://prescripto-frontend-sandy.vercel.app/',
    video:
      'https://res.cloudinary.com/dffikjcwb/video/upload/v1742478094/prescriptowalkthrough_kcizpf.mp4',
    id: 'project2',
    github: 'https://github.com/whotfvasu/Prescripto',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Fitpage',
    title: 'SDE Intern',
    start: '2025',
    end: 'Present',
    link: 'https://fitpage.in',
    id: 'work1',
    logo: 'https://fitpage.in/favicon.ico',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: "How I'd Build a Scalable, Reliable Webhook Delivery System",
    description:
      'Building a production-ready webhook system with queues, retries, and monitoring.',
    link: '/blog/webhooks',
    uid: 'blog-2',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/whotfvasu',
  },
  {
    label: 'Twitter',
    link: 'https://x.com/VasuParash38004',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/vasuparashar18/',
  },
]

export const EMAIL = 'vasudocode@gmail.com'
