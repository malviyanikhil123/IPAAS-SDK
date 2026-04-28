import { SDKError } from '../core/errors';

export function validateEvent(event: string, payload: any) {
    if (!event || typeof event !== 'string') {
        throw new SDKError('event name is required');
    }

    if (event.length > 100) {
        throw new SDKError('event name too long');
    }

    if (payload === null || payload === undefined) {
        throw new SDKError('payload is required');
    }

    if (typeof payload !== 'object') {
        throw new SDKError('payload must be object');
    }
}