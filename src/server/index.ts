import * as express from 'express';
import {json} from 'body-parser';

import {RegisterRoutes as v1} from './controllers/routes';
import {Swagger} from './swagger';

const app = express().use(json());

Swagger(app);

v1(app);

export default app;
