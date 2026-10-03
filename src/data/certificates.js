import { Award, BookCheck, ShieldCheck } from "lucide-react";
import { certificateIcons, certificateImages } from "./assets";

export const CERTIFICATES = [
  {
    id: "btk-sql",
    title: "Uygulamalarla SQL Öğreniyorum",
    issuer: "BTK Akademi",
    issueDate: "May 2026",
    credentialId: "BTK-SQL-2048",
    icon: certificateIcons.btk,
    description:
      "",
    details:
      "",
    skills: ["AWS", "Cloud Architecture", "Security Basics"],
    media: {
      type: "image",
      src: certificateImages.sql,
      alt: "SQL certificate from BTK Akademi",
    },
  },
  {
    id: "btk-scrum",
    title: "Scrum",
    issuer: "BTK Akademi",
    issueDate: "May 2026",
    credentialId: "BTK-SQL-2048",
    icon: certificateIcons.btk,
    description:
      "",
    details:
      "",
    skills: ["AWS", "Cloud Architecture", "Security Basics"],
    media: {
      type: "image",
      src: certificateImages.scrum,
      alt: "Scrum certificate from BTK Akademi",
    },
  },
  {
    id: "elements-of-ai-1",
    title: "What is AI? (Elements of AI)",
    issuer: "Helsinki University",
    issueDate: "March 2026",
    credentialId: "AI-1234",
    icon: certificateIcons.helsinki,
    description:
      "Completed the introductory Elements of AI course and explored what AI is, how it works, and where it can be applied responsibly.",
    details:
      "This course covered the foundations of artificial intelligence, including machine learning, neural networks, and natural language processing. It also emphasized AI's practical use cases, limitations, and the ethical considerations behind building and deploying intelligent systems.",
    skills: ["AI Fundamentals", "Machine Learning", "Neural Networks", "Ethical AI"],
    media: {
      type: "image",
      src: certificateImages.whatIsAI,
      alt: "Certificate preview for What is AI? (Elements of AI)",
    },
  },
  {
    id: "elements-of-ai-2",
    title: "How AI Works? (Elements of AI)",
    issuer: "Helsinki University",
    issueDate: "March 2026",
    credentialId: "AI-1235",
    icon: certificateIcons.helsinki,
    description:
      "Completed the introductory Elements of AI course and explored what AI is, how it works, and where it can be applied responsibly.",
    details:
      "This course covered the foundations of artificial intelligence, including machine learning, neural networks, and natural language processing. It also emphasized AI's practical use cases, limitations, and the ethical considerations behind building and deploying intelligent systems.",
    skills: ["AI Fundamentals", "Machine Learning", "Neural Networks", "Ethical AI"],
    media: {
      type: "image",
      src: certificateImages.whatIsAI,
      alt: "Certificate preview for How AI Works? (Elements of AI)",
    },
  },
  {
    id: "gdgc-python",
    title: "Python Eğitimi",
    issuer: "GDG Gebze Technical University",
    issueDate: "January 2026",
    icon: certificateIcons.gdgc,
    description:
      "Completed a course introducing the fundamentals of Python programming and building a foundation for writing simple programs.",
    details:
      "The course taught core Python fundamentals, including basic syntax, variables, data types, conditional logic, loops, and functions. It provided an introduction to breaking problems into steps and expressing solutions as readable Python code.",
    skills: ["Python", "Programming Fundamentals", "Problem Solving", "Control Flow", "Functions"],
    media: {
      type: "image",
      src: certificateImages.python,
      alt: "Python fundamentals course certificate",
    },
  },
];

export const getCertificate = (id) => CERTIFICATES.find((certificate) => certificate.id === id);
