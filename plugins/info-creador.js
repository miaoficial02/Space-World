import axios from 'axios'
const { generateWAMessageContent, generateWAMessageFromContent, proto } = (await import('@whiskeysockets/baileys')).default

let handler = async (m, { conn }) => {
  const proses = '🌸 Obteniendo información de los creadores...'
  await conn.sendMessage(m.chat, { text: proses }, { quoted: m })

  async function createImage(url) {
    const { imageMessage } = await generateWAMessageContent({ image: { url } }, {
      upload: conn.waUploadToServer
    })
    return imageMessage
  }

  const owners = [
    {
      name: 'DevErenxsy',
      desc: 'Creador De GonBot 💚',
      image: 'https://files.catbox.moe/v2w0qd.jpg',
      buttons: [
        { name: 'WhatsApp', url: 'https://wa.me/18493907272' },
        { name: 'Instagram', url: 'https://www.instagram.com/xsdani_16' },
        { name: 'Facebook', url: 'https://www.facebook.com/share/18vWtmckN3/' },
        { name: 'Telegram', url: 'https://t.me/erenxszy01' },
        { name: 'TikTok', url: 'https://www.tiktok.com/@zxydaa16' },
        { name: 'PayPal', url: 'https://paypal.me/Erenxs01' }
      ]
    },
    {
      name: 'DavBrayan2',
      desc: 'Co-Creador de Roxy-MD',
      image: 'https://files.cloudkuimages.guru/images/MLrB6aiO.jpg',
      buttons: [
        { name: 'WhatsApp', url: 'https://wa.me/573001533523' },
        { name: 'Instagram', url: '' },
        { name: 'TikTok', url: '' },
        { name: 'PayPal', url: 'https://paypal.me/davidryze' }
      ]
    }
  ]

  let cards = []

  for (let owner of owners) {
    const imageMsg = await createImage(owner.image)

    let formattedButtons = owner.buttons.map(btn => ({
      name: 'cta_url',
      buttonParamsJson: JSON.stringify({
        display_text: btn.name,
        url: btn.url
      })
    }))

    cards.push({
      body: proto.Message.InteractiveMessage.Body.fromObject({
        text: `✨️ *${owner.name}*\n${owner.desc}`
      }),
      footer: proto.Message.InteractiveMessage.Footer.fromObject({
        text: '> Conoce más sobre nuestros creadores siguiendo sus redes sociales. Haz clic en cualquier botón para acceder a sus perfiles y descubrir su trabajo. Si te gustaría apoyarlos, también puedes realizar una donación a través de nuestro PayPal.'
      }),
      header: proto.Message.InteractiveMessage.Header.fromObject({
        hasMediaAttachment: true,
        imageMessage: imageMsg
      }),
      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: formattedButtons
      })
    })
  }

  const slideMessage = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.fromObject({
          body: proto.Message.InteractiveMessage.Body.create({
            text: '✨️ Creadores de Roxy-MD & NagiBot-MD ✨️'
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: 'Conoce a los desarrolladores del bot'
          }),
          carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
            cards
          })
        })
      }
    }
  }, {})

  await conn.relayMessage(m.chat, slideMessage.message, { messageId: slideMessage.key.id })
}

handler.help = ['owner']
handler.tags = ['info']
handler.command = /^(donar|owner|cuentasoficiales|creadores|cuentas)$/i

export default handler