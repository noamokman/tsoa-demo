import {Get, Route, Tags, Controller, Post, Body, Delete} from 'tsoa';
import {User, UserCreationPayload} from '../../types';
import {getAll, getById, create, deleteById} from '../services/userStorage';

@Route('users')
@Tags('Users')
export class UsersController extends Controller {
    @Get('{userId}')
    public get(userId: string): User {
        const user = getById(userId);

        if (!user) {
            throw new Error('Not found');
        }

        return user;
    }

    @Get()
    public getAll(): User[] {
        return getAll();
    }

    @Post()
    public create(@Body() body: UserCreationPayload): User {
        return create(body);
    }

    @Delete('{userId}')
    public delete(userId: string) {
        deleteById(userId);
    }
}
