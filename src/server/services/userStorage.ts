import {User, UserCreationPayload} from '../../types';

let _id = 3;

let users: User[] = [
    {
        id: '1',
        firstName: 'Rick',
        lastName: 'Sanchez',
        email: 'wubba@lubba.com',
    },
    {
        id: '2',
        firstName: 'Morty',
        lastName: 'Sanchez',
        email: 'morty@gmail.com',
    },
];

export const getAll = (): User[] => users;

export const getById = (id: string): User | undefined => users.find(user => user.id === id);

export const create = ({email, firstName, lastName}: UserCreationPayload) => {
    const user = {
        id: (_id++).toString(),
        email,
        firstName,
        lastName,
    };

    users = [...users, user];

    return user;
};

export const deleteById = (id: string) => {
    users = users.filter(user => user.id !== id);
};
