import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lastUpdated: true,
  title: "Coding",
  description: "A Vitepress Site For Documentation",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentation', link: '/welcome-page' },
      { text: 'Contact', link: '/contact'}
    ],

    sidebar: [
      {
        text: '💻 Java',
        collapsed: false,
        items: [
          {
            text: '🪶 Les variables',
            collapsed: true,
            items: [
              { text: 'Principale', link: 'java/variables/index.md' },
              { text: 'Types de donnés',
                collapsed: true,
                items: [
                  { text: 'Données primitifs', link: 'java/variables/dataTypes/primitiveData.md'},
                  { text: 'Données référence', link: 'java/variables/dataTypes/referenceData.md'},
                ]
              },
              { text: 'Déclaration de variables', link: 'java/variables/declaration.md'},
              { text: 'Initialisation de variables', link: 'java/variables/initialisation.md'},
              { text: 'Portée des variables',
                collapsed: true,
                items: [
                  { text: 'Principal', link: 'java/variables/scope/index.md'},
                  { text: 'Variable locale', link: 'java/variables/scope/locale.md'},
                  { text: 'Variable d\'instance', link: 'java/variables/scope/instance.md'},
                  { text: 'Variable statique', link: 'java/variables/scope/static.md'}
                ]
              },
              { text: 'Modificateur d\'accès',
                collapsed: true,
                items: [
                  { text: 'Principal', link: 'java/variables/accessModifier/index.md'},
                  { text: 'Variable private', link: 'java/variables/accessModifier/private.md'},
                  { text: 'Variable protected', link: 'java/variables/accessModifier/protected.md'},
                  { text: 'Variable sans modificateur', link: 'java/variables/accessModifier/without.md'},
                  { text: 'Variable public', link: 'java/variables/accessModifier/public.md'},
                ]
              },
              { text: 'Conclusion', link: 'java/variables/conclusion.md' }
            ]
          },
          {
            text: '👓 Les classes',
            collapsed: true,
            items: [
              { text: 'Principale', link: 'java/classes/index.md' },
              { text: 'Déclaration de classe', link: 'java/classes/declaration.md' },
              { text: 'Méthodes', link: 'java/classes/method.md' },
              { text: 'Constructeur', link: 'java/classes/constructor.md' },
              { text: 'Instanciation', link: 'java/classes/instantiation.md' },
              { text: 'Encapsulation', link: 'java/classes/encapsulation.md' },
              { text: 'Héritage', link: 'java/classes/legacy.md' },
              { text: 'Polymorphisme', link: 'java/classes/polymorphism.md' },
              { text: 'Conclusion', link: 'java/classes/conclusion.md' }
            ]
          },
          {
            text: '🔬 Les méthodes',
            collapsed: true,
            items: [
              { text: 'Principal', link: 'java/method/index.md' },
              { text: 'Déclaration de méthode', link: 'java/method/statement.md' },
              {
                text: 'Modificateur d\'accès',
                collapsed: true,
                items: [
                  { text: 'Principal', link: 'java/method/accessModifier/index.md' },
                  { text: 'Public', link: 'java/method/accessModifier/public.md' },
                  { text: 'Private', link: 'java/method/accessModifier/private.md' },
                  { text: 'Protected', link: 'java/method/accessModifier/protected.md' },
                ]
              },
              { text: 'Type de retour', link: 'java/method/return.md' }
            ]
          },
          {
            text: '🎞️ Les énumérations',
            collapsed: true,
            items: [
              { text: 'Principal', link: 'java/enums/index.md' },
              { text: 'Syntaxe', link: 'java/enums/syntax.md' },
              { text: 'Utilisation', link: 'java/enums/usage.md' },
              { text: 'Constructeur', link: 'java/enums/constructor.md' },
              { text: 'Attributs', link: 'java/enums/attributes.md' },
              { text: 'Méthodes', link: 'java/enums/method.md' },
              { text: 'Parcours des constantes', link: 'java/enums/path.md' },
              { text: 'Conclusion', link: 'java/enums/conclusion.md' }
            ]
          }
        ]
      }
    ],

    socialLinks: [
      { icon: 'discord', link: 'https://discord.com/users/384015647585075210' },
      { icon: 'github', link: 'https://github.com/Samuel-deoliveira' },
      { icon: 'twitter', link: 'https://x.com/Scraven_dev' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/samuel-de-oliveira-3732431a1/' }
    ],

    footer: {
      message: "",
      copyright: "Copyright © 2024 Samuel De Oliveira"
    },

    editLink: {
      pattern: 'https://github.com/Samuel-deoliveira/samuel-deoliveira.github.io/docs/:path',
      text: 'Edit this page on GitHub'
    }
  }
})
