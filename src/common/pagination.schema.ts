import * as limits from './limits';
import * as yup from 'yup';
import PaginationDto from './pagination.dto';

const paginationSchema: yup.SchemaOf<PaginationDto> = yup.object().shape({
  take: yup.number().positive().integer().max(limits.maxPerPage),
  skip: yup.number().integer().min(0),
});

export default paginationSchema;
