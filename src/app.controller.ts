import { Body, Controller, Post } from '@nestjs/common'
import { AppService } from './app.service'
import { ValidatePlayersInput } from './validation/players.input'
import { ValidateTeamsInput } from './validation/teams.input';

/**
 * Class AppController
 */
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  /**
   * Endpoint to get completed salary
   * 
   * @param players ValidatePlayersInput
   * @author Eduardo Díaz <eddusoft@gmail.com>
   * @returns String
   */
  @Post('salary')
  getSalary(@Body() players: ValidatePlayersInput): string {
    return this.appService.getSalary(players)
  }

  /**
   * Endpoint to calculate completed salary from teams
   * 
   * @param teams ValidateTeamsInput
   * @author Eduardo Díaz Salazar <eddusoft@gmail.com>
   * @returns String
   */
  @Post('salary/teams')
  getSalaryTeams(@Body() teams: ValidateTeamsInput): string {
    return this.appService.getSalaryTeams(teams)
  }
}
