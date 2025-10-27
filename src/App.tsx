import "./App.css";
import SocialMediaIcons from "./components/SocialMediaIcons";
import ProjectCard from "./components/ProjectCard";

// Import images
import profilePhoto from "./images/profile_photo.jpeg";
import handwritingClassifierScreenshot from "./images/handwriting_classifier.png";
import consoleChatScreenshot from "./images/console_ai_chat.png";
import rovGroupPhoto from "./images/rov_group_photo.jpeg";
import vexCompetitionPhoto from "./images/vex_competition_photo.jpeg";

function App() {
  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-blue-100">
      <div className="hidden xl:block w-full h-15 fixed top-0 bg-gradient-to-b from-blue-100/40 to-transparent pointer-events-none"></div>
      <div className="hidden xl:block w-full h-15 fixed bottom-0 bg-gradient-to-t from-blue-100/40 to-transparent pointer-events-none"></div>
      <div className="my-15 md:w-2/3 flex flex-col xl:flex-row gap-20 text-xl font-sans">
        <div className="xl:sticky xl:top-35 xl:w-1/3 h-full">
          <div className="items-center xl:items-start flex flex-col gap-5 text-center xl:text-left">
            <img
              src={profilePhoto}
              alt="profile pic"
              className="w-[200px] h-[200px] xl:w-full xl:h-full border-2 rounded-full shadow-md hover:shadow-2xl transition-shadow duration-300"
            ></img>

            <div className="font-bold">
              <span className="text-3xl">Hey, I'm</span> <br></br>
              <span className="text-4xl text-blue-900">Samuel Lee.</span>
            </div>
            <SocialMediaIcons></SocialMediaIcons>
            <p className="w-3/4 sm:w-full">
              Studying Information and AI Engineering @ PolyU
            </p>
          </div>
        </div>
        <div className="-mt-10 xl:mt-0 w-full xl:w-2/3 h-full p-10 flex flex-col gap-10 overflow-y-scroll [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex flex-col gap-5">
            <h1 className="text-4xl font-bold text-blue-900">About Me</h1>
            <p>
              I'm Samuel, a first-year AI Engineering student at PolyU exploring
              both hardware and software through projects like underwater
              robotics competitions and web development.
            </p>
            <h1 className="text-4xl font-bold text-blue-900">Projects</h1>
            <h1 className="text-2xl font-bold">Software Development</h1>
            <ProjectCard
              title="Handwriting Classification CNN"
              technologies={[
                "Python",
                "TensorFlow",
                "Keras",
                "CNN",
                "OpenCV",
                "scikit-learn",
              ]}
              description="A convolutional neural network that classifies handwritten images of family members' names. Built with TensorFlow/Keras and OpenCV, demonstrating full ML pipeline from data preprocessing to model training and evaluation."
              image={handwritingClassifierScreenshot}
              githubUrl="https://github.com/wavesam/handwriting-classifier"
            />
            <ProjectCard
              title="Console AI Chat Application"
              technologies={[
                "Node.js",
                "JavaScript",
                "REST APIs",
                "HTTP Requests",
                "JSON Processing",
              ]}
              description="A terminal-based AI chat client built from scratch using OpenRouter API. Handles HTTP requests, response parsing, and conversation management with custom configuration for different AI models."
              image={consoleChatScreenshot}
              githubUrl="https://github.com/wavesam/console-ai-chat"
            />
            <ProjectCard
              title="Portfolio Website"
              description="This website! Built using React, TypeScript, and Tailwind CSS. Check out the source code on my GitHub."
              technologies={["React", "TypeScript", "Tailwind CSS"]}
              linkUrl="https://wavesam.io"
              githubUrl="https://github.com/wavesam/wavesam.github.io"
            ></ProjectCard>
          </div>
          <div className="w-full h-full flex flex-col gap-5">
            <h1 className="text-2xl font-bold">Robotics & Competitions</h1>
            <ProjectCard
              title="Mini-ROV Competition"
              technologies={["C++", "Arduino"]}
              description="A competition I went to in 2023 as part of my university's ROV team. We built an underwater robot to complete various tasks."
              image={rovGroupPhoto}
            ></ProjectCard>
            <ProjectCard
              title="VEX V5 Robotics Competition"
              technologies={["Python", "VEXcode"]}
              description="A competition I went to in high school as part of my school's robotics team. We built a robot to compete in various challenges."
              image={vexCompetitionPhoto}
            ></ProjectCard>
          </div>
          <div className="w-full h-full flex flex-col gap-5">
            <h1 className="text-4xl font-bold text-blue-900">Skills</h1>
            <ProjectCard
              title="AI/ML"
              description="Python, TensorFlow, OpenCV, scikit-learn"
            ></ProjectCard>
            <ProjectCard
              title="Web Development (Frontend)"
              description="Vite, React, TypeScript, TailwindCSS"
            ></ProjectCard>
            <ProjectCard
              title="Robotics"
              description="C++, Arduino, ROS, OpenCV"
            ></ProjectCard>
            <ProjectCard
              title="Tools"
              description="Git, Vite, VEXcode"
            ></ProjectCard>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
