import { makeEntitiesFromStructures, use } from 'katejs';
import { AppUser } from 'katejs-modules';
import { structures, title, packageName } from './structure';

const AppServer = parent => class Server extends use(parent, AppUser) {
  static title = title;

  constructor(params) {
    super(params);
    makeEntitiesFromStructures(this.entities, structures);

    this.setAuthParams({ jwtSecret: this.env.jwtSecret || 'default' });
  }
};
AppServer.package = packageName;
export default AppServer;
