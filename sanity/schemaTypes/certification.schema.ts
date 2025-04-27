import { defineField, defineType } from "sanity";

// Certification Schema
export const certification = defineType({
    name: 'certification',
    title: 'Certification',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
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
            name: 'year',
            title: 'Year',
            type: 'number',
            validation: Rule => Rule.required()
        })
    ]
})