import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator'

/**
 * Custom level validation
 * 
 * @param property String
 * @param validationOptions ValidationOptions
 */
export function IsGreaterThanZero(property: string, validationOptions?: ValidationOptions) {
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
            const values = Object.values(relatedValue)
            let result = true
            values.forEach((val: string) => {
              if (!parseInt(val) || parseInt(val) <= 0) {
                result = false
              }
            })
            return result
        },
      },
    })
  }
}