import { CreateCardDto } from '../card';

export default interface CreateDeckDto {
  /**
   * The ID of the author of the deck.
   */
  authorId: string;
  /**
   * The title of the deck.
   */
  title: string;
  /**
   * The description of the deck.
   */
  description: string;
  /**
   * The cards in the deck.
   */
  cards: CreateCardDto[];
}
