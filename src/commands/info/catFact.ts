import fetch from "node-fetch";

export default {
  async execute(message) {
    try {
      const response = await fetch("https://some-random-api.ml/facts/cat");
      const data = await response.json();
      message.channel.send(data.fact);
    } catch {
      message.channel.send("Something went wrong, try again");
    }
  },
};
