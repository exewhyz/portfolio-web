// schemas/index.ts
import { type SchemaTypeDefinition } from 'sanity'

// Import all your schema types here
import { personalData } from './personalData.schema'
import { professionalData } from './professionalData.schema'
import { socialData } from './socialData.schema'
import { skills } from './skills.schema'
import { interests } from './interests.schema'
import { hobbies } from './hobbies.schema'
import { languages } from './languages.schema'
import { references } from './references.schema'
import { certification } from './certification.schema'
import { project } from './project.schema'
import { education } from './education.schema'
import { trainingExperience } from './trainingExperience.schema'
import { professionalExperience } from './professionalExperience.schema'
import { pageSettings } from './pageSettings.schema'



// Export the schema
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    personalData,
    professionalData,
    socialData,
    skills,
    interests,
    hobbies,
    languages,
    references,
    certification,
    project,
    education,
    trainingExperience,
    professionalExperience,
    pageSettings
  ],
}