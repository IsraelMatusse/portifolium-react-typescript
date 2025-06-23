"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "pt"

type TranslationKeys =
  | "nav.home"
  | "nav.experience"
  | "nav.skills"
  | "nav.education"
  | "nav.projects"
  | "nav.articles"
  | "nav.contact"
  | "hero.greeting"
  | "hero.name"
  | "hero.description"
  | "hero.cta"
  | "about.title"
  | "about.description1"
  | "about.description2"
  | "experience.title"
  | "experience.netline.role"
  | "experience.netline.period"
  | "experience.netline.description"
  | "experience.fasorel.role"
  | "experience.fasorel.period"
  | "experience.fasorel.description"
  | "experience.merec.role"
  | "experience.merec.period"
  | "experience.merec.description"
  | "experience.startimes.role"
  | "experience.startimes.period"
  | "experience.startimes.description"
  | "experience.cfm.role"
  | "experience.cfm.period"
  | "experience.cfm.description"
  | "skills.title"
  | "education.title"
  | "education.degree1"
  | "education.institution1"
  | "education.year1"
  | "education.degree2"
  | "education.institution2"
  | "education.year2"
  | "projects.title"
  | "projects.lokus.description"
  | "projects.pfuna.description"
  | "projects.government.description"
  | "projects.thikithi.description"
  | "projects.yourqrcode.description"
  | "projects.gateway.description"
  | "projects.notifications.description"
  | "articles.title"
  | "articles.migration.title"
  | "articles.migration.excerpt"
  | "articles.validators.title"
  | "articles.validators.excerpt"
  | "articles.bpm.title"
  | "articles.bpm.excerpt"
  | "articles.readMore"
  | "contact.title"
  | "contact.to"
  | "contact.name"
  | "contact.email"
  | "contact.subject"
  | "contact.message"
  | "contact.send"
  | "footer.rights"
  | "footer.quickLinks"
  | "footer.connect"
  | "footer.contact"
  | "footer.email"
  | "footer.location"
  | "footer.locationValue"
  | "footer.phone"
  | "footer.description"
  | "footer.phoneValue"
  | "articles.internationalization.excerpt"
  | "articles.internationalization.title"
   
  

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: TranslationKeys) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.experience": "Experience",
    "nav.skills": "Skills",
    "nav.education": "Education",
    "nav.projects": "Projects",
    "nav.articles": "Articles",
    "nav.contact": "Contact",

    // Hero Section
    "hero.greeting": "Hello World",
    "hero.name": "I'm Israel Matusse",
    "hero.description":
      "A young man with a passion for solving everyday problems and driving improvements in the quality of life through technology. I have a curious and innovative mindset, always seeking creative and disruptive approaches to complex challenges. I am constantly looking for new opportunities for learning and professional growth, motivated to become a visionary leader in the technology sector. I am able to work collaboratively in multidisciplinary teams, encouraging the exchange of ideas and driving transformative solutions. I have experience using technologies such as java, spring boot, typescript, node js, react, relational and non-relational databases, application redesign and business process modeling.",
    "hero.cta": "Get In Touch",

    // About Section
    "about.title": "About Me",
    "about.description1":
      "My name is Israel Mateus Matusse. I'm 23 years old and passionate about software development. My journey as a developer started at the university, where I learned the basics of programming and was exposed to different programming languages, such as C#, Java, JavaScript, PHP, CSS, and HTML. I graduated in Engineering of Technologies and Information Systems.",
    "about.description2":
      "In 2021 I transitioned into the professional sphere, where I am currently engaged in the dynamic field of technology. As a Programmer Analyst, I primarily focus on backend development, leveraging technologies such as Spring Boot, Node Js, react Js and many others. My journey in the tech industry has been marked by continuous learning, and my dedication to mastering new skills and technologies remains unwavering. My commitment to growth and innovation is a driving force as I navigate the ever-evolving landscape of software development.",

    // Experience Section
    "experience.title": "Professional Experience",
    "experience.netline.role": "Programmer Analyst",
    "experience.netline.period": "February 2023 - Present",
    "experience.netline.description":
      "I currently work as a programmer analyst. participating from business process modeling to solution development. I have experience in developing web services using architectures such as REST and GRAPHQL. And Technologies such as Java, Spring Boot, Node JS, Typescript.",
    "experience.fasorel.role": "Industrial Mechanic",
    "experience.fasorel.period": "September 2022",
    "experience.fasorel.description":
      "I worked as an industrial mechanic. ensuring the operation of industrial equipment in the organization's functional units, such as: food oil refinery, soap plant, bottle, filling plant, oil acid plant and others.",
    "experience.merec.role": "Technical Production Operator",
    "experience.merec.period": "September 2022",
    "experience.merec.description":
      "I worked as a technical production operator at the biscuit factory. Where it guaranteed the full functioning of equipment such as packaging machines, ovens, industrial mixers and other equipment. carrying out periodic and corrective maintenance.",
    "experience.startimes.role": "Sales Promoter",
    "experience.startimes.period": "January 2021",
    "experience.startimes.description":
      "I worked as a sales promoter for TMT kits and 3 months later I became team leader",
    "experience.cfm.role": "Industrial Mechanic",
    "experience.cfm.period": "February 2019",
    "experience.cfm.description":
      "I was an industrial mechanics intern in the general workshops of CFM Maputo. in the departments of workshop conservation and general production.",

    // Skills Section
    "skills.title": "My Skills",

    // Education Section
    "education.title": "Academic Formation",
    "education.degree1": "Degree in Engineering of Technologies and Information Systems",
    "education.institution1": "Universidade Joaquim Chissano",
    "education.year1": "2023",
    "education.degree2": "Industrial Maintenance Mechanics",
    "education.institution2": "Instituto de Formação Profissional e Estudos laborais Alberto Cassimo",
    "education.year2": "2018",

    // Projects Section
    "projects.title": "Featured Projects",
    "projects.lokus.description":
      "Accounting management platform. with POS modules, fuel pump management, customers and others",
    "projects.pfuna.description":
      "Donation application Where people and organizations can create solidarity campaigns on issues of disease, climate disasters, catastrophes and others",
    "projects.government.description":
      "Application for monitoring government projects, where public can comment and rate public projects",
    "projects.thikithi.description": "Application for selling Online Tickets easily and securely",
    "projects.yourqrcode.description": "Application for generating QR Codes easily and securely",
    "projects.gateway.description":
      "Application that implements the spring cloud gateway library for routing services in a microservices environment. In which it has centralized configuration of retry, caching, rate limit and other mechanisms",
    "projects.notifications.description":
      "Service for issuing notifications to application users (email, SMS and others), developed to be used by applications in managing notifications where anyone who wants to join receives an API key and implements the application based on the documentation provided",

    // Articles Section
    "articles.title": "Published Articles",
    "articles.migration.title":
      "Migrating a Monolithic application to Microservices using the Strangler Fig Pattern and Spring cloud Gateway",
    "articles.migration.excerpt":
      "This approach enables a seamless transition to a microservices architecture, allowing for greater flexibility, scalability, and maintainability, while minimizing downtime and disruptions to the overall system.",
    "articles.validators.title": "Ensuring Clean Data: Custom Validators in Spring Boot",
    "articles.validators.excerpt":
      "By leveraging custom validators, developers can write more robust and maintainable code, reducing errors and improving overall data quality.",
    "articles.bpm.title": "Leveraging BPM for Effective Knowledge Management",
    "articles.bpm.excerpt":
      "By integrating BPM with knowledge management, organizations can unlock the full potential of their collective expertise, driving innovation and competitiveness.",
    "articles.readMore": "Read on Medium",
    "articles.internationalization.title": "Software Internationalization and Localization: Why it Matters and How to Implement it",
    "articles.internationalization.excerpt":
      "Internationalization and localization are essential for creating software that is accessible and user-friendly across different languages and cultures. This article explores the importance of these practices and provides practical steps for implementation.",
   
    // Contact Section
    "contact.title": "Get In Touch",
    "contact.to": "To",
    "contact.name": "Name",
    "contact.email": "Your Email",
    "contact.subject": "Subject",
    "contact.message": "Message",
    "contact.send": "Send",

    // Footer
    "footer.rights": "All Rights Reserved.",
    "footer.quickLinks": "Quick Links",
    "footer.connect": "Connect With Me",
    "footer.contact": "Contact Information",
    "footer.email": "Email",
    "footer.location": "Location",
    "footer.locationValue": "Maputo, Mozambique",
    "footer.phone": "Phone",
    "footer.phoneValue": "+258 84 123 4567",
    "footer.description":
      "Passionate software developer focused on creating innovative solutions and driving technological advancement.",
  },
  pt: {
    // Navigation
    "nav.home": "Início",
    "nav.experience": "Experiência",
    "nav.skills": "Habilidades",
    "nav.education": "Formação",
    "nav.projects": "Projetos",
    "nav.articles": "Artigos",
    "nav.contact": "Contato",

    // Hero Section
    "hero.greeting": "Olá Mundo",
    "hero.name": "Eu sou Israel Matusse",
    "hero.description":
      "Um jovem apaixonado por resolver problemas do dia a dia e impulsionar melhorias na qualidade de vida através da tecnologia. Tenho uma mentalidade curiosa e inovadora, sempre buscando abordagens criativas e disruptivas para desafios complexos. Estou constantemente procurando novas oportunidades de aprendizado e crescimento profissional, motivado a me tornar um líder visionário no setor de tecnologia. Sou capaz de trabalhar colaborativamente em equipes multidisciplinares, incentivando a troca de ideias e impulsionando soluções transformadoras. Tenho experiência usando tecnologias como java, spring boot, typescript, node js, react, bancos de dados relacionais e não relacionais, redesign de aplicações e modelagem de processos de negócio.",
    "hero.cta": "Entre em Contato",

    // About Section
    "about.title": "Sobre Mim",
    "about.description1":
      "Meu nome é Israel Mateus Matusse. Tenho 23 anos e sou apaixonado por desenvolvimento de software. Minha jornada como desenvolvedor começou na universidade, onde aprendi os fundamentos da programação e fui exposto a diferentes linguagens de programação, como C#, Java, JavaScript, PHP, CSS e HTML. Me formei em Engenharia de Tecnologias e Sistemas de Informação.",
    "about.description2":
      "Em 2021 fiz a transição para a esfera profissional, onde atualmente estou envolvido no campo dinâmico da tecnologia. Como Analista Programador, foco principalmente no desenvolvimento backend, aproveitando tecnologias como Spring Boot, Node Js, React Js e muitas outras. Minha jornada na indústria de tecnologia tem sido marcada pelo aprendizado contínuo, e minha dedicação em dominar novas habilidades e tecnologias permanece inabalável. Meu compromisso com o crescimento e inovação é uma força motriz enquanto navego pelo cenário em constante evolução do desenvolvimento de software.",

    // Experience Section
    "experience.title": "Experiência Profissional",
    "experience.netline.role": "Analista Programador",
    "experience.netline.period": "Fevereiro 2023 - Presente",
    "experience.netline.description":
      "Atualmente trabalho como analista programador. participando desde a modelagem de processos de negócio até o desenvolvimento de soluções. Tenho experiência no desenvolvimento de serviços web usando arquiteturas como REST e GRAPHQL. E tecnologias como Java, Spring Boot, Node JS, Typescript.",
    "experience.fasorel.role": "Mecânico Industrial",
    "experience.fasorel.period": "Setembro 2022",
    "experience.fasorel.description":
      "Trabalhei como mecânico industrial. garantindo o funcionamento de equipamentos industriais nas unidades funcionais da organização, tais como: refinaria de óleo alimentar, fábrica de sabão, garrafa, planta de enchimento, planta de ácido de óleo e outros.",
    "experience.merec.role": "Operador Técnico de Produção",
    "experience.merec.period": "Setembro 2022",
    "experience.merec.description":
      "Trabalhei como operador técnico de produção na fábrica de biscoitos. Onde garantia o pleno funcionamento de equipamentos como máquinas de embalagem, fornos, misturadores industriais e outros equipamentos. realizando manutenção periódica e corretiva.",
    "experience.startimes.role": "Promotor de Vendas",
    "experience.startimes.period": "Janeiro 2021",
    "experience.startimes.description":
      "Trabalhei como promotor de vendas de kits TMT e 3 meses depois me tornei líder de equipe",
    "experience.cfm.role": "Mecânico Industrial",
    "experience.cfm.period": "Fevereiro 2019",
    "experience.cfm.description":
      "Fui estagiário de mecânica industrial nas oficinas gerais da CFM Maputo. nos departamentos de conservação de oficina e produção geral.",

    // Skills Section
    "skills.title": "Minhas Habilidades",

    // Education Section
    "education.title": "Formação Acadêmica",
    "education.degree1": "Licenciatura em Engenharia de Tecnologias e Sistemas de Informação",
    "education.institution1": "Universidade Joaquim Chissano",
    "education.year1": "2023",
    "education.degree2": "Mecânica de Manutenção Industrial",
    "education.institution2": "Instituto de Formação Profissional e Estudos laborais Alberto Cassimo",
    "education.year2": "2018",

    // Projects Section
    "projects.title": "Projetos em Destaque",
    "projects.lokus.description":
      "Plataforma de gestão contábil. com módulos POS, gestão de bombas de combustível, clientes e outros",
    "projects.pfuna.description":
      "Aplicação de doações onde pessoas e organizações podem criar campanhas de solidariedade sobre questões de doenças, desastres climáticos, catástrofes e outros",
    "projects.government.description":
      "Aplicação para monitoramento de projetos governamentais, onde o público pode comentar e avaliar projetos públicos",
    "projects.thikithi.description": "Aplicação para venda de Bilhetes Online de forma fácil e segura",
    "projects.yourqrcode.description": "Aplicação para gerar Códigos QR de forma fácil e segura",
    "projects.gateway.description":
      "Aplicação que implementa a biblioteca spring cloud gateway para roteamento de serviços em ambiente de microsserviços. Na qual possui configuração centralizada de retry, caching, rate limit e outros mecanismos",
    "projects.notifications.description":
      "Serviço para emissão de notificações aos usuários da aplicação (email, SMS e outros), desenvolvido para ser usado por aplicações na gestão de notificações onde qualquer pessoa que queira aderir recebe uma chave API e implementa a aplicação baseada na documentação fornecida",

    // Articles Section
    "articles.title": "Artigos Publicados",
    "articles.migration.title":
      "Migrando uma aplicação Monolítica para Microsserviços usando o Padrão Strangler Fig e Spring Cloud Gateway",
    "articles.migration.excerpt":
      "Esta abordagem permite uma transição perfeita para uma arquitetura de microsserviços, permitindo maior flexibilidade, escalabilidade e manutenibilidade, minimizando o tempo de inatividade e interrupções no sistema geral.",
    "articles.validators.title": "Garantindo Dados Limpos: Validadores Personalizados no Spring Boot",
    "articles.validators.excerpt":
      "Ao aproveitar validadores personalizados, os desenvolvedores podem escrever código mais robusto e sustentável, reduzindo erros e melhorando a qualidade geral dos dados.",
    "articles.bpm.title": "Aproveitando BPM para Gestão Eficaz do Conhecimento",
    "articles.bpm.excerpt":
      "Ao integrar BPM com gestão do conhecimento, as organizações podem desbloquear todo o potencial de sua expertise coletiva, impulsionando inovação e competitividade.",
    "articles.readMore": "Ler no Medium",
    "articles.internationalization.excerpt":
      "A internacionalização e a localização são essenciais para criar software que seja acessível e amigável ao usuário em diferentes idiomas e culturas. Este artigo explora a importância dessas práticas e fornece passos práticos para sua implementação.",
    "articles.internationalization.title":
      "Internacionalização e Localização de Software: Por que é Importante e Como Implementar",

    // Contact Section
    "contact.title": "Entre em Contato",
    "contact.to": "Para",
    "contact.name": "Nome",
    "contact.email": "Seu Email",
    "contact.subject": "Assunto",
    "contact.message": "Mensagem",
    "contact.send": "Enviar",

    // Footer
    "footer.rights": "Todos os Direitos Reservados.",
    "footer.quickLinks": "Links Rápidos",
    "footer.connect": "Conecte-se Comigo",
    "footer.contact": "Informações de Contato",
    "footer.email": "Email",
    "footer.location": "Localização",
    "footer.locationValue": "Maputo, Moçambique",
    "footer.phone": "Telefone",
    "footer.phoneValue": "+258 84 123 4567",
    "footer.description": "Desenvolvedor de Software apaixonado focado em criar soluções inovadoras e impulsionar o avanço tecnológico.",
  },
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem("language")
    return (saved as Language) || "en"
  })

  useEffect(() => {
    localStorage.setItem("language", language)
  }, [language])

  const t = (key: TranslationKeys): string => {
    const translation = translations[language]?.[key]
    return translation || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
