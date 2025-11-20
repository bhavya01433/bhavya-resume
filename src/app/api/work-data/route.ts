import { NextResponse } from "next/server";

const workData = [
  {
    image: "/images/work/Noova.png",
    title: "NoovaWatt Website",
    description: `A clean, modern website showcasing NoovaWatt's renewable energy solutions with responsive design and smooth animations.`,
    href: "https://www.noovawatt.com/",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    category: "Corporate Website",
    features: ["Responsive Design", "SEO Optimized", "Smooth Animations", "Performance Optimized"]
  },
  {
    image: "/images/work/ikshana.png",
    title: "iKshana Production Website",
    description: `A sleek platform highlighting iKshana Production's creative photography projects with elegant gallery and portfolio showcase.`,
    href: "https://www.ikshanaproductions.com/",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Image Optimization"],
    category: "Portfolio Website",
    features: ["Image Gallery", "Portfolio Showcase", "Contact Forms", "Mobile Responsive"]
  },
  {
    image: "/images/work/constructedge.png",
    title: "ConstructEdge Website",
    description:
      "An intuitive website for ConstructEdge, simplifying construction project management online with user-friendly interface.",
    href: "https://construct-edge.vercel.app/",
    techStack: [ "React", "Custom CSS", "Vercel"],
    category: "Business Website",
    features: ["Project Management", "User Dashboard", "Responsive UI", "Fast Loading"]
  },
  {
    image: "/images/work/mocksy.png",
    title: "Mocksy",
    description:
      "An AI-powered mock interview platform to practice and sharpen your professional skills with real-time feedback.",
    href: "https://mocksy-pi.vercel.app/",
    techStack: ["Next.js", "TypeScript", "AI Integration", "Gemini API", "Tailwind CSS"],
    category: "AI Application",
    features: ["AI-Powered Interviews", "Real-time Feedback", "Voice Recognition", "Analytics Dashboard"]
  },
  {
    image: "/images/work/social.png",
    title: "Social AI Post Generator",
    description:
      "Generates AI-crafted social media posts with captions, hashtags, and platform previews for multiple social networks.",
    href: "https://social-post-tool.vercel.app/",
    techStack: ["Next.js",  "AI Integration", "Gemini API", "Tailwind CSS"],
    category: "AI Tool",
    features: ["Multi-platform Support", "AI Content Generation", "Hashtag Suggestions", "Post Preview", "AI Image Generation"]
  },
  {
    image: "/images/work/todo.png",
    title: "AI ToDo App",
    description:
      "Smart AI-powered task management app that organizes and prioritizes your daily to-dos with intelligent suggestions.",
    href: "https://ai-task-list.vercel.app/",
    techStack: ["Next.js", "React", "AI Integration", "Convex", "Tailwind CSS"],
    category: "AI Application",
    features: ["AI Task Prioritization", "Smart Suggestions", "Real-time Sync", "Task Analytics"]
  },
];

export const GET = async () => {
  return NextResponse.json({
    workData,
  });
};
