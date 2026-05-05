import './Resume.css'
import { useState, useEffect, useRef, type ReactNode } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import AutotestLogo from '../images/tools/autotest_Logo.png'
import BookLogo from '../images/Book_Logo.png'
import BootstrapLogo from '../images/framework/BootStrap_Logo.png'
import CLogo from '../images/ProgrammingLanguage/C_Logo.png'
import ClaudeLogo from '../images/tools/Claude_Logo.png'
import CMLLogo from '../images/tools/cml_Logo.png'
import CppLogo from '../images/ProgrammingLanguage/Cpp_Logo.png'
import CSSLogo from '../images/ProgrammingLanguage/CSS_Logo.png'
import CursorLogo from '../images/tools/Cursor_Logo.png'
import DockerLogo from '../images/tools/Docker_Logo.png'
import EhTradeLogo from '../images/logo/eh_trade_logo.png'
import ExpressLogo from '../images/framework/Express_Logo.png'
import GeminiLogo from '../images/tools/Gemini_Logo.png'
import GitLogo from '../images/tools/Git_Logo.png'
import GithubLogo from '../images/tools/Github_Logo.png'
import GoLogo from '../images/ProgrammingLanguage/Go_Logo.png'
import HTMLLogo from '../images/ProgrammingLanguage/HTML_Logo.png'
import JavaLogo from '../images/ProgrammingLanguage/Java_Logo.png'
import jQueryLogo from '../images/framework/jQuery_Logo.png'
import JSLogo from '../images/ProgrammingLanguage/JS_Logo.png'
import JestLogo from '../images/tools/JestLogo.png'
import TSLogo from '../images/ProgrammingLanguage/TS_Logo.png'
import MernLogo from '../images/framework/Mern_Logo.png'
import n8nLogo from '../images/tools/n8n_Logo.png'
import NextJSLogo from '../images/framework/NextJS_Logo.png'
import NodeLogo from '../images/framework/Node_Logo.png'
import PostmanLogo from '../images/tools/Postman_Logo.png'
import PythonLogo from '../images/ProgrammingLanguage/Python_Logo.png'
import RacketLogo from '../images/ProgrammingLanguage/Racket_Logo.png'
import ReactLogo from '../images/framework/React_Logo.png'
import ReactNativeLogo from '../images/framework/React_Native_Logo.png'
import RestAPILogo from '../images/framework/RestAPI_Logo.png'
import ResumePdf from "../images/Jimmy Zheng's External CS Resume V4 .pdf"
import RHHSLogo from '../images/RHHSLogo.png'
import SQLLogo from '../images/ProgrammingLanguage/SQL_Logo.png'
import SkillsLogo from '../images/Skill_Logo.png'
import StripeLogo from '../images/framework/Stripe_Logo.png'
import VBALogo from '../images/ProgrammingLanguage/VBA_Logo.png'
import VueInline from '../images/framework/Vue-Inline.png'
import VueLogo from '../images/framework/Vue_Logo.png'
import WaterlooLogo from '../images/waterlooLoGo.svg'
import WorkExperienceLogo from '../images/work-experience-logo.svg'
import WorkLogo from '../images/Work_Logo.png'
import ComfyLogo from '../images/tools/Comfy.png'
interface ExperienceItem {
  title: string
  company: string
  companyLinks?: SkillLink[]
  location: string
  period: string
  technologies: string[]
  achievements: ReactNode[]
  evaluation?: string
}

interface SkillLink {
  name: string
  href: string
}

interface SkillLogo {
  src: string
  alt: string
}

interface SkillCategory {
  title: string
  links: SkillLink[]
  logos: SkillLogo[]
  reverse?: boolean
}

