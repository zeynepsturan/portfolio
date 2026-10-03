import CVWindow from "./CV/CVWindow.jsx";
import AboutWindow from "./About/AboutWindow.jsx";
import ProjectsFolder from "./Project/ProjectsFolder.jsx";
import ProjectDetail from "./Project/ProjectDetail.jsx";
import ContactFolder from "./Contact/ContactFolder.jsx";
import ContactDetail from "./Contact/ContactDetail.jsx";
import SkillsFolder from "./Skill/SkillsFolder.jsx";
import ToolsFolder from "./Tool/ToolsFolder.jsx";
import SkillDetail from "./Skill/SkillDetail.jsx";
import CertificateFolder from "./Certificate/CertificateFolder.jsx";
import CertificateDetail from "./Certificate/CertificatesDetail.jsx";

// Yeni pencere türü eklemek için: bileşeni yaz, buraya kaydet.
// Her bileşen { data, actions } alır.
export const WINDOW_VIEWS = {
  cv: CVWindow,
  about: AboutWindow,
  "projects-folder": ProjectsFolder,
  "project-detail": ProjectDetail,
  "contact-folder": ContactFolder,
  "contact-detail": ContactDetail,
  "skills-folder": SkillsFolder,
  "tools-folder": ToolsFolder,
  "skill-detail": SkillDetail,
  "certificates-folder": CertificateFolder,
  "certificate-folder": CertificateFolder,
  "certificate-detail": CertificateDetail,
};
