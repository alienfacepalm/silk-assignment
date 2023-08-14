import { Injectable } from '@nestjs/common';

@Injectable()
export class FindingsService {
  getAllFindings(): { message: string } {
    // query DB and return
    return { message: 'All findings stub' };
  }

  getFindingById(id: string): { message: string } {
    return { message: `Finding by id ${id}` };
  }
}
