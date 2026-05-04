import { RouteObject } from 'react-router-dom'
import Home from '../views/Home'
import About from '../views/About'
import Resume from '../views/Resume'
import Photography from '../views/Photography'
import NotFound from '../views/NotFound'
import App from '../App'

export interface NavItem {
  path: string
  labelKey: 'nav.home' | 'nav.about' | 'nav.resume' | 'nav.photography'
}

export const navItems: NavItem[] = [
  { path: '/about', labelKey: 'nav.about' },
  { path: '/resume', labelKey: 'nav.resume' },
  { path: '/photography', labelKey: 'nav.photography' },
]

export const allNavItems: NavItem[] = [
  { path: '/', labelKey: 'nav.home' },
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
