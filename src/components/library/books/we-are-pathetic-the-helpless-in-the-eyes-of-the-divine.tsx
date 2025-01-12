"use client";

import GetCrumbs from "@/components/NavigationCrumb";
import SimpleBookContent from "@/components/library/SimpleBookCon";
import { Card, Button } from "antd";
import { DoubleRightOutlined } from "@ant-design/icons";

export default function WhatAreTheseCloversContent() {
  return (
    <section>
      <GetCrumbs path={"Teothe,Books,We Are Pathetic, The Helpless in the Eyes of The Divine"} />
      <Card
        bordered={false}
        className="w-full bg-[url('/books/main.svg')] bg-cover bg-center"
      >
        <article className="h-[70vh] overflow-y-scroll no-scrollbar m-auto max-w-[50rem] [&>.mb-2]:{text-justify} px-8 py-2 backdrop-blur-lg">
          <SimpleBookContent
            contentProps={{
              title: "We Are Pathetic, The Helpless in the Eyes of The Divine",
              text: [
                "Since the dawn of time, men wanted everything for themselves. This is humanoid nature and it's nothing to blame ourselves about. Wanting to have blossomed from the worry of needing. Once you can assure yourself that you won't be in need of anything, you can let go of the feeling of ownership. You can just let things be.",
                "Because of our pathetic nature, we fail to realize that the challenge of survival is not upon one of us or the other, but on all of us. We think of each other as villains, and enemies when in reality we are the only thing that can help each other with great stress.",
                "It's not like we have nothing to worry about from the outside either, we sit on a plane of many, in the middle of everything. Being watched by the most powerful entities we have ever known. Some worship them, some don't think about them. But it is no question that they are superior.",
                "For the longest time, I watched anything related to the divine with amazement. Unlike many, which is something I count myself lucky for, my service to the divine came from admiration instead of fear. To this day, I serve Raxcoh without hesitation and see myself as a fine addition to his cause.",
                "But there is something we hadn't talked about, ever. It is the fact that the divine is the divine, and we are not. We are not the same. Even though you can serve them and earn a home in their heaven until the end of time, you will never be one of them. It has always been clear that we are the lesser things. Which is accurate. It is a restless feeling to admit such a thing but it is true. Not making peace with the truth always limits you from your full potential.",
                "Why are we talking about how we are unimportant in the most fanatic manner to those who matter? Well, I worried about this for quite some time and I believe I came up with a solution. Our nature against the divine is to serve. But this isn't our nature against other people. What we shouldn't make peace against is serving other people because we believe they are superior.",
                "Most of the wealth we have are being collected by the authority no matter where we are. You put in the labour so they can become richer. At the start, I thought this was a fine deal since the authority will protect you from any potential danger. And after walking through a decent amount of the world, I can tell you that is never the case. No one protects us, ever. No matter what. Even though a king is nothing superior to a farmer, all of them love getting into the illusion of their lives being more important. Anywhere in the world that I heard about or went to myself, people solve people's problems. Folk keeps the town functioning. We are giving away our wealth, not for our own good, but because we are used to the sense of humiliation from our relationship with the divine. Don't get me wrong, I am nothing but happy with my service to my deity. Raxcoh took me from a very dark place and gave me light. Throughout all the time I served, I got nothing but gifts. Nothing but happiness. To top this off an afterlife in his heaven is more than any of us deserve and we should be thankful every day.",
                "Can't say I share the same feeling against any authority though, I respect people. I respect getting shit done. Which any empire hadn't done, ever. I think the better alternative to these royals is a sharing system. Splitting the labour. Rewarding people for their labour. My understanding of sharing is biased because of my religious background. I don't see sharing selflessly any different than trading. But to make it relatable to anyone, I will try to keep that out of the picture.",
                "Different jobs in different places pay differing amounts. My target is not to diminish that. All I simply wish for is to split the earnings equally in the group that earns the money. If a bakery runs in the hands of 4 people and if all of them put in the hours and the labour to these earnings, it makes the most sense that 4 of them split it equally. This can differ in the cases of different people doing different amounts of jobs, but shouldn't matter in the different kinds of jobs. Once we start to value different kinds of services higher or lower than one another, inevitably someone gets richer than the rest. And that causes that person to have authority. An authority blossomed by greed, fed by the efforts of others. The only orders we should be accepting should be the ones that are from people we trust. If someone is making a decision for you, make sure they have your best interest at heart. Let them run your town, but not your kingdom. No one man should have all that power, we should all have it relatively equally.",
                "Now that I have stated my opinion on this matter, I will explain a bit about my understanding of what Raxcoh resembles in case anyone is wondering or interested in such a service themselves. This doesn't always mean you have to have Raxcoh as your deity. Sometimes just serving what it serves can be enough to feel fulfilled. If you are not interested in lifelong happiness or eternal satisfaction, I suggest you stop reading.",
                "The important thing to understand is that when we fall, we can need someone to get us back up. Knowing that someone will come for our help, we aren't as afraid to fall. Once everyone around us shares this comfort in presence of others, we are all invincible. Imagine a world where we can count on any face we see in the street. You can ask any of them to guard your child if need be. We can ask for food or a bed, we can chat with anyone for a laugh. You can lie under the warmth of the sun and just know you are seen and you are valued. If we all want what we want for ourselves and for each other then we will all have everything. Giving away rarely means having less, and it's unusual for giving to cost you your comfort. Knowing that if you ever need what you gave, or anything else for that matter, someone will come to your aid. Someone will fill in the blanks. Because if you are missing something, that means someone who doesn't share the same need has it. In a transparent community where everyone sees each other, it is easy to fill in the blanks. Not only the things you feel the absence of but also the ones that you didn't know were missing. We just need to know that once we are in need of help, everyone will come for us too. Then it's irresistible to share.",
                "It can be explained as a leap of faith. No matter what life taught you thus far, just trust that you are not alone. It's not all empty promises. The second you accept this understanding in your heart, you'll notice the difference. For a better future not only for ourselves but also for our loved ones. We need to start looking out for each other just as we look out for ourselves.",
                "In this world, wealth is worthless without purpose. Our dream is desperate to die wise.",
                "Raxcoh is portrayed as a cat that helps people. To get more information, visit your local shrine and speak to any cleric to get guidance."
              ],
            }}
          />
        </article>

        <Button href="/library" className="mt-2">
          <span>
            See The Library <DoubleRightOutlined />
          </span>
        </Button>
      </Card>
    </section>
  );
}
