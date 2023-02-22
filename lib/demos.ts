export type Item = {
  name: string;
  id: string;
  image: string;
  title: string;
  tags: string;
  slug: string;
  filterCategory: string;
  description?: string;
};

export const demos: {
  id: Key | null | undefined;
  filterCategory: any;
  image: string | undefined;
  title: ReactNode;
  tags: any; name: string; items: Item[]
}[] = [
  {
    name: 'SERVIÇOS',
    items: [
      {
        id: '1',
        image: '/img/portfolio/mas/01.jpg',
        title: "Creativity Demand",
        tags: "Design, WordPress",
        filterCategory: "graphic",
        name: 'MARKETING',
        slug: 'websites',
        description: 'Desenvolvimento de websites, landing pages, lojas virtual',
      },
      {
        name: 'Grouped Layouts',
        slug: 'route-groups',
        description: 'Organize routes without affecting URL paths',
      },
      {
        name: 'Streaming with Suspense',
        slug: 'streaming',
        description:
          'Streaming data fetching from the server with React Suspense',
      },
    ],
  },
  {
    name: 'SOBRE A AGÊNCIA',
    items: [
      {
        name: 'O QUE FAZEMOS',
        slug: 'loading',
        description:
          'Create meaningful loading UI for specific parts of an app',
      },
      {
        name: 'Error',
        slug: 'error-handling',
        description: 'Create error UI for specific parts of an app',
      },
      {
        name: 'Head',
        slug: 'head',
        description: 'Configure the <head> tag of a route segment',
      },
    ],
  },
  {
    name: 'Data Fetching',
    items: [
      {
        name: 'Static-Site Generation',
        slug: 'ssg',
        description: 'Generate static pages',
      },
      {
        name: 'Server-Side Rendering',
        slug: 'ssr',
        description: 'Server-render pages',
      },
      {
        name: 'Incremental Static Regeneration',
        slug: 'isr',
        description: 'Get the best of both worlds between static & dynamic',
      },
    ],
  },
  {
    name: 'Components',
    items: [
      // TODO: Re-add this page once hooks have been updated.
      // {
      //   name: 'Hooks',
      //   slug: 'hooks',
      //   description:
      //     'Preview the hooks available for Client and Server Components',
      // },
      {
        name: 'Client Context',
        slug: 'context',
        description:
          'Pass context between Client Components that cross Server/Client Component boundary',
      },
    ],
  },
  {
    name: 'Styling',
    items: [
      {
        name: 'CSS and CSS-in-JS',
        slug: 'styling',
        description: 'Preview the supported styling solutions',
      },
    ],
  },
];
