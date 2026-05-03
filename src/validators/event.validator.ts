import { SDKError } from '../core/errors';

export function validateEvent(payload: any) {

    if (payload === null || payload === undefined) {
        throw new SDKError('payload is required');
    }

    if (typeof payload !== 'object') {
        throw new SDKError('payload must be object');
    }
}