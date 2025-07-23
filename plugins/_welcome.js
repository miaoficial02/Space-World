//▪CÓDIGO BY PROYECT FENRYS 
//▪ECHO POR BRYAN XD

export async function before(m, { conn }) {
  if (!m.isGroup || !m.messageStubType || !m.messageStubParameters) return;

  const who = m.messageStubParameters?.[0];
  if (!who) return;
  const groupMetadata = await conn.groupMetadata(m.chat);
  const participants = m.messageStubParameters || [];
  const date = new Date();
  const fecha = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

  // Lista de 20 audios de bienvenida (puedes cambiar los enlaces)
  const bienvenidaAudios = [
    'https://files.cloudkuimages.guru/audios/MVdamiSr.mp3',
  ];

  // Lista de 20 audios de despedida (puedes cambiar los enlaces)
  const despedidaAudios = [
    'https://files.cloudkuimages.guru/audios/ozBxb1si.mp3',  
  ];

  for (const user of participants) {
    let name = await conn.getName(user);
    let pp = await conn.profilePictureUrl(user, 'image').catch(() =>
      'https://files.catbox.moe/4hpk25.jpg'
    );
    const taguser = `@${who.split("@")[0]}`;

    // BIENVENIDA
    if (m.messageStubType === 27 || m.messageStubType === 31) {
      const randomWelcome = bienvenidaAudios[Math.floor(Math.random() * bienvenidaAudios.length)];

      await conn.sendMessage(m.chat, {
        text: `➤ ¡Bienvenido ${taguser} al grupo *${groupMetadata.subject}*!\n\n✦ Nombre: *${name}*\n🆔 ID: ${user}\n📆 Fecha: ${fecha}\n\nPor favor, lee las reglas y disfruta tu estadía.`,
        mentions: [who],
        contextInfo: {
          externalAdReply: {
            title: `𝑵𝑬𝑾 𝑴𝑬𝑴𝑩𝑬𝑹`,
            body: `${name} 𝑺𝑬 𝑨 𝑼𝑵𝑰𝑫𝑶`,
            thumbnailUrl: pp,
            mediaType: 1,
            renderLargerThumbnail: true,
            sourceUrl: pp
          }
        }
      });

      await conn.sendMessage(m.chat, {
        audio: { url: randomWelcome },
        mimetype: 'audio/mpeg',
        ptt: true
      });
    }

    // DESPEDIDA
    if (m.messageStubType === 28 || m.messageStubType === 32) {
      const randomBye = despedidaAudios[Math.floor(Math.random() * despedidaAudios.length)];

      await conn.sendMessage(m.chat, {
        text: `➤ ${taguser} ha salido del grupo *${groupMetadata.subject}*.\n\n✦ Nombre: *${name}*\n🆔 ID: ${user}\n📆 Fecha: ${fecha}\n\n¡Buena suerte en tu camino!`,
        mentions: [who],
        contextInfo: {
          externalAdReply: {
            title: `𝑩𝒀𝑬 𝑴𝑬𝑴𝑩𝑬𝑹`,
            body: `${name} 𝑺𝑬 𝑺𝑨𝑳𝑰𝑶 🕊️`,
            thumbnailUrl: pp,
            mediaType: 1,
            renderLargerThumbnail: true,
            sourceUrl: pp
          }
        }
      });

      await conn.sendMessage(m.chat, {
        audio: { url: randomBye },
        mimetype: 'audio/mpeg',
        ptt: true
      });
    }
  }
}