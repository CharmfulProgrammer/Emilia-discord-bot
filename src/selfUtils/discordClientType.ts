export type Client = {
    once: (eventType: string, callback?: any) => any,
    on: (eventType: string, callback?: any) => any,
    login: (token: string) => any
}