// frontend/src/About.jsx
function About() {
  return (
    <div className="page-container">
      <div className="content-card">
        <h2>About the News Aggregator Project</h2>

        <p>
          The <strong>News Aggregator</strong> is a modern full-stack web application built to collect,
          organize, and present the latest headlines from trusted global sources. It offers users a
          clean, ad-free reading experience with fast updates and a responsive layout.
        </p>

        <h3>🌍 Project Overview</h3>
        <p>
          This application fetches live news via a third-party News API and displays it in a
          simple, distraction-free interface. It demonstrates the complete software development
          process — from frontend development and API integration to DevOps automation using Docker
          and Jenkins, running on a Linux based development/runtime environment.
        </p>

        <h3>⚙️ Tech Stack</h3>
        <ul>
          <li><strong>Frontend:</strong> React (Vite), React Router, CSS3</li>
          <li><strong>Backend:</strong> Flask (Python) for API handling and news data processing</li>
          <li><strong>Platform & Shell:</strong> Linux (development environment, shell scripting, package management)</li>
          <li><strong>Version Control:</strong> Git & GitHub</li>
          <li><strong>Containerization:</strong> Docker (backend runs inside a container)</li>
          <li><strong>CI/CD:</strong> Jenkins Pipeline</li>
        </ul>

        <h3>💡 Key Features</h3>
        <ul>
          <li>Aggregates real-time news from reliable external sources</li>
          <li>Responsive, lightweight frontend with a clean UI</li>
          <li>Flask backend served inside a Docker container for environment consistency</li>
          <li>Automated CI pipeline using Jenkins and GitHub</li>
          <li>Linux-based tooling and shell scripts for local development and automation</li>
        </ul>

        <h3>🚀 Project Workflow & DevOps Pipeline</h3>
        <p>
          The project follows DevOps practices to ensure automation, repeatability, and easy collaboration:
        </p>

        <ol>
          <li>
            <strong>Development (Linux):</strong><br />
            Development is performed on Linux systems (WSL or native), using shell scripts for environment setup,
            virtual environments for Python, and standard CLI tooling. Linux provides the consistent environment
            for building and testing containers and automation scripts.
          </li>

          <li>
            <strong>Version Control (GitHub):</strong><br />
            Code (frontend + backend + pipeline scripts) is stored in GitHub. Branching and pull requests are used
            for features and code review.
          </li>

          <li>
            <strong>Containerization (Docker):</strong><br />
            The Flask backend is containerized with Docker. Containers guarantee the same runtime behaviour across
            developer machines, CI servers, and future deployment hosts.
          </li>

          <li>
            <strong>CI with Jenkins:</strong><br />
            Jenkins watches the GitHub repo. On commits or PR merges, Jenkins runs a pipeline that:
            <ul>
              <li>pulls the latest code</li>
              <li>runs unit or smoke tests</li>
              <li>builds Docker images</li>
              <li>runs Dockerized integration tests</li>
            </ul>
          </li>

          <li>
            <strong>CD — next phase:</strong><br />
            The pipeline is structured so CD can be added later — for example, pushing images to a registry
            and deploying to a hosted environment.
          </li>

          <li>
            <strong>Local automation & maintenance:</strong><br />
            Common tasks (creating virtual env, building Docker image, running the app locally) are scripted
            with shell scripts (bash) so teammates can reproduce the environment on Linux quickly.
          </li>
        </ol>

        <h3>🧩 Tools & Services</h3>
        <ul>
          <li>Linux — development and runtime environment (shell scripting, package management)</li>
          <li>Git & GitHub — version control and collaboration</li>
          <li>Docker — containerization</li>
          <li>Jenkins — CI pipeline automation</li>
          <li>News API — real-time news data source</li>
        </ul>

        <h3>🎯 Project Goals</h3>
        <ul>
          <li>Implement a reliable CI pipeline for automated builds and tests</li>
          <li>Use Docker to ensure cross-environment consistency</li>
          <li>Provide a simple, fast, and distraction-free news reading experience</li>
          <li>Demonstrate a reproducible Linux-based developer workflow using shell scripts</li>
        </ul>

        <h3>🔮 Future Enhancements</h3>
        <ul>
          <li>Integrate optional database caching and personalization</li>
          <li>Introduce CD to automatically deploy container images to a hosting platform</li>
          <li>Category filtering, user accounts, and saved articles</li>
          <li>Explore Kubernetes for container orchestration at scale</li>
        </ul>

        <p>
          This About page documents the current architecture and practical DevOps workflow: a Linux-driven
          development environment, containerized Flask backend, React frontend, and Jenkins-based CI automation.
          It’s a compact but practical demonstration of building and shipping software with modern tooling.
        </p>
      </div>
    </div>
  );
}

export default About;

