import { NextResponse } from "next/server";

const workData = [
  {
    image: "/images/work/Noova.png",
    title: "NoovaWatt Website",
    description: `A clean, modern website showcasing NoovaWatt\'s renewable energy solutions.`,
    href: "https://www.noovawatt.com/",
  },
  {
    image: "/images/work/ikshana.png",
    title: "iKshana Production Website",
    description: `A sleek platform highlighting iKshana Production\'s creative photography projects.`,
    href: "https://www.ikshanaproductions.com/",
  },
  {
    image: "/images/work/constructedge.png",
    title: "ConstructEdge Website",
    description:
      "An intuitive website for ConstructEdge, simplifying construction project management online.",
    href: "https://construct-edge.vercel.app/",
  },
  {
    image: "/images/work/mocksy.png",
    title: "Mocksy",
    description:
      "An AI-powered mock interview platform to practice and sharpen your professional skills.",
    href: "https://mocksy-pi.vercel.app/",
  },
  {
    image: "/images/work/social.png",
    title: "Social AI Post Generator",
    description:
      "Generates AI-crafted social media posts with captions, hashtags, and platform previews.",
    href: "https://social-post-tool.vercel.app/",
  },
  {
    image: "/images/work/todo.png",
    title: "AI ToDo App",
    description:
      "Smart AI-powered task management app that organizes and prioritizes your daily to-dos.",
    href: "https://ai-task-list.vercel.app/",
  },
];

export const GET = async () => {
  return NextResponse.json({
    workData,
  });
};