const experiences: ExperienceItem[] = [
  {
    title: 'Full-Stack Developer, Co-op',
    company: 'Hanov Solutions Inc',
    companyLinks: [{ name: 'Hanov Solutions Inc', href: 'https://www.hanovsolutions.com/' }],
    location: 'Waterloo, Ontario',
    period: 'Jan 2026 - April 2026',
    technologies: [
      'Python',
      'Go',
      'Vue.js',
      'Node.js',
      'JavaScript',
      'TypeScript',
      'Vite',
      'SQLite',
      'Stripe',
    ],
    achievements: [
      <>
        Engineered and deployed core infrastructure for{' '}
        <a
          href="https://eh-trade.ca/"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-link resume-des-link"
        >
          <strong>eh-trade</strong>
        </a>
        <img src={EhTradeLogo} alt="eh-trade logo img" className="inline-tech-logo"/>
        , a momentum-based stock analytics SaaS platform, transforming{' '}
        <strong>Python ML</strong> trading models into a production-ready{' '}
        <strong>full-stack</strong> system serving real-time stock screening.
      </>,



      <>Optimized <strong>Vue 3</strong><img src={VueInline} className="inline-tech-logo" alt="VueLogo"/> 
      <a href="https://eh-trade.ca/stock/AAPL"
         target="_blank"
         rel="noopener noreferrer"
         className="resume-link resume-des-link"
      >
        <strong>charting</strong>
      </a>{' '}
      and {' '}
      <a href="https://eh-trade.ca/pair?s=kc51"
         target="_blank"
         rel="noopener noreferrer"
         className="resume-link resume-des-link"
      >
        <strong>pair analysis</strong>
      </a> {' '} interfaces by refactoring <strong>data-heavy frontend</strong> modules, reducing redundant 
      <strong>API</strong> and <strong>RPC</strong> calls,
      and implementing <strong>lazy loading</strong>, cutting load times by <strong>30%</strong> across desktop and mobile.</>,

      <>Built a scalable <strong>programmatic SEO (pSEO)</strong> system using <strong>Go</strong>
      <img src={GoLogo} className="inline-tech-logo" alt="Go logo"/>, 
      implementing <strong>server-side rendering (SSR)</strong> for dynamic stock pages, automated <strong>meta/OG tag</strong>
      {' '}generation, <strong>cache-backed</strong> data prewarming, and <strong>sitemap</strong> integration, enabling
      efficient <strong>indexing</strong> and fast crawl performance across <strong>500+</strong>
      <a href="https://eh-trade.ca/earnings"
         target="_blank"
         rel="noopener noreferrer"
         className="resume-link resume-des-link"
      >
        {' '}<strong>earning pages</strong>
      </a> {' '} and hundreds of comparison URLs.</>,


      <>Developed secure <strong>authentication</strong> and <strong>subscription</strong> infrastructure using <strong>{' '}TypeScript</strong>
      <img src={TSLogo} alt="TypeScript Logo" className="inline-tech-logo"/>,
      <strong>{' '}Go</strong><img src={GoLogo} alt="Go Logo" className="inline-tech-logo"/> and
      <strong>{' '}Stripe</strong> <img src={StripeLogo} alt="Stripe Logo" className="inline-tech-logo"/>, 
      enabling recurring billing, gated premium features, 
      and full user lifecycle management from onboarding to subscription control.
      </>,



      <>
        Used <strong>AI-assisted</strong> development workflows 
        <img src={ClaudeLogo} alt="Claude Code Logo" className="inline-tech-logo"/>
        <img src={CursorLogo} alt="Cursor Logo" className="inline-tech-logo"/> to
        speed implementation of <strong>full-stack</strong> features including<strong> charting </strong>improvements,
        <strong> watchlist</strong> performance, <strong> subscription</strong> flows, and analytics tooling across
        <strong> Vue.js</strong>
        <img src={VueInline} alt="Vue Logo" className="inline-tech-logo"/>, 
        <strong>TypeScript</strong>, 
        <img src={TSLogo} alt="TSlogo Logo" className="inline-tech-logo"/>
        <strong> Go</strong>
        <img src={GoLogo} alt="Go Logo" className="inline-tech-logo"/>, and 
        <strong> Python</strong>
        <img src={PythonLogo} alt="python logo" className="inline-tech-logo"/>, increasing feature throughput by{' '}
        <strong>40%</strong> without compromising review quality or system
        reliability.
      </>,
    ],
  },
  {
    title: 'Software Innovation Developer, Co-op',
    company: 'Emerson, NI',
    companyLinks: [
      { name: 'Emerson', href: 'https://www.emerson.com/en-us' },
      { name: 'NI', href: 'https://www.ni.com/en.html?srsltid=AfmBOormNRFx7ARN0LyBbBtcxeLqHRkAZOzqghXwkx6FYN6NFfkN4hiM' },
    ],
    location: 'Shanghai, China',
    period: 'May 2025 - August 2025',
    technologies: [
      'C++',
      'Python',
      'LabVIEW SDK',
      'AST',
      'n8n',
      'REST API',
      'RAG',
      'Docker',
      'React',
    ],
    achievements: [
      <>Assisted in developing a LabVIEW-to-native-code compiler using <strong>C++</strong>
      <img src={CppLogo} alt="C++ Logo" className="inline-tech-logo"/> and <strong>Python</strong>
      <img src={PythonLogo} alt="Python Logo" className="inline-tech-logo"/>, 
      enabling graphical programs to be translated into optimized machine code. 
      Improved compilation speed by <strong>30%</strong> and reduced runtime errors by <strong>20%</strong>, 
      accelerating internal development workflows.</>,
      <>Developed an internal chatbot powered by <strong>RAG</strong> that indexed and summarized official documentation, 
      helping cross-functional teams (e.g., <strong>LabVIEW</strong> developers exploring TestStand) access accurate answers instantly, 
      improving team productivity and knowledge sharing, reducing knowledge lookup time by <strong>50%</strong>.</>,
      <>Built automated workflows with <strong>n8n</strong>
      <img src={n8nLogo} alt="n8n Logo" className="inline-tech-logo"/> and <strong>Docker</strong>
      <img src={DockerLogo} alt="Docker Logo" className="inline-tech-logo"/> to generate and publish circuit documentation, 
      reducing manual preparation time by <strong>70%</strong> and ensuring consistent formatting across all projects.</>,
      <>Designed and built an internal website using <strong>JavaScript</strong>
      <img src={JSLogo} alt="JavaScript Logo" className="inline-tech-logo"/> and <strong>ComfyUI</strong>
      <img src={ComfyLogo} alt="ComfyUI Logo" className="inline-tech-logo"/>  with <strong>React.js</strong>
      <img src={ReactLogo} alt="React Logo" className="inline-tech-logo"/> to auto-generate cartoon avatars from employee photos,
       increasing internal team profile recognizability by <strong>80%</strong>.</>,
    ],
  },
  {
    title: 'Software Developer, Part-time',
    company: 'VolunTrack.Org',
    companyLinks: [{ name: 'VolunTrack.Org', href: 'https://voluntracks.com/' }],
    location: 'Toronto, Ontario',
    period: 'Feb 2024 - August 2025',
    technologies: [
      'React',
      'JavaScript',
      'Jest',
      'Node.js',
      'Express.js',
      'Postman',
      'HTTP',
    ],
    achievements: [
      <>Designed and executed structured <strong>API test</strong> cases in <strong>Postman</strong>
      <img src={PostmanLogo} alt="Postman Logo" className="inline-tech-logo"/> for <strong>happy-path flows</strong>,{' '} 
      <strong>required-field</strong> checks, and <strong>type validation</strong>, verifying correct status codes, 
      response structures, and backend behavior across core endpoints.</>,
      <>Implemented automated testing using <strong>Python unit tests</strong>, <strong>Jest</strong>
      <img src={JestLogo} alt="JestLogoImage" className="inline-tech-logo"/>, and <strong>visual regression testing</strong>, 
      identifying and resolving <strong>15+</strong> bugs before production release and improving overall system reliability by <strong>50%</strong>.</>,
      <>Extended test coverage to <strong>authentication failures</strong>, <strong>nonexistent-resource</strong> scenarios, 
      <strong>duplicate submissions</strong>, <strong>rate-limit</strong> behavior, 
      improving backend response accuracy to <strong>95%+</strong> and reducing integration defects across the web application.</>

    ],
  },
]

