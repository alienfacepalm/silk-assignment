# Silk assignment

### by Brandon Pliska

#### A few notes to keep in mind about this assignment

- I enjoyed this exercise quite a bit, although I didn't get to put in all of the things I would have done in a real product, I feel this is a small, but good demonstration of my skills since this was about a 7 hour project, give or take.
- I was not able to get to write many unit tests that I would have, especially for the calculations, I apologize if that's a negative.
- This was built with Nx (nx.dev) using Vite. I didn't use the `libs` directory, as I normally would if building a Storybook or NPM modules, as this project is small, but Nx does such a good job with build configurations out of the box it seemed like a good move to use it anyways.
- The SPA is in React
  - Located in `apps/dashboard/src/app`
- The backend is in NestJS and Mongo Atlas
  - Located in `apps/findings/src`
    - NOTE: I decided for this exercise gRPC or GraphQL are overkill, so I just set up basic GET endpoints
    - NOTE: code is mostly in `findings` dir
- The Mongo database has permissions that are readonly for this exercise only so the development.env file is not putting anything at risk
- I thought about adding a `docker-compose.yml` and `Dockerfile`. If you'd like I can add it
- I also thought about adding security around the API, again if you'd like that, please specify
- I considered responsiveness for mobile, but did not seem to have time for that consideration, although with tailwind it should be fairly easy to add (I'm and @emotion user mainly 😁)
- I added a `run.sh` bash script that will run the 2 apps in parallel and should make for an easy review
- I am confident I can immediately contribute with your team given the nature of the subject matter, I'm very familiar with findings and how they change frequently and I'm also aware of changing UX that can make for much easier consumption by users, since the data can be hard to understand at first. I look forward to speaking with you soon! 🤞

#### Instructions

- git clone git@github.com:alienfacepalm/silk-assignment.git
- ./run.sh
