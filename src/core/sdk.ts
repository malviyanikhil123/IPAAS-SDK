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

    async emit(event: string, payload: any) {
        validateEvent(event, payload);

        this.logger.info('sending event', { event });

        try {
            const result = await retry(
                () =>
                    this.client.send('/sdk/events', {
                        event,
                        payload,
                    }),
                {
                    retries: this.config.retries ?? 3,
                    delayMs: this.config.retryDelayMs ?? 1000,
                },
            );

            this.logger.info('event sent', { event });

            return result;
        } catch (error: any) {
            this.logger.error('event failed', {
                event,
                error: error.message,
            });

            throw error;
        }
    }
}