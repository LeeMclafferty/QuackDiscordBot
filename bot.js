console.log('Beep beep! 🤖')

//Require functions brings in Discord API and intents gateways.
// Discord.Client is the JS object
const Discord = require('discord.js');
/* This section is for intents, which is required for a discord bot. It is essentially the same as permissions
for a person / role in a server. GUILDS is just what discord API calls what we call 'Discord Servers' */
const client = new Discord.Client( {
    intents: [
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MEMBERS,
        Discord.Intents.FLAGS.GUILD_PRESENCES
    ]
})

/*This is the token from my bot to connect him to this code. The bot should now be
associated with the client object */
client.login('OTU5NjMyNjc5OTY2NTA3MDY5.YketlA.x2Q3_hzghdzj8PFU7p4-ls3V7Pk');

/*This is a even handler. This is when the bot comes on, but there are many such
as repsonding to messages, or reacting to button presses. 'ready' is the even,
readyDiscord is the function. When this function calls successfully you will see your bot now active in the
discord server.*/
client.on('ready', readyDiscord);

function readyDiscord() {
    console.log("I'm online! 💖");
}

/* Happens whenever there is a message in the server. I blieve 'message' is a key word for the discord 
API, but I am not sure. We use on above, so That seems to just be when the bot is active, then got 
message is the function to call when a message happens. I need to find a list of events for on()*/
client.on('messageCreate', gotMessage);

const replies = [
    '🦆',
    'I wake up at the quack of dawn',
    'Ducks cant talk, what do you want from him?',
    'I am a duck witha quackitude',
    'I am a duck that can fix anything!, just call me duck tape!',
    'As a duck and a lawyer, I have to quack every hard case wide open.',
    'Did you think I was going to say a duck pun?',
    'Im so tough, that I came out of a hard boiled egg.',
    'My friends say im a wise quacking duck!',
    'I dont play video games anymore. I always get accused of fowl play.',
    'I teach my duckings to be good ducks. I dont want them growing up to be robber duckys.',
    'My favoite firework is a fire quacker!',
    'I cannot wait for halloween! I am going to be the scariest count quackula you have ever seen.',
    'My favorite sea monster is the quacken.',
    'My favorite tv shows are Quackumentaries... and mighty ducks 3.',
    'Incoming! Duck!',
    'My biggest secret is that i get duck feet pics from the webbed.'

]

/*This is just using the msg object's content function, to see the message and not all the meta data 
that is attached to it. Then uses the function reply to reply to the message if the message matches
what we specify.*/

/**msg.channel.id allows you to paste a string in to match a channel ID so that the bot only does this
 in the one channel. To Get the Channel ID you have to turn Developer mode on in Discord Client then
 right click on a channel, and click the 'copy ID' button. took that out so it can be used in all 
 channels.*/
function gotMessage(msg) {
    if(msg.content == '!Quack' || msg.content == '!quack' /*&& msg.channel.id == '959855923545923665'*/){
        const randReply = Math.floor((Math.random() * replies.length));
        //msg.reply(replies[randReply]);
        msg.channel.send(replies[randReply]);
    }
}