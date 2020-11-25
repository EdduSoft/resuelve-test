
/**
 * Function con calculate Salary
 * 
 * @param goals Number
 * @param level Number
 * @param bonus Number
 * @param salary Number
 */
export function calculateSalary (goals : number, level : number, bonus : number, salary : number) : number {
    return parseFloat(
        (((goals / level) * bonus) + salary).toFixed(2)
    )
}