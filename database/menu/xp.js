const xp = (prefix, botName, ownerName) => {
        return `
┏ *〈 ${botName} 〉*
╿
┷┯ *〈 𝐈𝐍𝐅𝐎 𝐃𝐄𝐋 𝐁𝐎𝐓 〉*
   ╽
   ┠≽ *Prefix* : 「  ${prefix}  」
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
┷┯*〈 𝑁𝐼𝑉𝐸𝐿 〉*
   ╽
   ┠≽ *${prefix}level*
   ┃ *Desc* : Comprueba tu nivel
   ┠──────────────╼
   ┠≽ *${prefix}leveling* <1/0>
   ┃ *Desc* : Habilitar / deshabilitar funciones de nivelación
   ┠──────────────╼
   ┠≽ *${prefix}mining*
   ┃ *Desc* : XP de minería
   ┠──────────────╼
   ┠≽ *${prefix}event* <1/0>
   ┃ *Desc* : Habilitar / deshabilitar funciones de eventos
   ╿ *Petaca*,
   ╰╼≽ *Creador © Petaca`


}
exports.xp = xp
