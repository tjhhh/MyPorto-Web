import { futsalProProjectData } from "./futsalpro-data";
import { rideAssistProjectData } from "./rideassist-data";

import { bankSampahProjectData } from "./bank-sampah-data";
import { hikePassMobileProjectData } from "./hikepass-mobile-data";
import { hikePassWebsiteProjectData } from "./hikepass-website-data";
import { idamanTslProjectData } from "./idaman-tsl-data";
import type { ProjectDetailPageData } from "@/app/_types/project-detail";

export const projectOrder = [
  "futsalpro",
  "rideassist",
  "idaman-tsl",
  "hikepass-mobile",
  "hikepass-website",
  "bank-sampah",
];

export const projectsRegistry: Record<string, ProjectDetailPageData> = {
  futsalpro: futsalProProjectData,
  rideassist: rideAssistProjectData,
  "idaman-tsl": idamanTslProjectData,
  "hikepass-mobile": hikePassMobileProjectData,
  "hikepass-website": hikePassWebsiteProjectData,
  "bank-sampah": bankSampahProjectData,
};

export function getProjectNavigation(currentSlug: string) {
  const currentIndex = projectOrder.indexOf(currentSlug);
  const index = currentIndex !== -1 ? currentIndex : 0;
  const chapterNumber = String(index + 1).padStart(2, "0");
  const totalChapters = String(projectOrder.length).padStart(2, "0");
  const nextIndex = (index + 1) % projectOrder.length;
  const nextSlug = projectOrder[nextIndex];
  const nextProject = projectsRegistry[nextSlug];

  return {
    chapterNumber,
    totalChapters,
    nextSlug,
    nextProject,
  };
}
