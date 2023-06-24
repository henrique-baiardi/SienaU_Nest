import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { TypeOrmModuleOptions } from "@nestjs/typeorm/dist";

@Injectable()
export class PostgresConfigService implements TypeOrmOptionsFactory{
    constructor(private congifService: ConfigService) {}

    createTypeOrmOptions(connectionName?: string): TypeOrmModuleOptions {
        return {
            type:  "postgres",
            host: this.congifService.get<string>('DB_HOST'),
            port: this.congifService.get<number>('DB_PORT'),
            username: this.congifService.get<string>('DB_USER'), 
            password: this.congifService.get<string>('DB_PASSWORD'),
            database: this.congifService.get<string>('DB_NAME'),
            entities: [__dirname + '../**/*.entity{.js,.ts}'],
            synchronize: true,
        }
    }
}