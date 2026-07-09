import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

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
        title: 'Experiencia con peso real.',
        text: 'No vendo solo tecnología. Vendo criterio para tomar decisiones, ordenar sistemas complejos y hacer que los equipos entreguen con calidad.',
      },
      roles: [
        {
          period: '2022 - Actualidad',
          company: 'Amaris Consulting',
          title: 'Senior Consultant / Senior Full Stack Engineer / Tech Lead',
          text: 'Referente técnico en clientes como Esmax y Cencosud ITX, definiendo arquitectura, estándares, revisión de soluciones, testing y acompañamiento de equipos.',
        },
        {
          period: '2024',
          company: 'Cencosud ITX',
          title: 'Technical Lead',
          text: 'Liderazgo técnico de 8 desarrolladores y 8 proyectos paralelos, con foco en automatización, escalabilidad, calidad y delivery.',
        },
        {
          period: '2022 - 2023',
          company: 'Cencosud',
          title: 'Senior Software Engineer / Backup Tech Lead',
          text: 'Backend de UNIFY para pricing y promociones regionales, integraciones con NCR Regional POS y VTEX, microservicios y estándares técnicos.',
        },
        {
          period: '2021 - 2022',
          company: 'Ripley Chile',
          title: 'Senior Software Engineer',
          text: 'Marketplace, onboarding de sellers, gestión de productos e integraciones con IBM Commerce y Mirakl.',
        },
        {
          period: '2021',
          company: 'Logística Falabella',
          title: 'Senior Software Engineer',
          text: 'Modernización de sistemas core, migración desde C# hacia TypeScript y construcción de soluciones internas críticas.',
        },
      ],
      principles: {
        title: 'Minimalismo técnico: menos teatro, más sistema.',
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
        title: 'Tecnología que ya usé en producción.',
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
        title: 'Si el producto importa, la ejecución también.',
        text: 'Disponible para roles Senior Full Stack, Tech Lead, referente técnico o consultoría de arquitectura.',
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
        title: 'Experience with real weight.',
        text: 'I do not sell technology alone. I bring judgment to decisions, structure complex systems, and help teams ship with quality.',
      },
      roles: [
        {
          period: '2022 - Present',
          company: 'Amaris Consulting',
          title: 'Senior Consultant / Senior Full Stack Engineer / Tech Lead',
          text: 'Technical reference for clients such as Esmax and Cencosud ITX, defining architecture, standards, solution reviews, testing, and team guidance.',
        },
        {
          period: '2024',
          company: 'Cencosud ITX',
          title: 'Technical Lead',
          text: 'Technical leadership of 8 developers and 8 parallel projects, focused on automation, scalability, quality, and delivery.',
        },
        {
          period: '2022 - 2023',
          company: 'Cencosud',
          title: 'Senior Software Engineer / Backup Tech Lead',
          text: 'UNIFY backend for regional pricing and promotions, integrations with NCR Regional POS and VTEX, microservices, and technical standards.',
        },
        {
          period: '2021 - 2022',
          company: 'Ripley Chile',
          title: 'Senior Software Engineer',
          text: 'Marketplace, seller onboarding, product management, and integrations with IBM Commerce and Mirakl.',
        },
        {
          period: '2021',
          company: 'Logistica Falabella',
          title: 'Senior Software Engineer',
          text: 'Core system modernization, migration from C# to TypeScript, and critical internal operations tools.',
        },
      ],
      principles: {
        title: 'Technical minimalism: less theater, more system.',
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
        title: 'Technology I have used in production.',
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
        title: 'If the product matters, execution matters too.',
        text: 'Available for Senior Full Stack, Tech Lead, technical reference, or architecture consulting roles.',
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
        title: 'Experiência com peso real.',
        text: 'Não vendo só tecnologia. Entrego critério para decidir, organizar sistemas complexos e fazer times entregarem com qualidade.',
      },
      roles: [
        {
          period: '2022 - Atual',
          company: 'Amaris Consulting',
          title: 'Senior Consultant / Senior Full Stack Engineer / Tech Lead',
          text: 'Referência técnica em clientes como Esmax e Cencosud ITX, definindo arquitetura, padrões, revisão de soluções, testing e acompanhamento de times.',
        },
        {
          period: '2024',
          company: 'Cencosud ITX',
          title: 'Technical Lead',
          text: 'Liderança técnica de 8 desenvolvedores e 8 projetos paralelos, com foco em automação, escalabilidade, qualidade e delivery.',
        },
        {
          period: '2022 - 2023',
          company: 'Cencosud',
          title: 'Senior Software Engineer / Backup Tech Lead',
          text: 'Backend do UNIFY para pricing e promoções regionais, integrações com NCR Regional POS e VTEX, microserviços e padrões técnicos.',
        },
        {
          period: '2021 - 2022',
          company: 'Ripley Chile',
          title: 'Senior Software Engineer',
          text: 'Marketplace, onboarding de sellers, gestão de produtos e integrações com IBM Commerce e Mirakl.',
        },
        {
          period: '2021',
          company: 'Logistica Falabella',
          title: 'Senior Software Engineer',
          text: 'Modernização de sistemas core, migração de C# para TypeScript e soluções internas críticas.',
        },
      ],
      principles: {
        title: 'Minimalismo técnico: menos teatro, mais sistema.',
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
        title: 'Tecnologia que já usei em produção.',
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
        title: 'Se o produto importa, a execução também.',
        text: 'Disponível para posições Senior Full Stack, Tech Lead, referência técnica ou consultoria de arquitetura.',
        email: 'nelsondaniel.dev@gmail.com',
      },
      footer: 'Concepción, Chile / Espanhol nativo / Português C1 / Inglês B2',
    },
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem('language') || 'es',
  fallbackLng: 'es',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
