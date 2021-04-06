const stickermaker = (prefix, botName, ownerName) => {
	return `
   ┏ *〈 Petaca BOT 〉*
   ╿
   ┷┯ *〈 𝐈𝐍𝐅𝐎 𝐃𝐄𝐋 𝐁𝐎𝐓 〉*
      ╽
      ┠≽ *Creator* : Petaka
      ┠≽ *Version* : 29
      ┠≽ *Developer* : Sammy
    
      ╿
┯┷ *〈 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐂𝐈𝐎𝐍 〉*
╽
┠≽ *${prefix}info* (error)
┃ *Desc* : Mostrar detalles del bot
┠──────────────╼
┠≽ *${prefix}blocklist*
┃ *Desc* : Mostrar usuario bloqueado
┠──────────────╼
┠≽ *${prefix}chatlist* (error)
┃ *Desc* : Mostrar todos los usuarios de chat
┠──────────────╼
┠≽ *${prefix}ping*
┃ *Desc* : Mostrar la velocidad del bot de conexión
┠──────────────╼
┠≽ *${prefix}bugreport* <text>
┃ *Desc* : Informar de un error al propietario del bot
╿
┷┯ *〈 STICKER MAKER 〉*
   ╽
   ┠≽ *${prefix}sticker*
   ┃ *Desc* : Hacer una pegatina con imagen
   ┠──────────────╼
   ┠≽ *${prefix}stickergif*
   ┃ *Desc* : Haz una pegatina animada con Gif / Video
   ┠──────────────╼
   ┠≽ *${prefix}ttp*
   ┃ *Desc* : Texto para pegatina
   ╿ *Sammy*,
   ╰╼≽ *Creador © Petaca`
}
exports.stickermaker = stickermaker
