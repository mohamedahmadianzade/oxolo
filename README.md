<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">Oxolo backend service for technical assessment</p>
 
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

All configuration variables are stored in .env files. so for chainging the value, please refere to this file.

## Installation

```bash
$ npm install
```

## Running the app

Before running the app, we need to create a database table by running following command:

```bash
npm run migration:update
```

Note : There should be a database with name Oxolo in database. the migration process does not include the creation database in this version!

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Migration

We used TypeOrm migration library to implement migration in the project. The base structure of the database is exist in migration folder so at the first running of the project, we can create the table by running this command.

```bash
npm run migrattion:update
```

All migration config is stored in the ormconfig.ts file. The connection information for connecting to database is read from .env file 


As requested in assessment, changing strucrture can be done easily by following below steps:
1- Changing the related entity in \*.entity.ts
2- npm run migrattion:create // it will create the migration
3- npm run migrattion:update // it will update the database

## Stay in touch

- Author - Seyed Mohamed Mahdi AhmadianZadeh
- LinkedIn - [Ahmadianzadeh](https://www.linkedin.com/in/ahmadianzadeh/)
