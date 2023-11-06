drop database yu_gi_oh;
create database if not exists yu_gi_oh;
use  yu_gi_oh;

-- --------------------------------------------TABLES-----------------------------------------------
create table player (
	idPlayer int not null unique,    
    NameJ varchar(50) not null,
    primary key (idPlayer)
    
);
create table deck(
	
    idDeck int not null unique,    
    nameD varchar(50) not null,
    cMD varchar(50) not null,
    cED varchar(50) not null,
	cSD varchar(50) not null,
    
    primary key (idDeck)
    );

create table tournament(
	
    idTournament int not null unique,       
    fecha date not null,
    hora int not null,    
    dir varchar(120) not null,
    nameT varchar(50) not null,    
    
    primary key (idTournament )
);

create table game(
	
    idTournament int not null,
    idGame int not null unique,
    R1 int not null,
	R2 int not null,
    Round int not null,
        
	foreign key idTournament (idTournament) references  tournament (idTournament) ,
    primary key (idTournament,idGame)
);

create table arquetype(
	
    idArquetype int not null unique,
    nameA varchar(50),
	
    primary key (idArquetype)
);
-- ------------------------------------------------------------------------------------------------------
-- -----------------------------------------RELATIONSHIPS-------------------------------------------------
create table belong(
	
    idDeck int not null unique,    
	idArquetype int unique default null,
    
    foreign key idDeck  (idDeck ) references  deck (idDeck ),
    foreign key idArquetype   (idArquetype  ) references  arquetype (idArquetype ),
    
    primary key ( idDeck )
);

create table have(

	idPlayer int not null,    
	idDeck int not null,    

	foreign key idDeck (idDeck ) references  deck (idDeck ),
    foreign key idPlayer (idPlayer ) references  player  (idPlayer ),
   
    primary key ( idDeck ,idPlayer  )
);

create table suscribe(

	idPlayer int not null,
	idDeck int not null,
	idTournament int not null,       
     
	foreign key idTournament  (idTournament ) references  tournament  (idTournament ),
	foreign key idDeck (idDeck ) references  deck (idDeck ),
    foreign key idPlayer  (idPlayer ) references  player  (idPlayer ),
   
    primary key ( idDeck ,idPlayer,idTournament )    
);

create table have_weak(
	
    idTournament int not null,       
	idGame int not null unique,
    
    foreign key idTournament (idTournament ) references  tournament  (idTournament),
	foreign key idGame (idGame) references  game (idGame)
);

create table participate(
	
    idPlayer1 int not null,       
    idPlayer2 int not null,       
	idGame int not null unique,
    
    foreign key  idPlayer1 (idPlayer1) references  player  (idPlayer ),
    foreign key  idPlayer2 (idPlayer2) references  player  (idPlayer ),
	foreign key (idGame) references  game (idGame),
    
    primary key (idGame,idPlayer1,idPlayer2 )
);
