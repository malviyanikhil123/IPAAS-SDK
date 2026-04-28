export interface RetryOptions {
    retries?: number;
    delayMs?: number;
}

function wait(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function retry<T>(
    fn: () => Promise<T>,
    options: RetryOptions = {},
): Promise<T> {
    const retries = options.retries ?? 3;
    const delayMs = options.delayMs ?? 1000;

    let lastError: any;

    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            return await fn();
        } catch (error) {
            lastError = error;

            if (attempt < retries) {
                await wait(delayMs * attempt);
            }
        }
    }

    throw lastError;
}