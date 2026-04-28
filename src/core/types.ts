export interface SDKConfig {
    apiKey: string;
    baseUrl?: string;
}

export interface EmitPayload {
    event: string;
    data: any;
}

export interface ConnectorMeta {
    name: string;
    version?: string;
    actions?: string[];
    triggers?: string[];
}

export interface SDKConfig {
    apiKey: string;
    baseUrl?: string;
    retries?: number;
    retryDelayMs?: number;
    debug?: boolean;
}