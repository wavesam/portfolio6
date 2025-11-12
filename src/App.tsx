import "./App.css";
import SocialMediaIcons from "./components/SocialMediaIcons";
import ProjectCard from "./components/ProjectCard";
import BackToTop from "./components/BackToTop";

// Import images
import profilePhoto from "./images/profile_photo.jpeg";
import handwritingClassifierScreenshot from "./images/handwriting_classifier.png";
import consoleChatScreenshot from "./images/console_ai_chat.png";
import rovGroupPhoto from "./images/rov_group_photo.jpeg";
import vexCompetitionPhoto from "./images/vex_competition_photo.jpeg";
import acneImpactPhoto from "./images/acne_impact_photo.png";

function App() {
  return (
    <main className="min-h-screen w-screen flex items-center justify-center bg-blue-200">
      <div className="md:w-[600px] xl:w-[900px] flex flex-col xl:flex-row gap-[70px] text-xl font-sans text-neutral-800">
        <aside className="mt-10 -mb-10 xl:my-0 xl:h-screen xl:sticky top-0 flex items-center justify-center">
          <div className="xl:mb-0 xl:w-[250px] text-center xl:text-left">
            <div className="xl:mt-0 items-center xl:items-start flex flex-col gap-5">
              <img
                src={profilePhoto}
                alt="profile pic"
                className="w-[230px] h-[230px] rounded-full hover:shadow-lg opacity-85 hover:opacity-95 transition duration-300"
                loading="lazy"
              />
              <div className="w-full font-bold">
                <span className="text-3xl">Hey, I'm</span> <br />
                <h1 className="text-4xl text-blue-900">Samuel Lee.</h1>
              </div>
              <p className="w-3/4 sm:w-full">
                Studying Information and AI Engineering @ PolyU
              </p>
              <div className="opacity-70">
                <SocialMediaIcons></SocialMediaIcons>
              </div>
            </div>
          </div>
        </aside>

        <article className="my-10 w-full xl:w-2/3 h-full p-10 flex flex-col gap-10 overflow-y-scroll [scrollbar-width:none] [&::-webkit-scrollbar]:hidden bg-blue-100 rounded-3xl">
          <section className="flex flex-col gap-5">
            <h2 className="text-2xl font-bold text-blue-900">About Me</h2>
            <p>
              As a first-year AI Engineering student at PolyU, I focus on
              turning complex problems into working systems. I work across the
              stack, developing full-stack web platforms, training neural
              networks for computer vision, and coding robotics for competitive
              challenges.
            </p>
          </section>

          <section className="flex flex-col gap-5">
            <h2 className="text-2xl text-blue-900 font-bold">Internships</h2>
            <ProjectCard
              title="Student Management System - Alphabag Limited"
              technologies={[
                "Next.js",
                "Firebase",
                "TypeScript",
                "Full-Stack Development",
                "System Architecture",
              ]}
              description="Designed and developed a full-stack student management system from scratch using Next.js and Firebase. Engineered core features including user authentication, data management, and responsive UI."
            />
          </section>

          <section className="mt-3 flex flex-col gap-5">
            <h2 className="text-2xl text-blue-900 font-bold">
              Personal Projects
            </h2>
            <ProjectCard
              title="Family Handwriting Classifier"
              technologies={[
                "Python",
                "TensorFlow",
                "Keras",
                "CNN",
                "OpenCV",
                "scikit-learn",
              ]}
              description="A convolutional neural network that classifies handwritten images of my family members' names. Built with TensorFlow/Keras and OpenCV, demonstrating full ML pipeline from data preprocessing to model training and evaluation."
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
              title="Acne Impact - UI/UX Prototype"
              technologies={["Figma", "UI/UX Design", "Prototyping"]}
              description="A clickable app demo exploring core UI/UX principles. Designed 8 interconnected screens with functional prototypes to map key user workflows."
              image={acneImpactPhoto}
              linkUrl="https://www.figma.com/proto/ZY70oHTHqmzgbENcxp4HEG/Acne-Impact?node-id=63-1399&p=f&t=BmK1G79Qrj2arsCr-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=63%3A1399"
            ></ProjectCard>
            <ProjectCard
              title="Portfolio Website"
              description="This website! Built using React, TypeScript, and Tailwind CSS. Check out the source code on my GitHub."
              technologies={["React", "TypeScript", "Tailwind CSS"]}
              linkUrl="https://wavesam.io"
              githubUrl="https://github.com/wavesam/portfolio6"
            ></ProjectCard>
          </section>

          <section className="mt-3 w-full h-full flex flex-col gap-5">
            <h2 className="text-2xl text-blue-900 font-bold">
              Robotics & Competitions
            </h2>
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
          </section>

          <section className="mt-3 w-full h-full flex flex-col gap-5">
            <h2 className="text-2xl text-blue-900 font-bold">Skills</h2>
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
          </section>
        </article>
      </div>
      <BackToTop></BackToTop>
    </main>
  );
}

export default App;
