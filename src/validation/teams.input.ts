import { Type } from 'class-transformer'
import { ArrayMinSize, IsArray, ValidateNested } from 'class-validator'
import { ValidateTeamInput } from './team.input'

/**
 * Class ValidateTeamInput
 * 
 * Model and request validation
 * 
 * @author Eduardo Díaz Salazar <eddusoft@gmail.com>
 */

export class ValidateTeamsInput {
  /**
   * equipos property
   */
  @IsArray()
  @ValidateNested({ each: true })
  @ArrayMinSize(1)
  @Type(() => ValidateTeamInput)
  equipos: Array<ValidateTeamInput>
}
