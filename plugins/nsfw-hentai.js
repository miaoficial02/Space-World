//código creado por tu jefe 🐉𝙉𝙚𝙤𝙏𝙤𝙠𝙮𝙤 𝘽𝙚𝙖𝙩𝙨🐲
//para Hinata Bot deja créditos pa
//https://whatsapp.com/channel/0029Vaqe1Iv65yDAKBYr6z0A
const handler = async (m, { conn }) => {
  const url = 'https://nekobot.xyz/api/image?type=hentai';
  const res = await fetch(url).then(v => v.json());
  await conn.sendFile(m.chat, res.message, 'hentai.jpg', `🥵 *Mmm toma tu hentai pervertido...*`, m);
};
handler.command = ['hentai'];
handler.help = ['hentai'];
handler.tags = ['nsfw'];
handler.premium = false;
handler.group = false;
handler.register = true;

export default handler;
                      
