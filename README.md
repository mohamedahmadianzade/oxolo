<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">Oxolo backend service for technical assessment</p>
 
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

- Implemented in NestJS
- Using PostgreSQL as databsae and TypeOrm as Orm
- Using dotenv module for configuration
- Using Prettier and eslint for formatting and error checking
- Using Migration of TypeOrm library for managing migartion process 



## Database Architecture

Database name:oxoloDB

We store and keep all the information about Text Element in the visualInfo table.
The reason for keeping information is to support Unde/Redo operation for future versions.

### visualInfo table structure :

```
public."visualInfo"
(
    id integer NOT NULL DEFAULT 'nextval('"visualInfo_id_seq"'::regclass)',
    info jsonb NOT NULL,
    CONSTRAINT "PK_f565446e00c25d60addaf8ecb6d" PRIMARY KEY (id)
)

info :
  {
    timestamp: timestamp, // The time of text changed
    position:string // '1,2' format
    text:string // Content of the text
  }
```

### logger table structure :

All error happeing in project is saved in logger table and can be accessed via logger method

```
public.logger
(
    id integer NOT NULL DEFAULT 'nextval('logger_id_seq'::regclass)',
    date timestamp without time zone NOT NULL,
    message character varying COLLATE pg_catalog."default" NOT NULL,
    error character varying COLLATE pg_catalog."default" NOT NULL,
)

```

## Service

All service methods available by call below methods:

### Logger

http://host/logger GET

### VisualInfo

http://host/info GET get the current position of text element

http://host/info POST save the latest position of text element

http://host/info/all GET Full history of text element

http://host/info/all DELETE  Delete all history of text element

Note : we keep all history of text element to provide features like redo and undo in future versions

## Installation

```bash
$ npm install
```

## Running the app

Before running the app, we need to create a database tables by running following command:

```bash
npm run migration:update
```

It will create visualInfo and logger tables in database.

Note : There should be a database with name oxoloDB in database. The migration process does not include the creation database in this version!

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

We used TypeOrm migration library to implement migration in the project. The base structure of the database is exist in migration folder so at the first running of the project, we can create the tables by running this command.

```bash
npm run migrattion:update
```

All migration config is stored in the ormconfig.ts file. The connection information for connecting to database is read from .env file

As requested in assessment, changing strucrture can be done easily by following below steps:

1- Changing the related entity in \*.entity.ts

2- npm run migrattion:generate // it will create the migration based on changes in the entity files.

3- npm run migrattion:update // it will update the database

### Migration Json structure

The type of info field is json so for adding new fields to the json structure, we can do following steps:

1- npm run migration:create // it will create new migration file in the migration directory.

2- change the up method of new created file. // It explained in next section

3- npm run migration:update // it will update the json structure of all records in visualInfo table

#### Adding new field

To add a new field to json structure of info field, we can use following command:

```bash
UPDATE public."visualInfo"
	SET info=jsonb_set(info,'{newfield}','"newValue"')
```

By set this command in Up method of migration file, newfield will be added to all records with value 'newValue'

Note - you can view the exmaple of adding and removing field in newMigration file in migration directory


### Running in Docker
For ruuning backend project on docker, which contains node and postgres,
Please run the following command :

```
docker build . -t oxoloapp
docker compose up
```

## Stay in touch

- Author - Seyed Mohamed Mahdi AhmadianZadeh
- LinkedIn - [Ahmadianzadeh](https://www.linkedin.com/in/ahmadianzadeh/)
