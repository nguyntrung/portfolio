interface EducationProps {
  school: string
  major: string
  degree?: string
  startYear: string
  endYear: string
  description?: string
}

export const educationData: EducationProps = {
  school: "Ho Chi Minh City University of Industry and Trade (HUIT)",
  major: "Infomation Technology",
  degree: "Bachelor's Degree",
  startYear: "2021",
  endYear: "2025",
  description: "Graduated from engineering, major in software development."
}