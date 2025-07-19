let handler = async (m, { conn }) => {
  const user = global.db.data.users[m.sender]

  // Si no está registrado
  if (!user.registered) {
    return m.reply('❌ No estás registrado.\n\nUsa *.reg Nombre Edad* para registrarte.')
  }

  const nombre = user.name || 'Desconocido'
  const edad = user.age || '???'

  // Quitar el registro
  user.registered = false
  user.name = ''
  user.age = 0
  user.regTime = -1
  user.exp = 0
  user.money = 0

  // Imagen de perfil
  let pp = 'https://files.catbox.moe/mihz6s.jpg'
  try {
    pp = await conn.profilePictureUrl(m.sender, 'image')
  } catch (e) {}

  await conn.sendMessage(m.chat, {
    text: `✦ *Tu registro fue eliminado correctamente*\n\n👤 Nombre anterior: *${nombre}*\n✎ Edad: *${edad} años*\nᰔᩚ Esperamos verte de nuevo.\n\nEscribe *.reg Nombre Edad* para registrarte otra vez.`,
    mentions: [m.sender],
    contextInfo: {
      externalAdReply: {
        title: `Registro eliminado correctamente ✦`,
        body: `Nombre: ${nombre} • Edad: ${edad} años`,
        thumbnailUrl: pp,
        mediaType: 1,
        renderLargerThumbnail: true,
        sourceUrl: pp
      }
    }
  }, { quoted: m })
}

handler.command = /^unreg$/i
handler.register = true

export default handler