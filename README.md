# Resuelve API

Resuelve API da solución al problema planteado por resuelve.

Este proyecto consta de 4 elementos clave:

1) API Rest Full
2) [Documentación del API](https://resuelvedoc.eddusoft.com/)
3) [Documentación del código](https://resuelvedoc.eddusoft.com/project/index.html)
4) [Repositorio](https://github.com/EdduSoft/resuelve-test)

### 1. API Rest Full
El API está desarrollada en [Serverless Framework](https://www.serverless.com/) y [NestJS Framework](https://nestjs.com/), ademas de usar docker y docker-compose para correr sin problemas el proyecto de manera local.

Se realizó el deploy de API en aws usando los siguientes servicios IAM, lambda, API Gateway, Route53, AWS Certificate.

### 2. [Documentación del API](https://resuelvedoc.eddusoft.com/)
La documentación del API se generó usando [insomnia-documenter](https://github.com/jozsefsallai/insomnia-documenter) y se realizó el respectivo deploy en aws usando los servicios de S3, Route53, AWS Certificate, CloudFront.

Dentro de la documentación se encontrarán los ambientes de desarrollo y producción.

### 3. [Documentación del código](https://resuelvedoc.eddusoft.com/project/index.html)
Fue generada con compodoc y al igual que la documentación del API se usaron los siguientes servicios de aws S3, Route53, AWS Certificate, CloudFront para realizar el deploy.

Dentro de la documentación se encontrará que el proyecto está basado en la estructura de NestJS la cual usa modulos, controladores, inyectables, validaciones de request etc.
### 4. [Repositorio](https://github.com/EdduSoft/resuelve-test)
Se usó github para subir el repositorio y quedó en el siguiente [link](https://github.com/EdduSoft/resuelve-test)


## Requisitos
Para poder correr este proyecto es necesario tener instalado [docker](https://docs.docker.com/get-docker/) y [docker-compose](https://docs.docker.com/compose/install/)

## Instalación

Una vez clonado el repo el primer paso es dar permisos de ejecución a los archivos:

```sh
install.sh
run.sh
stop.sh
test.sh
deploy.sh
```
Para esto ejecutamos el siguiente comando:

```sh
chmod +x *.sh
```
Luego tenemos que crear el archivo `.env` basado en el ejemplo `.env.example`

```sh
cp .env.example .env
```


Después ejecutamos el archivo `install.sh` y esperamos a que termine el proceso

> Una vez terminado estamos listos para iniciar el proyecto.

## Uso

### Iniciar

Corremos el archivo `run.sh`

```sh
./run.sh
```
El API debe ejecutarse en el siguiente enlace [http://localhost:3000](http://localhost:3000)

### Detener
Para detener el servicio ejecutamos el archivo `stop.sh`
```sh
./stop.sh
```

### Test
Los test corren ejecutando el siguiente archivo `test.sh`
```sh
./test.sh
```

## Deploy

### Requisitos
1) Para realizar el deploy de nuesta API tenemos que generar las credenciales en el servicio IAM de AWS y ponerlas en el archivo `.env`
>Las credenciales generadas deben tener permisos para los siguientes servicios: Lambda, API Gateway, Route53

```sh
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
```

2) Agregar certificado en AWS Certificate y configurar el dominio en el archivo `serverless.yml` en la siguiente sección:

```sh
custom:
  customDomain:
      domainName: resuelveapi.eddusoft.com
```

### Realizar deploy
Una vez relizados los pasos anteriores ejecutamos ejecutamos el archivo `deploy.sh` y esperamos a que termine el proceso
```sh
./deploy.sh
```


## Licencia de uso
[MIT](https://choosealicense.com/licenses/mit/)