import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'babitz_master',
  connector: 'postgresql',
  url: '',
  host: 'localhost',
  port: 5432,
  user: 'monk',
  password: 'pass',
  database: 'babitz_master',
  enableDbCreation: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class BabitzMasterDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'babitz_master';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.babitz_master', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
