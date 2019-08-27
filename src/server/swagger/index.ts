import * as swaggerUi from 'swagger-ui-express';
import {Express} from 'express';

const swaggerSpecV1 = require('./v1/swagger.json');

export const Swagger = (app: Express) => {
    app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpecV1, false));
    app.get('/swagger.json', (_, res) => {
        res.json(swaggerSpecV1);
    });

    return app;
};
