import moment from 'moment-timezone'

const handler = async (m, { text, command, conn }) => {
  const user = m.sender
  const args = text.split(' ')
  const nombre = args[0]
  const edad = args[1]
  const fecha = moment().tz('America/Guatemala').format('DD/MM/YYYY')

  if (!nombre || !edad) {
    return conn.reply(m.chat, `*👀 ¿CÓMO DESEA REGISTRARSE?*\n\n📑 *REGISTRO RÁPIDO*\n• Insignia de verificación\n• Desbloquear comandos que requieran registro\n\n*Escriba para el registro rápido:*\n#reg1 nombre edad\n\n🗂️ *REGISTRO COMPLETO*\n• Insignia de verificación\n• Desbloquear comandos que requieran registro\n• Premium Temporal Gratis\n• Más opciones para este registro\n\n*Escriba para el registro completo:*\n#nombre\n\n\`\`\`⭐ Considere que tendrá un tiempo para completar en caso de registrarse\`\`\``, m, fake)
  }

  // Registrar usuario en la base de datos
  const data = global.db.data.users[user] || {}
  data.registered = true
  data.name = nombre
  data.age = edad
  data.premium = true
  data.regTime = Date.now()

  // Enviar mensaje de confirmación tipo "ver canal"
  const mensaje = `✅ *REGISTRO EXITOSO, MAESTRO*\n\n👤 *Nombre:* ${nombre}\n✦ *Edad:* ${edad} años\n📆 *Registrado el:* ${fecha}\n\n✎ *Ya puedes usar los comandos premium.* > usa .menú para ver la lista de comando ᰔᩚ`

  return conn.reply(m.chat, mensaje, m, {
    contextInfo: {
      externalAdReply: {
        title: '✅ Registro Completado',
        body: 'Ahora puedes usar todos los comandos',
        mediaType: 1,
        thumbnailUrl: 'https://files.catbox.moe/et599q.jpg',
        renderLargerThumbnail: true,
        sourceUrl: 'https://github.com/El-brayan502/Roxy-MD--Multi-Device'
      }
    }
  })
}

handler.command = /^(verificar|reg)$/i
handler.help = ['verificar', 'reg']
handler.tags = ['main']
handler.register = false
export default handler