import { defineArrayMember, defineField, defineType } from "sanity";

// Hobbies Schema
export const hobbies = defineType({
    name: 'hobbies',
    title: 'Hobbies',
    type: 'document',
    fields: [
        defineField({
            name: 'hobbyList',
            title: 'Hobby List',
            type: 'array',
            of: [defineArrayMember({ type: 'string' })]
        })
    ]
})