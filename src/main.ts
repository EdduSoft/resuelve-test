import { Handler, Context } from 'aws-lambda'
import { Server } from 'http'
import { createServer, proxy } from 'aws-serverless-express'
import { eventContext } from 'aws-serverless-express/middleware'

import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { INestApplication, ValidationPipe } from '@nestjs/common'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

/**
 * Default binary const
 */
const binaryMimeTypes: string[] = []

/**
 * Defaul cached server var
 */
let cachedServer: Server;

process.on('unhandledRejection', (reason) => {
  console.error(reason);
});

process.on('uncaughtException', (reason) => {
  console.error(reason);
})

/**
 * Setup swagger
 * 
 * @param app INestApplication
 * @deprecated
 */
function setupSwagger(app : INestApplication) {
  const options = new DocumentBuilder()
    .setTitle('Resuelve test')
    .setDescription('API')
    .setVersion('1.0')
    .addTag('salary')
    .build();
  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('/', app, document)
}

/**
 * Bootstrap server
 */
async function bootstrapServer(): Promise<Server> {
  if (!cachedServer) {
    try {
      const expressApp = require('express')()
      const nestApp = await NestFactory.create(AppModule, expressApp)
      nestApp.useGlobalPipes(new ValidationPipe())
      nestApp.use(eventContext())
      // setupSwagger(nestApp)
      await nestApp.init()
      cachedServer = createServer(expressApp, undefined, binaryMimeTypes)
    }
    catch (error) {
      return Promise.reject(error)
    }
  }
  return Promise.resolve(cachedServer)
}

/**
 * init
 * 
 * @param event any
 * @param context Context
 */
export const handler: Handler = async (event: any, context: Context) => {
  cachedServer = await bootstrapServer()
  return proxy(cachedServer, event, context, 'PROMISE').promise
}