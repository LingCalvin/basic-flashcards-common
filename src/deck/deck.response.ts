import Deck from './deck';
import { FindOneUserResponse } from '../user/user.response';

export type FindOneDeckResponse = Deck;

export interface FindOneDeckWithAuthor
  extends Omit<FindOneDeckResponse, 'authorId'> {
  author: FindOneUserResponse;
}
