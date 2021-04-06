const limit = (prefix, botName, ownerName) => {
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
┷┯〈 𝐿𝐼𝑀𝐼𝑇𝐸 〉*
   ╽
   ┠≽ *${prefix}limit*
   ┃ *Desc* : Comprueba tu límite
   ┠──────────────╼
   ┠≽ *${prefix}bal*
   ┃ Check Tu dinero
   ┠──────────────╼
   ┠≽ *${prefix}buylimit* <count>
   ┃ *Desc* : Compra al limite
   ╿ *Developer: SAMMY*,
   ╰╼≽ *Creador © Petaca

`
}
exports.limit = limit
