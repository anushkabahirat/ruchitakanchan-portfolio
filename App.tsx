import { Hero } from "./components/Hero";
import { FeaturedWork } from "./components/FeaturedWork";
import { ProjectSection, ProjectProps } from "./components/ProjectSection";
import { Contact } from "./components/Contact";

const projectsData: ProjectProps[] = [
  {
    id: "aura",
    title: "Magazine",
    category: "Advertisment",
    themeColor: "#FDFBF7", // Soft warm white
    textColor: "#2D2824",
    heroImage: "https://i.ibb.co/GvYD5Mrt/Whats-App-Image-2026-04-10-at-2-25-42-PM.jpg",
    overview: "Designed a series of conceptual advertisement posters for the brand Crocs, focusing on its versatility, comfort, and bold identity across different environments. The core idea was to showcase how Crocs can be worn anywhere and everywhere—from natural landscapes to imaginative settings like space.\n\nI explored themes like:\n• Mountains (durability & grip)\n• Water (lightweight & waterproof nature)\n• Beach (casual & lifestyle appeal)\n• Space (creative freedom & bold branding)",
    mockups: [
      "https://i.ibb.co/kg9dyZnF/1-20260408-134905-0000.png",
      "https://i.ibb.co/MyRW6KTM/2-20260408-134905-0001.png",
      "https://i.ibb.co/gFmnGBbx/3-20260408-134906-0002.png"
    ]
  },
  {
    id: "neon",
    title: "Social Media Post",
    category: "Branding",
    themeColor: "#0A0A0A", // Dark
    textColor: "#FFFFFF",
    heroImage: "https://i.ibb.co/RXw3LT0/IMG-20260410-WA0040-jpg.jpg",
    overview: "The intricate pattern gives a sense of heritage and craftsmanship, aligning with Indian textile culture. The sage green background represents calmness, sophistication, and natural elegance.\n\nIt gives a premium and minimal aesthetic, making the brand feel modern yet rooted.\n\nThe white line art symbolizes purity, simplicity, and clarity.",
    mockups: [
      "https://i.ibb.co/d42fsB8H/1000309836-140efda767c7a23c0febd9a3f979d4f3-1-23-2026-12-12-27-PM-20260410-124103-0000-jpg.jpg",
      "https://i.ibb.co/M59q4fqg/IMG-20260410-150614-jpg.jpg",
      "https://i.ibb.co/G4kRZM8s/IMG-20260410-150544-jpg.jpg"
    ]
  },
  {
    id: "lumina",
    title: "Logo Designing",
    category: "Marketing",
    themeColor: "#FFFFFF", // Pure white
    textColor: "#111111",
    heroImage: "https://i.ibb.co/wZpyvZSG/Whats-App-Image-2026-04-10-at-2-43-46-PM.jpg",
    overview: "The Toyam logo uses a minimal and elegant “T” symbol with leaf elements, representing growth, nature, and tradition. The earthy color palette (maroon, beige, green, mustard) reflects Indian culture and handloom heritage. The typography is clean and sophisticated, enhancing brand identity and readability. Overall, the design effectively communicates a blend of tradition and modern fashion.",
    mockups: [
      "https://i.ibb.co/v4tFXcj8/IMG-20260410-151613-jpg.jpg",
      "https://i.ibb.co/NnSH4RVV/IMG-20260410-151554-jpg.jpg",
      "https://i.ibb.co/MxQZrDRg/IMG-20260410-151536-jpg.jpg",
      "https://i.ibb.co/N653W7kh/IMG-20260410-151517-jpg.jpg"
    ]
  }
];

export default function App() {
  return (
    <main className="w-full min-h-screen bg-white">
      <Hero />
      <FeaturedWork />
      
      {/* Projects Container */}
      <div className="w-full flex flex-col">
        {projectsData.map((project) => (
          <ProjectSection key={project.id} project={project} />
        ))}
      </div>

      <Contact />
    </main>
  );
}
