import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from "react-icons/fa";

function Contact() {
  return (
    <div className="content-card">
      <h2>Let’s Connect 🚀</h2>
      <p>
        So here’s the deal — every company wants <strong>experience</strong>, but experience only
        comes when someone gives you a <strong>chance</strong>. It’s like that endless loop in coding,
        except this one runs on coffee and hope ☕😅.
      </p>
      <p>
        I might not have “industry experience” in DevOps (yet), but I’m a quick learner,
        a problem solver, and I’ve been building my own projects using
        <strong> Devops Tools and Technologies</strong> — learning
        every bit by actually doing it.
      </p>
      <p>
        Give me a shot — every experienced engineer was once a fresher who got an opportunity.  
        Maybe your team will be the one that gives me mine 😉
      </p>

      <h3>Find Me Here:</h3>
      <ul>
        <li>
          <FaGithub /> <a href="https://github.com/mishra0010" target="_blank">GitHub</a>
        </li>
        <li>
          <FaLinkedin /> <a href="https://www.linkedin.com/in/harshit-mishra-devops/" target="_blank">LinkedIn</a>
        </li>
        <li>
          <FaEnvelope /> <a href="mailto:harshit.2024it1112@kiet.edu">harshit.2024it1112@kiet.edu</a>
        </li>
        <li>
          <FaFileAlt /> <a href="https://github.com/mishra0010/Harshit-Mishra-Resume" target="_blank">My Resume</a>
        </li>
      </ul>

      <p style={{ marginTop: "1rem", color: "#555" }}>
        PS: I promise I break fewer things in production than I do in my kitchen 😄
      </p>
    </div>
  );
}

export default Contact;

