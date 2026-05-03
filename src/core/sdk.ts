import { SDKConfig } from './types';
import { APIClient } from './client';
import { retry } from './retry';
import { validateEvent } from '../validators/event.validator';
import { Logger } from '../utils/logger';

export class IpaasSDK {
    private client: APIClient;
    private logger: Logger;

    constructor(private config: SDKConfig) {
        this.client = new APIClient(
            config.baseUrl || 'https://api.myipaas.com',
            config.apiKey,
        );

        this.logger = new Logger(config.debug ?? true);
    }

    async emit(payload: any) {
        validateEvent(payload);

        try {
            const result = await retry(
                () =>
                    this.client.send('/execute', {
                        entity: this.config.entity,
                        entity_type: this.config.entity_type,
                        payload,
                    }),
                    
                {
                    retries: this.config.retries ?? 3,
                    delayMs: this.config.retryDelayMs ?? 1000,
                },
            );

            return result;
        } catch (error: any) {
            this.logger.error('event failed', {
                error: error.message,
            });

            throw error;
        }
    }
}