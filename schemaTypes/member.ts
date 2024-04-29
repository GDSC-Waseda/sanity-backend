import {defineType} from 'sanity'

const member = defineType({
  name: 'member',
  title: 'Member',
  type: 'document',
  fields: [
    {name: 'name', title: 'Name', type: 'string'},
    {name: 'program', title: 'Program', type: 'string'},
    {name: 'school', title: 'School', type: 'string'},
    {
      name: 'grade',
      title: 'Grade',
      type: 'string',
      options: {
        list: [
          {title: '1st Year', value: '1st Year'},
          {title: '2nd Year', value: '2nd Year'},
          {title: '3rd Year', value: '3rd Year'},
          {title: '4th Year', value: '4th Year'},
        ],
      },
    },
    {name: 'image', title: 'Image', type: 'image', options: {hotspot: true}},
    {
      name: 'team',
      title: 'Team',
      type: 'string',
      options: {
        list: [
          {title: 'Project', value: 'project'},
          {title: 'Learn More', value: 'learn-more'},
          {title: 'Team Leader', value: 'team-leader'},
          {title: 'Backend', value: 'backend'},
          {title: 'Frontend', value: 'frontend'},
          {title: 'Education', value: 'education'},
          {title: 'Agile', value: 'agile'},
          {title: 'Outreach', value: 'outreach'},
          {title: 'Operations', value: 'operations'},
          {title: 'Marketing', value: 'marketing'},
          {title: 'Finance', value: 'finance'},
        ],
      },
    },
  ],
})

export default member
