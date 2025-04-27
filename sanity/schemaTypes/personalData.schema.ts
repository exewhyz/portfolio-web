import { defineField, defineType } from "sanity";

// Personal Data Schema
export const personalData = defineType({
    name: 'personalData',
    title: 'Personal Data',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'age',
            title: 'Age',
            type: 'number'
        }),
        defineField({
            name: 'address',
            title: 'Address',
            type: 'string'
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
            validation: Rule => Rule.required().email()
        }),
        defineField({
            name: 'profilePhoto',
            title: 'Profile Photo',
            type: 'image',
            options: {
                hotspot: true
            },
            fields: [
                defineField({
                    name: "alt",
                    title: 'Alt',
                    type: 'string'
                })
            ]
        })
    ]
})