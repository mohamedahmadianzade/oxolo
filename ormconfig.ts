import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { VisualInfo } from './src/visualInfo/visualInfo.entity';
config();

const configService = new ConfigService();
export default new DataSource({
  type: 'postgres',
  host: configService.get('PGHOST'),
  port: configService.get('PGPORT'),
  username: configService.get('PGUSER'),
  password: configService.get('PGPASSWORD'),
  database: configService.get('PGDATABASE'),
  migrations: ['src/migration/*.ts'],
  entities: ['src/**/*.entity.ts'],
  synchronize: false,
});

// eslint-disable-next-line prettier/prettier

// npm run typeorm -- migration:generate -d .\ormconfig.ts .\src\migration\init
// npm run typeorm migration:run -- -d .\ormconfig.ts
