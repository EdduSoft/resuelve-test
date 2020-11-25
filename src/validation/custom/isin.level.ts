import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator'
import { ValidatePlayerInput } from 'dist/src/validation/player.input'

/**
 * Custom level validation
 * 
 * @param property String
 * @param validationOptions ValidationOptions
 */
export function IsInLevel(property: string, validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isInLevel',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [property],
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
            const [relatedPropertyName] = args.constraints
            const relatedValue = (args.object as any)[relatedPropertyName]
            const keys = Object.keys(relatedValue)
            let result = true
            args.object['jugadores'].forEach((player : ValidatePlayerInput) => {
                if (!keys.includes(player.nivel)) {
                    result = false
                }
            })
            return result
        },
      },
    })
  }
}