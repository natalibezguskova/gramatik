import {sections, sectionsData} from "./info/texts";

export const sectionsNames = Object.values(sections)

export const content = {
  firstSection: sectionsData[sections.HOME],
  secondSection: sectionsData[sections.ABOUT],
  thirdSection: sectionsData[sections.PROJECTS],
  fourthSection: sectionsData[sections.SERVICES],
  fifthSection: sectionsData[sections.THE_TEAM],
  sixthSection: sectionsData[sections.CLIENTS],
  seventhSection: sectionsData[sections.CONTACT],
}
