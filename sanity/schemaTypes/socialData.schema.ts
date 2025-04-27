import { defineArrayMember, defineField, defineType } from "sanity";

// Social Data Schema
export const socialData = defineType({
    name: 'socialData',
    title: 'Social Data',
    type: 'document',
    fields: [
        defineField({
            name: 'links',
            title: 'Social Links',
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
                            name: 'url',
                            title: 'URL',
                            type: 'url',
                            validation: Rule => Rule.required()
                        })
                    ]
                })
            ]
        })
    ]
})