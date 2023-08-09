import { envConf } from './envconf';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const mysqlOptions = envConf<TypeOrmModuleOptions>({
  development: {
    type: 'mysql',
    username: 'root',
    autoLoadEntities: true,
    synchronize: true,
    port: 7084,
    host: 'containers-us-west-139.railway.app',
    password: 'tS91dkC4aYBDzKZEM587',
    database: 'railway', // 库名
  },
  production: {
    type: 'mysql',
    username: 'root',
    autoLoadEntities: true,
    synchronize: true,
    port: 7084,
    host: 'containers-us-west-139.railway.app',
    password: 'tS91dkC4aYBDzKZEM587',
    database: 'railway', // 库名
    // host: process.env.DATABASE_HOST,
    // port: +process.env.DATABASE_POST,
    // username: process.env.DATABASE_USER,
    // password: process.env.DATABASE_PASSWORD,
    // database: process.env.DATABASE_NAME,
    // autoLoadEntities: true,
    // synchronize: false,
  },
});
