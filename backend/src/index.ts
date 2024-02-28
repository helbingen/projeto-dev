import './environment';
import './infra/sequelize/db';

import { ExpressServer } from './infra/express/express';

// import AutenticadoGuard from './application/guards/AutenticadoGuard';
// import RootUsecase from './domain/implementations/usecase/root/root/root.usecase';
// import RootController from './application/controllers/root/RootController';
// import RootEntrypoint from './application/entryPoint/root/RootEntrypoint';
// import EntryPoint from './domain/implementations/entity/entryPoint/EntryPoint';
// import JwtServices from './domain/implementations/services/Jwt.service';

// const jwtServices = new JwtServices();
// const autenticadoGuard = new AutenticadoGuard(jwtServices);

// const rootUsecase = new RootUsecase();
// const rootController = new RootController(rootUsecase);
// const rootEntrypoint = new RootEntrypoint(rootController, []);

// const entryPoints: EntryPoint[] = [rootEntrypoint];

const expressServer: ExpressServer = new ExpressServer();
// expressServer.setEntryPoints(entryPoints);

process.on('unhandledRejection', (pError) => {
  console.error('');
  console.error('############################## UnhandledRejection ##############################');
  console.error(pError);
  console.error('################################################################################');
  console.error('');
  process.exit();
});

expressServer.start();