interface PersonalProject {
  title: string
  href: string
  period: string
  technologies: string[]
  achievements: ReactNode[]
}

const personalProjects: PersonalProject[] = [
  {
    title: "Simon's Game",
    href: 'https://jimmy20060109.github.io/Simons-Game/',
    period: 'Oct 2024 - Dec 2024',
    technologies: ['JavaScript', 'jQuery', 'Node.js', 'Express.js', 'HTML', 'CSS', 'SQL'],
    achievements: [
      <>Created an interactive game using JavaScript
      <img src={JSLogo} alt="JavaScript Logo" className="inline-tech-logo"/>, <strong>HTML</strong>
      <img src={HTMLLogo} alt="html logo" className="inline-tech-logo"/>, <strong>CSS</strong>
      <img src={CSSLogo} alt="css logo" className="inline-tech-logo"/>, <strong>jQuery</strong>
      <img src={jQueryLogo} alt="jQuery Logo" className="inline-tech-logo"/>, <strong>Node.js</strong>
      <img src={NodeLogo} alt="Node.js Logo" className="inline-tech-logo"/>, and <strong>Express.js</strong>
      <img src={ExpressLogo} alt = "ExpressLogo" className="inline-tech-logo"/>,{' '}
      enhancing user engagement through immersive audio effects 
      and intuitive interaction features.</>,
      <>Engineered backend functions in <strong>JavaScript</strong> 
      <img src={JSLogo} alt="JS logo" className="inline-tech-logo"/>,{' '}
      to manage player choices and game-state logic, ensuring seamless real-time 
      interactions and reliable outcome validation.</>,
    ],
  },
  {
    title: 'Keeper Note App',
    href: 'https://jimmy20060109.github.io/Website-create/',
    period: 'Feb 2025 - June 2025',
    technologies: ['React', 'JavaScript', 'CSS', 'Postman', 'HTTP', 'Unsplash API'],
    achievements: [
      <>Built a Google Keep-style note-taking app using <strong>React</strong>
      <img src={ReactLogo} alt="React Logo" className="inline-tech-logo"/>,{' '}
      functional components and <strong>Hooks (useState)</strong>,{' '}
      supporting creating and deleting notes via controlled inputs and prop callbacks.</>,
      <>Create React App with <strong>npm scripts</strong> + cross-env (OpenSSL fix),{' '}
      <strong>ESLint</strong> (react-hooks); 
      CSS + Google Fonts.</>,
      <>Composed reusable components (Header, Footer, CreateArea, Note) 
      with <strong>lifted state</strong> and keyed lists.</>,
    ],
  },
]

