import { RouteObject } from 'react-router-dom'
import Home from '../views/Home'
import About from '../views/About'
import Resume from '../views/Resume'
import Experience from '../views/Experience'
import Skills from '../views/Skills'
import Gallery from '../views/Gallery'
import Photography from '../views/Photography'
import NotFound from '../views/NotFound'

export interface RouteConfig extends RouteObject {
  label: string
  path: string
}

export const routes: RouteConfig[] = [
  {
    path: '/',
    element: <Home />,
    label: 'Home',
  },
  {
    path: '/about',
    element: <About />,
    label: 'About',
  },
  {
    path: '/resume',
    element: <Resume />,
    label: 'Resume',
  },
  {
    path: '/experience',
    element: <Experience />,
    label: 'Experience',
  },
  {
    path: '/skills',
    element: <Skills />,
    label: 'Skills',
  },
  {
    path: '/gallery',
    element: <Gallery />,
    label: 'Gallery',
  },
  {
    path: '/photography',
    element: <Photography />,
    label: 'Photography',
  },
  {
    path: '*',
    element: <NotFound />,
    label: 'Not Found',
  },
]

// 导出导航项配置（用于 NavBar）
export const navItems = routes
  .filter((route) => route.path !== '*' && route.path !== '/')
  .map((route) => ({
    path: route.path,
    label: route.label,
  }))

// 添加 Home 到导航项（如果需要）
export const allNavItems = [
  { path: '/', label: 'Home' },
  ...navItems,
]
