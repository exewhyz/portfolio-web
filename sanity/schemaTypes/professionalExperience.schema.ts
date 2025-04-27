import { defineArrayMember, defineField, defineType } from "sanity"

// Professional Experience Schema
export const professionalExperience = defineType({
    name: 'professionalExperience',
    title: 'Professional Experience',
    type: 'document',
    fields: [
        defineField({
            name: 'yearsOfExperience',
            title: 'Years of Experience',
            type: 'number'
        }),
        defineField({
            name: 'experiences',
            title: 'Experiences',
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'company',
                            title: 'Company',
                            type: 'string',
                            validation: Rule => Rule.required()
                        }),
                        defineField({
                            name: 'location',
                            title: 'Location',
                            type: 'string'
                        }),
                        defineField({
                            name: 'position',
                            title: 'Position',
                            type: 'string',
                            validation: Rule => Rule.required()
                        }),
                        defineField({
                            name: 'startYear',
                            title: 'Start Year',
                            type: 'number',
                            validation: Rule => Rule.required()
                        }),
                        defineField({
                            name: 'present',
                            title: 'Present',
                            type: 'boolean',
                            initialValue: false
                        }),
                        defineField({
                            name: 'endYear',
                            title: 'End Year',
                            type: 'number',
                            hidden: ({ document }) => Boolean(document?.present)
                        }),
                        defineField({
                            name: 'projects',
                            title: 'Projects',
                            type: 'array',
                            of: [defineArrayMember({ type: 'text' })]
                        }),
                        defineField({
                            name: 'contributions',
                            title: 'Contributions',
                            type: 'array',
                            of: [defineArrayMember({ type: 'text' })]
                        })
                    ]
                })
            ]
        })
    ]
})