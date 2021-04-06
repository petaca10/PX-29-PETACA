const sound = (prefix, botName, ownerName) => {
        return `
        ┏ 〈 Petaca BOT 〉
        ╿
        ┷┯ 〈 𝐈𝐍𝐅𝐎 𝐃𝐄𝐋 𝐁𝐎𝐓 〉
           ╽
           ┠≽ Creator : Petaca
           ┠≽ Version : 29
           ┠≽ Developer : Sammy
         
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
┷┯*〈 𝑇𝐸𝑋𝑇𝑂 𝐴 𝑉𝑂𝑍 〉*
   ╽
   ┠≽ *${prefix}tts* <language code|text>
   ┃ *Desc* : Texto a voz de Google
   ╿ *Developer: SAMMY*,
   ╰╼≽ *Creador © Petaca`
}
exports.sound = sound
