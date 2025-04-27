import { defineArrayMember, defineField, defineType } from "sanity";

// Skills Schema
export const skills = defineType({
    name: 'skills',
    title: 'Skills',
    type: 'document',
    fields: [
        defineField({
            name: 'skillList',
            title: 'Skill List',
            type: 'array',
            of: [defineArrayMember({ type: 'string' })]
        })
    ]
})