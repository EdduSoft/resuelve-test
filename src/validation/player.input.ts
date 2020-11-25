
import { Allow, IsEnum, IsInt, IsNotEmpty, IsNumber, IsPositive } from 'class-validator'
import { Level } from '../emus/level'

/**
 * Class ValidatePlayerInput
 * 
 * Model and request validation
 * 
 * @author Eduardo Díaz Salazar <eddusoft@gmail.com>
 */
export class ValidatePlayerInput {
  /**
   * nombre property
   */
  @IsNotEmpty()
  nombre: string
  /**
   * nivel property
   */
  @IsEnum(Level)
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