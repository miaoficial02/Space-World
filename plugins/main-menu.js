let handler = async (m, { conn, args }) => {
  let userId = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
  let user = global.db.data.users[userId]
  let name = conn.getName(userId)
  let _uptime = process.uptime() * 1000
  let uptime = clockString(_uptime)
  let totalreg = Object.keys(global.db.data.users).length
  let totalCommands = Object.values(global.plugins).filter((v) => v.help && v.tags).length

  const videoUrl = 'https://files.cloudkuimages.guru/videos/sbnxpL7v.mp4' // CAMBIA ESTE LINK SI QUIERES OTRO VIDEO

  let txt = `╭━━〔 🌟 𝘽𝙞𝙚𝙣𝙫𝙚𝙣𝙞𝙙𝙤 🌟 〕━╮
┃ ¡Hola @${userId.split('@')[0]}!
┃ Soy *${botname}*, tu asistente virtual.
╰━━━━━━━━━━━━━━━━━━━━╯

╭━━━〔 📊 𝙀𝙨𝙩𝙖𝙙𝙞́𝙨𝙩𝙞𝙘𝙖𝙨 〕━━━╮
┃ 🕒 Tiempo activo: *${uptime}*
┃ 👥 Usuarios registrados: *${totalreg}*
┃ 📚 Comandos disponibles: *${totalCommands}*
╰━━━━━━━━━━━━━━━━━━━━━╯

╭━━━〔 𝙄𝙣𝙛𝙤-𝘽𝙤𝙩 ☄️ 〕━━━╮
┃ 🛠️ #menu       » Lista de comandos
┃ ⏱️ #uptime     » Tiempo activo del bot
┃ 💻 #sc         » Repositorio oficial
┃ 🧠 #staff      » Desarrolladores
┃ 🧑‍💼 #creador   » Contacto del creador
┃ 📊 #status     » Estado actual del bot
┃ 🔗 #links      » Enlaces oficiales
┃ 🧾 #infobot    » Información general
┃ 📶 #ping       » Latencia de conexión
┃ 🚀 #speed      » Estadísticas de velocidad
╰━━━━━━━━━━━━━━━━━━━━╯

╭━━━〔 🧍 Registro 〕━━━╮
┃ 📝 #reg        » Registrarse
┃ ❌ #unreg      » Borrar registro
┃ 🧑‍💻 #profile   » Tu perfil
┃ 🔢 #myns       » Número de serie
╰━━━━━━━━━━━━━━━━━━╯

╭━━━〔 📥 Descargas 〕━━━╮
┃ 🎵 #play       » Música por nombre
┃ 🎧 #ytmp3      » Audio desde YouTube
┃ 🎞️ #ytmp4      » Video desde YouTube
┃ 🎬 #tiktok     » Video desde TikTok
┃ 📷 #instagram  » Media desde Instagram
┃ 📘 #facebook   » Video desde Facebook
┃ 🐦 #twitter    » Descarga desde Twitter
┃ 🎼 #spotify    » Canción desde Spotify
┃ 📂 #mediafire  » Archivos de MediaFire
┃ 📦 #mega       » Archivos de Mega
╰━━━━━━━━━━━━━━━━━━━━╯

╭━━━〔 🔍 𝘽𝙪𝙨𝙘𝙖𝙙𝙤𝙧𝙚𝙨 〕━━━╮
┃ 🌐 #google        » Buscar en Google
┃ 🖼️ #imagen        » Imágenes desde Google
┃ 📌 #pinterest     » Buscar en Pinterest
┃ 🎥 #yts           » Videos en YouTube
┃ 📦 #npmjs         » Paquetes NPM
┃ 🧬 #github        » Repositorios GitHub
┃ 🎌 #infoanime     » Info de Anime
╰━━━━━━━━━━━━━━━━━━━╯

╭━━〔 ♻️ 𝘾𝙤𝙣𝙫𝙚𝙧𝙩𝙞𝙙𝙤𝙧𝙚𝙨 〕━╮
┃ 🎶 #tomp3         » Video a MP3
┃ 🎞️ #tovideo       » Convertir a video
┃ 🔗 #tourl         » Archivo a enlace
┃ 🗣️ #tts           » Texto a voz
┃ 🌀 #togif         » Video a GIF
╰━━━━━━━━━━━━━━━━━━━╯

╭━〔 🤖 𝙄𝙣𝙩𝙚𝙡𝙞𝙜𝙚𝙣𝙘𝙞𝙖 𝘼𝙧𝙩𝙞𝙛𝙞𝙘𝙞𝙖𝙡 〕━╮
┃ 💬 #ia            » Chat con IA
┃ 🤖 #gemini        » Gemini AI
┃ 🎨 #dalle         » Generar imágenes (IA)
┃ 💡 #flux          » Imágenes Flux
┃ 😺 #simi          » Habla con SimSimi
╰━━━━━━━━━━━━━━━━━━━━━━━╯

╭━〔 🎌 𝘼𝙣𝙞𝙢𝙚 & 𝘼𝙘𝙘𝙞𝙤𝙣𝙚𝙨 〕━╮
┃ 💘 #waifu         » Imagen waifu
┃ 🤗 #hug           » Abrazo
┃ 😘 #kiss          » Beso
┃ 👋 #pat           » Acariciar
┃ 👋 #slap          » Bofetada
┃ 😠 #angry         » Enfadarse
┃ 😄 #happy         » Alegría
┃ 😢 #sad           » Tristeza
┃ ❤️ #love          » Amor
┃ 😭 #cry           » Llorar
┃ 💃 #dance         » Bailar
┃ 😴 #sleep         » Dormir
╰━━━━━━━━━━━━━━━━━━━╯

╭━━━〔 🧩 𝙎𝙩𝙞𝙘𝙠𝙚𝙧𝙨 〕━━━╮
┃ 🖼️ #sticker       » Crear sticker
┃ 🧬 #emojimix      » Fusionar emojis
┃ 💧 #wm            » Marca de agua
┃ ✏️ #take          » Renombrar sticker
╰━━━━━━━━━━━━━━━━━╯

╭━━〔 💰 𝙀𝙘𝙤𝙣𝙤𝙢í𝙖 〕━━╮
┃ 🛠️ #work        » Trabaja por ${moneda}
┃ 🎲 #suerte      » Apuesta tu ${moneda}
┃ 💣 #crime       » Realiza un crimen
┃ 🎰 #ruleta      » Juega a la ruleta
┃ 🏦 #casino      » Prueba suerte en el casino
┃ 🎰 #slot        » Slot de la fortuna
┃ 👛 #cartera     » Ver billetera
┃ 🏛️ #bank        » Ver cuenta bancaria
┃ 💳 #depositar   » Deposita ${moneda}
┃ 🏧 #retirar     » Retira del banco
┃ 🔁 #transfer    » Transferir ${moneda}/XP
┃ ⛏️ #minar       » Trabajo de minería
┃ 🛒 #buy         » Comprar con XP
┃ 📆 #daily       » Recompensa diaria
┃ 🎁 #cofre       » Cofre diario
┃ 📅 #semanal     » Regalo semanal
┃ 📆 #mensual     » Recompensa mensual
┃ 🦹 #robar       » Roba ${moneda}
┃ 🧠 #robarxp     » Roba experiencia
┃ 🏆 #baltop      » Ranking global
┃ 🧭 #aventura    » Viaje de aventura
┃ 💉 #curar       » Recupera tu salud
┃ 🐗 #cazar       » Caza animales
┃ 🎒 #inventario  » Ver inventario
┃ 🏰 #mazmorra    » Explora mazmorras
╰━━━━━━━━━━━━━━━━━━╯`

  await conn.sendMessage(m.chat, {
    video: { url: videoUrl },
    caption: txt,
    contextInfo: {
      mentionedJid: [m.sender, userId],
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: channelRD.id,
        newsletterName: channelRD.name,
        serverMessageId: -1,
      },
      forwardingScore: 999,
      externalAdReply: {
        title: botname,
        body: textbot,
        thumbnailUrl: banner,
        sourceUrl: redes,
        mediaType: 1,
        showAdAttribution: true,
        renderLargerThumbnail: true,
      },
    }
  }, { quoted: m })
}

handler.help = ['menu']
handler.tags = ['main']
handler.command = ['menu', 'menú', 'help']

export default handler

function clockString(ms) {
  let seconds = Math.floor((ms / 1000) % 60)
  let minutes = Math.floor((ms / (1000 * 60)) % 60)
  let hours = Math.floor((ms / (1000 * 60 * 60)) % 24)
  return `${hours}h ${minutes}m ${seconds}s`
}