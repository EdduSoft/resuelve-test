import { Type } from 'class-transformer'
import { ArrayMinSize, IsArray, IsNotEmpty, IsObject, ValidateNested, ValidationArguments} from 'class-validator'
import { ValidatePlayerTeam } from './player.team' 
import { IsInLevel } from './custom/isin.level'
import { IsGreaterThanZero } from './custom/is.greater.than.zero'

/**
 * Class ValidateTeamInput
 * 
 * Model and request validation
 * 
 * @author Eduardo Díaz <eddusoft@gmail.com>
 */

export class ValidateTeamInput {

  /**
   * jugadores property
   */
  @IsArray()
  @ValidateNested({ each: true })
  @ArrayMinSize(1)
  @Type(() => ValidatePlayerTeam)
  jugadores: Array<ValidatePlayerTeam>

  /**
   * niveles property
   */
  @IsNotEmpty()
  @IsObject()
  @IsInLevel('niveles', {
    message: (args: ValidationArguments) => {
      return 'nivel is not in ' + Object.keys(args.value).toString()
    }
  })
  @IsGreaterThanZero('niveles', {
      message: 'nivel must be greater than zero'
  })
  niveles: any

  /**
   * nombre property
   */
  @IsNotEmpty()
  nombre: string
}
