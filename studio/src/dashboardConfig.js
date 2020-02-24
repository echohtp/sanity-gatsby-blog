export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e53933c14874268c7e0b2ff',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-6x6bq1ew',
                  apiId: '08ad26e7-d47e-4501-b97f-398e42750815'
                },
                {
                  buildHookId: '5e53933c8b84695709037b04',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-jjhbrgit',
                  apiId: '0f8578a7-252d-41ba-aad6-7f965977a173'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/echohtp/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-jjhbrgit.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
