import { futsalProProjectData } from "./futsalpro-data";
import { rideAssistProjectData } from "./rideassist-data";
import { antitheftProjectData } from "./antitheft-data";
import { bankSampahProjectData } from "./bank-sampah-data";
import { hikePassMobileProjectData } from "./hikepass-mobile-data";
import { hikePassWebsiteProjectData } from "./hikepass-website-data";
import { idamanTslProjectData } from "./idaman-tsl-data";
import type { ProjectDetailPageData } from "@/app/_types/project-detail";

export const projectsRegistry: Record<string, ProjectDetailPageData> = {
  futsalpro: futsalProProjectData,
  rideassist: rideAssistProjectData,
  antitheft: antitheftProjectData,
  "bank-sampah": bankSampahProjectData,
  "hikepass-mobile": hikePassMobileProjectData,
  "hikepass-website": hikePassWebsiteProjectData,
  "idaman-tsl": idamanTslProjectData,
};
