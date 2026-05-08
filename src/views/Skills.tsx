import type { ReactNode } from 'react'
import { useTranslations } from '../i18n/LanguageContext'
import './Skills.css'

// ── Language logos ─────────────────────────────────────────
import PythonLogo from '../images/ProgrammingLanguage/Python_Logo.png'
import JsLogo from '../images/ProgrammingLanguage/JS_Logo.png'
import TsLogo from '../images/ProgrammingLanguage/TS_Logo.png'
import JavaLogo from '../images/ProgrammingLanguage/Java_Logo.png'
import GoLogo from '../images/ProgrammingLanguage/Go_Logo.png'
import CLogo from '../images/ProgrammingLanguage/C_Logo.png'
import CppLogo from '../images/ProgrammingLanguage/Cpp_Logo.png'
import HtmlLogo from '../images/ProgrammingLanguage/HTML_Logo.png'
import CssLogo from '../images/ProgrammingLanguage/CSS_Logo.png'
import SqlLogo from '../images/ProgrammingLanguage/SQL_Logo.png'
import RacketLogo from '../images/ProgrammingLanguage/Racket_Logo.png'
import VbaLogo from '../images/ProgrammingLanguage/VBA_Logo.png'
import DartLogo from '../images/ProgrammingLanguage/Dart_Logo.svg'
import LabViewLogo from '../images/ProgrammingLanguage/LabVIEW_Logo.svg'

// ── Framework logos ────────────────────────────────────────
import ReactLogo from '../images/framework/React_Logo.png'
import ReactNativeLogo from '../images/framework/React_Native_Logo.png'
import VueLogo from '../images/framework/Vue_Logo.png'
import NextLogo from '../images/framework/NextJS_Logo.png'
import NodeLogo from '../images/framework/Node_Logo.png'
import ExpressLogo from '../images/framework/Express_Logo.png'
import RestApiLogo from '../images/framework/RestAPI_Logo.png'
import NestLogo from '../images/framework/Nest_Logo.svg'
import FlutterLogo from '../images/framework/Flutter_Logo.svg'
import DotnetLogo from '../images/framework/Dotnet_Logo.svg'

// ── Tool logos ─────────────────────────────────────────────
import DockerLogo from '../images/tools/Docker_Logo.png'
import GithubLogo from '../images/tools/Github_Logo.png'
import PostmanLogo from '../images/tools/Postman_Logo.png'
import CursorLogo from '../images/tools/Cursor_Logo.png'
import N8nLogo from '../images/tools/n8n_Logo.png'
import StripeLogo from '../images/framework/Stripe_Logo.png'
import GitLabLogo from '../images/tools/GitLab_Logo.svg'
import LinuxLogo from '../images/tools/Linux_Logo.svg'
import SupabaseLogo from '../images/tools/Supabase_Logo.svg'
import VercelLogo from '../images/tools/Vercel_Logo.svg'
import RenderLogo from '../images/tools/Render_Logo.svg'
import CloudflareLogo from '../images/tools/Cloudflare_Logo.svg'
import SshLogo from '../images/tools/SSH_Logo.svg'

type DomainKey = 'languages' | 'frameworks' | 'tools'

const translations = {
  en: {
    title: 'Skills',
    languages: {
      title: 'Languages',
    },
    frameworks: {
      title: 'Frameworks & Libraries',
    },
    tools: {
      title: 'Tools & Platforms',
    },
  },
  zh: {
    title: '技能',
    languages: {
      title: '编程语言',
    },
    frameworks: {
      title: '框架与库',
    },
    tools: {
      title: '工具与平台',
    },
  },
}

interface SkillItem {
  name: string
  logo: string
  /** Some logos (Vercel/Linux/SSH) are dark and need to be inverted in dark mode. */
  invertOnDark?: boolean
}

interface SkillDomain {
  key: DomainKey
  accent: string
  glow: string
  icon: ReactNode
  items: SkillItem[]
}

const LanguagesIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    width="22"
    height="22"
  >
    <path
      d="M9 7 4 12l5 5M15 7l5 5-5 5M13 5l-2 14"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const FrameworksIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    width="22"
    height="22"
  >
    <path
      d="M12 3 3 7.5 12 12l9-4.5L12 3Z"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinejoin="round"
    />
    <path
      d="m3 12 9 4.5L21 12M3 16.5 12 21l9-4.5"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinejoin="round"
    />
  </svg>
)

const ToolsIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    width="22"
    height="22"
  >
    <path
      d="M14.7 6.3a4 4 0 0 1 5 5l-3.2-1.1-1.1 1.1 1.1 3.2a4 4 0 0 1-5-5l1.6-1.6-2-2L7.5 8.5l-2-2L8.5 3.5l2 2 1.6-1.6 2 2 .6.4Z"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinejoin="round"
    />
    <path
      d="m13 13-8.5 8.5a1.8 1.8 0 0 1-2.5-2.5L10.5 10.5"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const domains: SkillDomain[] = [
  {
    key: 'languages',
    accent: 'linear-gradient(135deg, #6366F1 0%, #A855F7 100%)',
    glow: 'rgba(124, 92, 255, 0.18)',
    icon: <LanguagesIcon />,
    items: [
      { name: 'Python', logo: PythonLogo },
      { name: 'JavaScript', logo: JsLogo },
      { name: 'TypeScript', logo: TsLogo },
      { name: 'Java', logo: JavaLogo },
      { name: 'Go', logo: GoLogo },
      { name: 'C', logo: CLogo },
      { name: 'C++', logo: CppLogo },
      { name: 'HTML', logo: HtmlLogo },
      { name: 'CSS', logo: CssLogo },
      { name: 'SQL', logo: SqlLogo },
      { name: 'Dart', logo: DartLogo },
      { name: 'Racket', logo: RacketLogo },
      { name: 'VBA', logo: VbaLogo },
      { name: 'LabVIEW SDK', logo: LabViewLogo },
    ],
  },
  {
    key: 'frameworks',
    accent: 'linear-gradient(135deg, #06B6D4 0%, #3B82F6 100%)',
    glow: 'rgba(34, 158, 217, 0.18)',
    icon: <FrameworksIcon />,
    items: [
      { name: 'React', logo: ReactLogo },
      { name: 'React Native', logo: ReactNativeLogo },
      { name: 'Vue.js', logo: VueLogo },
      { name: 'Next.js', logo: NextLogo, invertOnDark: true },
      { name: 'NestJS', logo: NestLogo },
      { name: 'Node.js', logo: NodeLogo },
      { name: 'Express.js', logo: ExpressLogo, invertOnDark: true },
      { name: 'Flutter', logo: FlutterLogo },
      { name: '.NET', logo: DotnetLogo },
      { name: 'REST API', logo: RestApiLogo },
    ],
  },
  {
    key: 'tools',
    accent: 'linear-gradient(135deg, #F472B6 0%, #8B5CF6 100%)',
    glow: 'rgba(196, 102, 192, 0.18)',
    icon: <ToolsIcon />,
    items: [
      { name: 'Docker', logo: DockerLogo },
      { name: 'GitHub', logo: GithubLogo, invertOnDark: true },
      { name: 'GitLab', logo: GitLabLogo },
      { name: 'Linux CLI', logo: LinuxLogo, invertOnDark: true },
      { name: 'SSH', logo: SshLogo },
      { name: 'Postman', logo: PostmanLogo },
      { name: 'Cursor', logo: CursorLogo, invertOnDark: true },
      { name: 'Supabase', logo: SupabaseLogo },
      { name: 'Vercel', logo: VercelLogo, invertOnDark: true },
      { name: 'Render', logo: RenderLogo },
      { name: 'Cloudflare', logo: CloudflareLogo },
      { name: 'Stripe', logo: StripeLogo },
      { name: 'n8n', logo: N8nLogo },
    ],
  },
]

const Skills = () => {
  const t = useTranslations(translations)

  return (
    <section id="skills" className="skills-page">
      <div className="skills-page-content">
        <header className="skills-page-header">
          <h2 className="skills-page-title">{t.title}</h2>
        </header>

        <div className="skill-domain-grid">
          {domains.map((domain) => {
            const localized = t[domain.key]
            return (
              <article
                key={domain.key}
                className={`skill-domain skill-domain--${domain.key}`}
                style={
                  {
                    '--domain-accent': domain.accent,
                    '--domain-glow': domain.glow,
                  } as React.CSSProperties
                }
              >
                <div className="skill-domain-glow" aria-hidden="true" />
                <div className="skill-domain-inner">
                  <header className="skill-domain-header">
                    <span className="skill-domain-icon" aria-hidden="true">
                      {domain.icon}
                    </span>
                    <div className="skill-domain-meta">
                      <h3 className="skill-domain-title">{localized.title}</h3>
                    </div>
                  </header>

                  <hr className="skill-domain-divider" aria-hidden="true" />

                  <ul
                    className="skill-domain-tags"
                    aria-label={localized.title}
                  >
                    {domain.items.map((item) => (
                      <li
                        key={item.name}
                        className={`skill-domain-tag${
                          item.invertOnDark ? ' skill-domain-tag--invert' : ''
                        }`}
                      >
                        <img
                          className="skill-domain-tag-logo"
                          src={item.logo}
                          alt=""
                          loading="lazy"
                          decoding="async"
                        />
                        <span className="skill-domain-tag-name">
                          {item.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills
