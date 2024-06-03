"use strict";(self.webpackChunkessex_portfolio_ml=self.webpackChunkessex_portfolio_ml||[]).push([[307],{7865:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=t(4848),a=t(8453);const o={sidebar_position:0,slug:"/"},r="Reflection on the Multi-Agent System Project and Development Experience",s={id:"ia-docs/intro",title:"Reflection on the Multi-Agent System Project and Development Experience",description:"Cybersecurity is a key concern for any organization in light of high-profile security breaches involving companies such as SolarWinds, Microsoft, FireEye, and CrowdStrike (Reuters, 2021). Our project focused on developing a multi-agent system, designed to prevent unintentional leaks of secrets and key files by deploying automated file scanning. The core idea was to use a leader-election pattern to scan a given folder input, identify security and key files, and quarantine them (Microsoft, 2024). The system architecture featured a leader agent responsible for monitoring and managing multiple worker agents, which ensures resilience and fault tolerance. The worker agents performed the scanning tasks, identifying sensitive files based on file extensions and content patterns.",source:"@site/docs/ia-docs/intro.md",sourceDirName:"ia-docs",slug:"/",permalink:"/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0,slug:"/"},sidebar:"iaSidebar",next:{title:"Discussion \u2014 Agent Communication Languages",permalink:"/ia-docs/Discussion \u2014 Agent Communication Languages"}},l={},c=[];function d(e){const n={a:"a",h1:"h1",p:"p",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"reflection-on-the-multi-agent-system-project-and-development-experience",children:"Reflection on the Multi-Agent System Project and Development Experience"}),"\n",(0,i.jsx)(n.p,{children:"Cybersecurity is a key concern for any organization in light of high-profile security breaches involving companies such as SolarWinds, Microsoft, FireEye, and CrowdStrike (Reuters, 2021). Our project focused on developing a multi-agent system, designed to prevent unintentional leaks of secrets and key files by deploying automated file scanning. The core idea was to use a leader-election pattern to scan a given folder input, identify security and key files, and quarantine them (Microsoft, 2024). The system architecture featured a leader agent responsible for monitoring and managing multiple worker agents, which ensures resilience and fault tolerance. The worker agents performed the scanning tasks, identifying sensitive files based on file extensions and content patterns."}),"\n",(0,i.jsx)(n.p,{children:"We implemented the project through two assignments. The first, a group assignment, focused on developing a project report, which includes the system requirements, design decisions, and system illustrations. The second is an individual assignment, focused on implementing the system using Python. I proposed the project idea to the team, designed the system architecture, developed the pseudo-code for the system, and wrote the project report incorporating draft input and illustrations from my team members. My prior experience with agent-based computing helped me conceptualize an efficient and scalable system."}),"\n",(0,i.jsx)(n.p,{children:"During the implementation phase, I implemented a fully functional system using Python programming language and various supporting Python libraries such as os, time, UUID, sys, logging, and threading. The system implementation included features such as agent initialization, task assignment, concurrency control, file processing, and quarantining. Multi-agent systems such as the one we implemented are susceptible to race conditions, which occur when access to shared memory by parallel programs is not properly synchronized (Netzer & Miller, 1992). I\u2019m particularly proud of my work on thread-locking and task sequencing to prevent race conditions, which was crucial for the system's stability and performance."}),"\n",(0,i.jsx)(n.p,{children:"Working on this project was both challenging and rewarding. The complexity of developing a multi-agent system demanded a high level of coordination and technical expertise. There were moments of frustration, particularly when dealing with concurrency issues and ensuring fault tolerance. However, these challenges were also opportunities for growth and learning. Successfully overcoming these hurdles instilled a sense of accomplishment and boosted my confidence in handling complex projects. The initial excitement and motivation drove me to invest extra effort in the early stages, ensuring a solid foundation for the project. During challenging times, the support and collaboration with my team helped maintain my morale and focus. Reflecting on my behavior, I realized the importance of perseverance and teamwork in achieving project goals."}),"\n",(0,i.jsx)(n.p,{children:"This project was a transformative learning experience. I gained a deeper understanding of agent-based systems, particularly the intricacies of multi-agent architectures and communication protocols. One of the key areas I gravitated towards was the importance of scalability and fault tolerance in multi-agent systems. This project taught me to think beyond the immediate functionality and consider long-term performance and resilience. I have already begun applying these principles in my other projects, ensuring robust and scalable solutions."}),"\n",(0,i.jsx)(n.p,{children:"Throughout this project, I developed several critical skills. I learned to design agent-based systems. I also improved my problem-solving skills, particularly in debugging concurrency issues and fault tolerance. One of the most valuable skills I developed was effective communication and collaboration within a team. The success of our project hinged on clear communication and coordinated efforts, and this experience has made me more adept at working in collaborative environments."}),"\n",(0,i.jsx)(n.p,{children:"The knowledge and skills gained from this project are already being applied in my real-world experiences. For instance, I am currently working on an LLM-powered multi-agent expert system for organizations to unlock access to their dispersed data at work. The principles and techniques learned from the multi-agent system project have been instrumental in designing a resilient and efficient solution."}),"\n",(0,i.jsx)(n.p,{children:"For the group project, we had a team of three. I knew both the team members from our previous modules, which made communication and collaboration during the team project easy. We functioned efficiently with clear goals and objectives for each team member. Everyone brought their strengths and made contributions to the project. Our team worked well together. We successfully applied theoretical concepts to practical scenarios, demonstrating the effectiveness of our multi-agent system, and built a file scanning capability with real-world practical applications. Reflecting on our collaboration, I believe, we excelled in leveraging each team member\u2019s strengths. Our combined efforts resulted in a robust and scalable system, highlighting the importance of teamwork in achieving complex project goals."}),"\n",(0,i.jsx)(n.p,{children:"Going beyond the project and reflecting on the entire module, I developed a deeper understanding of intelligent agents and their applications. I gained insights into the versatility of multi-agent systems across various sectors. Studying first-order logic, provided a good grasp of creating and reasoning over logical statements. The unit on agent architectures taught me to critically evaluate various architectures. Understanding the strengths and weaknesses of different architectures is crucial for developing efficient intelligent systems. Similarly, studying hybrid agent architectures enhanced my ability to integrate reactive and deliberative behaviors, improving overall performance and adaptability."}),"\n",(0,i.jsx)(n.p,{children:"Agent communication was another key area of focus. I gained skills in using ontologies and agent communication languages like KQML, which define a permissible set of \u201cspeech acts\u201d agents may use (Finin et al., 1994). Practical experience with KQML and KIF further enriched my understanding, which is vital for creating collaborative multi-agent systems."}),"\n",(0,i.jsx)(n.p,{children:"In Natural Language Processing (NLP), I evaluated the challenges and understood the principles underlying various technologies, essential for designing intelligent agents capable of processing human language. Engaging with NLP models enhanced my practical skills, supporting the application of theoretical concepts effectively."}),"\n",(0,i.jsx)(n.p,{children:"The module also covered adaptive algorithms like Artificial Neural Networks (ANNs), which learn through trial and error (Mayo, 2017); this provided a solid foundation for leveraging these tools in intelligent systems. Exploring advanced applications of deep learning and discussing their social and ethical implications prepared me for responsible deployment."}),"\n",(0,i.jsx)(n.p,{children:"Overall, this module provided a comprehensive understanding of intelligent agents, preparing me to leverage these technologies effectively and ethically in various applications."}),"\n",(0,i.jsx)(n.p,{children:"In conclusion, the project and the entire module were an enriching exercise that enhanced my technical skills and understanding of intelligent agents. I made significant contributions to the group project through system design, pseudo-code development, and report writing. And, implemented a scalable and resilient system in my individual project. The emotional highs and lows of the project provided valuable insights into my behavior and the importance of perseverance and collaboration. Overall, this project has prepared me to leverage intelligent agent technologies effectively and ethically in various applications."}),"\n",(0,i.jsx)(n.p,{children:"References"}),"\n",(0,i.jsx)(n.p,{children:"Finin, T., Fritzson, R., McKay D. & McEntire, R. (1994) \u2018KQML as an agent communication language\u2019,  Third international conference on Information and knowledge management (CIKM '94). Gaithersburg, Maryland, 29 November \u2013 2 December. Association for Computing Machinery. 456-463."}),"\n",(0,i.jsxs)(n.p,{children:["Mayo, M. (2017) Neural Network Foundations, Explained: Updating Weights with Gradient Descent & Backpropagation. Available from: ",(0,i.jsx)(n.a,{href:"https://www.kdnuggets.com/2017/10/neural-network-foundations-explained-gradient-descent.html",children:"https://www.kdnuggets.com/2017/10/neural-network-foundations-explained-gradient-descent.html"})," [Accessed 02 June 2024]."]}),"\n",(0,i.jsxs)(n.p,{children:["Microsoft. (2024) Leader Election pattern. Available from: ",(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/azure/architecture/patterns/leader-election",children:"https://learn.microsoft.com/en-us/azure/architecture/patterns/leader-election"})," [Accessed 02 June 2024]"]}),"\n",(0,i.jsxs)(n.p,{children:["Netzer, R. & Miller, B. (1992) What are race conditions? Some issues and formalizations. ACM Letters on Programming Languages and Systems 1(1): 74-88. DOI: ",(0,i.jsx)(n.a,{href:"https://doi.org/10.1145/130616.130623",children:"https://doi.org/10.1145/130616.130623"}),"\nSatter, R. & Menn, J. (2021). SolarWinds, Microsoft, FireEye, CrowdStrike defend actions in major hack - U.S. Senate hearing. [online] Reuters. Available at: ",(0,i.jsx)(n.a,{href:"https://www.reuters.com/article/idUSKBN2AN1PY/",children:"https://www.reuters.com/article/idUSKBN2AN1PY/"})," [Accessed 02 June 2024]."]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>s});var i=t(6540);const a={},o=i.createContext(a);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);