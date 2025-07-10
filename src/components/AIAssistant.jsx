import React, { useState } from "react";
import chatFlow from "../data/chatFlow.json";
import { Github, Linkedin } from "lucide-react";

export default function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", content: "To best assist you, what type of visitor are you?" },
  ]);
  const [stage, setStage] = useState("visitorType");
  const [selectedOption, setSelectedOption] = useState("");
  const [visitorType, setVisitorType] = useState("");
  const [selectedSkill, setSelectedSkill] = useState("");
  const [showDropdown, setShowDropdown] = useState(true);
  const [options, setOptions] = useState(Object.keys(chatFlow));

  const resumeMap = {
    frontend: "/resumes/frontend-resume.pdf",
    fullstack: "/resumes/fullstack-resume.pdf",
    qa: "/resumes/qa-resume.pdf",
    uiux: "/resumes/uiux-resume.pdf",
  };

  const toggleAssistant = () => {
    if (!open) {
      // When opening, show the initial question only
      setMessages([
        { role: "assistant", content: "To best assist you, what type of visitor are you?" },
      ]);
    }
    setOpen((prev) => !prev);
  };

  const resetChat = () => {
    setMessages([
      { role: "assistant", content: "To best assist you, what type of visitor are you?" },
    ]);
    setVisitorType("");
    setSelectedSkill("");
    setStage("visitorType");
    setOptions(Object.keys(chatFlow));
    setShowDropdown(true);
    setSelectedOption("");
  };

  const handleOptionSelect = (value) => {
    setSelectedOption(""); // Reset dropdown
    const newMessages = [...messages, { role: "user", content: value }];
    setMessages(newMessages);

    // Handle "General Info" separately
    if (value === "General Info") {
      // Show the info message but do NOT change stage or options
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "I’m your interactive assistant here to help you connect with Amalachukwu Azubike. Whether you're a recruiter, a client, or just exploring, I’ll guide you to the right information or resume based on your interest. Feel free to explore, ask questions, or download tailored resources. You’re in good hands!",
        },
      ]);
      return; // exit early, no state change
    }

    // Proceed with normal flow
    if (stage === "visitorType") {
      const type = value.toLowerCase();
      setVisitorType(type);
      setStage(type === "recruiter" ? "skillChoice" : "nonRecruiter");

      if (type === "recruiter") {
        const skillOptions = chatFlow.recruiter.askSkill.options.filter(
          (skill) => resumeMap[skill.toLowerCase()]
        );
        if (!skillOptions.includes("Full Stack")) {
          skillOptions.push("Full Stack");
        }
        setOptions(skillOptions);
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: chatFlow.recruiter.askSkill.question },
        ]);
      } else {
        setOptions(chatFlow[type]?.options || []);
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: chatFlow[type]?.question || "How can I assist you?" },
        ]);
      }
    } else if (stage === "skillChoice") {
      const skill = value.toLowerCase().replace(/\s+/g, "");
      setSelectedSkill(skill);
      setStage("recruiterNextStep");
      setOptions(chatFlow.recruiter.afterSkill.options);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Would you like to download the resume or know more?" },
      ]);
    } else if (stage === "recruiterNextStep") {
      if (value === "Download Resume") {
        const resumePath = resumeMap[selectedSkill];
        if (resumePath) {
          const link = document.createElement("a");
          link.href = resumePath;
          link.download = resumePath.split("/").pop();
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          setMessages((prev) => [
            ...prev,
            { role: "assistant", content: "Your resume download has started." },
          ]);
        } else {
          setMessages((prev) => [
            ...prev,
            { role: "assistant", content: "Resume for this skill is not available." },
          ]);
        }
      } else if (value === "Know More") {
        const summary = `Amalachukwu has hands-on experience in ${selectedSkill}. With strong foundational training, real-world projects, and demonstrated leadership in secure, scalable systems, Amalachukwu blends technical depth with practical results. Let me know if you'd like the resume.`;
        setMessages((prev) => [...prev, { role: "assistant", content: summary }]);
      } else if (value === "Go Back to Skills") {
        const skillOptions = chatFlow.recruiter.askSkill.options.filter(
          (skill) => resumeMap[skill.toLowerCase()]
        );
        if (!skillOptions.includes("Full Stack")) {
          skillOptions.push("Full Stack");
        }
        setStage("skillChoice");
        setOptions(skillOptions);
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: chatFlow.recruiter.askSkill.question },
        ]);
      } else if (value === "Start Over") {
        resetChat();
      } else if (value === "End Chat") {
        setShowDropdown(false);
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: "Thank you for visiting. Have a great day!" },
        ]);
      }
    } else if (stage === "nonRecruiter") {
      if (visitorType === "client" && value === "Discuss a Project") {
        setShowDropdown(true);
        setOptions(["Start Over", "End Chat"]);
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: "Please send an email to onyenweamala@gmail.com to discuss your project.",
          },
        ]);
      } else if (value === "Collaborate") {
        setShowDropdown(true);
        setOptions(["Start Over", "End Chat"]);
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: (
              <span>
                Let's connect professionally:
                <div className="flex space-x-4 mt-2">
                  <a
                    href="https://github.com/Azubikeamala"
                    className="flex items-center text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4 mr-1" /> GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/amalachukwu-azubike-4b8179a3/"
                    className="flex items-center text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-4 h-4 mr-1" /> LinkedIn
                  </a>
                </div>
              </span>
            ),
          },
        ]);
      } else if (visitorType === "other" && value === "Send a Message") {
        setShowDropdown(true);
        setOptions(["Start Over", "End Chat"]);
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: "You can send your message to onyenweamala@gmail.com and Amalachukwu will get back to you shortly.",
          },
        ]);
      } else if (value === "Hire") {
        // Redirect back to recruiter flow
        setVisitorType("recruiter");
        setStage("skillChoice");
        const skillOptions = chatFlow.recruiter.askSkill.options.filter(
          (skill) => resumeMap[skill.toLowerCase()]
        );
        if (!skillOptions.includes("Full Stack")) {
          skillOptions.push("Full Stack");
        }
        setOptions(skillOptions);
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: chatFlow.recruiter.askSkill.question },
        ]);
      } else if (value === "Start Over") {
        resetChat();
      } else if (value === "End Chat") {
        setShowDropdown(false);
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: "Thank you for visiting. Have a great day!" },
        ]);
      }
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!open && (
        <div className="flex flex-col items-center space-y-1">
          <div className="text-sm text-black bg-white px-2 py-1 rounded-full shadow">
            Amala’s Chatbot
          </div>
          <button
            className="w-16 h-16 bg-white border-2 border-blue-600 rounded-full shadow-lg flex items-center justify-center hover:scale-105 transition"
            onClick={toggleAssistant}
          >
            <svg
              className="w-7 h-7 text-blue-600"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.77 9.77 0 01-4-.8L3 20l1.22-3.26C3.45 15.26 3 13.68 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          </button>
        </div>
      )}

      {open && (
        
            <div className="w-96 rounded-xl shadow-lg border border-gray-700 bg-[#0F172A] text-white">

          {/* Changed header background to dark blue */}
          <div className="bg-[#0F172A] text-white px-4 py-2 rounded-t-xl font-semibold flex justify-between items-center">
            Ask Amalachukwu’s Assistant
            <button onClick={toggleAssistant} className="text-white text-sm ml-2 hover:underline">
                ✕
            </button>
            </div>

          {/* Chat messages container */}
          <div className="p-4 h-96 overflow-y-auto space-y-3">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-3 rounded-lg ${
                  msg.role === "assistant"
                    ? "bg-gray-100 text-black"
                    : "bg-blue-100 text-black self-end"
                }`}
              >
                {typeof msg.content === "string" ? msg.content : msg.content}
              </div>
            ))}
            {/* Options dropdown */}
            {showDropdown && (
              <div className="mt-4">
                <select
                  className="w-full p-2 border border-gray-600 rounded-lg bg-[#1E293B] text-white"
                  onChange={(e) => handleOptionSelect(e.target.value)}
                  value={selectedOption}
                >
                  <option value="" disabled>
                    Select one
                  </option>
                  {options.map((opt, i) => (
                    <option key={i} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}