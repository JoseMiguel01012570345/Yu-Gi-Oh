import { Injectable } from '@nestjs/common';

@Injectable()
export class TournamentsService {

    getTournaments() {
        return {
            date: '2023-11-14 mar 8:42 am',
            lige: 'Pendulum',
            champion: 'Yuka'
        }
    }

}
