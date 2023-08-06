

import FeedController from "./controller/FeedController";
import TwetsController from "./controller/TwetsController";
import UserController from "./controller/UserController";
import allTweets from "./data/twets";
import users from "./data/users";
import { Tweet } from "./models/Tweet";
import { User } from "./models/User";

//Usuarios///////////////////////////////////////

 const usuario = UserController.cadastrarUsuario("thamires","thamires@gmail.com","Thamires2708","teste");
 const usuario2 = UserController.cadastrarUsuario("joao","joao@gmail.com","JojoToddy76","teste");
 const usuario3 = UserController.cadastrarUsuario("bruno","bruno@gmail.com","BrunoCode01","teste");

// salvando os id dos usuarios//////////////////////////////

 const idUser= usuario!.getDetails().identificador;
 const idUser2= usuario2!.getDetails().identificador;
 const idUser3= usuario3!.getDetails().identificador;

/// Criar twitter///////////////////////////////////////////

 TwetsController.criarTweet(idUser,"ola mundo!","normal")
 TwetsController.criarTweet(idUser,"Eu amo ser Growdever","normal")
 TwetsController.criarTweet(idUser,"Sexta-feira não tem aulaaa","normal")

 TwetsController.criarTweet(idUser2,"A mi me gusta ser Growdever!","normal")
 TwetsController.criarTweet(idUser2,"Tengo ganas de estudiarrr","normal")
 TwetsController.criarTweet(idUser2,"Com mi compu e mi programacion nada me rompe","normal")

 TwetsController.criarTweet(idUser3,"tri legal a aula de hoje! Rendeu muitos códigos","normal")
 TwetsController.criarTweet(idUser3,"Tech Helper ta onnnn","normal")
 TwetsController.criarTweet(idUser3,"Precisando de auxilio, chama lá no Discord","normal")

 // Salvar id por twitter////////////////////////////////////

 const idTwiterUser = usuario!.getDetails().Tweet[0].identificador
 const idTwiterUser2 = usuario2!.getDetails().Tweet[0].identificador
 const idTwiterUser3 = usuario3!.getDetails().Tweet[0].identificador

 //Mostrar twitter atraves do id do twitter////////////////////////////
    
//TwetsController.getTweetById(idTwiterUser)

 //User seguindo o outro atraves do Id/////////////////////////////////
    
UserController.seguirUsuario(idUser,idUser2)
UserController.seguirUsuario(idUser,idUser3)

UserController.seguirUsuario(idUser3,idUser)
UserController.seguirUsuario(idUser3,idUser2)

UserController.seguirUsuario(idUser2,idUser)
UserController.seguirUsuario(idUser2,idUser3)


// dar like no Twitter com ID do twitter////////////////////////////////////

TwetsController.likeTweet(idTwiterUser,idUser);// teste para validar que nao pode dar like no seu propio twitter
TwetsController.likeTweet(idTwiterUser,idUser2);
TwetsController.likeTweet(idTwiterUser,idUser3);


//Mostrar a quantidade de like no Twitter por ID do twitter////////////////

//TwetsController.getTweetById(idTwiterUser);

//dar deslike no Twitter por ID do twitter/////////////////////////////////


TwetsController.unlikeTweet(idTwiterUser,idUser3);

// Responder um twitter e fazendo ele ser do tipo reply////////////////

TwetsController.responderTweet(idUser2,idTwiterUser,"Tarefa Entregue")

TwetsController.responderTweet(idUser2,idTwiterUser2,"vida plena")

TwetsController.responderTweet(idUser,idTwiterUser3,"só preciso de férias")

//Ver feed de um usuario

FeedController.exibirFeed(idUser)




  