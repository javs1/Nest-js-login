import { Injectable } from '@nestjs/common';

export type User={
    id: number;
    name: string;
    username: string;
    password: string;
}

@Injectable()
export class UsersService {
    private readonly users: User[] = [
        {id:1,name:"Francisco", username:'Javier', password:'rojo'},
        {id:2,name:"Osiris", username:'Adilene', password:'azul'},
        {id:3,name:"Yanira", username:'Maricela', password:'rosa'},
    ];

    async findOne(username:string): Promise <User | undefined>{
        return this.users.find(user => user.username === username)
    }
}
