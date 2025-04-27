import { defineArrayMember, defineField, defineType } from "sanity";

// Project Schema
export const project = defineType({
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text'
        }),
        defineField({
            name: 'technologies',
            title: 'Technologies',
            type: 'array',
            of: [defineArrayMember({ type: 'string' })]
        }),
        defineField({
            name: 'url',
            title: 'URL',
            type: 'url'
        }),
        defineField({
            name: 'githubUrl',
            title: 'GitHub URL',
            type: 'url'
        }),
        defineField({
            name: 'startDate',
            title: 'Start Date',
            type: 'date'
        }),
        defineField({
            name: 'endDate',
            title: 'End Date',
            type: 'date'
        }),
        defineField({
            name: 'images',
            title: 'Images',
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'image',
                    options: {
                        hotspot: true
                    }
                })
            ]
        })
    ]
})