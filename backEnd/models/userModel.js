import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		isAdmin: {
			type: Boolean,
			required: true,
			default: false,
		},
	},
	// with mongoose we can add a second parameter and by setting this parameter
	// mongoose automatically add createdAt and updatedAt timestamps to database.
	{
		timestamp: true,
	}
);

const User = mongoose.model('User', userSchema);
export default User;
