import { NextResponse } from "next/server";
import { title } from "process";

const contactBar = {
  contactItems: [
    {
      type: "email",
      label: "bhavyatrivedi501@gmail.com",
      icon: "/images/icon/mail-icon.svg",
      link: "mailto:bhavyatrivedi501@gmail.com",
    },
    {
      type: "phone",
      label: "+91 7014133811",
      icon: "/images/icon/call-icon.svg",
      link: "tel:+917014133811",
    },
    // {
    //   type: "website",
    //   label: "www.mywebsite.com",
    //   icon: "/images/icon/web-icon.svg",
    //   link: "https://www.mywebsite.com",
    // },
  ],
  socialItems: [
    {
      platform: "github",
      icon: "/images/icon/github-icon.svg",
      link: "https://github.com/bhavya01433",
    },
    {
      platform: "linkedin",
      icon: "/images/icon/linkedin-icon.svg",
      link: "https://www.linkedin.com/in/bhavyatrivedi0/",
    },
    // {
    //   platform: "facebook",
    //   icon: "/images/icon/facebook-icon.svg",
    //   link: "https://facebook.com",
    // },
  ],
};

const educationData = {
  education: [
    {
      title: "Amity University- 2025",
      description:
        "(MCA) Master's of Computer Applications Relevant Coursework: Web & Cloud Development.     CGPA: 8.49",
    },
    {
      title: "SS Jain Subodh College - 2022",
      description: "Bcom (Hons) Business Administration",
    },
    // {
    //   title: "Master in User Experience - 2014",
    //   description:
    //     "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.",
    // },
  ],
  skills: [
    {
      name: "JavaScript",
      icon: "/images/home/education-skill/javascript-1.svg",
      rating: 4,
    },
    {
      name: "React.js",
      icon: "/images/home/education-skill/react-1.svg",
      rating: 4,
    },
    {
      name: "Next.js",
      icon: "/images/home/education-skill/nextjs-1.svg",
      rating: 4,
    },
    {
      name: "Tailwind CSS",
      icon: "/images/home/education-skill/tailwindcss-1.svg",
      rating: 3,
    },
    {
      name: "Python",
      icon: "/images/home/education-skill/python-1.svg",
      rating: 3,
    },
    {
      name: "Php",
      icon: "/images/home/education-skill/php-1.svg",
      rating: 3,
    },
    {
      name: "Supabase",
      icon: "/images/home/education-skill/icons-supabase.svg",
      rating: 3,
    },
    {
      name: "Convex",
      icon: "/images/home/education-skill/convex logo.svg",
      rating: 3,
    },
    {
      name: "n8n",
      icon: "/images/home/education-skill/n8n-logo.svg",
      rating: 3,
    },
  ],
};

const contactLinks = {
  socialLinks: [
    // {
    //   title: "Dribble",
    //   href: "/",
    // },
    {
      title: "Github",
      href: "https://github.com/bhavya01433",
    },
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/bhavyatrivedi0/",
    },
  ],
  contactInfo: [
    {
      type: "email",
      label: "bhavyatrivedi501@gmail.com",
      link: "mailto:bhavyatrivedi501@gmail.com",
    },
    {
      type: "phone",
      label: "+91 7014133811",
      link: "tel:+917014133811",
    },
  ],
};

export const GET = async () => {
  return NextResponse.json({
    contactBar,
    educationData,
    contactLinks,
  });
};
