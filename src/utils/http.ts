export async function post(url: string, body: any, headers: any = {}) {
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            ...headers,
        },
        body: JSON.stringify(body),
    });

    if (!res.ok) {
        throw new Error(`HTTP Error ${res.status}`);
    }

    return res.json();
}