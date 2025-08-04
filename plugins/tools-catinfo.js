//Código creado por Mía, Github: https://github.com/miaoficial02

import fetch from 'node-fetch';

var handler = async (m, { conn }) => {
  const curiosidades = [
    '🐱 Los gatos pueden hacer más de 100 sonidos diferentes.',
    '🐾 El ronroneo de un gato puede ayudar a sanar tejidos y huesos.',
    '😺 Los gatos duermen entre 13 y 16 horas al día.',
    '🌙 Los gatos tienen mejor visión nocturna que los humanos.',
    '💖 Cada huella de gato es tan única como una huella digital.'
  ];

  const dato = curiosidades[Math.floor(Math.random() * curiosidades.length)];

  const url = 'https://cataas.com/cat/says/Hello?width=400&height=300&fontSize=30'; // Imagen de gato personalizada
  const res = await fetch(url);
  const buffer = await res.buffer();

  await conn.sendMessage(m.chat, {
    image: buffer,
    caption: `🌟 *Dato gatuno de CatBot* 🌟\n\n${dato}\n\n🐾 by: *CatBot-MD*`
  }, { quoted: m });
};

handler.help = ['catinfo'];
handler.tags = ['tools'];
handler.command = ['catinfo', 'datochat'];
export default handler;
