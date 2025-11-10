import type { Metadata } from "next";

export type Locale = "en" | "es";

export const SUPPORTED_LOCALES: Locale[] = ["en", "es"];

type AutomationExample = {
  title: string;
  description: string;
  outcomes: string[];
};

type Testimonial = {
  quote: string;
  attribution: string;
};

type Step = {
  title: string;
  description: string;
};

export type VideoShowcaseFlowStep = {
  title: string;
  caption: string;
  icon: "intake" | "workflow" | "automation" | "time";
};

export type Translations = {
  hero: {
    badge: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
  };
  automation: {
    badge: string;
    heading: string;
    intro: string;
    exampleLabel: string;
    examples: AutomationExample[];
  };
  chatbot: {
    title: string;
    description: string;
    features: string[];
    cta: string;
    stepsHeading: string;
    steps: Step[];
  };
  videoShowcase: {
    heading: string;
    description: string;
    promptLabel: string;
    prompt: string;
    flow: VideoShowcaseFlowStep[];
  };
  testimonials: {
    heading: string;
    description: string;
    items: Testimonial[];
  };
  calendly: {
    heading: string;
    description: string;
    trouble: {
      prefix: string;
      linkLabel: string;
      suffix: string;
    };
  };
  footer: {
    notice: string;
  };
  metadata: {
    title: string;
    description: string;
  };
};

