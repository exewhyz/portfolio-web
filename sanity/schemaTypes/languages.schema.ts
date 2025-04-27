import { defineArrayMember, defineField, defineType } from "sanity";

// Languages Schema
export const languages = defineType({
    name: 'languages',
    title: 'Languages',
    type: 'document',
    fields: [
        defineField({
            name: 'languageList',
            title: 'Language List',
            type: 'array',
            of: [defineArrayMember({ type: 'string' })]
        })
    ]
})