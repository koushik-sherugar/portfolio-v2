import React, { useEffect, useState } from "react";
import { Timeline } from "./ui/Timeline";
import { HoverEffect } from "./ui/card-hover-effect";
import { codezyngLandingPage, codezyngZupaloop, tavantRealtorLogo, tavantUpnestLogo, trikl1, trikl2, trikl3, trikl4 } from "@/public/assets/ExperienceImages/index"
const ExperienceTimeline = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(experienceDetailsMapping(ExperienceData));
  }, []);

  const HoverEffectImages = {
    tavant: [
      {
        imgSrc: tavantRealtorLogo,
        link: "https://www.realtor.com/",
        title: "realtor logo",
      },
      {
        imgSrc: tavantUpnestLogo,
        link: "https://upnest.com/re/",
        title: "upnest logo",
      },

    ],
    trikl: [
      {
        imgSrc: trikl1,
        link: "https://trikl.com/",
        title: "trikl img",
      },
      {
        imgSrc: trikl4,
        link: "https://trikl.com/",
        title: "trikl img2",
      },
      {
        imgSrc: trikl3,
        link: "https://trikl.com/",
        title: "trikl img3",
      },
      {
        imgSrc: trikl2,
        link: "https://trikl.com/",
        title: "trikl img4",
      }
    ],
    codezyng: [
      {
        imgSrc: codezyngLandingPage,
        link: "https://www.codezyng.com/",
        title: "codezyng landing page",
      },
      {
        imgSrc: codezyngZupaloop,
        link: "https://zupaloop.com/",
        title: "zupaloop landing page",
      }
    ],
    Freelancing: [],
  };

  const ExperienceData = [
    {
      companyName: "Tavant",
      role: "Senior Software Engineer",
      timeSpan: "2024 - Present",
      shortDescription:
        "Designed and developed scalable web applications for enterprise clients, efficiently handling millions of users.",
      longDescription: [
        {
          projectTitle: "Realtor.com (100 million+ monthly users):",
          description: [
            "USA based real estate company with #2 position in the market",
            "Worked on microservice architecture based modern technology stack, ensuring seamless integration and enhanced functionality.",
            "Built APIs which are currently handling 5 million+ requests per day.",
            "Built a highly scalable search engine for real estate listings, improving user experience and performance.",
          ],
        },
      ],
      images: HoverEffectImages.tavant,
    },
    {
      companyName: "TRIKL",
      role: "Software Engineer",
      timeSpan: "2023 - 2024",
      shortDescription:
        "Joined as the first founding engineer and lead developer. I handled the development of the entire platform, from the ground up.",
      longDescription: [
        {
          projectTitle: "Community Management Platform:",
          description: [
            "Collaborated with founders to develop a centralized community platform integrating Telegram, Discord, and WhatsApp, reducing administrative overhead by 60% and boosting member participation by 50% through engagement strategies and reward systems.",
            "Built an AI Retrieval-Augmented Generation (RAG) system enabling community managers to query and retrieve insights from conversations across platforms",
            "Developed advanced bots for Telegram and Discord with custom commands and moderation features",
            "Technologies Used: MERN, GraphQL, Tailwind CSS, React Query, Telegram API, Discord API, Replit, Telegram Bot, Discord Bot, Pinecone, ChromaDB, AWS, OpenAI",
          ],
        },
        {
          projectTitle: "AI Content Creation Platform",
          description: [
            "Led the team and drove technical initiatives, mentoring interns to improve development efficiency and ensuring on-time project delivery.",
            "Built an AI-powered content creation platform trained on thousands of viral LinkedIn posts, reducing content creation time by 80%.",
            "Technologies Used: MERN, GraphQL, Zustand, Ant Design, OpenAI, LLM, Fine-tuning, LinkedIn Marketing API, Node Cron, SDXL, DALL-E, Fabric.js, WYSIWYG editors, Cloudinary",
          ],
        },
        {
          projectTitle: "LinkedIn Automation Tool",
          description: [
            "Developed a cloud-based LinkedIn automation tool to streamline sales campaigns, automating connection requests, follow-ups, and post engagements, increasing lead generation efficiency by 70%.",
            "Created an advanced scraping system to analyze LinkedIn profiles and generate hyper-personalized posts, improving campaign effectiveness by 60%.",
            "Technologies Used: MERN, AWS, GraphQL, Puppeteer, Chromium Browser, RabbitMQ",
          ],
        },
      ],
      images: HoverEffectImages.trikl,
    },
    {
      companyName: "CodeZyng",
      role: "Full Stack Developer",
      timeSpan: "2022 - 2023",
      shortDescription:
        "Joined as a full stack developer and worked on multiple projects.",
      longDescription: [
        {
          projectTitle: "E-commerce & IOS screen recorder App",
          description: [
            "Solely built an e-commerce app for a client using React Native and Shopify API, significantly enhancing their sales.",
            "Engineered a smart AI screen recorder for iOS with iCloud storage, enabling object-based search across videos and optimizing search speed 10 times faster.",
            "Technologies Used: React Native, Redux, Tailwind CSS, GCP, BigQuery, Algolia Search Engine, Nest.js, PostgreSQL, Shopify",
          ],
        },
      ],
      images: HoverEffectImages.codezyng,
    },
  ];

  function experienceDetailsMapping(ExperienceData: any) {
    return ExperienceData.map((experience: any) => {
      return {
        title: experience.companyName,
        role: experience.role,
        timeSpan: experience.timeSpan,
        content: (
          <div>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
              {experience.shortDescription}
            </p>
            {experience.longDescription.map((project: any, projectIndex: number) => (
              <div key={`project-${projectIndex}`}>
                <div className="flex gap-2 mb-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                  ✅ {project.projectTitle}
                </div>
                <ul className="list-disc pl-4 mb-3">
                  {project.description.map((point: any, pointIndex: number) => (
                    <li key={`point-${pointIndex}`} className="pb-1 text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            {experience.images && experience.images.length > 0 && (
              <HoverEffect
                items={experience.images.map((image: any) => ({
                  title: image.title,
                  link: image.link,
                  imgSrc: image.imgSrc,
                }))}
              />
            )}
          </div>
        ),
      };
    });
  }

  return (
    <div>
      <Timeline data={data} />
    </div>
  );
};

export default ExperienceTimeline;