export const translations: Record<Locale, Translations> = {
  en: {
    hero: {
      badge: "Save time. Reduce errors. Scale smoothly.",
      title: "Automate your business processes end-to-end",
      description:
        "We design and implement automation that eliminates manual work across your operations using modern tools and best practices.",
      primaryCta: "Book a free consultation",
      secondaryCta: "See customer results",
    },
    automation: {
      badge: "AI automations built for growing teams",
      heading: "Examples of what we deliver",
      intro:
        "Ideal for companies with established demand who need to scale lead management and customer operations without hiring a larger team.",
      exampleLabel: "Automation",
      examples: [
        {
          title: "Lead capture to CRM in minutes",
          description:
            "Score inbound leads, enrich profiles, and hand off the hottest opportunities to sales automatically.",
          outcomes: [
            "Detect high-intent form fills and auto-create CRM deals",
            "Summarize lead context for your reps before the first call",
            "Launch nurture sequences when reps are at capacity",
          ],
        },
        {
          title: "Pipeline alerts and follow-up",
          description:
            "Keep prospects warm with AI-generated outreach that mirrors your tone and brand standards.",
          outcomes: [
            "Draft tailored follow-up emails triggered by lead signals",
            "Sync replies back to your CRM with sentiment tags",
            "Escalate opportunities to humans when meetings are requested",
          ],
        },
        {
          title: "Customer success automation",
          description:
            "Spot expansion opportunities and resolve issues faster with AI-assisted workflows.",
          outcomes: [
            "Monitor product usage to trigger renewal playbooks",
            "Generate summaries of support tickets for your agents",
            "Send proactive health checks when risk signals appear",
          ],
        },
      ],
    },
    chatbot: {
      title: "AI chatbot trained on your business knowledge",
      description:
        "Give customers instant, accurate answers around the clock. We build custom chatbots that are grounded in your processes, docs, and FAQs so your team spends less time on repetitive questions.",
      features: [
        "Available 24/7 with zero human handoffs needed for routine answers.",
        "Securely connects to your knowledge base and keeps responses on-brand.",
        "Escalates complex cases to humans with full conversation context.",
      ],
      cta: "Talk about chatbot automation",
      stepsHeading: "How it works",
      steps: [
        {
          title: "1. Discover",
          description: "We map your customer journeys and catalog existing resources.",
        },
        {
          title: "2. Build",
          description:
            "Your chatbot is trained on curated business knowledge with guardrails and tone controls.",
        },
        {
          title: "3. Launch",
          description: "We deploy and monitor performance, optimizing responses with real usage data.",
        },
      ],
    },
    videoShowcase: {
      heading: "Where AI is headed next",
      description:
        "Take a quick look at the pace of AI progress. We don’t build these videos—we use them to spark ideas about the automation modern teams can unlock.",
      promptLabel: "Prompt shown in the demo",
      prompt:
        "Add a workflow in the bg to showcase an AI automation for businesses. Be creative.",
      flow: [
        {
          title: "Form & sheet intake",
          caption: "Consolidate submissions from forms, email, and spreadsheets.",
          icon: "intake",
        },
        {
          title: "Workflow orchestration",
          caption: "Pipe clean data into the automations your team relies on.",
          icon: "workflow",
        },
        {
          title: "Always-on automation",
          caption: "Tasks run instantly and consistently across your stack.",
          icon: "automation",
        },
        {
          title: "Time back",
          caption: "Your team focuses on strategy while bots handle the busywork.",
          icon: "time",
        },
      ],
    },
    testimonials: {
      heading: "What clients say",
      description:
        "Real outcomes from automation projects delivered across ops, finance, and GTM.",
      items: [
        {
          quote:
            "We reclaimed 25+ hours weekly by automating onboarding and invoicing. Zero errors since.",
          attribution: "COO, SaaS Startup",
        },
        {
          quote:
            "The team mapped our processes and delivered in two weeks. Our support SLAs improved 30%.",
          attribution: "Head of Operations, Marketplace",
        },
        {
          quote:
            "From spreadsheet chaos to a reliable workflow that scales. Best investment this quarter.",
          attribution: "Finance Director, Agency",
        },
      ],
    },
    calendly: {
      heading: "Book a discovery call",
      description:
        "Pick a time that works for you. I’ll review your goals and propose next steps.",
      trouble: {
        prefix: "Having trouble with the embed?",
        linkLabel: "Open Calendly",
        suffix: "in a new tab.",
      },
    },
    footer: {
      notice: "All rights reserved.",
    },
    metadata: {
      title: "Business Process Automation",
      description:
        "Automation services to streamline operations, reduce errors, and scale your business.",
    },
  },
  es: {
    hero: {
      badge: "Ahorra tiempo. Reduce errores. Escala sin fricciones.",
      title: "Automatiza tus procesos de negocio de principio a fin",
      description:
        "Diseñamos e implementamos automatizaciones que eliminan el trabajo manual en tus operaciones usando herramientas modernas y mejores prácticas.",
      primaryCta: "Agenda una consulta gratuita",
      secondaryCta: "Ver resultados de clientes",
    },
    automation: {
      badge: "Automatizaciones de IA para equipos en crecimiento",
      heading: "Ejemplos de lo que entregamos",
      intro:
        "Perfecto para empresas con demanda establecida que quieren escalar la gestión de leads y la atención al cliente sin ampliar el equipo.",
      exampleLabel: "Automatización",
      examples: [
        {
          title: "Captura de leads al CRM en minutos",
          description:
            "Puntúa los leads entrantes, enriquece perfiles y entrega automáticamente las mejores oportunidades al equipo comercial.",
          outcomes: [
            "Detecta formularios de alto interés y crea oportunidades en el CRM",
            "Resume el contexto del lead para tus reps antes de la primera llamada",
            "Lanza secuencias de nurturing cuando el equipo está a máxima capacidad",
          ],
        },
        {
          title: "Alertas de pipeline y seguimiento",
          description:
            "Mantén calientes a los prospectos con outreach generado por IA que respeta tu tono y marca.",
          outcomes: [
            "Redacta emails de seguimiento accionados por señales de intent",
            "Sincroniza las respuestas al CRM con etiquetas de sentimiento",
            "Escala a humanos cuando el prospecto solicita una reunión",
          ],
        },
        {
          title: "Automatización de customer success",
          description:
            "Detecta oportunidades de expansión y resuelve incidencias más rápido con workflows asistidos por IA.",
          outcomes: [
            "Monitoriza el uso del producto para disparar playbooks de renovación",
            "Genera resúmenes de tickets para tus agentes",
            "Envía health checks proactivos cuando aparezcan señales de riesgo",
          ],
        },
      ],
    },
    chatbot: {
      title: "Chatbot de IA entrenado con el conocimiento de tu negocio",
      description:
        "Ofrece respuestas precisas al instante, las 24 horas. Construimos chatbots personalizados basados en tus procesos, documentos y FAQs para que tu equipo dedique menos tiempo a preguntas repetitivas.",
      features: [
        "Disponible 24/7 sin traspasos humanos para respuestas habituales.",
        "Se conecta de forma segura a tu base de conocimiento y mantiene el tono de tu marca.",
        "Escala casos complejos al equipo con todo el contexto de la conversación.",
      ],
      cta: "Hablemos del chatbot",
      stepsHeading: "Cómo funciona",
      steps: [
        {
          title: "1. Descubrimiento",
          description:
            "Mapeamos los journeys de tus clientes y catalogamos los recursos existentes.",
        },
        {
          title: "2. Construcción",
          description:
            "Entrenamos tu chatbot con el conocimiento curado de tu negocio, con guardas y tono controlado.",
        },
        {
          title: "3. Lanzamiento",
          description:
            "Desplegamos y monitorizamos el rendimiento, optimizando las respuestas con datos reales.",
        },
      ],
    },
    videoShowcase: {
      heading: "Hacia dónde se dirige la IA",
      description:
        "Échale un vistazo al ritmo al que avanza la IA. No construimos estos videos; los usamos para inspirar ideas sobre la automatización que los equipos modernos pueden activar.",
      promptLabel: "Prompt mostrado en la demo",
      prompt:
        "Add a workflow in the bg to showcase an AI automation for businesses. Be creative.",
      flow: [
        {
          title: "Captura desde formularios y hojas",
          caption: "Reúne envíos de formularios, email y hojas de cálculo en un solo lugar.",
          icon: "intake",
        },
        {
          title: "Orquestación del workflow",
          caption: "Envía datos limpios hacia las automatizaciones que sostienen tu operación.",
          icon: "workflow",
        },
        {
          title: "Automatización continua",
          caption: "Las tareas se ejecutan al instante y sin errores en todo tu stack.",
          icon: "automation",
        },
        {
          title: "Más tiempo libre",
          caption: "Tu equipo se centra en la estrategia mientras los bots hacen el trabajo repetitivo.",
          icon: "time",
        },
      ],
    },
    testimonials: {
      heading: "Lo que dicen nuestros clientes",
      description:
        "Resultados reales en proyectos de automatización para operaciones, finanzas y equipos de crecimiento.",
      items: [
        {
          quote:
            "Recuperamos más de 25 horas semanales automatizando onboarding y facturación. Cero errores desde entonces.",
          attribution: "COO, SaaS Startup",
        },
        {
          quote:
            "Mapearon nuestros procesos y entregaron en dos semanas. Nuestros SLA de soporte mejoraron un 30%.",
          attribution: "Head of Operations, Marketplace",
        },
        {
          quote:
            "Pasamos del caos en hojas de cálculo a un flujo fiable que escala. La mejor inversión del trimestre.",
          attribution: "Finance Director, Agency",
        },
      ],
    },
    calendly: {
      heading: "Agenda una llamada de discovery",
      description:
        "Elige el momento que mejor te venga. Revisaremos tus objetivos y propondremos los siguientes pasos.",
      trouble: {
        prefix: "¿Problemas con el embed?",
        linkLabel: "Abrir Calendly",
        suffix: "en una nueva pestaña.",
      },
    },
    footer: {
      notice: "Todos los derechos reservados.",
    },
    metadata: {
      title: "Automatización de Procesos de Negocio",
      description:
        "Servicios de automatización para optimizar operaciones, reducir errores y escalar tu negocio.",
    },
  },
};

export function detectLocale(acceptLanguage: string | null): Locale {
  if (!acceptLanguage) {
    return "en";
  }

  const locales = acceptLanguage
    .split(",")
    .map((part) => part.split(";")[0]?.trim().toLowerCase())
    .filter(Boolean);

  for (const locale of locales) {
    if (locale?.startsWith("es")) {
      return "es";
    }
    if (locale?.startsWith("en")) {
      return "en";
    }
  }

  return "en";
}

export function getTranslations(locale: Locale): Translations {
  return translations[locale];
}

export function getMetadataForLocale(locale: Locale): Metadata {
  const dict = translations[locale]?.metadata ?? translations.en.metadata;

  return {
    title: dict.title,
    description: dict.description,
  } satisfies Metadata;
}
