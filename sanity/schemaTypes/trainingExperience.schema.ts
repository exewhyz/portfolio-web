import { defineArrayMember, defineField, defineType } from "sanity";

// Training Experience Schema
export const trainingExperience = defineType({
    name: 'trainingExperience',
    title: 'Training Experience',
    type: 'document',
    fields: [
        defineField({
            name: 'yearsOfExperience',
            title: 'Years of Experience',
            type: 'number'
        }),
        defineField({
            name: 'trainings',
            title: 'Trainings',
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'institution',
                            title: 'Institution',
                            type: 'string',
                            validation: Rule => Rule.required()
                        }),
                        defineField({
                            name: 'course',
                            title: 'Course',
                            type: 'string',
                            validation: Rule => Rule.required()
                        }),
                        defineField({
                            name: 'duration',
                            title: 'Duration',
                            type: 'string'
                        })
                    ]
                })
            ]
        })
    ]
})