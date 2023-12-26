import { useState } from 'react';

const Divider = () => {
  return (
    <div className="border border-gray-200 dark:border-gray-600 w-full my-8" />
  );
};

const Year = ({ children }) => {
  return (
    <h3 className="text-lg md:text-xl font-bold mb-4 tracking-tight text-gray-900 dark:text-gray-100">
      {children}
    </h3>
  );
};

const Step = (props) => {
  return (
    <li className="mb-4 ml-2">
      <div className="flex items-center mb-2 text-green-700 dark:text-green-300">
        <span className="sr-only">Check</span>
        <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24">
          <g
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
            <path d="M22 4L12 14.01l-3-3" />
          </g>
        </svg>
        <p className="font-medium text-gray-900 dark:text-gray-100">
          {props.title}
        </p>
      </div>
      <p className="text-gray-700 dark:text-gray-400 ml-6">{props.children}</p>
    </li>
  );
};

const FullTimeline = () => (
  <>
    <Year>2019</Year>
    <ul>
      <Step title="Software Engineer at Walmart">
        Worked on multiple orchestration services across different stacks (Node.js, Java). 
        Currently working on new orchestration Graphql services with Apollo Federation.
      </Step>

    </ul>
    <Divider />
    <Year>2017</Year>
    <ul>
      <Step title="Software Engineer at Quikr 👔" >
        <ul>
          <li>Developed Quikr&#39;s Progressive Web App using Preact, Redux. PWA Reduced the bounce rates by 25% and improved conversion funnels of all Quikr businesses.</li>
          <li>Came up with a composable architecture and implemented Shell architecture to enable resource sharing across different verticals for Quikr&#39;s PWA . Built and maintained the unified build process for the same. Built several reusable React components for the Website.</li>
          <li>Prerendered the shell (header &amp; footer) for a better UI/UX experience to users.</li>
          <li>Owner of Site Performance Improvements - fixed several performance issues &amp; optimised flows to decrease load time for pages owned by Quikr Core.</li>
          <li>Worked on Server Side Rendering for the PWA to improve SEO. Exposed it as a solution for use by other verticals too. Decreased the load time from 7 seconds to 2 seconds</li>
          <li>Worked on Real User Measurement(RUM) - capturing and analyzing each transaction by users of Quikr. Developed a library to push RUM data to Google Analytics.</li>
          <li>Setup Private npm registry for Quikr. Also setup eslint configurations for all the packages.</li>
          <li>Developed &amp; maintained Quikr&#39;s Service Worker.</li>
        </ul>

      </Step>
      </ul>
    <Divider />
    
    <Year>1995</Year>
    <ul>
      <Step title="Born 👶🏼🍼" />
    </ul>
  </>
);

export default function Timeline() {
  const [isShowingFullTimeline, showFullTimeline] = useState(false);

  return (
    <>
      <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
        Timeline
      </h3>
      <Year>2023</Year>
      <ul>
        <Step title="Staff Software Engineer at Walmart">
          I'm extremely excited about this new role.
        </Step>

      </ul>
      <Divider />
      <Year>2021</Year>
      <ul>
        <Step title="Senior Software Engineer at Walmart">
          Developing GraphQL Platform for Walmart
        </Step>
      
      </ul>
      <Divider />
      
      {/* <Year>2020</Year> */}
      {isShowingFullTimeline ? (
        <FullTimeline />
      ) : (
        <button
          type="button"
          className="flex items-center text-sm my-4 mx-auto px-4 py-2 rounded-md font-medium text-gray-900 dark:text-gray-100"
          onClick={() => showFullTimeline(true)}
        >
          See More
          <svg
            className="h-4 w-4 ml-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      )}
    </>
  );
}
