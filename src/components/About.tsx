import './About.css'
import WaterlooLogo from '../images/waterlooLoGo.svg'
import { useLanguage, useTranslations } from '../i18n/LanguageContext'

const translations = {
  en: {
    title: 'About',
  },
  zh: {
    title: '关于我',
  },
}

const About = () => {
  const { language } = useLanguage()
  const t = useTranslations(translations)

  return (
    <section id="about" className="about">
      <h2 className="section-title">{t.title}</h2>
      <div className="about-content">
        {language === 'zh' ? (
          <>
            <p className="about-text">
              我是一名 <strong>软件工程师</strong>，也是{' '}
              <a
                href="https://uwaterloo.ca/"
                target="_blank"
                rel="noopener noreferrer"
                className="about-link"
              >
                滑铁卢大学
              </a>
              <img src={WaterlooLogo} alt="滑铁卢大学 Logo" className="waterloo-logo-inline" />
              的 <strong>2B 数据科学学生</strong>。我对构建
              <span className="about-highlight">现代、高效、工程质量扎实的软件系统</span>
              有强烈兴趣。凭借数据科学背景和行业实践经验，我会同时从
              <span className="about-highlight">理论与工程落地</span>两个角度思考问题。
            </p>
            <p className="about-text">
              在目前于{' '}
              <a
                href="https://www.hanovsolutions.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="about-link"
              >
                Hanov Solutions Inc
              </a>
              担任 <strong>全栈开发实习生</strong>期间，我为一个基于动量策略的股票分析 SaaS
              平台设计并部署核心基础设施，将 Python 机器学习交易模型转化为支持实时筛选的生产级全栈系统。
              我设计了模块化 Vue 3 架构，减少重复 API 调用，并将图表和 watchlist 的加载性能提升
              <strong>30%</strong>；同时使用 TypeScript 构建安全认证和 Stripe 订阅流程。我也在 Vue、
              TypeScript、Go 与 Python 中应用 Cursor 等 AI 辅助开发工作流，在保持代码质量和可靠性的同时，
              将功能交付效率提升 <strong>40%</strong>。
            </p>
            <p className="about-text">
              我也有 <span className="about-highlight">编译器和系统级开发</span>经验。在{' '}
              <a
                href="https://www.ni.com/en.html"
                target="_blank"
                rel="noopener noreferrer"
                className="about-link"
              >
                Emerson / NI
              </a>
              实习期间，我使用 C++、Python 和基于 AST 的编译流水线参与
              <strong> LabVIEW 到原生代码的编译器</strong>开发，加深了对底层执行模型以及高级抽象如何转化为高效机器码的理解。
            </p>
            <p className="about-text">
              此外，我积极使用 <span className="about-highlight">AI 辅助开发工作流</span>以及
              <span className="about-highlight"> Cursor 和 Codex</span> 等智能 IDE 来加速原型开发、
              重构和工具构建。我的兴趣集中在前端工程、AI 驱动工具和开发者效率的交叉领域，目前正在寻找能够参与
              <strong>有影响力且技术挑战性强的项目</strong>的机会。
            </p>
          </>
        ) : (
          <>
            <p className="about-text">
              I'm a <strong>software engineer</strong> and a <strong>2B Data Science student</strong> at the{' '}
              <a
                href="https://uwaterloo.ca/"
                target="_blank"
                rel="noopener noreferrer"
                className="about-link"
              >
                University of Waterloo
              </a>
              <img src={WaterlooLogo} alt="University of Waterloo Logo" className="waterloo-logo-inline" />
              {' '}, with a strong interest in building{' '}
              <span className="about-highlight">modern, efficient, and well-engineered software systems</span>.
              With a background in data science and hands-on industry experience, I approach problems
              from both <span className="about-highlight">theoretical and practical engineering perspectives</span>.
            </p>
            <p className="about-text">
              In my current co-op as a <strong>Full-Stack Developer</strong> at{' '}
              <a
                href="https://www.hanovsolutions.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="about-link"
              >
                Hanov Solutions Inc
              </a>, I engineered and deployed core infrastructure for a momentum-based stock analytics SaaS
              platform, transforming Python ML trading models into a production-ready full-stack system
              with real-time screening. I designed a modular Vue 3 architecture that reduced redundant
              API calls and improved chart/watchlist load performance by <strong>30%</strong>, and built
              secure authentication plus Stripe-based subscription workflows in TypeScript. I also applied
              AI-assisted development (Cursor) across Vue, TypeScript, Go, and Python to increase feature
              throughput by <strong>40%</strong> while maintaining strong code quality and reliability.
            </p>
            <p className="about-text">
              I also have experience in <span className="about-highlight">compiler and systems-level development</span>.
              During my co-op at <a
                href="https://www.ni.com/en.html"
                target="_blank"
                rel="noopener noreferrer"
                className="about-link"
              >
                Emerson / NI
              </a>, I worked on a <strong>LabVIEW-to-native-code compiler</strong> using
              C++, Python, and AST-based compilation pipelines, strengthening my understanding of low-level
              execution models and how high-level abstractions translate into efficient machine code.
            </p>
            <p className="about-text">
              In addition, I actively use <span className="about-highlight">AI-assisted development workflows</span> and
              advanced agent-based IDEs such as <span className="about-highlight">Cursor and Codex</span> to
              accelerate prototyping, refactoring, and tooling development. My interests lie at the
              intersection of frontend engineering, AI-powered tooling, and developer productivity, and I'm
              currently seeking opportunities to work on <strong>impactful, technically challenging projects</strong>.
            </p>
          </>
        )}
      </div>
    </section>
  )
}

export default About
