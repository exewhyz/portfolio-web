import { defineArrayMember, defineField, defineType } from "sanity"

// Interests Schema
export const interests = defineType({
    name: 'interests',
    title: 'Interests',
    type: 'document',
    fields: [
        defineField({
            name: 'interestList',
            title: 'Interest List',
            type: 'array',
            of: [defineArrayMember({ type: 'string' })]
        })
    ]
})