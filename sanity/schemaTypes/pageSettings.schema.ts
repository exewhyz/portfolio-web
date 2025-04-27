import { defineArrayMember, defineField, defineType } from "sanity";

// Page Settings Schema
export const pageSettings = defineType({
    name: 'pageSettings',
    title: 'Page Settings',
    type: 'document',
    fields: [
        defineField({
            name: 'tabs',
            title: 'Tabs',
            type: 'array',
            of: [defineArrayMember({ type: 'string' })]
        }),
        defineField({
            name: 'navLinks',
            title: 'Navigation Links',
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'title',
                            title: 'Title',
                            type: 'string'
                        }),
                        defineField({
                            name: 'url',
                            title: 'URL',
                            type: 'string'
                        }),
                        defineField({
                            name: 'items',
                            title: 'Subitems',
                            type: 'array',
                            of: [
                                defineArrayMember({
                                    type: 'object',
                                    fields: [
                                        defineField({
                                            name: 'title',
                                            title: 'Title',
                                            type: 'string'
                                        }),
                                        defineField({
                                            name: 'url',
                                            title: 'URL',
                                            type: 'string'
                                        }),
                                        defineField({
                                            name: 'isActive',
                                            title: 'Is Active',
                                            type: 'boolean',
                                            initialValue: false
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    ]
})