-- ENTITIES--------------------------------------------
use  yu_gi_oh;

-- player----------------------------------------------
insert into player (idPlayer ,NameJ) value (1,"jose");
insert into player (idPlayer ,NameJ) value (2,"yonatan");
insert into player (idPlayer ,NameJ) value (3,"loitzel");

-- arquetype----------------------------------------------
insert into arquetype (idArquetype,nameA ) value (20,"spirit");
insert into arquetype(idArquetype,nameA) value (21,"light");

-- tournament---------------------------------------------
insert into tournament (idTournament ,fecha ,hora ,dir ,nameT ) value (12, '2001-01-25', 1350 , 'una ahi', 'la liga de la croqueta');
insert into tournament (idTournament ,fecha ,hora ,dir ,nameT ) value (13, '2001-01-25', 1350 , 'una ahi', 'la liga de la croqueta 2');
insert into tournament (idTournament ,fecha ,hora ,dir ,nameT ) value (14, '2001-01-25', 1350 , 'una ahi', 'la liga de la croqueta 3');
-- decks --------------------------------------------------

insert into deck (idDeck ,nameD ,cMD ,cED ,cSD ) value (10,"monstruo","hechizo","trampa","espceial");
insert into deck (idDeck ,nameD ,cMD ,cED ,cSD ) value (11,"monstruo","hechizo","trampa","espceial");
insert into deck (idDeck,nameD ,cMD ,cED ,cSD ) value (34, "A","B","C","D");
insert into deck (idDeck,nameD ,cMD ,cED ,cSD ) value (35, "X","Y","Z","Epsilon");

-- match---------------------------------------------------

insert into game (idTournament ,idGame ,R1 ,R2,Round ) value (12,30, 1,0,16);
insert into game (idTournament ,idGame ,R1 ,R2,Round ) value (13,29, 2,1,8);
insert into game (idTournament ,idGame ,R1 ,R2,Round ) value (13,31, 2,0,8);
-- RELATIONSHIPS-----------------------------------------

-- belong----------------------------------------------
insert into belong(idDeck , idArquetype) value (10,20);

-- suscribe--------------------------------------------

insert into suscribe (idPlayer ,idDeck ,idTournament ) value (1,34,13 );
insert into suscribe (idPlayer ,idDeck ,idTournament ) value (2,35,13 );

-- have_weak--------------------------------------------
insert into have_weak (idTournament ,idGame ) value (12,30);
-- insert into have_weak (idTournament ,idGame ) value (12,29);
insert into have_weak (idTournament ,idGame ) value (14,31);


