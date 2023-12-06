import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! <br><a href="http://localhost:3000/cards">Cards</a><br><a href="http://localhost:3000/decks">Decks</a><br><a href="http://localhost:3000/cards">tournaments</a>';
  }
}