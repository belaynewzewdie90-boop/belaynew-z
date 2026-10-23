import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-500 text-sm">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with Next.js &amp; Tailwind CSS.
        </p>
        <div className="flex gap-5 text-xl">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-white">
            <FaGithub />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-white">
            <FaLinkedin />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-white">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}
