import type { Feature } from '~/types'

const features: Feature[] = [
  {
    icon: 'fa-object-ungroup',
    description: 'Nuxt3 with Vue3 as the frontend',
  },
  {
    icon: 'fa-server',
    description: 'Data base models, migrations, queries and easy DB-switching via TypeORM',
  },
  {
    icon: 'fa-wrench',
    description: 'Strong data-validation using zod to validate all transferred data, fully typed API-routes, strict DB models via TypeORM.',
  },
  {
    icon: 'fa-rotate',
    description: 'Frontend- and Backend data-transformation via nuxt-sidebase-parse and zod',
  },
  {
    icon: 'fa-database',
    description: 'In-memory development SQL-database via sqlite3',
  },
  {
    icon: 'fa-outdent',
    description: 'Linting through eslint',
  },
  {
    icon: 'fa-spell-check',
    description: 'Code testing via vitest, test-library/vue and supertest',
  },
  {
    icon: 'fa-gauge',
    description: 'Code coverage via C8',
  },
  {
    icon: 'fa-book',
    description: 'Component stories via histoire',
  },
  {
    icon: 'fa-gear',
    description: 'CSS utiltities via TailwindCSS',
  },
  {
    icon: 'fa-pen-fancy',
    description: 'CSS components via Ant Design Vue',
  },
  {
    icon: 'fa-clipboard-check',
    description: 'Type checking in script and template via Volar / vue-tsc',
  },
]

export default features
