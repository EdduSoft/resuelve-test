import { Type } from 'class-transformer'
import { ArrayMinSize, IsArray, ValidateNested } from 'class-validator'
import { ValidatePlayerInput } from './player.input'

/**
 * Class Model array players
 * @author Eduardo Díaz Salazar <eddusoft@gmail.com>
 */

export class ValidatePlayersInput {
  /**
   * jugadores property
   */
  @IsArray()
  @ValidateNested({ each: true })
  @ArrayMinSize(1)
  @Type(() => ValidatePlayerInput)
  jugadores: Array<ValidatePlayerInput>
}