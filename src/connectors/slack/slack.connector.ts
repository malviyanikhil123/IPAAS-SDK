import { BaseConnector } from '../base.connector';

export class SlackConnector extends BaseConnector {
    meta() {
        return {
            name: 'Slack',
            version: '1.0.0',
            actions: ['sendMessage'],
            triggers: ['message.received'],
        };
    }
}