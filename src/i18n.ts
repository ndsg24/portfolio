import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { getStoredLanguage } from './lib/storage'
import type { LanguageCode, TranslationResource } from './types'

const resources = {
  es: {
    translation: {
      nav: {
        work: 'Trayectoria',
        principles: 'Criterio',
        stack: 'Stack',
        contact: 'Contacto',
        available: 'Disponible',
      },
      hero: {
        eyebrow: 'Senior Full Stack Engineer / Tech Lead',
        statement:
          'Referente técnico para plataformas que no pueden fallar: retail, logística, marketplace, pricing, fidelización y operaciones LATAM.',
        ctaPrimary: 'Contactar',
        ctaSecondary: 'Ver experiencia',
        signalKicker: 'Actualmente',
        signalMain: 'Senior Consultant en Amaris',
        signalNote: 'Arquitectura hexagonal, DDD, CQRS, microservicios y liderazgo técnico sin ruido.',
        traits: ['Arquitectura', 'Delivery', 'Mentoría', 'Producto'],
      },
      highlights: [
        { value: '7+ años', label: 'diseñando, construyendo y liderando software de negocio' },
        { value: '8 devs', label: 'liderados técnicamente en iniciativas paralelas' },
        { value: '60-70', label: 'historias entregadas en aprox. 8 meses como TL' },
        { value: 'LATAM', label: 'experiencia en plataformas regionales de alto impacto' },
      ],
      work: {
        title: 'Experiencia técnica',
        text: 'Rol, periodo y compañía. Sin relleno.',
      },
      roles: [
        {
          period: 'Ago 2022 - Actualidad',
          company: 'Amaris Consulting',
          title: 'Senior Consultant / Senior Full Stack Engineer / Tech Lead',
          text: 'Referente técnico en clientes como Esmax y Cencosud ITX, definiendo arquitectura, estándares, revisión de soluciones, testing y acompañamiento de equipos.',
        },
        {
          period: 'Dic 2024 - Actualidad',
          company: 'Esmax',
          parentCompany: 'Amaris Consulting',
          scope: 'client',
          title: 'Senior Full Stack Engineer / Referente Técnico',
          text: 'Referente técnico en arquitectura, microservicios orientados a eventos, Azure Service Bus, CQRS, testing y mentoría técnica.',
        },
        {
          period: 'Ene 2024 - Dic 2024',
          company: 'Cencosud ITX',
          parentCompany: 'Amaris Consulting',
          scope: 'client',
          title: 'Technical Lead',
          text: 'Liderazgo técnico de 8 desarrolladores y 8 proyectos paralelos, con foco en automatización, escalabilidad, calidad y delivery.',
        },
        {
          period: 'Ago 2022 - Sep 2023',
          company: 'Cencosud',
          parentCompany: 'Amaris Consulting',
          scope: 'client',
          title: 'Senior Software Engineer / Backup Tech Lead',
          text: 'Backend de UNIFY para pricing y promociones regionales, integraciones con NCR Regional POS y VTEX, microservicios y estándares técnicos.',
        },
        {
          period: 'Nov 2021 - Ago 2022',
          company: 'Ripley Chile',
          title: 'Senior Software Engineer',
          text: 'Marketplace, onboarding de sellers, gestión de productos e integraciones con IBM Commerce y Mirakl.',
        },
        {
          period: 'Ene 2021 - Nov 2021',
          company: 'Logística Falabella',
          title: 'Senior Software Engineer',
          text: 'Modernización de sistemas core, migración desde C# hacia TypeScript y construcción de soluciones internas críticas.',
        },
        {
          period: 'Jul 2019 - Ene 2021',
          company: 'KTI Ingeniería',
          title: 'Web & Mobile Developer / IT Project Manager',
          text: 'Desarrollo web y mobile, gestión de proyectos TI y coordinación técnica de soluciones internas.',
        },
      ],
      principles: {
        title: 'Cómo trabajo',
        items: [
          {
            kicker: 'Arquitectura',
            title: 'Arquitectura que se opera',
            text: 'Hexagonal, DDD y CQRS cuando resuelven complejidad real, no como decoración.',
          },
          {
            kicker: 'Full stack',
            title: 'Full stack sin frontera falsa',
            text: 'Frontend, backend, datos, cloud, integración y observabilidad conectados al mismo objetivo.',
          },
          {
            kicker: 'Equipo',
            title: 'Liderazgo que desbloquea',
            text: 'Mentoría, estándares, code review y decisiones explícitas para que el equipo avance.',
          },
          {
            kicker: 'Entrega',
            title: 'Delivery con criterio',
            text: 'Releases pequeños, trazables y sostenibles, cuidando impacto de negocio y deuda técnica.',
          },
        ],
      },
      stack: {
        title: 'Stack de producción',
        groups: [
          {
            title: 'Frontend & mobile',
            items: ['React', 'Next.js', 'React Native', 'Redux', 'JavaScript', 'TypeScript'],
          },
          {
            title: 'Backend & arquitectura',
            items: ['Node.js', 'NestJS', 'Express', 'Go', '.NET', 'C#', 'Microservicios', 'TDD', 'CQRS', 'DDD', 'Arquitectura Hexagonal'],
          },
          {
            title: 'Datos, mensajería & cloud',
            items: ['PostgreSQL', 'MongoDB', 'MySQL', 'SQL Server', 'MariaDB', 'Redis', 'Kafka', 'Azure Service Bus', 'AWS', 'GCP', 'Azure'],
          },
          {
            title: 'DevOps, QA & observabilidad',
            items: ['Docker', 'Kubernetes', 'Jest', 'Testing unitario/integración/e2e', 'Elasticsearch', 'Grafana'],
          },
        ],
      },
      contact: {
        title: 'Hablemos de tu plataforma',
        text: 'Disponible para roles Senior Full Stack, Tech Lead, referente técnico o consultoría de arquitectura.',
        cta: 'Escríbeme',
        email: 'nelsondaniel.dev@gmail.com',
      },
      footer: 'Concepción, Chile / Español nativo / Portugués C1 / Inglés B2',
    },
  },
  en: {
    translation: {
      nav: {
        work: 'Track record',
        principles: 'Judgment',
        stack: 'Stack',
        contact: 'Contact',
        available: 'Available',
      },
      hero: {
        eyebrow: 'Senior Full Stack Engineer / Tech Lead',
        statement:
          'Technical reference for platforms that cannot fail: retail, logistics, marketplaces, pricing, loyalty, and LATAM operations.',
        ctaPrimary: 'Contact',
        ctaSecondary: 'See experience',
        signalKicker: 'Currently',
        signalMain: 'Senior Consultant at Amaris',
        signalNote: 'Hexagonal architecture, DDD, CQRS, microservices, and technical leadership without noise.',
        traits: ['Architecture', 'Delivery', 'Mentoring', 'Product'],
      },
      highlights: [
        { value: '7+ years', label: 'designing, building, and leading business software' },
        { value: '8 devs', label: 'technically led across parallel initiatives' },
        { value: '60-70', label: 'stories delivered in about 8 months as TL' },
        { value: 'LATAM', label: 'experience in high-impact regional platforms' },
      ],
      work: {
        title: 'Technical experience',
        text: 'Role, period, and company. No filler.',
      },
      roles: [
        {
          period: 'Aug 2022 - Present',
          company: 'Amaris Consulting',
          title: 'Senior Consultant / Senior Full Stack Engineer / Tech Lead',
          text: 'Technical reference for clients such as Esmax and Cencosud ITX, defining architecture, standards, solution reviews, testing, and team guidance.',
        },
        {
          period: 'Dec 2024 - Present',
          company: 'Esmax',
          parentCompany: 'Amaris Consulting',
          scope: 'client',
          title: 'Senior Full Stack Engineer / Technical Reference',
          text: 'Technical reference for architecture, event-driven microservices, Azure Service Bus, CQRS, testing, and technical mentoring.',
        },
        {
          period: 'Jan 2024 - Dec 2024',
          company: 'Cencosud ITX',
          parentCompany: 'Amaris Consulting',
          scope: 'client',
          title: 'Technical Lead',
          text: 'Technical leadership of 8 developers and 8 parallel projects, focused on automation, scalability, quality, and delivery.',
        },
        {
          period: 'Aug 2022 - Sep 2023',
          company: 'Cencosud',
          parentCompany: 'Amaris Consulting',
          scope: 'client',
          title: 'Senior Software Engineer / Backup Tech Lead',
          text: 'UNIFY backend for regional pricing and promotions, integrations with NCR Regional POS and VTEX, microservices, and technical standards.',
        },
        {
          period: 'Nov 2021 - Aug 2022',
          company: 'Ripley Chile',
          title: 'Senior Software Engineer',
          text: 'Marketplace, seller onboarding, product management, and integrations with IBM Commerce and Mirakl.',
        },
        {
          period: 'Jan 2021 - Nov 2021',
          company: 'Logistica Falabella',
          title: 'Senior Software Engineer',
          text: 'Core system modernization, migration from C# to TypeScript, and critical internal operations tools.',
        },
        {
          period: 'Jul 2019 - Jan 2021',
          company: 'KTI Ingeniería',
          title: 'Web & Mobile Developer / IT Project Manager',
          text: 'Web and mobile development, IT project management, and technical coordination for internal solutions.',
        },
      ],
      principles: {
        title: 'How I work',
        items: [
          {
            kicker: 'Architecture',
            title: 'Architecture that runs',
            text: 'Hexagonal architecture, DDD, and CQRS when they solve real complexity, not as decoration.',
          },
          {
            kicker: 'Full stack',
            title: 'Full stack without fake borders',
            text: 'Frontend, backend, data, cloud, integration, and observability tied to the same goal.',
          },
          {
            kicker: 'Team',
            title: 'Leadership that unblocks',
            text: 'Mentoring, standards, code review, and explicit decisions so the team keeps moving.',
          },
          {
            kicker: 'Delivery',
            title: 'Delivery with judgment',
            text: 'Small, traceable, sustainable releases that protect business impact and technical debt.',
          },
        ],
      },
      stack: {
        title: 'Production stack',
        groups: [
          {
            title: 'Frontend & mobile',
            items: ['React', 'Next.js', 'React Native', 'Redux', 'JavaScript', 'TypeScript'],
          },
          {
            title: 'Backend & architecture',
            items: ['Node.js', 'NestJS', 'Express', 'Go', '.NET', 'C#', 'Microservices', 'TDD', 'CQRS', 'DDD', 'Hexagonal Architecture'],
          },
          {
            title: 'Data, messaging & cloud',
            items: ['PostgreSQL', 'MongoDB', 'MySQL', 'SQL Server', 'MariaDB', 'Redis', 'Kafka', 'Azure Service Bus', 'AWS', 'GCP', 'Azure'],
          },
          {
            title: 'DevOps, QA & observability',
            items: ['Docker', 'Kubernetes', 'Jest', 'Unit/integration/e2e testing', 'Elasticsearch', 'Grafana'],
          },
        ],
      },
      contact: {
        title: 'Let’s talk about your platform',
        text: 'Available for Senior Full Stack, Tech Lead, technical reference, or architecture consulting roles.',
        cta: 'Email me',
        email: 'nelsondaniel.dev@gmail.com',
      },
      footer: 'Concepcion, Chile / Native Spanish / Portuguese C1 / English B2',
    },
  },
  pt: {
    translation: {
      nav: {
        work: 'Trajetória',
        principles: 'Critério',
        stack: 'Stack',
        contact: 'Contato',
        available: 'Disponível',
      },
      hero: {
        eyebrow: 'Senior Full Stack Engineer / Tech Lead',
        statement:
          'Referência técnica para plataformas que não podem falhar: varejo, logística, marketplace, pricing, fidelização e operações LATAM.',
        ctaPrimary: 'Contato',
        ctaSecondary: 'Ver experiência',
        signalKicker: 'Atualmente',
        signalMain: 'Senior Consultant na Amaris',
        signalNote: 'Arquitetura hexagonal, DDD, CQRS, microserviços e liderança técnica sem ruído.',
        traits: ['Arquitetura', 'Delivery', 'Mentoria', 'Produto'],
      },
      highlights: [
        { value: '7+ anos', label: 'desenhando, construindo e liderando software de negócio' },
        { value: '8 devs', label: 'liderados tecnicamente em iniciativas paralelas' },
        { value: '60-70', label: 'histórias entregues em aprox. 8 meses como TL' },
        { value: 'LATAM', label: 'experiência em plataformas regionais de alto impacto' },
      ],
      work: {
        title: 'Experiência técnica',
        text: 'Cargo, período e empresa. Sem enchimento.',
      },
      roles: [
        {
          period: 'Ago 2022 - Atual',
          company: 'Amaris Consulting',
          title: 'Senior Consultant / Senior Full Stack Engineer / Tech Lead',
          text: 'Referência técnica em clientes como Esmax e Cencosud ITX, definindo arquitetura, padrões, revisão de soluções, testing e acompanhamento de times.',
        },
        {
          period: 'Dez 2024 - Atual',
          company: 'Esmax',
          parentCompany: 'Amaris Consulting',
          scope: 'client',
          title: 'Senior Full Stack Engineer / Referência Técnica',
          text: 'Referência técnica em arquitetura, microserviços orientados a eventos, Azure Service Bus, CQRS, testing e mentoria técnica.',
        },
        {
          period: 'Jan 2024 - Dez 2024',
          company: 'Cencosud ITX',
          parentCompany: 'Amaris Consulting',
          scope: 'client',
          title: 'Technical Lead',
          text: 'Liderança técnica de 8 desenvolvedores e 8 projetos paralelos, com foco em automação, escalabilidade, qualidade e delivery.',
        },
        {
          period: 'Ago 2022 - Set 2023',
          company: 'Cencosud',
          parentCompany: 'Amaris Consulting',
          scope: 'client',
          title: 'Senior Software Engineer / Backup Tech Lead',
          text: 'Backend do UNIFY para pricing e promoções regionais, integrações com NCR Regional POS e VTEX, microserviços e padrões técnicos.',
        },
        {
          period: 'Nov 2021 - Ago 2022',
          company: 'Ripley Chile',
          title: 'Senior Software Engineer',
          text: 'Marketplace, onboarding de sellers, gestão de produtos e integrações com IBM Commerce e Mirakl.',
        },
        {
          period: 'Jan 2021 - Nov 2021',
          company: 'Logistica Falabella',
          title: 'Senior Software Engineer',
          text: 'Modernização de sistemas core, migração de C# para TypeScript e soluções internas críticas.',
        },
        {
          period: 'Jul 2019 - Jan 2021',
          company: 'KTI Engenharia',
          title: 'Web & Mobile Developer / IT Project Manager',
          text: 'Desenvolvimento web e mobile, gestão de projetos TI e coordenação técnica de soluções internas.',
        },
      ],
      principles: {
        title: 'Como trabalho',
        items: [
          {
            kicker: 'Arquitetura',
            title: 'Arquitetura que opera',
            text: 'Hexagonal, DDD e CQRS quando resolvem complexidade real, não como decoração.',
          },
          {
            kicker: 'Full stack',
            title: 'Full stack sem fronteira falsa',
            text: 'Frontend, backend, dados, cloud, integração e observabilidade conectados ao mesmo objetivo.',
          },
          {
            kicker: 'Time',
            title: 'Liderança que desbloqueia',
            text: 'Mentoria, padrões, code review e decisões explícitas para o time avançar.',
          },
          {
            kicker: 'Entrega',
            title: 'Delivery com critério',
            text: 'Releases pequenos, rastreáveis e sustentáveis, cuidando impacto de negócio e dívida técnica.',
          },
        ],
      },
      stack: {
        title: 'Stack de produção',
        groups: [
          {
            title: 'Frontend & mobile',
            items: ['React', 'Next.js', 'React Native', 'Redux', 'JavaScript', 'TypeScript'],
          },
          {
            title: 'Backend & arquitetura',
            items: ['Node.js', 'NestJS', 'Express', 'Go', '.NET', 'C#', 'Microserviços', 'TDD', 'CQRS', 'DDD', 'Arquitetura Hexagonal'],
          },
          {
            title: 'Dados, mensageria & cloud',
            items: ['PostgreSQL', 'MongoDB', 'MySQL', 'SQL Server', 'MariaDB', 'Redis', 'Kafka', 'Azure Service Bus', 'AWS', 'GCP', 'Azure'],
          },
          {
            title: 'DevOps, QA & observabilidade',
            items: ['Docker', 'Kubernetes', 'Jest', 'Testing unitário/integração/e2e', 'Elasticsearch', 'Grafana'],
          },
        ],
      },
      contact: {
        title: 'Vamos falar da sua plataforma',
        text: 'Disponível para posições Senior Full Stack, Tech Lead, referência técnica ou consultoria de arquitetura.',
        cta: 'Enviar email',
        email: 'nelsondaniel.dev@gmail.com',
      },
      footer: 'Concepción, Chile / Espanhol nativo / Português C1 / Inglês B2',
    },
  },
} satisfies Record<LanguageCode, { translation: TranslationResource }>

void i18n.use(initReactI18next).init({
  resources,
  lng: getStoredLanguage(),
  fallbackLng: 'es',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
