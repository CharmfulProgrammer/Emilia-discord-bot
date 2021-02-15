export type Message = {
    content: string,
    channel: {
        send: any,
    },
    author: {
        bot: boolean
    },
    mentions: {
        users: {
            first: () => any
        }
    }
};