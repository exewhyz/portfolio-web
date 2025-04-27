import { defineQuery } from "next-sanity"

export const PERSONAL_DATA_QUERY = defineQuery(`*[_type == "personalData"][0]`)
export const PROFESSIONAL_DATA_QUERY = defineQuery(`*[_type == "professionalData"][0]`)
export const SOCIAL_DATA_QUERY = defineQuery(`*[_type == "socialData"][0]`)
export const SKILLS_QUERY = defineQuery(`*[_type == "skills"][0].skillList`)
export const PROJECTS_QUERY = defineQuery(`*[_type == "project"]`)
export const EDUCATION_QUERY = defineQuery(`*[_type == "education"]`)
export const TRAINING_EXPERIENCE_QUERY = defineQuery(`*[_type == "trainingExperience"][0]`)
export const PROFESSIONAL_EXPERIENCE_QUERY = defineQuery(`*[_type == "professionalExperience"][0]`)