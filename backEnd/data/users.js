// the plain bcrypt package has more dependancy
// so we use bcryptjs
import bcrypt from 'bcryptjs';
const users = [
	{
		name: 'Admin User',
		email: 'admin@example.com',
		password: bcrypt.hashSync('123456', 10),
	},
	{
		name: 'User1',
		email: 'user1@example.com',
		password: bcrypt.hashSync('123456', 10),
	},
	{
		name: 'User2',
		email: 'user2@example.com',
		password: bcrypt.hashSync('123456', 10),
	},
];

export default users;
