
import { Allow, IsInt, IsNotEmpty, IsNumber, IsPositive } from 'class-validator'

/**
 * Class ValidatePlayerTeam
 * 
 * Model and request validation
 * 
 * @author Eduardo Díaz <eddusoft@gmail.com>
 */
export class ValidatePlayerTeam {
  /**
   * nombre property
   */
  @IsNotEmpty()
  nombre: string
  /**
   * nivel property
   */
  @IsNotEmpty()
  nivel: string
  /**
   * goles property
   */
  @IsInt()
  @IsPositive()
  goles: number
  /**
   * sueldo property
   */
  @IsNumber()
  @IsPositive()
  sueldo: number
  /**
   * bono property
   */
  @IsNumber()
  @IsPositive()
  bono: number
  /**
   * sueldo_completo property
   */
  @Allow()
  sueldo_completo: number|null
  /**
   * equipo property
   */
  @IsNotEmpty()
  equipo: string
}