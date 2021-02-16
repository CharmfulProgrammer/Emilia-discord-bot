export type Message = {
    content: string,
    reply: any,
    guild: {
        emojis: any,

    },
    channel: {
        send: (message: any) => any,
    },
    author: {
        bot: boolean,
        displayAvatarURL: any
    },
    mentions: {
        users: {
            first: () => any,
            cache: {
                find: (find: any) => any
            }
        }
    },
    react: (reaction: string) => any
};