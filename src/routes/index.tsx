import { RouteObject } from 'react-router-dom'
import Home from '../views/Home'
import About from '../views/About'
import Resume from '../views/Resume'
import Skills from '../views/Skills'
import Gallery from '../views/Gallery'
import Photography from '../views/Photography'
import NotFound from '../views/NotFound'
import App from '../App'

export interface NavItem {
  path: string
  label: string
}

export const navItems: NavItem[] = [
  { path: '/about', label: 'About' },
  { path: '/resume', label: 'Resume' },
  { path: '/skills', label: 'Skills' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/photography', label: 'Photography' },
]

export const allNavItems: NavItem[] = [
  { path: '/', label: 'Home' },
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
        path: 'skills',
        element: <Skills />,
      },
      {
        path: 'gallery',
        element: <Gallery />,
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
