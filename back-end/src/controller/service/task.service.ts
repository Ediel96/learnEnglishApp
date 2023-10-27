/**
 * Clase abstracion con la definición de operaciones
 * @author Hamilton Ediel Acevedo
 */

import { Injectable } from '@nestjs/common';

@Injectable()
export abstract class ITaskServices {
  /**
   * Consuta tipo de orden
   * @param {String} channel Canal
   */
  abstract getTask(): any;
}
