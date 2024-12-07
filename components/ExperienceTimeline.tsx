import React, { useEffect, useState } from "react";
import { Timeline } from "./ui/Timeline";
import { HoverEffect } from "./ui/card-hover-effect";

const ExperienceTimeline = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(experienceDetailsMapping(ExperienceData));
  }, []);

  const HoverEffectImages = {
    tavant: [
      {
        imgSrc: "",
        link: "https://assets.aceternity.com/templates/startup-1.webp",
        title: "startup template",
      },
      {
        imgSrc: "",
        link: "https://assets.aceternity.com/templates/startup-1.webp",
        title: "startup template",
      },
      {
        imgSrc: "",
        link: "https://assets.aceternity.com/templates/startup-2.webp",
        title: "startup template",
      },
      {
        imgSrc: "",
        link: "https://assets.aceternity.com/templates/startup-3.webp",
        title: "startup template",
      },
    ],
    trikl: [],
    codezyng: [],
    Freelancing: [],
  };

  const ExperienceData = [
    {
      companyName: "Tavant",
      role: "Senior Software Engineer",
      timeSpan: "2018 - 2020",
      shortDescription:
        "Designed and developed scalable web applications for enterprise clients, efficiently handling millions of users.",
      longDescription: [
        {
          projectTitle: "Realtor.com (Mexico’s #1 Real Estate Platform):",
          description: [
            "Mexico's number 1 real estate company",
            "Led the migration of Upnest.com, acquired by Realtor.com, to a modern technology stack, ensuring seamless integration and enhanced functionality.",
            "Built a highly scalable search engine for real estate listings, improving user experience and performance.",
          ],
        },
      ],
      images: HoverEffectImages.tavant,
    },
    {
      companyName: "TRIKL",
      role: "Software Engineer",
      timeSpan: "2020 - 2023",
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
      timeSpan: "2023 - Present",
      shortDescription:
        "Developed a complete e-commerce application for a client using the Shopify API as the backend, resulting in a 30% increase in sales.",
      longDescription: [
        {
          projectTitle: "E-commerce App & IOS screen recorder App",
          description: [
            "Engineered a smart AI-powered screen recorder for iOS with seamless iCloud integration, enabling object-based search across videos and optimizing search speeds to be 10x faster than conventional methods.",
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
            {experience.longDescription.map((project: any) => {
              return (
                <div>
                  <div className="flex gap-2 mb-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                    ✅ {project.projectTitle}
                  </div>
                  <ul className="list-disc pl-4">
                    {project.description.map((point: any) => {
                      return (
                        <li className="text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                          {point}
                        </li>
                      );
                    })}
                  </ul>
                  {/* Images display */}
                  {/* <div className="grid "> */}
                  {/* <div className="flex flex-wrap gap-4 mt-4"> */}
                  <HoverEffect
                    items={experience.images.map((image: any) => ({
                      title: image.title,
                      link: image.link,
                      imgSrc: image.imgSrc,
                    }))}
                    // className="flex gap-4 mt-4"
                  />
                  {/* </div> */}
                  {/* </div> */}
                </div>
              );
            })}
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

// import React, { useEffect, useState } from "react";
// import { Timeline } from "./ui/Timeline";
// import Image from "next/image";
// import { HoverEffect } from "./ui/card-hover-effect";

// const ExperienceTimeline = () => {
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     setData(experienceDetailsMapping(ExperienceData));
//   }, []);

//   const HoverEffectImages = {
//     tavant: [
//       {
//         link: "https://assets.aceternity.com/templates/startup-1.webp",
//         title: "startup template",
//         width: 500,
//         height: 500,
//         className:
//           "rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
//       },
//       {
//         link: "https://assets.aceternity.com/templates/startup-1.webp",
//         title: "startup template",
//         width: 500,
//         height: 500,
//         className:
//           "rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
//       },
//       {
//         link: "https://assets.aceternity.com/templates/startup-2.webp",
//         title: "startup template",
//         width: 500,
//         height: 500,
//         className:
//           "rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
//       },
//       {
//         link: "https://assets.aceternity.com/templates/startup-3.webp",
//         title: "startup template",
//         width: 500,
//         height: 500,
//         className:
//           "rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px",
//       },
//     ],
//     trikl: [],
//     codezyng: [],
//     Freelancing: [],
//   };

//   const ExperienceData = [
//     {
//       companyName: "Tavant",
//       role: "Senior Software Engineer",
//       timeSpan: "2018 - 2020",
//       shortDescription:
//         "Designed and developed scalable web applications for enterprise clients, efficiently handling millions of users.",
//       longDescription: [
//         {
//           projectTitle: "Realtor.com (Mexico’s #1 Real Estate Platform):",
//           description: [
//             "Mexico's number 1 real estate company",
//             "Led the migration of Upnest.com, acquired by Realtor.com, to a modern technology stack, ensuring seamless integration and enhanced functionality.",
//             "Built a highly scalable search engine for real estate listings, improving user experience and performance.",
//           ],
//         },
//       ],
//       images: HoverEffectImages.tavant,
//     },
//     {
//       companyName: "TRIKL",
//       role: "Software Engineer",
//       timeSpan: "2020 - 2023",
//       shortDescription:
//         "Joined as the first founding engineer and lead developer. I handled the development of the entire platform, from the ground up.",
//       longDescription: [
//         {
//           projectTitle: "Community Management Platform:",
//           description: [
//             "Collaborated with founders to develop a centralized community platform integrating Telegram, Discord, and WhatsApp, reducing administrative overhead by 60% and boosting member participation by 50% through engagement strategies and reward systems.",
//             "Built an AI Retrieval-Augmented Generation (RAG) system enabling community managers to query and retrieve insights from conversations across platforms",
//             "Developed advanced bots for Telegram and Discord with custom commands and moderation features",
//             "Technologies Used: MERN, GraphQL, Tailwind CSS, React Query, Telegram API, Discord API, Replit, Telegram Bot, Discord Bot, Pinecone, ChromaDB, AWS, OpenAI",
//           ],
//         },
//         {
//           projectTitle: "AI Content Creation Platform",
//           description: [
//             "Led the team and drove technical initiatives, mentoring interns to improve development efficiency and ensuring on-time project delivery.",
//             "Built an AI-powered content creation platform trained on thousands of viral LinkedIn posts, reducing content creation time by 80%.",
//             "Technologies Used: MERN, GraphQL, Zustand, Ant Design, OpenAI, LLM, Fine-tuning, LinkedIn Marketing API, Node Cron, SDXL, DALL-E, Fabric.js, WYSIWYG editors, Cloudinary",
//           ],
//         },
//         {
//           projectTitle: "LinkedIn Automation Tool",
//           description: [
//             "Developed a cloud-based LinkedIn automation tool to streamline sales campaigns, automating connection requests, follow-ups, and post engagements, increasing lead generation efficiency by 70%.",
//             "Created an advanced scraping system to analyze LinkedIn profiles and generate hyper-personalized posts, improving campaign effectiveness by 60%.",
//             "Technologies Used: MERN, AWS, GraphQL, Puppeteer, Chromium Browser, RabbitMQ",
//           ],
//         },
//       ],
//       images: HoverEffectImages.trikl,
//     },
//     {
//       companyName: "CodeZyng",
//       role: "Full Stack Developer",
//       timeSpan: "2023 - Present",
//       shortDescription:
//         "Developed a complete e-commerce application for a client using the Shopify API as the backend, resulting in a 30% increase in sales.",
//       longDescription: [
//         {
//           projectTitle: "E-commerce App & IOS screen recorder App",
//           description: [
//             "Engineered a smart AI-powered screen recorder for iOS with seamless iCloud integration, enabling object-based search across videos and optimizing search speeds to be 10x faster than conventional methods.",
//             "Technologies Used: React Native, Redux, Tailwind CSS, GCP, BigQuery, Algolia Search Engine, Nest.js, PostgreSQL, Shopify",
//           ],
//         },
//       ],
//       images: HoverEffectImages.codezyng,
//     },
//   ];

//   function experienceDetailsMapping(ExperienceData: any) {
//     return ExperienceData.map((experience: any) => {
//       return {
//         title: experience.companyName,
//         role: experience.role,
//         timeSpan: experience.timeSpan,
//         content: (
//           <div>
//             <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
//               {experience.shortDescription}
//             </p>
//             {experience.longDescription.map((project: any) => {
//               return (
//                 <div>
//                   <div className="flex gap-2 mb-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
//                     ✅ {project.projectTitle}
//                   </div>
//                   <ul className="list-disc pl-4">
//                     {project.description.map((point: any) => {
//                       return (
//                         <li className="text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
//                           {point}
//                         </li>
//                       );
//                     })}
//                   </ul>
//                   {/* Images display */}
//                   <div className="grid">
//                     <div className="flex gap-4 mt-4">
//                       <HoverEffect
//                         items={experience.images.map((image: any) => ({
//                           title: image.title,
//                           link: image.link,
//                         }))}
//                         className="flex gap-4 mt-4"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         ),
//       };
//     });
//   }

//   return (
//     <div>
//       <Timeline data={data} />
//     </div>
//   );
// };

// export default ExperienceTimeline;
