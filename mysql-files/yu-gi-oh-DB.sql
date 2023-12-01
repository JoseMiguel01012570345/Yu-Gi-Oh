drop database yu_gi_oh;
create database if not exists yu_gi_oh;
use  yu_gi_oh;

-- --------------------------------------------TABLES-----------------------------------------------
create table player (
    NameJ varchar(50) not null unique,
    password varchar (50) not null,
    primary key (idPlayer)s
    
);
create table deck(
	
    idDeck int unique,    
    nameD varchar(50) not null,
    cMD varchar(50) not null,
    cED varchar(50) not null,
	cSD varchar(50) not null,
    
    primary key (idDeck)
    );

create table tournament(
	
    idTournament int unique,       
    fecha date not null,
    hora int not null,    
    dir varchar(120) not null,
    nameT varchar(50) not null,    
    
    primary key (idTournament )
);

create table game(
		
    idTournament int,
    idGame int unique,
    R1 int not null,
	R2 int not null,
    Round int not null,
        
	foreign key idTournament (idTournament) references  tournament (idTournament) ,
    primary key (idGame)
);

create table arquetype(
	
    idArquetype int unique,
    nameA varchar(50),
	
    primary key (idArquetype)
);
-- ------------------------------------------------------------------------------------------------------
-- -----------------------------------------RELATIONSHIPS-------------------------------------------------
create table belong(
	
    idDeck int not null,    
	idArquetype int unique not null,
    
    foreign key idDeck  (idDeck ) references  deck (idDeck ),
    foreign key idArquetype   (idArquetype  ) references  arquetype (idArquetype )
);

create table have(

	idPlayer int not null ,    
	idDeck int not null,    

	foreign key idDeck (idDeck ) references  deck (idDeck ),
    foreign key idPlayer (idPlayer ) references  player  (idPlayer )
);

create table suscribe(

	idPlayer int not null,
	idDeck int not null ,
	idTournament int not null,       
     
	foreign key idTournament  (idTournament ) references  tournament  (idTournament ),
	foreign key idDeck (idDeck ) references  deck (idDeck ),
    foreign key idPlayer  (idPlayer ) references  player  (idPlayer )
);


create table have_weak(
	
    idTournament int not null,       
	idGame int not null ,
    
    foreign key idTournament (idTournament ) references  tournament  (idTournament),
	foreign key idGame (idGame) references  game (idGame)
);

create table participate(
	
    idPlayer1 int not null ,       
    idPlayer2 int not null ,       
	idGame int not null ,
    
    foreign key  idPlayer1 (idPlayer1) references  player  (idPlayer ),
    foreign key  idPlayer2 (idPlayer2) references  player  (idPlayer ),
	foreign key (idGame) references  game (idGame)
);

delimiter //

create trigger suscriberInsert before insert on suscribe for each row begin 
	
    DECLARE tournament int;
	
    set tournament = (select idPlayer from suscribe where idPlayer= new.idPlayer and idTournament=new.idTournament );
   
	if tournament is  not null then

		SIGNAL SQLSTATE '42927' SET MESSAGE_TEXT = 'Player exists';
            
	-- else
--     
-- 		insert into suscribe (idPlayer,idDeck,idTournament)  value (new.idPlayer,new.idDeck,new.idTournament);	
            
	end if;
	
end;
// delimiter ;
