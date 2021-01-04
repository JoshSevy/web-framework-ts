import { User } from './models/User';

const user = new User({ name: 'Josh', age: 38 });

console.log(user.get('name'));
console.log(user.get('age'));

user.set({name: 'newname'});

console.log(user.get('name'));
console.log(user.get('age'));

