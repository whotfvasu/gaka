'use client'
import { motion } from 'motion/react'
import { XIcon, GithubIcon } from 'lucide-react' // <-- import GithubIcon
import { Spotlight } from '@/components/ui/spotlight'
import { Magnetic } from '@/components/ui/magnetic'
import { useState } from 'react'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogContainer,
} from '@/components/ui/morphing-dialog'
import Link from 'next/link'
import { AnimatedBackground } from '@/components/ui/animated-background'
import {
  PROJECTS,
  WORK_EXPERIENCE,
  BLOG_POSTS,
  EMAIL,
  SOCIAL_LINKS,
  SKILLS,
  SMALL_WINS,
  MORE_PROJECTS,
} from './data'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

type ProjectVideoProps = {
  src: string
}
type WinContentProps = {
  win: {
    title: string
    description: string
    image: string
    date: string
    id: string
    link?: string
  }
}

type MoreProjectCardProps = {
  project: {
    name: string
    description: string
    tags: string[]
    images: string[]
    id: string
    link?: string
    github?: string
  }
}

function MoreProjectCard({ project }: MoreProjectCardProps) {
  const [hoveredImageIndex, setHoveredImageIndex] = useState<number | null>(
    null,
  )

  return (
    <div className="group relative">
      {hoveredImageIndex !== null && (
        <div className="pointer-events-none absolute -top-32 right-0 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: -30 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="relative"
          >
            <img
              src={project.images[hoveredImageIndex]}
              alt={`${project.name} preview ${hoveredImageIndex + 1}`}
              className="h-40 w-80 rounded-xl object-cover ring-1 shadow-2xl ring-zinc-200/50 dark:ring-zinc-800/50"
            />
          </motion.div>
        </div>
      )}

      <div className="relative rounded-xl bg-zinc-50/40 p-6 ring-1 ring-zinc-200/50 transition-all duration-200 ring-inset hover:bg-zinc-100/50 dark:bg-zinc-950/40 dark:ring-zinc-800/50 dark:hover:bg-zinc-900/50">
        <div className="flex items-start gap-6">
          <div className="flex-1">
            <h4 className="mb-2 font-medium text-zinc-900 dark:text-zinc-50">
              {project.name}
            </h4>
            <p className="mb-4 text-sm text-zinc-600 dark:text-zinc-400">
              {project.description}
            </p>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-1">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="rounded-full bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-13">
            {/* Image cards container - Extended hover area */}
            <div
              className="relative -mx-4 -my-2 flex items-center gap-1 px-4 py-2"
              onMouseLeave={() => setHoveredImageIndex(null)}
            >
              {project.images.map((image, index) => (
                <div
                  key={index}
                  className="relative h-8 w-12 cursor-pointer overflow-hidden rounded-lg transition-all duration-300 hover:z-20 hover:scale-110"
                  style={{
                    transform: `translateX(${index * -8}px) rotate(${(index - 1) * 8}deg)`,
                    zIndex: hoveredImageIndex === index ? 20 : index + 10,
                  }}
                  onMouseEnter={() => setHoveredImageIndex(index)}
                >
                  <img
                    src={image}
                    alt={`${project.name} preview ${index + 1}`}
                    className="h-full w-full object-cover transition-opacity duration-200 hover:opacity-90"
                  />

                  <div className="absolute inset-0 bg-zinc-900/0 transition-colors duration-200 hover:bg-zinc-900/10 dark:hover:bg-zinc-100/10" />
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2">
              {/* Live Link Button */}
              {project.link && (
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex shrink-0 items-center gap-[1px] rounded-full bg-zinc-100 px-2.5 py-1 text-sm text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
                  whileHover={{
                    scale: 1.05,
                    rotate: [0, -1, 1, -1, 0],
                    transition: {
                      rotate: {
                        duration: 0.4,
                        repeat: Infinity,
                        repeatType: 'reverse',
                      },
                      scale: {
                        duration: 0.2,
                      },
                    },
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>View Live</span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                  >
                    <path
                      d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    />
                  </svg>
                </motion.a>
              )}

              {/* GitHub Link Button */}
              {project.github && (
                <MagneticSocialLink link={project.github}>
                  <GithubIcon className="h-4 w-4" />
                </MagneticSocialLink>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function WinContent({ win }: WinContentProps) {
  return (
    <>
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={win.image}
          alt={win.title}
          className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <div className="mb-2 flex items-center justify-between">
          <h4 className="font-medium text-zinc-900 dark:text-zinc-50">
            {win.title}
          </h4>
          <span className="text-sm text-zinc-500 dark:text-zinc-400">
            {win.date}
          </span>
        </div>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          {win.description}
        </p>
        {win.link && (
          <div className="mt-2 flex items-center text-xs text-zinc-500 dark:text-zinc-400">
            <span>View details</span>
            <svg
              width="12"
              height="12"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-1 h-3 w-3"
            >
              <path
                d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              />
            </svg>
          </div>
        )}
      </div>
    </>
  )
}

function ProjectVideo({ src }: ProjectVideoProps) {
  return (
    <MorphingDialog
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.3,
      }}
    >
      <MorphingDialogTrigger>
        <video
          src={src}
          autoPlay
          loop
          muted
          className="aspect-video w-full cursor-zoom-in rounded-xl"
        />
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent className="relative aspect-video rounded-2xl bg-zinc-50 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50">
          <video
            src={src}
            autoPlay
            loop
            muted
            className="aspect-video h-[50vh] w-full rounded-xl md:h-[70vh]"
          />
        </MorphingDialogContent>
        <MorphingDialogClose
          className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white p-1"
          variants={{
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: { delay: 0.3, duration: 0.1 },
            },
            exit: { opacity: 0, transition: { duration: 0 } },
          }}
        >
          <XIcon className="h-5 w-5 text-zinc-500" />
        </MorphingDialogClose>
      </MorphingDialogContainer>
    </MorphingDialog>
  )
}

function MagneticSocialLink({
  children,
  link,
}: {
  children: React.ReactNode
  link: string
}) {
  return (
    <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
      <a
        href={link}
        className="group relative inline-flex shrink-0 items-center gap-[1px] rounded-full bg-zinc-100 px-2.5 py-1 text-sm text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
        {/* Right arrow icon */}
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
        >
          <path
            d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </a>
    </Magnetic>
  )
}

export default function Personal() {
  return (
    <motion.main
      className="space-y-24"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row">
          <div className="mb-1 flex items-center gap-6">
            <div className="relative">
              <div className="relative overflow-hidden rounded-full bg-zinc-300/30 p-[2px] dark:bg-zinc-600/30">
                <div className="absolute inset-0 rounded-full">
                  <div className="animate-spin-slow absolute inset-0 rounded-full">
                    <div
                      className="absolute h-16 w-16 rounded-full opacity-60"
                      style={{
                        background:
                          'conic-gradient(from 0deg, transparent 270deg, rgb(39 39 42), rgb(63 63 70), rgb(82 82 91), transparent 360deg)',
                        filter: 'blur(8px)',
                      }}
                    />
                  </div>
                </div>
                <div className="relative z-10">
                  <img
                    src="/profile.jpg"
                    alt="Profile"
                    className="h-15 w-15 rounded-full bg-white object-cover dark:bg-zinc-950"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <p className="text-zinc-600 dark:text-zinc-400">
              Focused on creating intuitive and performant web experiences.
              Bridging the gap between design and development.
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Selected Projects</h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {PROJECTS.map((project) => (
            <div key={project.id} className="space-y-2">
              <div className="relative rounded-2xl bg-zinc-50/40 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50">
                <ProjectVideo src={project.video} />
              </div>

              {/* Project name + GitHub icon */}
              <div className="flex items-center justify-between px-1">
                {/* Project link */}
                <a
                  className="font-base group relative inline-block font-[450] text-zinc-900 dark:text-zinc-50"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.name}
                  <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 transition-all duration-200 group-hover:max-w-full"></span>
                </a>

                {/* Minimal GitHub icon (only if project.github is defined) */}
                {project.github && (
                  <MagneticSocialLink link={project.github}>
                    <GithubIcon className="h-5 w-5" />
                  </MagneticSocialLink>
                )}
              </div>

              {/* Project description */}
              <div className="px-1">
                <p className="text-base text-zinc-600 dark:text-zinc-400">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Work Experience</h3>
        <div className="flex flex-col space-y-2">
          {WORK_EXPERIENCE.map((job) => (
            <a
              className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
              href={job.link}
              target="_blank"
              rel="noopener noreferrer"
              key={job.id}
            >
              <Spotlight
                className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                size={64}
              />
              <div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950">
                <div className="relative flex w-full flex-row justify-between">
                  <div className="flex items-center space-x-3">
                    {job.logo && (
                      <img
                        src={job.logo}
                        alt={`${job.company} logo`}
                        className="h-10 w-10 rounded-full border border-zinc-200 object-cover dark:border-zinc-700"
                      />
                    )}
                    <h4 className="font-normal dark:text-zinc-100">
                      {job.title}
                    </h4>
                    <p className="text-zinc-500 dark:text-zinc-400">
                      {job.company}
                    </p>
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    {job.start} - {job.end}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Small Wins</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {SMALL_WINS.map((win) => (
            <div
              key={win.id}
              className="group relative overflow-hidden rounded-xl bg-zinc-50/40 ring-1 ring-zinc-200/50 transition-all duration-200 ring-inset hover:bg-zinc-100/50 dark:bg-zinc-950/40 dark:ring-zinc-800/50 dark:hover:bg-zinc-900/50"
            >
              {win.link ? (
                <a
                  href={win.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <WinContent win={win} />
                </a>
              ) : (
                <WinContent win={win} />
              )}
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Skills</h3>
        <div className="grid grid-cols-3 gap-6 sm:grid-cols-4 md:grid-cols-5">
          {SKILLS.map((skill) => (
            <div
              key={skill.id}
              className="group flex flex-col items-center space-y-2 rounded-xl bg-zinc-50/40 p-4 ring-1 ring-zinc-200/50 transition-all duration-200 ring-inset hover:bg-zinc-100/50 dark:bg-zinc-950/40 dark:ring-zinc-800/50 dark:hover:bg-zinc-900/50"
            >
              <div className="relative">
                <img
                  src={skill.logo}
                  alt={`${skill.name} logo`}
                  className="h-8 w-8 grayscale filter transition-transform duration-200 group-hover:scale-110 group-hover:grayscale-0"
                />
              </div>
              <span className="text-xs font-medium text-zinc-600 transition-colors duration-200 group-hover:text-zinc-900 dark:text-zinc-400 dark:group-hover:text-zinc-50">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">More Projects</h3>
        <div className="space-y-4">
          {MORE_PROJECTS.map((project) => (
            <MoreProjectCard key={project.id} project={project} />
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-3 text-lg font-medium">Blog</h3>
        <div className="flex flex-col space-y-0">
          <AnimatedBackground
            enableHover
            className="h-full w-full rounded-lg bg-zinc-100 dark:bg-zinc-900/80"
            transition={{
              type: 'spring',
              bounce: 0,
              duration: 0.2,
            }}
          >
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.uid}
                className="-mx-3 rounded-xl px-3 py-3"
                href={post.link}
                data-id={post.uid}
              >
                <div className="flex flex-col space-y-1">
                  <h4 className="font-normal dark:text-zinc-100">
                    {post.title}
                  </h4>
                  <p className="text-zinc-500 dark:text-zinc-400">
                    {post.description}
                  </p>
                </div>
              </Link>
            ))}
          </AnimatedBackground>
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Connect</h3>
        <p className="mb-5 text-zinc-600 dark:text-zinc-400">
          Feel free to contact me at{' '}
          <a className="underline dark:text-zinc-300" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
        </p>
        <div className="flex items-center justify-start space-x-3">
          {SOCIAL_LINKS.map((link) => (
            <MagneticSocialLink key={link.label} link={link.link}>
              {link.label}
            </MagneticSocialLink>
          ))}
          <MagneticSocialLink link="/final_resume.pdf">Resume</MagneticSocialLink>
        </div>
      </motion.section>
    </motion.main>
  )
}
