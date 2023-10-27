import { Injectable } from '@nestjs/common';

@Injectable()
export abstract class ITaskUC {
  abstract getTask(): Promise<any>;
}
