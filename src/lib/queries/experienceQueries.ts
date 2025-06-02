// GROQ queries for experience

export const allExperienceQuery = `
  *[_type == "experience"] | order(startDate desc) {
    _id,
    title,
    company,
    startDate,
    endDate,
    isCurrentlyWorkingHere,
    points,
    technologies[],
    "companyLogo": companyImage.asset->url
  }
`;

export const experienceByIdQuery = `
  *[_type == "experience" && _id == $id][0] {
    _id,
    title,
    company,
    startDate,
    endDate,
    isCurrentlyWorkingHere,
    points,
    technologies[],
    "companyLogo": companyImage.asset->url,
    description
  }
`;