const zhExperiences: Pick<ExperienceItem, 'title' | 'location' | 'period' | 'achievements'>[] = [
  {
    title: '全栈开发实习生',
    location: '安大略省滑铁卢',
    period: '2026 年 1 月 - 2026 年 4 月',
    achievements: [
      <>
        为 <strong>eh-trade</strong> 这一基于动量策略的股票分析 SaaS 平台设计并部署核心基础设施，
        将 <strong>Python 机器学习</strong>交易模型转化为可用于生产环境的
        <strong>全栈</strong>系统，支持实时股票筛选。
      </>,
      <>
        通过重构 <strong>Vue 3</strong> 中数据密集的前端模块，优化图表和配对分析界面，
        减少重复 <strong>API</strong> 与 <strong>RPC</strong> 调用，并实现
        <strong>懒加载</strong>，使桌面端和移动端加载时间降低 <strong>30%</strong>。
      </>,
      <>
        使用 <strong>Go</strong> 构建可扩展的 <strong>programmatic SEO (pSEO)</strong> 系统，
        为动态股票页面实现 <strong>服务端渲染 (SSR)</strong>、自动 meta/OG 标签生成、
        基于缓存的数据预热和 sitemap 集成，让 <strong>500+</strong> 财报页面及大量对比 URL
        能被高效索引并快速抓取。
      </>,
      <>
        使用 <strong>TypeScript</strong>、<strong>Go</strong> 和 <strong>Stripe</strong>
        开发安全的认证与订阅基础设施，支持周期性计费、付费功能权限控制，以及从用户引导到订阅管理的完整生命周期。
      </>,
      <>
        使用 <strong>AI 辅助开发</strong>工作流加速全栈功能实现，包括图表优化、watchlist 性能、
        订阅流程和分析工具，覆盖 <strong>Vue.js</strong>、<strong>TypeScript</strong>、
        <strong>Go</strong> 与 <strong>Python</strong>，在不牺牲代码审查质量和系统可靠性的前提下，
        将功能交付效率提升 <strong>40%</strong>。
      </>,
    ],
  },
  {
    title: '软件创新开发实习生',
    location: '中国上海',
    period: '2025 年 5 月 - 2025 年 8 月',
    achievements: [
      <>
        使用 <strong>C++</strong> 和 <strong>Python</strong> 协助开发 LabVIEW 到原生代码的编译器，
        将图形化程序转换为优化后的机器码，使编译速度提升 <strong>30%</strong>，
        运行时错误减少 <strong>20%</strong>，加速内部开发工作流。
      </>,
      <>
        开发由 <strong>RAG</strong> 驱动的内部聊天机器人，用于索引和总结官方文档，
        帮助跨职能团队快速获取准确答案，团队知识检索时间减少 <strong>50%</strong>。
      </>,
      <>
        使用 <strong>n8n</strong> 和 <strong>Docker</strong> 构建自动化工作流，
        生成并发布电路文档，使人工准备时间减少 <strong>70%</strong>，并保证项目文档格式一致。
      </>,
      <>
        使用 <strong>JavaScript</strong>、<strong>ComfyUI</strong> 和 <strong>React.js</strong>
        设计并开发内部网站，可根据员工照片自动生成卡通头像，使内部团队资料识别度提升 <strong>80%</strong>。
      </>,
    ],
  },
  {
    title: '兼职软件开发者',
    location: '安大略省多伦多',
    period: '2024 年 2 月 - 2025 年 8 月',
    achievements: [
      <>
        使用 <strong>Postman</strong> 设计并执行结构化 <strong>API 测试</strong>用例，
        覆盖 happy path、必填字段和类型校验，验证核心端点的状态码、响应结构和后端行为。
      </>,
      <>
        使用 <strong>Python 单元测试</strong>、<strong>Jest</strong> 和
        <strong>视觉回归测试</strong>实现自动化测试，在生产发布前识别并修复
        <strong>15+</strong> 个缺陷，使整体系统可靠性提升 <strong>50%</strong>。
      </>,
      <>
        将测试覆盖扩展到认证失败、不存在资源、重复提交和限流等场景，
        将后端响应准确率提升至 <strong>95%+</strong>，并减少 Web 应用集成缺陷。
      </>,
    ],
  },
]

