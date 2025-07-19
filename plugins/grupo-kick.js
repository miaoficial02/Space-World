var handler = async (m, { conn, participants, usedPrefix, command }) => {
    const pikachu = '✿︎';
    const sadchu = '✿︎';

    if (!m.mentionedJid[0] && !m.quoted) {
        return conn.reply(m.chat, `${pikachu} ¡! Debes mencionar a alguien para expulsarlo del grupo.`, m, rcanal);
    }

    let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender;
    const groupInfo = await conn.groupMetadata(m.chat);
    const ownerGroup = groupInfo.owner || m.chat.split`-`[0] + '@s.whatsapp.net';
    const ownerBot = global.owner[0][0] + '@s.whatsapp.net';

    if (user === conn.user.jid) {
        return conn.reply(m.chat, `${sadchu} 𝑱𝑨𝑱𝑨 𝑵𝑶 𝑷𝑼𝑬𝑫𝑶 𝑬𝑳𝑰𝑴𝑰𝑵𝑨𝑹𝑴𝑬 𝒀𝑶 𝑴𝑰𝑺𝑴𝑨 😂`, m, rcanal);
    }

    if (user === ownerGroup) {
        return conn.reply(m.chat, `${sadchu}  𝑵𝑶 𝑻𝑬 𝑴𝑬𝑻𝑨𝑺 𝑪𝑶𝑵 𝑬𝑳 𝑳𝑰𝑫𝑬𝑹 𝑫𝑬𝑳 𝑮𝑹𝑼𝑷𝑶 𝑨𝑺𝑯 😡`, m, rcanal);
    }

    if (user === ownerBot) {
        return conn.reply(m.chat, `${sadchu} 𝑬𝑺𝑬 𝑬𝑺 𝑴𝑰 𝑪𝑹𝑬𝑨𝑫𝑶𝑹 𝑵𝑶 𝑳𝑶 𝑷𝑼𝑬𝑫𝑶 𝑬𝑳𝑰𝑴𝑰𝑵𝑨𝑹 𝑵𝑼𝑵𝑪𝑨 𝑳𝑶 𝑯𝑨𝑹𝑬 💋`, m, rcanal);
    }

    await conn.groupParticipantsUpdate(m.chat, [user], 'remove');
    conn.reply(m.chat, `${pikachu}  𝑼𝑺𝑼𝑨𝑹𝑰𝑶 𝑬𝑳𝑰𝑴𝑰𝑵𝑨𝑫𝑶 𝑷𝑶𝑹 𝑺𝑼𝑪𝑰𝑶 🌸`, m, rcanal);
};

handler.help = ['kick'];
handler.tags = ['grupo'];
handler.command = ['kick','echar','hechar','sacar','ban'];
handler.admin = true;
handler.group = true;
handler.register = true;
handler.botAdmin = true;

export default handler;