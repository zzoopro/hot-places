import swaggereJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      version: "1.0.0",
      title: "핫플레이스 API document",
      description: "핫플레이스 API 문서",
    },
    basePath: "/",
    servers: [
      {
        url: "http://localhost:4000", // 요청 URL
      },
    ],
  },
  apis: ["src/routers/*.ts", "src/controllers/*.ts", "src/db/schema.ts"], //Swagger 파일 연동
};
const specs = swaggereJsdoc(options);

export { swaggerUi, specs };
