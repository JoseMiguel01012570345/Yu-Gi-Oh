import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class DecksDb {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('text')
    DeckName: string;

}
