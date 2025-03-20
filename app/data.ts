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
    github: 'https://github.com/whotfvasu/Prescripto'
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'AlumConnect',
    title: 'Founder',
    start: '2025',
    end: 'Present',
    link: 'https://bit.ly/Alum-Connect',
    id: 'work1',
  },
  
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'What Not to do in College.',
    description: 'A dump of mistakes I made in college.',
    link: '/blog/mistakes-I-made-in-college',
    uid: 'blog-1',
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
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/whovasu',
  },
]

export const EMAIL = 'vasuparashar18@gmail.com'
