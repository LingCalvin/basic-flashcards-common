import PaginationDto from './pagination.dto';

export default interface FindAllDto<T> extends PaginationDto {
  filter?: T;
}
