import {
    PERSONAL_DATA_QUERY,
    PROFESSIONAL_DATA_QUERY,
    SOCIAL_DATA_QUERY,
    SKILLS_QUERY,
    PROJECTS_QUERY,
    EDUCATION_QUERY,
    TRAINING_EXPERIENCE_QUERY,
    PROFESSIONAL_EXPERIENCE_QUERY,
    HOBBIES_QUERY,
    LANGUAGES_QUERY,
    CERTIFICATES_QUERY,
    INTERESTS_QUERY,
    REFERENCES_QUERY
} from './queries'
import { sanityFetch } from './client'

// Server components can call these directly
export async function getPersonalData() {
    return await sanityFetch(PERSONAL_DATA_QUERY)
}

export async function getProfessionalData() {
    return await sanityFetch(PROFESSIONAL_DATA_QUERY)
}

export async function getSocialData() {
    return await sanityFetch(SOCIAL_DATA_QUERY)
}

export async function getSkills() {
    return await sanityFetch(SKILLS_QUERY)
}

export async function getHobbies() {
    return await sanityFetch(HOBBIES_QUERY)
}

export async function getLanguages() {
    return await sanityFetch(LANGUAGES_QUERY)
}

export async function getCertificates() {
    return await sanityFetch(CERTIFICATES_QUERY)
}

export async function getInterests() {
    return await sanityFetch(INTERESTS_QUERY)
}

export async function getReferences() {
    return await sanityFetch(REFERENCES_QUERY)
}

export async function getProjects() {
    return await sanityFetch(PROJECTS_QUERY)
}

export async function getEducation() {
    return await sanityFetch(EDUCATION_QUERY)
}

export async function getTrainingExperience() {
    return await sanityFetch(TRAINING_EXPERIENCE_QUERY)
}

export async function getProfessionalExperience() {
    return await sanityFetch(PROFESSIONAL_EXPERIENCE_QUERY)
}

// Helper function to fetch all data at once
export async function getAllSanityData() {
    const [
        personalData,
        professionalData,
        socialData,
        skills,
        hobbies,
        languages,
        certificates,
        interests,
        references,
        projects,
        education,
        trainingExperience,
        professionalExperience
    ] = await Promise.all([
        getPersonalData(),
        getProfessionalData(),
        getSocialData(),
        getSkills(),
        getHobbies(),
        getLanguages(),
        getCertificates(),
        getInterests(),
        getReferences(),
        getProjects(),
        getEducation(),
        getTrainingExperience(),
        getProfessionalExperience()
    ])

    return {
        personalData,
        professionalData,
        socialData,
        skills,
        hobbies,
        languages,
        certificates,
        interests,
        references,
        projects,
        education,
        trainingExperience,
        professionalExperience
    }
}