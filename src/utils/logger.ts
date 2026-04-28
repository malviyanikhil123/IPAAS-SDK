export class Logger {
    constructor(private enabled = true) { }

    info(message: string, meta?: any) {
        if (!this.enabled) return;

        console.log(
            JSON.stringify({
                level: 'info',
                message,
                meta,
                time: new Date().toISOString(),
            }),
        );
    }

    error(message: string, meta?: any) {
        if (!this.enabled) return;

        console.error(
            JSON.stringify({
                level: 'error',
                message,
                meta,
                time: new Date().toISOString(),
            }),
        );
    }
}