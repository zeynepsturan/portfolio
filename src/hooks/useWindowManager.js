import { useCallback, useMemo, useState } from "react";
import { getProject } from "../data/projects";
import { getContact } from "../data/contacts";
import { getCertificate } from "../data/certificates";
import { SKILL_DETAILS } from "../data/skills";

/**
 * Açık pencerelerin listesi + pencere açan eylemler.
 * Pencere: { id, title, type, data }
 */
export function useWindowManager() {
  const [windows, setWindows] = useState([]);

  const openWindow = useCallback((win) => {
    setWindows((current) =>
      current.some((w) => w.id === win.id) ? current : [...current, win],
    );
  }, []);

  const closeWindow = useCallback((id) => {
    setWindows((current) => current.filter((w) => w.id !== id));
  }, []);

  // Pencerelerin içinden çağrılan eylemler (klasör -> detay penceresi)
  const actions = useMemo(
    () => ({
      openProject: (id, title) =>
        openWindow({ id: `project-${id}`, title, type: "project-detail", data: getProject(id) }),
      openContact: (id, title) =>
        openWindow({ id: `contact-${id}`, title, type: "contact-detail", data: getContact(id) }),
      openCertificate: (id, title) => {
        const data = getCertificate(id);
        if (!data) return;
        openWindow({ id: `certificate-${id}`, title, type: "certificate-detail", data });
      },
      openSkill: (id, title) => {
        const data = SKILL_DETAILS[id];
        if (!data) return; // detay verisi yoksa (şu an hepsi) hiçbir şey açılmaz
        openWindow({ id: `skill-${id}`, title, type: "skill-detail", data });
      },
    }),
    [openWindow],
  );

  return { windows, openWindow, closeWindow, actions };
}
