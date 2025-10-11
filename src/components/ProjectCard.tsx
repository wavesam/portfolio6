import "../App.css";

type ProjectParams = {
  title: string;
  description: string;
  technologies?: string[];
  linkUrl?: string;
  githubUrl?: string;
  image?: string;
};

const ProjectCard = ({
  title,
  description,
  technologies,
  linkUrl,
  githubUrl,
  image,
}: ProjectParams) => {
  return (
    <div className="flex flex-col gap-5 justify-between p-5 border-2 rounded-lg bg-white shadow-md hover:shadow-2xl transition-shadow duration-300">
      {image && (
        <img src={image} className="h-[200px] object-cover rounded-lg"></img>
      )}
      <div className="flex flex-col gap-3">
        <div className="text-2xl font-bold">{title}</div>
        {technologies && technologies.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-gray-200 text-gray-800 px-2 py-1 rounded text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
        <div>{description}</div>
        {(githubUrl || linkUrl) && (
          <div className="w-full flex flex-col sm:flex-row gap-3">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center rounded text-lg px-2 py-2 bg-gray-300 hover:bg-gray-300/60 transition-colors duration-500 font-semibold"
              >
                View on GitHub
              </a>
            )}
            {linkUrl && (
              <a
                href={linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center rounded text-lg px-2 py-2 bg-gray-300 hover:bg-gray-300/60 transition-colors duration-500 font-semibold"
              >
                Visit
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
