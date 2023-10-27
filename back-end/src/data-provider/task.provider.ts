import { Injectable } from '@nestjs/common';

@Injectable()
export abstract class ITaskProvider {
  /**
   * Consulta task
   */
  abstract getTask(): Promise<any>;
}