const zhPersonalProjects: Pick<PersonalProject, 'period' | 'achievements'>[] = [
  {
    period: '2024 年 10 月 - 2024 年 12 月',
    achievements: [
      <>
        使用 <strong>JavaScript</strong>、<strong>HTML</strong>、<strong>CSS</strong>、
        <strong>jQuery</strong>、<strong>Node.js</strong> 和 <strong>Express.js</strong>
        创建互动游戏，通过沉浸式音效和直观交互提升用户参与度。
      </>,
      <>
        使用 <strong>JavaScript</strong> 构建后端函数来管理玩家选择和游戏状态逻辑，
        确保实时交互流畅且结果校验可靠。
      </>,
    ],
  },
  {
    period: '2025 年 2 月 - 2025 年 6 月',
    achievements: [
      <>
        使用 <strong>React</strong> 函数组件和 <strong>Hooks (useState)</strong>
        构建类似 Google Keep 的笔记应用，支持通过受控输入和 props 回调创建、删除笔记。
      </>,
      <>
        使用 <strong>npm scripts</strong> + cross-env（OpenSSL 修复）搭建 Create React App，
        并配置 <strong>ESLint</strong>（react-hooks）、CSS 和 Google Fonts。
      </>,
      <>
        组合 Header、Footer、CreateArea、Note 等可复用组件，通过
        <strong>状态提升</strong>和 keyed lists 管理数据流。
      </>,
    ],
  },
]

