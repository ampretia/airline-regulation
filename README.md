>“Tell me and I forget, teach me and I may remember, involve me and I learn.”
>Benjamin_Franklin

Often we do a 'group QA' session to validate the quality of [Hyperledger Composer](https://hyperledger.github.io/composer/); we have [QA scripts](https://github.com/hyperledger/composer/blob/master/contrib-notes/release-process/weekly-qa-validation.md) that we follow but also this give the oppurtunity do some freestyle testing. This gives the oppurtunity to use the code for real, and also allows people to learn about parts of the product they haven't worked on recently.

This is good - but sometimes you can get staid, and just follow the same routes too mechanically. Are we really testing the code or just looking at the minor niggles too much 'really should add an extra pixel into that image'. Plus as the complexity and usage of the product grows, how many simple 'hello world' scenarios can you really write that are useful? 

This week we did something different. An internal Hackathon based on [tracking Airline parts](https://github.com/hyperledger/composer/wiki/Hackathon-Exercise---Planes-and-Parts).  This allowed us more time to get into a scenario learn some features that many of us had not worked on (or honestly forgotten about). And also to really use the code as other users will do.

## What's in this repo?
This contains the code that one of the teams (Violet team for some reason) produced. We could have done with a little more time - but as we where using the soon-to-be-released 0.9.0 codebase, there were some issues we encouneted (that are now fixed).  This was also part of the point - to learn about issues - and also re-remind ourselves how annoying this!

## How to run this?
Part of the exercise, that I personally think is particularly useful, is to actually try and see how a developer would start by tacking the development environment. 

If you wish clone this repo, and then
```
$ npm install
$ npm start
```

Hopefully that will get something working - this is based on unstable code, and I would like to make this stable to act as more of an example. 

