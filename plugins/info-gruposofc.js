const handler = async (m, { conn, usedPrefix, command }) => {
  const texto = `
🌐 𝙂𝙧𝙪𝙥𝙤𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡 𝘿𝙚 𝙁𝙚𝙣𝙧𝙮𝙨𝘽𝙤𝙩 🚀

✨ Únete a nuestra comunidad, comparte ideas, reporta errores, o simplemente charla con otros usuarios. ¡Eres bienvenido!

📂 𝙇𝙞𝙨𝙩𝙖 𝘿𝙚 𝙂𝙧𝙪𝙥𝙤𝙨 𝘿𝙤𝙣𝙙𝙚 𝙀𝙨𝙩𝙖 𝙁𝙚𝙣𝙧𝙮𝙨 𝘽𝙤𝙩
1️⃣  𝙂𝙧𝙪𝙥𝙤 𝙊𝙛𝙞𝙘𝙞𝙖𝙡 𝘿𝙚 𝙁𝙚𝙣𝙧𝙮𝙨 (𝘾𝙚𝙧𝙤 𝙎𝙪𝙗𝘽𝙤𝙩)  
https://chat.whatsapp.com/LTqtyYVc91oKdM4N0hZdko?mode=r_c

2️⃣  𝙂𝙧𝙪𝙥𝙤 𝙊𝙛𝙞𝙘𝙞𝙖𝙡 𝙎𝙪𝙗𝘽𝙤𝙩  
https://chat.whatsapp.com/FkBNSxVurdR2dX6m81qaZI?mode=r_c

3️⃣  𝙂𝙧𝙪𝙥𝙤 𝙊𝙛𝙞𝙘𝙞𝙖𝙡 𝘾𝙤𝙡𝙤𝙗𝙤𝙧𝙖𝙘𝙞𝙤𝙣 𝙒𝙖𝙜𝙪𝙧𝙞 𝙄𝘼 𝙭 𝙁𝙚𝙣𝙧𝙮𝙨𝘽𝙤𝙩  
https://chat.whatsapp.com/Fqks1pKKlRLH9UbelmeDck?mode=r_c

⚠️ Respeta las normas de cada grupo.

─
📌 Usa *.menu* para ver todos los comandos.
`

  await conn.sendMessage(m.chat, {
    text: texto.trim(),
    contextInfo: {
      externalAdReply: {
        title: "𝑭𝒆𝒏𝒓𝒚𝒔𝑩𝒐𝒕-𝑴𝑫",
        body: "*Únete a nuestros grupos oficiales*",
        thumbnailUrl: 'https://files.catbox.moe/j6ci3o.jpg', // Puedes cambiar la imagen
        sourceUrl: "https://github.com/El-brayan502/NyanCatBot-MD",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
  }, { quoted: m })
}

handler.help = ['grupos']
handler.tags = ['info']
handler.command = /^grupos$/i

export default handler