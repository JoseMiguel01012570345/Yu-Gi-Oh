import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'dotenv';
import mysql from 'promise-mysql';

// config();

@Module({
    imports: [
        // TypeOrmModule.forRootAsync({
        //     useFactory: () => ({
        //       type: 'mariadb',
        //       host: '127.0.0.1',
        //       port: 3306,
        //       username: 'root',
        //       password: 'family',
        //       database: 'MyDB',
        //       entities: [],
        //       synchronize: true,
        //     }),
        // })
    ],
})
export class DataBaseModule {
    // host = process.env.HOST;
    // database = process.env.DATABASE;
    // user = process.env.USER;
    // password = process.env.PASSWORD;

    // connection = mysql.createConnection({
    //     host: this.host,
    //     database: this.database,
    //     user: this.user,
    //     password: this.password
    // });

}
