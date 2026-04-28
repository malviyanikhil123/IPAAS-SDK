import { ConnectorMeta } from '../core/types';

export abstract class BaseConnector {
    abstract meta(): ConnectorMeta;
}