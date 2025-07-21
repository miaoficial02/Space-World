import PhoneNumber from 'awesome-phonenumber';

async function handler(m, { conn }) {
  const numcreador = '18493907272';
  const ownerJid = numcreador + '@s.whatsapp.net';

  const name = await conn.getName(ownerJid) || 'Owner';
  const about =
    (await conn.fetchStatus(ownerJid).catch(() => {}))?.status ||
    '𝘾𝙧𝙚𝙖𝙙𝙤𝙧 𝘿𝙚 𝙒𝙚𝙗 𝙈𝙤𝙙𝙞𝙛𝙞𝙘𝙖𝙙𝙤𝙧 𝘿𝙚 𝘽𝙤𝙩𝙨 𝙀𝙨𝙩𝙪𝙙𝙞𝙖𝙣𝙩𝙚 ';
  const empresa = '𝙎𝙚𝙧𝙫𝙞𝙘𝙞𝙤 - 𝙏𝙚𝙘𝙣𝙤𝙡𝙤𝙜𝙞𝙘𝙤 𝙎𝙤𝙗𝙧𝙚 𝘽𝙤𝙩𝙨';
  const imagen = 'https://files.catbox.moe/v2w0qd.jpg'; // Puedes cambiar esta imagen
  const correo = 'erenxz01@gmail.com';
  const instagram = 'https://instagram.com/xszydani.ofc';

  const caption = `
╭━━━〔 👤 𝙄𝙉𝙁𝙊 𝙎𝙊𝘽𝙍𝙀 𝙀𝙇 𝘾𝙍𝙀𝘼𝘿𝙊𝙍 〕━━⬣
┃ ✦ *Nombre:* ${name}
┃ ➤ *Número:* wa.me/${numcreador}
┃ ✦ *Estado:* ${about}
┃ ➤ *Empresa:* ${empresa}
┃ ✦ *Correo:* ${correo}
┃ ➤ *Instagram:* ${instagram}
╰━━━━━━━━━━━━━━━━━━━━⬣

𝙎𝙞 𝙌𝙪𝙞𝙚𝙧𝙚𝙨 𝙐𝙣 𝘽𝙤𝙩 𝙋𝙚𝙧𝙨𝙤𝙣𝙖𝙡𝙞𝙯𝙖𝙙𝙤 𝘼 𝙩𝙪 𝙂𝙪𝙨𝙩𝙤 𝙉𝙤 𝘿𝙪𝙙𝙚𝙨 𝘼 𝙀𝙨𝙘𝙧𝙞𝙗𝙞𝙧𝙢𝙚 ฅ^•ﻌ•^ฅ
`;

  await conn.sendMessage(
    m.chat,
    {
      image: { url: imagen },
      caption,
    },
    { quoted: m }
  );
}

handler.help = ['owner'];
handler.tags = ['main'];
handler.command = ['owner', 'creator', 'creador', 'dueño'];

export default handler;