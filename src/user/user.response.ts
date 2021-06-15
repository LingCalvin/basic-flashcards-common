import User from './user';

export type FindOneUserResponse = Omit<User, 'email' | 'password'>;

export type FindOneUserWithEmail = Omit<User, 'password'>;
