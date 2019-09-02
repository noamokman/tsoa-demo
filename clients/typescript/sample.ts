import {UsersApi} from './src';

const usersApi = new UsersApi();

const main = async () => {
    const users = await usersApi.getAll();

    console.log(users);

    const morty = users.find(user => user.firstName === 'Morty');

    if (!morty) {
        return;
    }

    await usersApi._delete(morty.id);

    const newUsers = await usersApi.getAll();

    console.log(newUsers);
};

main().then(console.log, console.error);
