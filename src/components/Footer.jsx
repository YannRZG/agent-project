import { FaDiscord } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="text-white py-4 bg-black">
      <div className="container mx-auto flex flex-col items-center space-y-2 md:flex-row md:justify-between md:space-y-0 px-4">
        {/* Copyright */}
        <p className="font-light text-zinc-500 text-center">
          &copy; 2024 Agent
        </p>

        {/* Links */}
        <ul className="flex flex-wrap justify-center space-x-4 font-light text-zinc-500">
          <li>
            <a href="#" className="hover:text-white">Privacy Policy</a>
          </li>
          <li>
            <a href="#" className="hover:text-white">Terms & Conditions</a>
          </li>
          <li>
            <a href="#" className="hover:text-white">Contact Us</a>
          </li>
        </ul>

        {/* Community */}
        <div className="flex items-center space-x-2 text-zinc-500">
          <a href="#" className="font-light hover:text-white">
            Join our community
          </a>
          <FaDiscord className="text-2xl hover:text-white" />
        </div>
      </div>
    </footer>
  );
}
