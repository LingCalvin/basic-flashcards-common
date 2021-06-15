import FindAllDto from '../common/find-all.dto';
import StringFilter from '../common/string-filter';

type FindAllDecksDto = FindAllDto<DeckFilter>;

export interface DeckFilter {
  AND: DeckFilter[];
  OR: DeckFilter;
  NOT: DeckFilter;
  id?: StringFilter;
  authorId?: StringFilter;
  title?: StringFilter;
  description?: StringFilter;
}

export default FindAllDecksDto;
