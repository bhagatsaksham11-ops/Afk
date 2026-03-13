const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'yourserver.aternos.me', // Replace with your server IP
  port: 25565,
  username: 'AFK_Bot_Op',
  version: false
})

bot.on('spawn', () => {
  console.log("Bot Joined Server!")

  // Anti AFK jump
  setInterval(() => {
    bot.setControlState('jump', true)
    setTimeout(() => bot.setControlState('jump', false), 500)
  }, 10000)

  // Random head movement
  setInterval(() => {
    bot.look(Math.random() * Math.PI * 2, 0, true)
  }, 15000)
})

bot.on('kicked', (reason) => console.log("Kicked:", reason))
bot.on('error', (err) => console.log("Error:", err))
