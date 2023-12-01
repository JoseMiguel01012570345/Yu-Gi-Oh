import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DataSource } from "typeorm";

const MySQLDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "Jhosef",
  password: "Jm01012570345!",
  database: "Yu_Gi_Oh",
});

MySQLDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization: ", err);
  });

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
