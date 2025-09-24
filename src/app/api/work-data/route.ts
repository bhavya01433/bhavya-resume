import { NextResponse } from "next/server";

const workData = [
  {
    image: "/images/work/Noova.png",
    title: "NoovaWatt Website",
    client: "John Honnai",
    href: "https://www.noovawatt.com/",
  },
  {
    image: "/images/work/ikshana.png",
    title: "iKshana Production Website",
    client: "John Honnai",
    href: "https://www.ikshanaproductions.com/",
  },
  {
    image: "/images/work/constructedge.png",
    title: "ConstructEdge Website",
    client: "John Honnai",
    href: "https://construct-edge.vercel.app/",
  },
  {
    image: "/images/work/mocksy.png",
    title: "Mocksy",
    client: "John Honnai",
    href: "https://mocksy-pi.vercel.app/",
  },
  {
    image: "/images/work/social.png",
    title: "Social AI Post Generator",
    client: "John Honnai",
    href: "https://social-post-tool.vercel.app/",
  },
  {
    image: "/images/work/todo.png",
    title: "AI ToDo App",
    client: "John Honnai",
    href: "https://ai-task-list.vercel.app/",
  },
];

export const GET = async () => {
  return NextResponse.json({
    workData,
  });
};
