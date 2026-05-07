import { RouteObject } from 'react-router-dom'
import Home from '../views/Home'
import About from '../views/About'
import Resume from '../views/Resume'
import Photography from '../views/Photography'
import NotFound from '../views/NotFound'
import App from '../App'
import Projects from '../views/Projects'
import Skills from '../views/Skills'

export type NavItemId =
  | 'home'
  | 'about'
  | 'resume'
  | 'photography'
  | 'projects'
  | 'skills'

export interface NavItem {
  path: string
  id: NavItemId
}

export const navItems: NavItem[] = [
  { path: '/about', id: 'about' },
  { path: '/resume', id: 'resume' },
  { path: '/photography', id: 'photography' },
  { path: '/projects', id: 'projects' },
  { path: '/skills', id: 'skills' },
]

export const allNavItems: NavItem[] = [
  { path: '/', id: 'home' },
  ...navItems,
]

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'resume',
        element: <Resume />,
      },
      {
        path: 'projects',
        element: <Projects />,
      },
      {
        path: 'skills',
        element: <Skills />,
      },
      {
        path: 'photography',
        element: <Photography />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]
