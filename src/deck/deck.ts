import Card from '../card/card';

export default interface Deck {
  authorId: string;
  title: string;
  description: string;
  cards: Card[];
}
