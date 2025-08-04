var handler = async (m) => {
  const frases = [
    "✨ Existen muchas copias, pero ninguna como la original.",
    "🌙 Brilla incluso en la oscuridad.",
    "🌸 Eres arte en un mundo lleno de copias.",
    "🎧 La música entiende lo que las palabras no pueden decir.",
    "💫 Sé tan fuerte que nadie dude de tu luz.",
    "🌈 No eres rara, eres edición limitada.",
    "🍃 Vive, sueña y vuela alto.",
    "🔥 Si vas a brillar, que sea por ti.",
    "👑 Tu vibra atrae tu tribu.",
    "💭 A veces el silencio dice más que mil palabras.",
    "🖤 Ser real en un mundo de falsos, es arte.",
    "☁️ No eres demasiado, solo estás en el lugar equivocado.",
    "🌟 Cree en ti y todo será posible.",
    "📸 La vida es como una cámara: enfócate, captura lo bueno y si sale mal, inténtalo otra vez."
  ];

  let frase = frases[Math.floor(Math.random() * frases.length)];
  m.reply(`📝 Frase aleatoria:\n\n"${frase}"`);
};

handler.help = ['frase'];
handler.tags = ['tools'];
handler.command = /^frase$/i;

export default handler;
