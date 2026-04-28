import { ConnectorMeta } from './types';

export class Registry {
    private connectors: ConnectorMeta[] = [];

    register(meta: ConnectorMeta) {
        this.connectors.push(meta);
    }

    list() {
        return this.connectors;
    }
}