Meteor.startup(function(){
  if(Musicas.find().count() === 0){
    var musicas = [
      {
      nome: 'Musica 1',
      descricao: 'descricao 1',
      soundcloud: 'http://soundcloud.com',
      youtube: 'http://youtube.com',
      spotify: 'http://spotify.com',
    },
    {
    nome: 'Musica 2',
    descricao: 'descricao 2',
    soundcloud: 'http://soundcloud.com',
    youtube: 'http://youtube.com',
    spotify: 'http://spotify.com',
  },
    {
      nome: 'Musica 3',
      descricao: 'descricao 3',
      soundcloud: 'http://soundcloud.com',
      youtube: 'http://youtube.com',
      spotify: 'http://spotify.com',
    },
  ]
  for (var i = 0; i < musicas.length; i++) {
      Musicas.insert(musicas[i]);
    }
  }

});
