"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

// Updated translations without Russian
const translations = {
  en: {
    header: {
      home: "home",
      projects: "projects",
      about: "about-me",
      contacts: "contacts",
    },
    footer: {
      description:
        "Web developer based in Rajasthan, India. I create responsive websites where technologies meet creativity.",
      copyright: "Copyright 2025. Made by Parth",
      media: "Media",
    },
    skills: {
      language: "Languages",
      database: "Databases",
      other: "Other",
      tool: "Tools",
      framework: "Frameworks",
    },
    pages: {
      home: {
        hero: {
          title: "Parth is a <span>web developer</span> and <span>a full time </span> learner",
          description: "He crafts responsive websites where technologies meet creativity",
          button: "Contact ME",
          status: "Open for new opportunities",
        },
        quote: {
          text: "With great power comes great electricity bill",
          author: "Dr. P",
        },
        projects: {
          title: "projects",
          button: "View all",
        },
        skills: {
          title: "skills",
        },
        about: {
          title: "about",
          description: [
            "I'm a full-stack web developer based in India and a 2025 BE graduate from Chandigarh University. I specialize in building responsive and intuitive websites from scratch, turning creative ideas into seamless, user-friendly digital experiences.",
            "With a strong passion for web development, I've been dedicated to transforming concepts into polished interfaces. I constantly explore the latest web technologies and frameworks to stay ahead and deliver modern, efficient solutions. My goal is to help brands and businesses build a strong and engaging presence online.",
          ],
          button: "View all",
        },
        contacts: {
          title: "contacts",
          text: "I'm interested in freelance opportunities. However, if you have other request or question, don't hesitate to contact me",
          media: "Message me here",
        },
      },
      projects: {
        description: "All of my projects",
        decent: "decent",
      },
      about: {
        description: "Who am i",
        about: {
          description: [
            "I'm a full-stack developer based in India and a 2025 BE graduate. I specialize in building responsive websites from scratch and transforming them into modern, user-friendly web experiences.",
            "Transforming creativity and technical knowledge into functional websites has been my passion for over two years. During this time, I've worked on various projects, helping clients establish a strong online presence.",
            "I'm always eager to explore and learn the latest technologies and frameworks to stay updated and deliver high-quality, future-ready solutions.",
          ],
        },
        skills: {
          title: "skills",
        },
        facts: {
          title: "fun-facts",
          list: [
            "I like winter more than summer",
            "I often bike with my friends",
            "I like pizza and pasta",
            "My favorite movie is The Matrix",
          ],
        },
      },
    },
  },
  ua: {
    header: {
      home: "головна",
      projects: "проекти",
      about: "про-себе",
      contacts: "контакти",
    },
    footer: {
      description: "Веб дизайнер та фронтенд розробник",
      copyright: "Усі права захищені 2025. Зробив Parth",
      media: "Медіа",
    },
    skills: {
      language: "Мови",
      database: "Бази даних",
      other: "Інше",
      tool: "Інструменти",
      framework: "Бібліотеки",
    },
    pages: {
      home: {
        hero: {
          title: "Parth - <span>веб дизайнер</span> та <span>фронт-енд</span> розробник",
          description: "Він створює адаптивні дизайни де перетинаються креативність і технології",
          button: "Мої контакти",
          status: "Відкрит для нових пропозицій",
        },
        quote: {
          text: "З великою потужністю приходить великий рахунок за електроенергію",
          author: "Доктор Хто",
        },
        projects: {
          title: "проекти",
          button: "Продивитися усе",
        },
        skills: {
          title: "скіли",
        },
        about: {
          title: "про-себе",
          description: [
            "Я фронтенд-розробник самоучка із Києва. Я можу розробляти адаптивні веб-сайти з нуля і перетворювати їх на сучасні зручні веб-інтерфейси.",
            "Перетворення моєї творчості та знань на веб-сайти є моєю пристрастю більше року. Я допомагаю різним клієнтам показати себе у мережі. Я завжди намагаюся дізнаватися про новітні технології та фреймворки.",
          ],
          button: "Продивитися усе",
        },
        contacts: {
          title: "контакти",
          text: "Мене цікавлять можливості фрілансу. Однак, якщо у вас є інше питання, не соромтеся звертатися до мене.",
          media: "Пишіть мені сюди",
        },
      },
      projects: {
        description: "Мої проекти",
        decent: "непогані",
      },
      about: {
        description: "Хто я такий",
        about: {
          description: [
            "Я фронтенд-розробник самоучка із Києва. Я можу розробляти адаптивні веб-сайти з нуля і перетворювати їх на сучасні зручні веб-інтерфейси.",
            "Перетворення моєї творчості та знань на веб-сайти є моєю пристрастю більше року. Я допомагаю різним клієнтам показати себе у мережі.",
            "Я завжди намагаюся дізнаватися про новітні технології та фреймворки.",
          ],
        },
        skills: {
          title: "скіли",
        },
        facts: {
          title: "факти-про-мене",
          list: [
            "Я дуже полюбляю зиму",
            "Я часто їзджу на велосипеді з моїми друзями",
            "Люблю піцу та пасту",
            "Мій улюблений фільм це Зелена миля",
          ],
        },
      },
    },
  },
}

type Language = "en" | "ua"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: typeof translations.en
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "ua")) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  const value = {
    language,
    setLanguage: handleSetLanguage,
    t: translations[language],
  }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
