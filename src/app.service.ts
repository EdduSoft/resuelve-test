import { Injectable } from '@nestjs/common'
import { Level } from './emus/level'
import { ValidatePlayersInput } from './validation/players.input'
import { ValidateTeamsInput } from './validation/teams.input'
import { ValidateTeamInput } from './validation/team.input'
import { ValidatePlayerInput } from './validation/player.input'
import { ValidatePlayerTeam } from './validation/player.team'
import { calculateSalary } from './utils/salary'

/**
 * Class AppService
 */
@Injectable()
export class AppService {
  /**
   * Get completed salary from players
   * 
   * @param players ValidatePlayersInput
   * @author Eduardo Díaz Salazar <eddusoft@gmail.com>
   * @returns String
   */
  getSalary(players: ValidatePlayersInput): string {

    players.jugadores.map((player: ValidatePlayerInput) => {
      player.sueldo_completo = calculateSalary(
        player.goles,
        parseInt(Level[player.nivel]),
        player.bono,
        player.sueldo
      )
    })

    return JSON.stringify(players)
  }

  /**
   * Get completed salary from teams
   * 
   * @author Eduardo Díaz Salazar <eddusoft@gmail.com>
   * @param teams ValidateTeamsInput
   * @returns String
   */
  getSalaryTeams(teams: ValidateTeamsInput): string {
    teams.equipos.map((team: ValidateTeamInput) => {
      team.jugadores.map((player: ValidatePlayerTeam) => {
        player.sueldo_completo = calculateSalary(
          player.goles,
          parseInt(team.niveles[player.nivel]),
          player.bono,
          player.sueldo
        )
      })
    })
    return JSON.stringify(teams)
  }
}
