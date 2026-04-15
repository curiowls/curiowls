---
title: "SAPbot — help you stay focused"
description: "Designed SAPbot — a conversational AI assistant helping employees stay focused by surfacing relevant tasks and information."
date: "2017-02-27"
company: "SAP"
role: "UX Specialist"
industry: "Chatbot"
skills: ["Conversational UI", "AI Assistant", "UX Design"]
thumbnail: "/images/work/sapbot/01.png"
featured: false
order: 8
---

## SAPbot — help you stay focused

SAPbot is chatbot reinvented from Github Hubot, to “run errands” and keep you focused.

### The Context

Working on simplifying the overall tool landscape (over 80 tools) as a long-term task and designing for one of the tools call PFDB at the same time. I found out that integration is a major challenge for a smooth user journey of working day with multiple tools. The large set of tools live in silo while need to work together.

SAPbot was born from the insights I distilled along the way.

![Internal tools organized into the development process](/images/work/sapbot/01.png)
*Internal tools organized into the development process*

### Opportunities and Limitations

> Large number of internal apps are disconnected

> Internal apps need to work together throughout the development life-cycle

> Hopping among different tools to look for a value is a pain

> Some tasks users perform in secondary tools are simple and could potentially be automated

> All apps are web based — potential connect point

> We have limited development resources

### SAPbot

is not a smart bot, reinvented from GitHub Hubot that

- can be easily developed on Github (Enterprise version)
- is a set of chat bots live as an chrome extension, so user can interact with it without leaving their current working context (current web app)
- helps user to access information or accomplish simple task of the 3rd web app/service without needing to launch the app itself
- is developed on GitHub Enterprise, so the owning team of each app will be able to create and iterate their own bot
- streamline workflow
- provide transparency into multiple system status
- can grow organically by the internal GitHub community
- is a SAP tryout of ChatOPS *

### Interaction

Because SAPbot is not a smart bot but only respond to specific comments, we need to design the language that user can easily remember.

A fair and important product assumption I made is: user knows the name of the tool he/she is going to interact with. Also, with the intention to make the maintain of bot sustainable, each tool is designed to have its own designated bot, so the owning team of that web tool can take over the bot ownership at their will.

The dialog design is based on the way we designate a bot to each tool:

Basic command format recommended (Tools owner will be able to define their own command based on their specific needs and task):

> @botname what is <fieldlable> for <an identifiable object>: for fetching a value from another web tool (to connect the tools that has cross reference)

> @botname <task> <object>: for automate a task for an object (e.g. for devops. object is optional)

> @botname how to <term>: for informational bot (e.g. Playbook example below)

### Sustain and Growth

Our team is not able to design and maintain every single chatbot. We need to spread the words out and encourage the community to flesh it out. The public web pages are created with this in mind. We also feature SAPbot in the developer events we were designing at the time.

![SAPbot Homepage —introduce our Chatbot and invite the community](/images/work/sapbot/02.png)
*SAPbot Homepage —introduce our Chatbot and invite the community*

![SAPbot — About me](/images/work/sapbot/03.png)
*SAPbot — About me*

*ChatOps, I like to quote the definition from Atlassian:

> ChatOps is a collaboration model that connects people, tools, process, and automation into a transparent workflow. This flow connects the work needed, the work happening, and the work done in a persistent location staffed by the people, bots, and related tools.

### My Role

I initiated the project, wrote the product vision, designed the workflow and interaction, convinced our architect to work on it providing both product design and initial technical research (possible library to use).

I was not assigned to design a chatbot. I was assigned to simplify and streamline the development process; I was assigned to improve the usability of an isolated feature management application called PFDB; I was assigned to think about how to onboard developers to SAP GitHub Enterprise. These separate but connected topics surfaced the opportunity.

### The Status

SAPbot was developed and featured as one of the topic in our global developer event -Toolathon. One of the implementation of SAPbot won first place of the first Toolathon event. However, due to technical issue with single sign-on, the project stopped several months after launching.
