import { defineArrayMember, defineField, defineType } from "sanity";

// Education Schema
export const education = defineType({
    name: 'education',
    title: 'Education',
    type: 'document',
    fields: [
        defineField({
            name: 'degree',
            title: 'Degree',
            type: 'string',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'institution',
            title: 'Institution',
            type: 'string',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'location',
            title: 'Location',
            type: 'string'
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
            name: 'stream',
            title: 'Stream',
            type: 'string'
        }),
        defineField({
            name: 'certification',
            title: 'Certification',
            type: 'string'
        }),
        defineField({
            name: 'achievements',
            title: 'Achievements',
            type: 'array',
            of: [defineArrayMember({ type: 'string' })]
        })
    ]
})