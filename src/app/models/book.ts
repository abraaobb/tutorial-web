export class Book {
  static Status = {
    NEW: 'N',
    USED: 'U'
  }
  id?: number;
  title?: string;
  publication_date?: Date;
  author?: string;
  status?: string;
}
