import { defineField, defineType } from "sanity";

// Reference Schema
export const references = defineType({
    name: 'references',
    title: 'References',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'phone',
            title: 'Phone',
            type: 'string'
        }),
        defineField({
            name: 'email',
            title: 'Email',
            type: 'string',
            validation: Rule => Rule.email()
        })
    ]
})