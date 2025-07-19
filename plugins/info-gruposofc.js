const handler = async (m, { conn, usedPrefix, command }) => {
  const texto = `
🌐 *Grupos Oficiales de FenrysBot* 🚀

✨ Únete a nuestra comunidad, comparte ideas, reporta errores, o simplemente charla con otros usuarios. ¡Eres bienvenido!

🤍 *Lista de grupos:*
1️⃣  *Grupo Oficial💮✨*  
https://chat.whatsapp.com/LTqtyYVc91oKdM4N0hZdko?mode=r_c

2️⃣  *Grupo Solo Sub-bot🤖✨*  
https://chat.whatsapp.com/FkBNSxVurdR2dX6m81qaZI?mode=r_c

3️⃣  *Grupo De Coloboracion🌸✨*  
https://chat.whatsapp.com/Fqks1pKKlRLH9UbelmeDck?mode=r_c

⚠️ Respeta las normas de cada grupo.

─
> Usa *.menu* para ver todos los comandos.
  await conn.sendMessage(m.chat, {
    text: texto.trim(),
    contextInfo: {
      externalAdReply: {
        title: "FenrysBot 🌸✨",
        body: "Únete a nuestros grupos oficiales",
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