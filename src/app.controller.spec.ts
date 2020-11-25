import { Test, TestingModule } from '@nestjs/testing'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ValidatePlayersInput } from './validation/players.input'
import { TEST_PLAYERS_01, TEST_PLAYERS_01_RESULT } from './test/constants'

describe('AppController', () => {
  let app: TestingModule

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();
  })

  describe('root', () => {
    it('should return sueldo_completo = 66666.67', () => {
      const appController = app.get<AppController>(AppController)
      let players : ValidatePlayersInput = {
        jugadores: []
      }
      players.jugadores.push(TEST_PLAYERS_01)

      let result : ValidatePlayersInput = {
        jugadores: []
      }
      result.jugadores.push(TEST_PLAYERS_01_RESULT)
      expect(appController.getSalary(players).match(JSON.stringify(result)))
    })
  })
})
