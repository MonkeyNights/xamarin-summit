export const TALKS20 = [
    {
        date: "Segunda-Feira, 10/08",
        sessions: [
            {
                time: "8:00 PM GMT-3",
                title: 'Xamarin.Forms Navigation Done Right with Prism',
                tags: ["Xamarin.Forms", "Prism", "Navigation"],
                description: "One of the most complicated apsects of writing an MVVM based Xamarin.Forms application is navigation. Not only is navigation specific to a Page instance, but each Page can have it's own modal and non-modal navigation stacks. On top of that, the INavigation interface has a PushAsync which can only be used in a NavigationPage. If it's not used in a NavigationPage, an exception is thrown. PushModalAsync can be used with any Page, but provides no hardware mechanism to go back on iOS which traps your users. Start throwing in MasterDetailPages, TabbedPages, or even TabbedPages with nested NavigationPages and things start to get pretty crazy.  Now imagine trying to manage all those complexities from within a ViewModel where you have no reference or knowledge of the current Page or the target Page. Join Brian Lagunas in this deep dive session on using the navigation features of Prism for Xamarin.Forms to simplify the navigation code in your ViewModels to one line of code. You'll not only learn how to navigate from one page to another, but you'll learn how to pass parameters, cancel navigation, clean up your ViewModels, respond to the Sleep and Resume application lifecycle events, deep link into your application, and much more.",
                speaker: {
                    name: 'Brian Lagunas',
                    avatar: '../../../assets/img/speakers/brian.png',
                    bio: "Works at Infragistics | Owner of Prism | Microsoft MVP | Xamarin MVP | Speaker | Trainer | Pluralsight Author",
                    position: 'Infragistics',
                    social: [
                        {
                            url: 'https://github.com/brianlagunas',
                            type: 'github'
                        },
                        {
                            url: 'https://twitter.com/brianlagunas',
                            type: 'twitter'
                        }
                    ]
                }
            },
            {
                time: "9:00 PM GMT-3",
                title: 'WinUI 3: desenvolvendo experiências nativas para Windows',
                tags: ["WinUI 3", "UWP"],
                description: 'O WinUI 3 (Windows UI Library) é o framework de UX nativo para aplicativos Desktop do Windows e para UWP. Dê uma olhada no futuro do desenvolvimento para Windows, entendendo como a evolução da Plataforma Universal do Windows (UWP) habilitará novos cenários para seus aplicativos, juntamente com uma nova versão do Windows Community Toolkit, criando experiências imersivas com C ++ ou C# e .Net 5.',
                speaker: {
                    name: 'Alexandre Chohfi',
                    avatar: '../../../assets/img/speakers/chohfi.jpg',
                    bio: "Alexandre Chohfi é Senior Software Developer Engineer na Microsoft focado em desenvolvimento para Windows. Trabalhou como desenvolvedor de jogos e é ex-MVP da Microsoft em Windows Platform Development. Ele apresentou em centenas de eventos em todo o Brasil, como TechEd Brasil, Campus Party, The Developers Conference São Paulo, QCon Rio e QCon São Paulo. Trabalhando na Microsoft, ele também se apresentou internacionalmente na Índia, Taiwan e Indonésia, para o Insider Dev Tour.",
                    position: 'Microsoft',
                    social: [
                        {
                            url: 'https://github.com/azchohfi',
                            type: 'github'
                        },
                        {
                            url: 'https://twitter.com/AlexandreChohfi',
                            type: 'twitter'
                        }
                    ]
                }
            }
        ]
    }
    ,
    {
        date: "Terça-Feira, 11/08",
        sessions: [
            {
                time: "8:00 PM GMT-3",
                title: 'Getting Started with Prism for Xamarin.Forms',
                tags: ["Xamarin.Forms", "Prism"],
                description: "You've probably heard about Prism for Xamarin.Forms, but maybe you weren't sure how to get started. In this talk we'll look at how you can get started building apps with Prism for Xamarin.Forms. With Prism 8 in preview and coming later this year, we'll look at some differences between Prism 7 and Prism 8 and talk about how this will help you build even better apps!",
                speaker: {
                    name: 'Dan Siegel',
                    avatar: '../../../assets/img/speakers/dan.png',
                    bio: "Dan is a Microsoft MVP, long time OSS maintainer, consultant and founder of the Xamarin Developer Summit #XamDevSummit. A passion for innovation and problem solving leads him to deliver leading solutions like #PrismLib and the Mobile.BuildTools.  A long time tech junkie, Dan has a firm belief that you should never stop learning and always be humble enough to remember you will never know everything. He has worked with clients small and large always driving innovation and helped transform many developers into constant learners. When he's not busy coding you can find him somewhere in nature, scuba diving, hiking, generally decompressing anywhere cell phones stop working.",
                    position: 'AvantiPoint',
                    social: [
                        {
                            url: 'https://github.com/dansiegel',
                            type: 'github'
                        },
                        {
                            url: 'https://twitter.com/DanJSiegel',
                            type: 'twitter'
                        },
                        {
                            url: 'https://linkedin.com/in/dansiegel',
                            type: 'linkedin'
                        }
                    ]
                }
            },
            {
                time: "9:00 PM GMT-3",
                title: 'Desenvolvendo qualquer interface mobile com Xamarin.Forms',
                tags: ["Xamarin.Forms", "UI"],
                description: 'Trabalhar com uma plataforma de desenvolvimento mobile multiplataforma é fantástico. Desenvolvemos mais rápido e nosso código é compartilhado com todas as plataformas que estamos suportando. Mas apenas isso não adianta se não tivermos esse mesmo poder na hora de desenvolver as telas. E então.. o Xamarin.Forms é tão poderoso assim? Ele é um framework de abstração de UI, não possui todos os componentes visuais que existem nas guidelines do Android e iOS. Mas isso não significa que estamos limitados ou que não conseguiremos desenvolver algum tipo de interface. Nessa talk vamos falar sobre o desenvolvimento de algumas telas utilizando como referência alguns aplicativos renomados. Vamos olhar algumas telas e componentes e discutir sobre suas implementações, e é claro, ver como podemos fazer isso com Xamarin.Forms.',
                speaker: {
                    name: 'Ione Souza Junior',
                    avatar: '../../../assets/img/speakers/ione.jpg',
                    bio: 'Desenvolvedor mobile, entusiasta de Xamarin. Motivado por desafios e por contribuir com a comunidade. Pai de cachorro, viciado em código & café.',
                    position: 'Desenvolvedor Mobile @ Mercos',
                    social: [
                        {
                            url: 'https://twitter.com/ionixjunior',
                            type: 'twitter'
                        },
                        {
                            url: 'https://github.com/ionixjunior',
                            type: 'github'
                        },
                        {
                            url: 'https://www.linkedin.com/in/ionixjunior/',
                            type: 'linkedin'
                        }
                    ]
                }
            }]
    },
    {
        date: "Quarta-Feira, 12/08",
        sessions: [
            {
                time: "8:00 PM GMT-3",
                title: 'Mastering security in Xamarin apps',
                tags: ["Xamarin", "best practices"],
                description: 'Crafting secure software solutions is a team effort, and mobile apps are not the exception. In this session we will explore best practices, tips and tricks that will take your app to the next level! Just remember: You dont need to be an expert to make an app secure.',
                speaker: {
                    name: 'Nicolas Milcoff',
                    avatar: '../../../assets/img/speakers/nico.png',
                    bio: 'Nicolas is a mobile development expert. He works as CTO at XABLU and he is also a Microsoft MVP who actively contributes to / maintains open source projects in the mobile space like MvvmCross. Nico is also an international speaker and trainer who loves to push forward the technologies he works with.',
                    position: 'CTO @ XABLU',
                    social: [
                        {
                            url: 'https://twitter.com/nmilcoff',
                            type: 'twitter'
                        },
                        {
                            url: 'https://github.com/nmilcoff/',
                            type: 'github'
                        },
                        {
                            url: 'https://www.linkedin.com/in/nmilcoff/',
                            type: 'linkedin'
                        }
                    ]
                }
            },
            {
                time: "9:00 PM GMT-3",
                title: 'Plugins e Controles para Xamarin.Forms ',
                tags: ["Xamarin.Forms", "Plugins"],
                description: 'Xamarin.Forms é incrível, mas que tal deixa-lo melhor ? Vamos conhecer alguns Plugins e controles que podem te ajudar a melhorar o seu APP além de facilitar o desenvolvimento do mesmo :D',
                speaker: {
                    name: 'Thiago Bertuzzi',
                    avatar: '../../../assets/img/speakers/bertuzzi.png',
                    bio: 'Arquiteto .Net e Lider técnico na NESS, trabalho com .net há 13 anos participando de projetos Desktop,Services, Web e agora Mobile utilizando Xamarin.',
                    position: 'Arquiteto .Net e Lider técnico @ NESS',
                    social: [
                        {
                            url: 'https://twitter.com/tbertuzzi',
                            type: 'twitter'
                        },
                        {
                            url: 'https://github.com/tbertuzzi',
                            type: 'github'
                        },
                        {
                            url: 'https://www.linkedin.com/in/thiago-bertuzzi-74ab2a21/',
                            type: 'linkedin'
                        }
                        ,
                        {
                            url: 'https://www.facebook.com/thiago.bertuzzi',
                            type: 'facebook'
                        }
                    ]
                }
            },
            {
                time: "10:00 PM GMT-3",
                title: 'Criando seu app de reconhecimento facial com Xamarin.Forms e Cognitive Services ',
                tags: ["Xamarin.Forms", "Cognitive Services"],
                description: 'Cada dia que passa as tecnologias de IA tem crescido e se tornado fundamental na nossa sociedade. Um bom exemplo disto é o reconhecimento facial que está sendo utilizado para identificar pessoas, expressões e ajudar na segurança. Nesta palestra veremos como podemos utilizar reconhecimento facial com Xamarin.Forms de forma simples!  ',
                speaker: {
                    name: 'Robson S Amorim',
                    avatar: '../../../assets/img/speakers/rob.jpg',
                    bio: "Desenvolvedor na Lambda3. Co-organizador do @High5Devs. Adepto de agilidade no desenvolvimento de software. Gosta de contribuir como a comunidade com posts, podcasts, palestras sempre buscando o empoderamento de pessoas. Formado em sistemas de informação pela UNIP em 2012. Na busca de novos conhecimentos e troca de experiências!",
                    position: 'Lambda3',
                    social: [
                        {
                            url: 'https://github.com/amorimrob',
                            type: 'github'
                        },
                        {
                            url: 'https://twitter.com/AmorimRob',
                            type: 'twitter'
                        },
                        {
                            url: 'https://linkedin.com/in/dansiegel',
                            type: 'linkedin'
                        }
                    ]
                }
            }
        ]
    },
    {
        date: "Quinta-Feira, 13/08",
        sessions: [
            {
                time: "8:00 PM GMT-3",
                title: 'Creating Xamarin.Forms UIs in C#',
                tags: ["Xamarin.Forms", "UI", "XAML"],
                description: 'Many developers use XAML to create UIs in Xamarin.Forms, but did you know that everything you can do in XAML can be done in C#? Microsofts recent announcement of .NET MAUI has also promoted C# as the way to build our apps in the future using the MVU architecture. Join me as we discuss the benefits of C# vs XAML, learn how to create our UIs in C#, and explore new exciting frameworks like C# Markup and MVU in .NET MAUI that make creating mobile apps even easier!',
                speaker: {
                    name: 'Brandon Minnick',
                    avatar: '../../../assets/img/speakers/brandon.png',
                    bio: 'I am on the Developer Advocate team at Microsoft, and I love C#, .NET, and Mobile App development.  I worked at Xamarin (before the Microsoft acquisition) and continue to share my passions with fellow Xamarin, C# and Cloud developers.  I am an avid coder and have developed countless apps. I love working closely with the developer community, helping fellow mobile app and cloud developers make 5-star apps.',
                    position: 'Developer Advocate @ Microsoft',
                    social: [
                        {
                            url: 'https://twitter.com/TheCodeTraveler',
                            type: 'twitter'
                        },
                        {
                            url: 'https://github.com/brminnick',
                            type: 'github'
                        },
                        {
                            url: 'https://www.linkedin.com/in/brandon-minnick/',
                            type: 'linkedin'
                        }
                    ]
                }
            },
            {
                date: "Quinta-Feira, 13/08",
                time: "9:00 PM GMT-3",
                title: 'Xamarin.Forms and Surface Duo',
                tags: ["Xamarin.Forms", "Surface Duo", "UI"],
                description: "Excited about the new Surface Duo? The Xamarin.Forms Duo SDK provides an exciting set of controls that you can use to seamlessly adapt your app to a Duo device. Join me, and let's all take a look at this much anticipated form factor and see how you can easily make your app Surface Duo ready.",
                speaker: {
                    name: 'Shane Neuville',
                    avatar: '../../../assets/img/speakers/shane.png',
                    bio: "Shane Neuville is a Senior Software Engineer for Xamarin.Forms at Microsoft. He has been a .NET developer since 2001. He's currently working on the glorious Shell, the mind blowing Duo, and the much anticipated .NET MAUI. In his spare time, he builds wearable costumes with his wife, walks the cats, watching turtles, or is streaming to [Twitch](https://www.twitch.tv/xamarinformsteam/).",
                    position: 'Microsoft',
                    social: [
                        {
                            url: 'https://github.com/pureween',
                            type: 'github'
                        },
                        {
                            url: 'https://twitter.com/pureween',
                            type: 'twitter'
                        }
                    ]
                }
            }
        ]
    },
    {
        date: "Sexta-Feira, 14/08",
        sessions: [
            {
                time: "8:00 PM GMT-3",
                title: 'Acessando recursos de plataforma específica pelo projeto .NetStandard',
                tags: ["Xamarin.Forms", ".NetStandard"],
                description: 'Com a velocidade com que o time da Xamarin vem adicionando novas funcionalidades e correção de bugs, muitos dos CustomRenderers e código para APIs nativa acabam se tornando desnecessários em nossos projetos. Porém nem sempre é fácil remover esse código do nosso projeto e utilizar o que foi implementado pelo time da Xamarin. Nesta palestra você vai ver uma abordagem, que permite criar CustomRenderers e acessar APIs de plataforma nativa de uma maneira mais desacoplada e que permite fácil reutilização em outros projetos.',
                speaker: {
                    name: 'Pedro Jesus',
                    avatar: '../../../assets/img/speakers/pedro.jpg',
                    bio: 'Sou desenvolvedor C#, focado em fazer aplicativos móveis usando Xamarin, na ArcTouch❣ No tempo livre gosto de contribuir com projetos Open Source, atualmente meus maiores esforços são direcionados ao Xamarin.Forms e Xamarin.Essentials, também gero conteúdo em streaming, em artigos e em vídeos.',
                    position: ' Engenheiro de Software C# @ ArcTouch',
                    social: [
                        {
                            url: 'https://twitter.com/pj_souz',
                            type: 'twitter'
                        },

                        {
                            url: 'http://github.com/pictos',
                            type: 'github'
                        }
                    ]
                }
            },
            {
                time: "9:00 PM GMT-3",
                title: 'Getting Started with Xamarin.Forms Shapes',
                tags: ["Xamarin.Forms", "Shapes"],
                description: 'As part of Xamarin.Forms 4.7 the brand new feature “Shapes” was introduced allowing a new and infinite way to create lovely and awesome UI components, lets get deeper and discover all the new possibillities that we have with this awesome feature.',
                speaker: {
                    name: 'Alejandro Ruiz',
                    avatar: '../../../assets/img/speakers/alejandro.jpg',
                    bio: "I'm a very experienced mobile app developer and architect using Xamarin framework, I have been working over 8+ years helping companies to ship 5 stars apps around the globe, currently I'm a Microsoft MVP: Developer Technologies and I'm helping communities and companies to improve his skills on mobile development and converting ideas into awesome experiences also I was Xamarin Certified Mobile Developer from 2013 to 2019 & I got awarded with the Xamarin MVP on 2017.",
                    position: 'Mobile Developer @ ArcTouch',
                    social: [
                        {
                            url: 'https://twitter.com/alejandroruizva',
                            type: 'twitter'
                        },
                        {
                            url: 'https://github.com/alejandroruiz',
                            type: 'github'
                        },
                        {
                            url: 'https://www.linkedin.com/in/alejandro-ruiz-533a0a88/',
                            type: 'linkedin'
                        }
                    ]
                }
            }
        ]
    }
    ,
    {
        date: "",
        sessions: [
            {
                date: "",
                time: "",
                title: 'The art of binding an iOS/Android library',
                tags: ["Xamarin", "Bindings", "iOS", "Android"],
                description: 'Vamos explorar como incorporar bibliotecas desenvolvidas em Objective-C, Swift, Java e Kotlin, em nossos projetos em Xamarin. Também analisaremos um estudo de caso: um SDK de autenticação biométrica disponível em .framework para iOS e em .AAR/JAR para Android que com binding libraries ficou disponível em Xamarin',
                speaker: {
                    name: 'Diego Bonilla',
                    avatar: '../../../assets/img/speakers/diego.jpg',
                    bio: 'CEO & co-founder of Nareia, organizer of XamarinUY',
                    position: 'CEO @ Nareia',
                    social: [
                        {
                            url: 'https://twitter.com/dbonillanareia',
                            type: 'twitter'
                        },
                        {
                            url: 'https://github.com/dbonillanareia',
                            type: 'github'
                        },
                        {
                            url: 'https://www.linkedin.com/in/diebonilla/',
                            type: 'linkedin'
                        }
                    ]
                }
            },
            {
                date: "",
                time: "",
                title: 'Clear - Quebrando paradigmas com xamarin',
                tags: ["Xamarin.Forms", "Case"],
                description: 'Explicar os motivadores do novo produto da Clear Corretora e compartilhar experiências das maiores dificuldades encontradas e sucessos durante a entrega.',
                speaker: {
                    name: 'Yan Ariel Fernandes de Souza',
                    avatar: '../../../assets/img/speakers/yan.png',
                    bio: "Atuando a 9 anos em produtos de tecnologia e atualmente ajudando o brasileiro a investir melhor em renda variável",
                    position: 'Product Manager @ XP Inc.',
                    social: [
                        {
                            url: 'https://www.linkedin.com/in/yanfernandes130593/',
                            type: 'linkedin'
                        }
                    ]
                }
            },
            {
                date: "",
                time: "",
                title: "What's New in Xamarin.Forms and Visual Studio?",
                tags: ["Xamarin.Forms", "Visual Studio"],
                description: "We are always shipping updates to Xamarin and the Xamarin developer experience. Come join Maddy Leger and Jake Kirsch, Program Managers on the Xamarin team, as they share some of the latest new features in Xamarin.Forms and Visual Studio!",
                speaker: {
                    name: 'Maddy Leger',
                    avatar: '../../../assets/img/speakers/maddy.jpg',
                    bio: "Program Manager for Xamarin",
                    position: 'Microsoft',
                    social: [
                        {
                            url: 'https://github.com/maddyleger1',
                            type: 'github'
                        },
                        {
                            url: 'https://twitter.com/maddyleger1',
                            type: 'twitter'
                        }
                    ]
                }
            }
        ]
    }
]