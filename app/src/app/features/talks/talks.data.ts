export const TALKS = [
    {
        title: 'Programando interfaces reativas com Reactive UI',
        tags:[],
        description: 'Não faltam frameworks MVVM para a plataforma Xamarin, o ReactiveUI (RxUI) (http://reactiveui.net/) é mais um deles, mas o que o torna o interessante é que quem já está acostumada a programar utilizando Reactive Extensions (Rx) se sentirá em casa, com uma API mais intuitiva é possível criar interfaces gráficas responsiva, reativas e testáveis. Com suporte a praticamente todas plataformas do .NET, o ReactiveUI traz vários benefícios e você pode adotar somente as partes que julgar mais interessante.',
        speaker: {
            name: 'Mahmoud Ali',
            avatar: '../../../assets/img/speakers/mud.jpg',
            bio: 'Microsoft MVP, Desenvolvedor Web e Mobile, entusiasta open source, gamer e apreciador de boas cervejas.',
            position: 'Mobile Developer @ Lambda3',
            social: [
                {
                    url: 'https://www.linkedin.com/in/akamud/',
                    type: 'linkedin'
                },
                {
                    url: 'https://twitter.com/akamud	',
                    type: 'twitter'
                },
                {
                    url: 'https://www.facebook.com/akamud	',
                    type: 'facebook'
                },
                {
                    url: 'https://github.com/akamud	',
                    type: 'github'
                }
            ]
        }
    },
    /* {
      title: 'Desvendando os mistérios dos Bindings',
      tags:[],
      description: 'Vamos repassar algumas verdades e alguns mitos sobre Bindings de código nativo para a plataforma Xamarin.',
      speaker: {
          name: 'Ricardo Dorta',
          avatar: '../../../assets/img/speakers/dorta.jpg',
          bio: 'Ricardo Dorta é desenvolvedor de software a 15 anos. Microsoft MVP Reconnect, foi nomeado pela Microsoft como MVP com especialidade em C# por 5 anos consecutivos. Especializado em desenvolvimento de aplicativos na plataforma Microsoft, é co-fundador e co-host do Monkey Nights. Comunidade de desenvolvimento focada em Xamarin. Responsável pela arquitetura e publicação dos dois primeiros jogos brasileiros publicados na Windows Store.',
          position: 'Master Software Engineer @ ArcTouch',
          social: [
              {
                  url: 'https://www.linkedin.com/in/dorta/',
                  type: 'linkedin'
              },
              {
                  url: 'http://twitter.com/dortaway',
                  type: 'twitter'
              },
              {
                  url: 'http://facebook.com/dortaway',
                  type: 'facebook'
              },
              {
                  url: 'https://github.com/rdorta',
                  type: 'github'
              }
          ]
      }
    } , */
    {
      title: 'Fabulous - Xamarin Forms com Elmish',
      tags:[],
      description: 'Fabulous traz todo o poder do F# para o ecossistema Xamarin. F# é a linguagem funcional da Microsoft muito poderosa com foco em código seguro e expressivo. O Fabulous utiliza dessas vantagens da linguagem para implementar o modelo arquitetural Elmish (model-view-update). Basicamente um Redux para Xamarin. Isso na pratica significa ter um controle de estado de aplicação centralizado e previsível.',
      speaker: {
          name: 'Lucas Teles',
          avatar: '../../../assets/img/speakers/lucas.jpg',
          bio: 'Desenvolvedor a mais de 10 anos, cientista da computação, defensor dos valores ágeis e boas praticas de desenvolvimento, amante de open source e gatos, e alem disso militante em programação funcional, vim e teclados mecânicos.',
          position: 'Developer @ Lambda3',
          social: [
              {
                  url: 'https://www.linkedin.com/in/lteles',
                  type: 'linkedin'
              },
              {
                  url: 'https://twitter.com/lucasteles42',
                  type: 'twitter'
              },
              {
                  url: '',
                  type: 'facebook'
              },
              {
                  url: 'https://github.com/lucasteles',
                  type: 'github'
              }
          ]
      }
    },
    {
      title: 'Usando .NET ao nosso favor: Desde as coleções até threading',
      tags:[],
      description: 'Com Xamarin você gera aplicações que acessam todo o poder das apis dos sistemas operacionais moveis. Contudo, deve-se sempre lembrar que o nosso programa ainda esta rodando em cima de um runtime .net! Tendo isso em mente, a minha palestra irá focar em como liberar o potencial das ferramentas que já vem na biblioteca base do .NET e comentar erros básicos que acometem aqueles que ignoram o runtime que utilizam.',
      speaker: {
          name: 'William Barbosa',
          avatar: '../../../assets/img/speakers/will.jpg',
          bio: 'Mobile development, .NET and F#. Learning how to draw with Pixels',
          position: 'Desenvolvedor Mobile @ Toggl e Microsoft MVP',
          social: [
              {
                  url: '',
                  type: 'linkedin'
              },
              {
                  url: 'http://twitter.com/heytherewills',
                  type: 'twitter'
              },
              {
                  url: '',
                  type: 'facebook'
              },
              {
                  url: 'github.com/heytherewill',
                  type: 'github'
              }
          ]
      }
    },
    {
      title: 'LiteDB - Um banco de dados NoSQL para o mundo mobile ',
      tags:[],
      description: 'O LiteDB é uma solução de banco de dados orientado a documento totalmente open source e escrito em .NET. Por ser embedded e sem servidor o usuário mobile é seu principal público. Vamos conhecer os principais recursos e como aplicar em soluções Xamarin.',
      speaker: {
          name: 'Maurício David',
          avatar: '../../../assets/img/speakers/mauricio.jpg',
          bio: 'Diretor técnico da Numeria Informática, trabalho a mais de 20 anos na área de desenvolvimento, da qual sou apaixonado. Busco sempre a excelência de produtos e soluções que participo.',
          position: 'Diretor técnico @ Numeria',
          social: [
              {
                  url: '',
                  type: 'linkedin'
              },
              {
                  url: 'http://twitter.com/mbdavid',
                  type: 'twitter'
              },
              {
                  url: '',
                  type: 'facebook'
              },
              {
                  url: 'http://www.github.com/mbdavid',
                  type: 'github'
              }
          ]
      }
    },
    {
      title: 'Reagindo a eventos com Firebase RealTime Database',
      tags:[],
      description: 'Já precisou entregar comunição em tempo real no seu app ou no sistema? Se sim, sabe que temos algumas opções que entregam este desafio.. nesta palestra vamos ver como podemos o Realtime Database do Firebase funciona e utilizar a Rest API para reagir a eventos em tempo real. Vamos construir dois apps e ve-los se comunicando em tempo real utilizando o Firebase RealTime Database e os dados sendo atualizados em tempo real no console do Firebase.',
      speaker: {
          name: 'Robson Soares Amorim',
          avatar: '../../../assets/img/speakers/robson.jpg',
          bio: 'Desenvolvedor na Lambda3. Co-organizador do @High5Devs. Adepto de agilidade no desenvolvimento de software. Gosta de contribuir como a comunidade com posts, podcasts, palestras sempre buscando o empoderamento de pessoas. Formado em sistemas de informação pela  UNIP em 2012. Na busca de novos conhecimentos e troca de experiências!',
          position: 'Desenvolvedor @ Lambda3',
          social: [
              {
                  url: 'https://www.linkedin.com/in/robson-soares-amorim-43a54b23/',
                  type: 'linkedin'
              },
              {
                  url: 'https://twitter.com/AmorimRob',
                  type: 'twitter'
              },
              {
                  url: 'https://www.facebook.com/robson.soares.7106',
                  type: 'facebook'
              },
              {
                  url: 'http://github.com/amorimrob',
                  type: 'github'
              }
          ]
      }
    },
    {
      title: 'Xamarin.Forms for Tizen',
      tags:[],
      description: 'Como entregar os seus apps para Tizen e porque você desenvolvedor Xamarin precisa ficar de olho nele.',
      speaker: {
          name: 'Juliano Custódio',
          avatar: '../../../assets/img/speakers/juliano.jpg',
          bio: 'Microsoft MVP, Head of Mobile Solutions na Algorama, Xamarin Certified Mobile Professional, faz parte da lista de autores do Planet Xamarin, palestrante e escreve artigos sobre Xamarin em seu blog.',
          position: 'Head of Mobile Solutions @ Algorama',
          social: [
              {
                  url: '',
                  type: 'linkedin'
              },
              {
                  url: 'https://twitter.com/juucustodio',
                  type: 'twitter'
              },
              {
                  url: '',
                  type: 'facebook'
              },
              {
                  url: 'https://github.com/juucustodio',
                  type: 'github'
              }
          ]
      }
    },
    {
      title: 'Xamarin + App Center + Azure DevOps = 💜',
      tags:[],
      description: 'Saiba como o App Center e o Azure DevOps em projetos Xamarin podem nos ajudar a antecipar problemas e alcançar uma melhoria contínua desde o desenvolvimento até após o lançamento do aplicativo.',
      speaker: {
          name: 'Letticia Nicoli',
          avatar: '../../../assets/img/speakers/letticia.jpg',
          bio: 'Microsoft MVP, Xamarin Certified Mobile Developer, MTAC e Organizadora do High5Devs. Adepta às boas práticas ágeis e novas tecnologias busca compartilhar seus conhecimentos na área para empoderar mais e mais pessoas.',
          position: 'Developer @ Lambda3',
          social: [
              {
                  url: 'https://www.linkedin.com/in/letticia-nicoli/',
                  type: 'linkedin'
              },
              {
                  url: 'https://twitter.com/letticianicoli',
                  type: 'twitter'
              },
              {
                  url: '',
                  type: 'facebook'
              },
              {
                  url: 'https://github.com/letticianicoli',
                  type: 'github'
              }
          ]
      }
    },
    {
      title: 'Building Offline Capabilities: Loading Initial Data',
      tags:[],
      description: 'In mobile applications, data is a critical matter: It always has to be available and ready for your users. This is even more true for enterprise applications, if data takes a long time to load, sync or is only partially downloaded from the server, it will reflect very poorly on your product quality. I will discuss the challenge of the initial data load for offline-capable apps. Furthermore, I will demo an SQLite generation solution, that I have developed to handle large payloads of data in Xamarin applications.',
      speaker: {
          name: 'Daniel John Amaral Causer',
          avatar: '../../../assets/img/speakers/danielcauser.jpg',
          bio: '8 anos desenvolvendo software, does quais 4 dedicados à Xamarin.',
          position: 'Xamarin Consultant @ BSI Labs',
          social: [
              {
                  url: 'https://www.linkedin.com/in/daniel-john-causer-1837a330/',
                  type: 'linkedin'
              },
              {
                  url: 'https://twitter.com/danielcauser',
                  type: 'twitter'
              },
              {
                  url: '',
                  type: 'facebook'
              },
              {
                  url: 'https://github.com/danielcauser',
                  type: 'github'
              }
          ]
      }
    },
    {
      title: 'MindSet de desenvolvimento de telas com xaml',
      tags:[],
      description: 'O objetivo dessa palestra é apresentar os passos que eu sigo para desenvolver uma tela do protótipo para o XAML.',
      speaker: {
          name: 'Carlos Henrique Rocha Gabriel',
          avatar: '../../../assets/img/speakers/carlos.jpg',
          bio: 'Pai, marido, mobile developer e gamer.  Desenvolvi interesse na área de desenvolvimento de sistemas de informação através do uso do Excel. A partir dessa experiencia fui buscar mais informações sobre a área de desenvolvimento e passei por diversas tecnologias como Java, PHP, HTML, CSS, Java Script, C#. Todo esse caminho consolidou uma carreira de Developer Full Stack (que adora front end, mesmo. E sabe a importância do UI/UX no sistema) e Mobile Developer especialista em desenvolvimento multi plataforma com Xamarin em todo seu ciclo de vida do aplicativo.',
          position: 'Mobile Developer @ Reply',
          social: [
              {
                  url: 'https://www.linkedin.com/in/carlos-henrique-rocha-gabriel-0ba31328/',
                  type: 'linkedin'
              },
              {
                  url: 'https://twitter.com/chrochagabriel',
                  type: 'twitter'
              },
              {
                  url: 'https://www.facebook.com/carloshenrique.rochagabriel',
                  type: 'facebook'
              },
              {
                  url: 'https://github.com/cacaxiq',
                  type: 'github'
              }
          ]
      }
    },
    {
      title: 'Entendendo as novas ferramentas do Android - D8, R8 e AAPT2 - e melhorando o tempo de build dos apps',
      tags:[],
      description: 'O início de um novo projeto é sempre lindo: compila e faz deploy rápido. A medida que o mesmo vai crescendo, o ciclo de desenvolvimento começa a se tornar mais lento com builds mais demorados e desenvolvedores desanimados. Assim como um projeto evolui, as ferramentas de um ecossistema também, então, sempre que possível, acompanhar a evolução da plataforma que estamos trabalhando para não deixar o projeto obsoleto do “dia para a noite” é muito importante. Por falar em evolução, temos algumas novas ferramentas no Android, e elas podem nos ajudar a deixar o ciclo de desenvolvimento mais rápido, tornando o processo de build e deploy menos demorado. Nessa talk vamos conhecer um pouco sobre o D8, R8 e AAPT2 e ver como eles podem nos ajudar. Vamos entender o que é e como funciona cada uma destas ferramentas. Será que é simplesmente habilitar essas novas opções no Visual Studio e “correr para o abraço”?',
      speaker: {
          name: 'Ione Souza Junior',
          avatar: '../../../assets/img/speakers/ione.jpg',
          bio: 'Desenvolvedor mobile na Mercos, entusiasta de Xamarin. Motivado por desafios e por contribuir com a comunidade. Pai de cachorro, viciado em código & café.',
          position: 'Mobile Developer @ Mercos',
          social: [
              {
                  url: 'https://www.linkedin.com/in/ionixjunior/',
                  type: 'linkedin'
              },
              {
                  url: 'https://twitter.com/ionixjunior',
                  type: 'twitter'
              },
              {
                  url: '',
                  type: 'facebook'
              },
              {
                  url: 'https://github.com/ionixjunior',
                  type: 'github'
              }
          ]
      }
    },
    {
      title: 'Contribuindo com o código do Xamarin',
      tags:[],
      description: 'Desde a aquisição pela Microsoft em 2016 todo o código do Xamarin e alguns de seus SDKs como Xamarin.Forms e mais recentemente Xamarin.Essentials estão abertos e disponíveis para contribuição. Muitas vezes para atendermos a um projeto precisariamos de algumas features que não estão disponíveis. Por que entãao nãao contribuir diretamente no código fonte e deixar nosso conhecimento auxiliar milhares de outros desenvolvedores? Nesta palestra irei demonstrar como podemos fazer o build dos SDKs em nossa máquina, entnder a estrutura do projeto e o que está disponível para que possamos enviar nossas contribuições de forma consistentes para serem aceitas',
      speaker: {
          name: 'Pedro Henrique de Souza Jesus',
          avatar: '../../../assets/img/speakers/pedro.jpg',
          bio: 'Formando em engenharia de controle e automação, iniciei meu estudo no mundo mobile com o Xamarin, há mais de 3 anos. A paixão foi tanta, que acabei entrando no mundo de desenvolvimento mobile e também me tornei um contribuinte do projeto Xamarin, já fui citado em vários eventos da Microsoft, também contribuo com a comunidade gerando conteúdo técnico e tirando dúvidas em grupos de Xamarin. ',
          position: 'Mobile Developer @ ArcTouch',
          social: [
              {
                  url: '',
                  type: 'linkedin'
              },
              {
                  url: 'https://twitter.com/pj_souz',
                  type: 'twitter'
              },
              {
                  url: '',
                  type: 'facebook'
              },
              {
                  url: 'https://github.com/pictos/',
                  type: 'github'
              }
          ]
      }
    },
    {
      title: 'Deep Dive into Xamarin.Forms Shell',
      tags:[],
      description: 'As part of the Xamarin.Forms 4 we get a brand new way easily and fast way to structure our Xamarin.Forms apps allowing us to',
      speaker: {
          name: 'Alejandro Ruiz',
          avatar: '../../../assets/img/speakers/alejandro.jpg',
          bio: 'Im a Mobile software developer focused on Xamarin framework, I have been working over 8 years helping companies to ship "5 stars" apps around the globe, currently I am a Microsoft MVP helping communities and companies to improve his skills on mobile development and converting ideas into awesome experiences also I have been Xamarin Certified Mobile Developer since 2013',
          position: 'Mobile Developer @ ArcTouch',
          social: [
              {
                  url: 'https://www.linkedin.com/in/alejandro-ruiz-varela-533a0a88/',
                  type: 'linkedin'
              },
              {
                  url: 'https://twitter.com/alejandroruizva',
                  type: 'twitter'
              },
              {
                  url: 'https://www.facebook.com/alejandroruizvarela',
                  type: 'facebook'
              },
              {
                  url: 'https://github.com/AlejandroRuiz',
                  type: 'github'
              }
          ]
      }
    },
    {
        title: 'Technical debt em Xamarin',
        tags:[],
        description: 'Analizaremos as causas e o impacto de technical debt em projetos Xamarin, como pagar a dívida, como identificá-la e como evitá-la.',
        speaker: {
            name: 'Diego Bonilla',
            avatar: '../../../assets/img/speakers/diego.jpg',
            bio: 'Uruguaio, co-fundador e CEO de Nareia, organizador do @XamarinUY',
            position: 'CEO @ Nareia',
            social: [
                {
                    url: 'https://www.linkedin.com/in/diebonilla/',
                    type: 'linkedin'
                },
                {
                    url: 'https://twitter.com/dbonillanareia',
                    type: 'twitter'
                },
                {
                    url: '',
                    type: 'facebook'
                },
                {
                    url: 'https://github.com/dbonillanareia',
                    type: 'github'
                }
            ]
        }
      },
]
