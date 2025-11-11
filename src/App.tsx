import "./App.css";
import SocialMediaIcons from "./components/SocialMediaIcons";
import ProjectCard from "./components/ProjectCard";

// Import images
import profilePhoto from "./images/profile_photo.jpeg";
import handwritingClassifierScreenshot from "./images/handwriting_classifier.png";
import consoleChatScreenshot from "./images/console_ai_chat.png";
import rovGroupPhoto from "./images/rov_group_photo.jpeg";
import vexCompetitionPhoto from "./images/vex_competition_photo.jpeg";
import acneImpactPhoto from "./images/acne_impact_photo.png";

function App() {
  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-sky-100">
      <div className="my-15 md:w-2/3 flex flex-col xl:flex-row gap-20 text-xl font-sans">
        <div className="xl:sticky xl:top-35 xl:w-1/3 h-full">
          <div className="items-center xl:items-start flex flex-col gap-5 text-center xl:text-left">
            <img
              src={profilePhoto}
              alt="profile pic"
              className="w-[200px] h-[200px] xl:w-full xl:h-full border-2 rounded-full xl:rounded-3xl shadow-md hover:shadow-2xl transition-shadow duration-300"
            ></img>

            <div className="font-bold">
              <span className="text-3xl">Hey, I'm</span> <br></br>
              <span className="text-4xl text-sky-900">Samuel Lee.</span>
            </div>
            <SocialMediaIcons></SocialMediaIcons>
            <p className="w-3/4 sm:w-full">
              Studying Information and AI Engineering @ PolyU
            </p>
          </div>
        </div>
        <div className="-mt-10 xl:mt-0 w-full xl:w-2/3 h-full p-10 flex flex-col gap-10 overflow-y-scroll [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex flex-col gap-5">
            <h1 className="text-4xl font-bold text-sky-900">About Me</h1>
            <p>
              I'm Samuel, a first-year AI Engineering student at PolyU exploring
              both hardware and software through projects like underwater
              robotics competitions and web development.
            </p>
            <h1 className="mt-5 text-4xl font-bold text-sky-900">Experience</h1>
            <h1 className="text-2xl font-bold">Internships</h1>
            <ProjectCard
              title="Student Management Platform - Alphabag"
              technologies={[
                "Next.js",
                "TypeScript",
                "Firebase",
                "Full-stack Development",
              ]}
              description="Developing a full-stack student management platform from the ground up. Architecting scalable backend services and establishing a robust foundation for future AI-driven feature integration."
              githubUrl="https://github.com/wavesam/alphabag-platform"
            />
            <h1 className="mt-5 text-4xl font-bold text-sky-900">Projects</h1>
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
            <ProjectCard
              title="Acne Impact - UI/UX Prototype"
              technologies={["Figma", "UI/UX Design", "Prototyping"]}
              description="A clickable app demo exploring core UI/UX principles. Designed 8 interconnected screens with functional prototypes to map key user workflows."
              image={acneImpactPhoto}
              linkUrl="https://www.figma.com/proto/ZY70oHTHqmzgbENcxp4HEG/Acne-Impact?node-id=63-1399&p=f&t=BmK1G79Qrj2arsCr-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=63%3A1399"
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
            <h1 className="mt-5 text-4xl font-bold text-sky-900">Skills</h1>
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
