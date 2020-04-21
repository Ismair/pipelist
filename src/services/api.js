export function loadLists() {
    return [
      { 
        title: 'Tarefas', 
        creatable: true,
        cards: [
          {
            id: 1,
            content: 'Estudar NodeJS',
            labels: ['#7159c1'],
            user: 'https://api.adorable.io/avatars/40/abott@adorable.png'
          },
          {
            id: 2,
            content: 'Recriar a interface do Pipefy',
            labels: ['#7159c1'],
            user: 'https://api.adorable.io/avatars/40/abott@adorable.png'
          },
          {
            id: 3,
            content: 'Estudar React',
            labels: ['#7159c1'],
            user: 'https://api.adorable.io/avatars/40/abott@adorable.png'
          },
          {
            id: 4,
            content: 'Atualizar script de backup',
            labels: ['#54e1f7'],
            user: 'https://api.adorable.io/avatars/40/abott@adorable.png'
          },
          {
            id: 5,
            content: 'Verificar consumo de banda',
            labels: ['#54e1f7'],
            user: 'https://api.adorable.io/avatars/40/abott@adorable.png'
          },
        ]
      },
      { 
        title: 'Fazendo', 
        creatable: false,
        cards: [
          {
            id: 6,
            content: 'Recriando clone do Pipefy',
            labels: [],
            user: 'https://api.adorable.io/avatars/40/abott@adorable.png'
          }
        ]
      },
      { 
        title: 'Pausado', 
        creatable: false,
        cards: [
          {
            id: 7,
            content: 'Novo servido de banco de dados',
            labels: ['#7159c1'],
            user: 'https://api.adorable.io/avatars/40/abott@adorable.png'
          },
          {
            id: 8,
            content: 'Treinamento dos funcionarios novos',
            labels: ['#54e1f7'],
            user: 'https://api.adorable.io/avatars/40/abott@adorable.png'
          },
          {
            id: 9,
            content: 'Tirar duvidas dos usuarios do PCP',
            labels: [],
          }
        ]
      },
      { 
        title: 'Concluído', 
        creatable: false,
        done: true,
        cards: [
          {
            id: 10,
            content: 'Entregar as contas do mes para o financeiro',
            labels: [],
          },
          {
            id: 12,
            content: 'Entregar versão do sistema e representantes',
            labels: ['#54e1f7'],
          },
          {
            id: 13,
            content: 'Entregar o projeto ecommerce',
            labels: ['#7159c1'],
          }
        ]
      },
    ];
  }