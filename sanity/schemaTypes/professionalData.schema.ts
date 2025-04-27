import { defineArrayMember, defineField, defineType } from "sanity";

// Professional Data Schema
export const professionalData = defineType({
    name: 'professionalData',
    title: 'Professional Data',
    type: 'document',
    fields: [
        defineField({
            name: 'about',
            title: 'About',
            type: 'text',
            rows: 4
        }),
        defineField({
            name: 'designations',
            title: 'Designations',
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'title',
                            title: 'Title',
                            type: 'string',
                            validation: Rule => Rule.required()
                        }),
                        defineField({
                            name: 'current',
                            title: 'Current',
                            type: 'boolean',
                            initialValue: false
                        })
                    ]
                })
            ]
        })
    ]
})