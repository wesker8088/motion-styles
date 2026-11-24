# claude-animation-skills attribution (MIT)

The styles `stick-figure-whip-reel`, `map-route-3d-city` and `hairline-dot-steps` (batch b40, 2026-11-08) are based on https://github.com/artemnovitckii/claude-animation-skills by Artem Novitckii (skills `stick-figure`, `map-route`, `minimalistic-graphics`; read at commit 5dbea55, 2026-11-01). Their 6-second samples were rendered by us with the repo's own engines, unchanged:
- `stick-figure-whip-reel`: the bundled example reel `skills/stick-figure/engine/template` ("What if pirate eye patches had nothing to do with missing eyes?", 37.4 s) rendered with `engine/tools/render.js` + the template's `audio.py`, reusing the bundled Kokoro voice take `audio/vo_kokoro.wav` (Kokoro TTS, Apache-2.0) and the bundled word timings; mux settings copied from `make.sh`. Window 3.0–9.0 s.
- `map-route-3d-city`: `skills/map-route/build.py` with the SKILL.md example spec (Iron Yard Gym, 9 min, 2.8 km, seed 7) plus `"hold": 2.0` → 6.0 s.
- `hairline-dot-steps`: `skills/minimalistic-graphics/build.py` with the SKILL.md example spec ("every step feels small." / "until you look back.", 5 steps) plus `"hold": 2.2` → 6.0 s.
All three were scaled from 1080×1920 to 720 high and padded left/right to 1280×720 (so modified); map-route and minimalistic-graphics are silent upstream and got a silent audio track. Fonts used by the kit are OFL (see the repo's `kit/fonts/OFL-*.txt`). Style descriptions rewritten by us. The repo's sixth skill `/zach-d-films` is a creator-style imitation and was not used.

The style `ps1-lowpoly-story` (batch b56, 2026-11-24) is based on the same repo's skill `low-poly` (added in commit 6374a62, 2026-11-17; read at main 86f7010). Its 6-second sample was rendered by us with the skill's own `build.py` + `template.html` (three.js 0.169.0, HyperFrames 0.8.34) from the SKILL.md example spec ("he waited every day" / "for almost 10 years", sign SHIBUYA / EBISU / HARAJUKU, snow) plus `"hold": 1.2` → 6.0 s, then scaled from 1080×1920 to 720 high and padded left/right with #2A1E14 to 1280×720 (so modified); silent upstream, a silent audio track was added. The same commit's `minecraft`, `zach-3d-films`, `kurzgesagt` and `dan-koe` skills were not used.

---

MIT License

Copyright (c) 2026 Artem Novitckii

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

The fonts in kit/fonts are under the SIL Open Font License 1.1 (see the OFL-*.txt files next to them).