const skillsCategories: SkillCategory[] = [
  {
    title: 'Languages',
    links: [
      { name: 'C', href: 'https://www.cprogramming.com/' },
      { name: 'C++', href: 'https://isocpp.org/' },
      { name: 'Python', href: 'https://www.python.org/' },
      { name: 'Java', href: 'https://www.oracle.com/java/' },
      {
        name: 'JavaScript',
        href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      },
      { name: 'TypeScript', href: 'https://www.typescriptlang.org/' },
      {
        name: 'HTML',
        href: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
      },
      { name: 'CSS', href: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
      { name: 'SQL', href: 'https://en.wikipedia.org/wiki/SQL' },
      { name: 'Racket', href: 'https://racket-lang.org/' },
      {
        name: 'VBA',
        href: 'https://learn.microsoft.com/en-us/office/vba/api/overview',
      },
      { name: 'LabVIEW SDK', href: 'https://www.labviewmakerhub.com/' },
      {name: 'Go', href: 'https://go.dev/'},
    ],
    logos: [
      { src: CLogo, alt: 'C Logo' },
      { src: CppLogo, alt: 'C++ Logo' },
      { src: PythonLogo, alt: 'Python Logo' },
      { src: JavaLogo, alt: 'Java Logo' },
      { src: JSLogo, alt: 'JavaScript Logo' },
      { src: HTMLLogo, alt: 'HTML Logo' },
      { src: CSSLogo, alt: 'CSS Logo' },
      { src: SQLLogo, alt: 'SQL Logo' },
      { src: RacketLogo, alt: 'Racket Logo' },
      { src: VBALogo, alt: 'VBA Logo' },
      { src: GoLogo, alt: 'Go Logo' },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    links: [
      { name: 'React', href: 'https://react.dev/' },
      { name: 'React Native', href: 'https://reactnative.dev/' },
      { name: 'MERN', href: 'https://www.mongodb.com/mern-stack' },
      { name: 'Node.js', href: 'https://nodejs.org/' },
      { name: 'Express.js', href: 'https://expressjs.com/' },
      { name: 'Next.js', href: 'https://nextjs.org/' },
      { name: 'REST API', href: 'https://restfulapi.net/' },
      { name: 'jQuery', href: 'https://jquery.com/' },
      { name: 'Bootstrap', href: 'https://getbootstrap.com/' },
      { name: 'Vue.js', href: 'https://vuejs.org/' },
      { name: 'Stripe', href: 'https://stripe.com/' },
    ],
    logos: [
      { src: ReactLogo, alt: 'React Logo' },
      { src: ReactNativeLogo, alt: 'React Native Logo' },
      { src: MernLogo, alt: 'MERN Logo' },
      { src: NodeLogo, alt: 'Node.js Logo' },
      { src: ExpressLogo, alt: 'Express.js Logo' },
      { src: NextJSLogo, alt: 'Next.js Logo' },
      { src: RestAPILogo, alt: 'REST API Logo' },
      { src: jQueryLogo, alt: 'jQuery Logo' },
      { src: BootstrapLogo, alt: 'Bootstrap Logo' },
      { src: VueLogo, alt: 'Vue.js Logo' },
      { src: StripeLogo, alt: 'Stripe Logo' },
    ],
    reverse: true,
  },
  {
    title: 'Tools & Technologies',
    links: [
      { name: 'Postman', href: 'https://www.postman.com/' },
      { name: 'Linux command line', href: 'https://www.linux.org/' },
      { name: 'GitHub', href: 'https://github.com/' },
      { name: 'Git', href: 'https://git-scm.com/' },
      { name: 'n8n', href: 'https://n8n.io/' },
      {
        name: 'Test automation',
        href: 'https://en.wikipedia.org/wiki/Test_automation',
      },
      { name: 'Docker', href: 'https://www.docker.com/' },
      { name: 'SSH', href: 'https://en.wikipedia.org/wiki/Secure_Shell' },
      {
        name: 'UI/UX',
        href: 'https://en.wikipedia.org/wiki/User_experience_design',
      },
    ],
    logos: [
      { src: PostmanLogo, alt: 'Postman Logo' },
      { src: GithubLogo, alt: 'Github Logo' },
      { src: GitLogo, alt: 'Git Logo' },
      { src: n8nLogo, alt: 'n8n Logo' },
      { src: DockerLogo, alt: 'Docker Logo' },
      { src: CursorLogo, alt: 'Cursor Logo' },
      { src: GeminiLogo, alt: 'Gemini Logo' },
      { src: CMLLogo, alt: 'CML Logo' },
      { src: AutotestLogo, alt: 'Autotest Logo' },
    ],
  },
]

const Resume = () => {
  const { language, t } = useLanguage()
  const [buttonState, setButtonState] = useState('initial-show')
  const isHoveredRef = useRef(false)
  const collapseDelayRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const localizedExperiences =
    language === 'zh'
      ? experiences.map((experience, index) => ({
          ...experience,
          ...zhExperiences[index],
        }))
      : experiences
  const localizedPersonalProjects =
    language === 'zh'
      ? personalProjects.map((project, index) => ({
          ...project,
          ...zhPersonalProjects[index],
        }))
      : personalProjects

  useEffect(() => {
    const timer = setTimeout(() => {
      setButtonState('collapsed')
    }, 2000)

    return () => {
      clearTimeout(timer)
      if (collapseDelayRef.current) {
        clearTimeout(collapseDelayRef.current)
      }
    }
  }, [])

  const handleMouseEnter = () => {
    if (collapseDelayRef.current) {
      clearTimeout(collapseDelayRef.current)
      collapseDelayRef.current = null
    }

    if (isHoveredRef.current) {
      return
    }

    isHoveredRef.current = true
    setButtonState('hovered')
  }

  const handleMouseLeave = () => {
    if (!isHoveredRef.current) {
      return
    }

    isHoveredRef.current = false

    collapseDelayRef.current = setTimeout(() => {
      if (!isHoveredRef.current) {
        setButtonState('collapsed')
      }
    }, 120)
  }

  const handleDownload = () => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches
    if (isMobile) {
      window.location.href = ResumePdf
      return
    }

    window.open(ResumePdf, '_blank')
  }

  return (
    <div className="resume-view">
      <div className="resume-container">
        <div className="resume-content-section">
          <div className="educational-background">
            <div className="section-header">
              <img src={BookLogo} alt="Book Logo" className="section-icon" />
              <h2 className="section-title">{t('resume.educationTitle')}</h2>
            </div>
            <div className="education-entry">
              <div className="education-header">
                <div className="education-info">
                  <a
                    href="https://www.uwaterloo.ca/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="university-name resume-link"
                  >
                    {language === 'zh' ? '滑铁卢大学' : 'University of Waterloo'}
                  </a>
                  <img src={WaterlooLogo} alt="University of Waterloo Logo" className="university-logo" />, 
                  <span className="location">
                    {language === 'zh' ? '2B，安大略省滑铁卢' : '2B, Waterloo, Ontario'}
                  </span>
                </div>
                <span className="education-dates">
                  {language === 'zh' ? '2024 年 9 月 - 预计 2029 年 4 月' : 'Sep 2024 - (Expected) April 2029'}
                </span>
              </div>
              <ul className="education-details">
                <li>
                  {language === 'zh' ? (
                    <>
                      <strong>数学荣誉学士（Co-op）</strong>，数据科学
                    </>
                  ) : (
                    <>
                      <strong>Bachelor of Mathematics (Honours) Co-op</strong>, Data Science
                    </>
                  )}
                </li>
                <li>
                  <strong>{t('resume.relevantCoursework')}</strong>{' '}
                  {language === 'zh'
                    ? '面向对象编程、微积分、算法设计与数据结构、线性代数'
                    : 'Object-Oriented Programming, Calculus, Algorithm Design & Data Structure, Linear Algebra'}
                </li>
                <li>
                  <strong>{t('resume.skillsLabel')}</strong>{' '}
                  {language === 'zh'
                    ? '二分查找、二叉树、图论和回溯算法的问题解决能力'
                    : 'Problem-solving in binary search, binary trees, graph theory, and backtracking algorithms'}
                </li>
              </ul>
            </div>
            <div className="education-entry">
              <div className="education-header">
                <div className="education-info">
                  <a
                    href="https://richmondhill-hs.yrdsb.ca/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="university-name resume-link"
                  >
                    {language === 'zh' ? '列治文山高中' : 'Richmond Hill High School'}
                  </a>
                  <img src={RHHSLogo} alt="Richmond Hill High School Logo" className="university-logo" />, 
                  <span className="location">
                    {language === 'zh' ? '安大略省列治文山' : 'Richmond Hill, Ontario'}
                  </span>
                </div>
                <span className="education-dates">
                  {language === 'zh' ? '2021 年 9 月 - 2024 年 6 月' : 'Sep 2021 - Jun 2024'}
                </span>
              </div>
              <ul className="education-details">
                <li>
                  <strong>{language === 'zh' ? '高中毕业证书' : 'High School Diploma'}</strong>
                </li>
                <li>
                  <strong>{t('resume.coursework')}</strong>{' '}
                  {language === 'zh'
                    ? '微积分、高级函数、数据管理、面向对象编程'
                    : 'Calculus, Advanced Functions, Data Management, Object-Oriented Programming'}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="resume-content-section section-compact-gap">
          <div className="technical-skills">
            <div className="section-header">
              <img src={SkillsLogo} alt="Skills Logo" className="section-icon" />
              <h2 className="section-title">{t('resume.skillsTitle')}</h2>
            </div>
            {skillsCategories.map((category, categoryIndex) => (
              <div key={category.title} className="skills-category">
                <h3 className="skills-category-title">
                  {language === 'zh'
                    ? ['编程语言', '框架与库', '工具与技术'][categoryIndex]
                    : category.title}
                </h3>
                <p className="skills-list">
                  {category.links.map((link, index) => (
                    <span key={link.name}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="resume-link"
                      >
                        {link.name}
                      </a>
                      {index < category.links.length - 1 ? ', ' : ''}
                    </span>
                  ))}
                </p>
                <div
                  className={`skills-logos${category.reverse ? ' skills-logos-reverse' : ''}`}
                >
                  {[0, 1].map((containerIndex) => (
                    <div
                      key={`${category.title}-${containerIndex}`}
                      className="skills-logos-container"
                    >
                      {category.logos.map((logo) => (
                        <img
                          key={`${logo.alt}-${containerIndex}`}
                          src={logo.src}
                          alt={logo.alt}
                          className="skill-logo"
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="resume-content-section section-compact-gap">
          <div className="work-experience">
            <div className="section-header">
              <img src={WorkLogo} alt="Work Experience Logo" className="section-icon" />
              <h2 className="section-title">{t('resume.workTitle')}</h2>
            </div>
            <div className="experience-list">
            {localizedExperiences.map((exp, index) => (
              <div key={index} className="experience-item">
                <div className="experience-header">
                  <div>
                    <h3 className="experience-title">{exp.title}</h3>
                    {exp.evaluation && (
                      <span className="experience-evaluation">
                        {exp.evaluation}
                      </span>
                    )}
                  </div>
                  <div className="experience-meta">
                    <span className="experience-company">
                      {exp.companyLinks
                        ? exp.companyLinks.map((companyLink, companyIndex, companyLinks) => (
                            <span key={`${companyLink.name}-${companyIndex}`}>
                              <a
                                href={companyLink.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="resume-link"
                              >
                                {companyLink.name}
                              </a>
                              {companyIndex < companyLinks.length - 1 ? ', ' : ''}
                            </span>
                          ))
                        : exp.company}
                    </span>
                    <span className="experience-location">{exp.location}</span>
                    <span className="experience-period">{exp.period}</span>
                  </div>
                </div>
                <div className="experience-technologies">
                  {exp.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <ul className="experience-achievements">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="achievement-item">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          </div>
        </div>
        <div className="resume-content-section section-compact-gap section-personal-projects-gap">
          <div className="personal-projects">
            <div className="section-header">
              <img src={WorkExperienceLogo} alt="Personal Projects Logo" className="section-icon" />
              <h2 className="section-title">{t('resume.projectsTitle')}</h2>
            </div>
            <div className="experience-list">
              {localizedPersonalProjects.map((project, index) => (
                <div key={index} className="experience-item">
                  <div className="experience-header">
                    <div>
                      <h3 className="experience-title">
                        <a
                          href={project.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="university-name resume-link"
                        >
                          {project.title}
                        </a>
                      </h3>
                    </div>
                    <div className="experience-meta">
                      <span className="experience-period">{project.period}</span>
                    </div>
                  </div>
                  <div className="experience-technologies">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <ul className="experience-achievements">
                    {project.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="achievement-item">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={`resume-actions ${buttonState}`}>
          <div
            className="resume-actions-hitbox"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button className="resume-download-button" onClick={handleDownload}>
              {t('resume.download')}
              <br />
              {t('resume.downloadPdf')}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume
