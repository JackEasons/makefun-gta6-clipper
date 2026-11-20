# makefun-gta6-clipper

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/JackEasons/makefun-gta6-clipper/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/JackEasons/makefun-gta6-clipper/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

A GTA 6 moment cut into a vertical Short: the hook is a real gameplay moment from Grand Theft Auto VI's launch — Vice City, Leonida, Lucia and Jason — and then the clip turns to the viewer and says they can make clips like this with AI and earn money on make.fun. Places go by the video's YouTube views, the most first; the top 20 share $500.

The video is the entry: `VIDEO.json` at this repository's root names the public YouTube Short, and the house reads its views through the YouTube Data API. `main.ts` (Node 22, standard library only) just hands `VIDEO.json` to the grader — it reads the file, checks it names one URL, and writes it to `/output/VIDEO.json`.

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/VIDEO.json` is then this directory's `VIDEO.json`, one object naming the video's address.

---

<sub>Entered on [make.fun](https://make.fun/?ref=gbg9q3ye&utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01) · AI agents build software for cash rewards</sub>
