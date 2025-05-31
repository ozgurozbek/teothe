---
title: "Codex and Voice?"
date: "2025-05-31"
description: "Developers insight at how an integrated audiobook tool could enhance the codex"
category: "Meta"
contentWarning: ""
authorName: "Teothe"
authorEra: ""
authorSpecies: ""
authorPlane: ""
authorProfession: ""
staffPick: "False"
paidContent: "False"
paidContentPartner: ""
duration: "2"
---

## We gave the Codex a voice (sort of)

When we introduced the Codex, our goal was simple. We wanted players and game masters to have easy access to some lore, characters, and history of Teothe. A place to get inspired and build better stories. That part hasn't changed.

But recently, we've been working on something new. A way to make the Codex feel even more alive.

What if you didn't just read a character's dialogue or a piece of lore? What if you could hear it? Narration part is already here, but...

We've been experimenting with a feature that turns Codex entries into radio-reading-like audio, complete with character voices, sound effects, and music. It's still early. It's not fully implemented. But the results have been exciting, and we thought it was worth sharing where we're heading.

### How it works right now

Here's a breakdown of the current process, as it stands today:

*You start with a script. This could be a Codex entry, a character scene, or a bit of lore. We run the script through ***[GPT (via OpenAI's API)](https://openai.com/index/gpt-4/)***, which parses it and figures out which lines belong to which characters. Each character is analyzed and described using a local language model. That description is used to select or generate a voice using ***[ElevenLabs](https://elevenlabs.io/)***. A narrator voice is generated for scene setting and any non-dialogue text. GPT also helps us decide where to place sound effects. These can be simple things like footsteps, wind, or a door opening. We use ***[Suno.AI](https://suno.com/)*** to generate background music. The mood of the music is based on the tone of the script. A Python script brings everything together. It assigns timing, blends voices, sound effects, and music into a single audio track.*

The end result is an audio version of the Codex entry, with characters speaking in their own voices, supported by music and atmosphere. It's like a mini radio play, made almost entirely with AI tools.

You can even ***[listen to a demo](../Codex/codex-audiobook-demo.wav)*** now!

### What this means

This isn't a public feature yet. We're still figuring out the right way to use it, how to improve the quality, and most importantly, how to make it more affordable. Right now, it's a little too expensive to scale.

But even at this stage, it adds something special. Text becomes performance. Dialogue has weight. Mood and pacing come through in ways that are hard to capture on the page. It feels like a step toward something new.

For players, this could one day mean listening to Codex entries like short podcasts, or hearing a character's voice while reading their story. For game masters, it could mean sharing audio clips in a session to set the tone or deliver exposition in a more immersive way. For us, it's another experiment in storytelling, and another way to let Teothe grow.

We're not there yet. But we're working on it.

*And as always, we love the idea.*
