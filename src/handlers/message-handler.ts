import { Message } from "discord.js";

/**
 * Simple message event handler that checks if a message was sent by a bot.
 * It also checks two simple commands and sends a default message
 * if neither conditions were met.
 * @param message Message
 */
export const messageHandler = async (message: Message) => {
  if (message.author.bot) {
    throw "Message sent by a bot.";
  }
  if (message.content === "!hello") {
    message.channel.send("Hello, World!");
  } else if (message.content === "!help") {
    message.channel.send("Help Command");
  } else {
    message.channel.send("Command not found.");
  }
};

