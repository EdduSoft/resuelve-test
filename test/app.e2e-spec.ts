import { INestApplication } from '@nestjs/common'
import { Test } from '@nestjs/testing'
import { TEST_PLAYERS_02, TEST_PLAYERS_02_RESULT } from './../src/test/constants'
import * as request from 'supertest'
import { AppModule } from './../src/app.module'
import { TEST_TEAMS_01, TEST_TEAMS_01_RESULT } from '../src/test/constants'

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile()

    app = moduleFixture.createNestApplication()
    await app.init()
  });

  /**
   * Salary test
   */
  it('/salary (POST)', () => {
    return request(app.getHttpServer())
      .post('/salary')
      .send(TEST_PLAYERS_02)
      .expect(201)
      .expect(JSON.stringify(TEST_PLAYERS_02_RESULT))
  })

  /**
   * Teams salary test
   */
  it('/salary/teams (POST)', () => {
    return request(app.getHttpServer())
      .post('/salary/teams')
      .send(TEST_TEAMS_01)
      .expect(201)
      .expect(JSON.stringify(TEST_TEAMS_01_RESULT))
  })
})
