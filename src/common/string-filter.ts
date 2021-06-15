type StringFilter = {
  equals?: string;
  in: string[];
  notIn?: string[];
  lt?: string;
  lte?: string;
  gt?: string;
  gte?: string;
  contains?: string;
  startsWith?: string;
  endsWith?: string;
  mode?: 'insensitive' | 'default';
  not?: Omit<StringFilter, 'mode'>;
};

export default StringFilter;
