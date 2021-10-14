import { InMemoryDbService } from 'angular-in-memory-web-api';
import { RecordFakeDb } from 'src/app/fake-db/RecordFakeDb';

export class FakeDbService implements InMemoryDbService {
  createDb(): any {
    return {
      'records': RecordFakeDb.data,
    };
  }
}
