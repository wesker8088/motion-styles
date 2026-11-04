# teardown attribution (MIT)

The style `teardown-sim-console` (batch b36, 2026-11-04) is based on https://github.com/elvarofficial/teardown by elvarofficial: ideas from its `SKILL.md`, and a 6-second sample rendered by us from the upstream's own `v8-film` example with the upstream's own tools (`node sims/build.mjs v8-film`, `node sims/capture.mjs v8-film --size 1280x720 --dpr 1 --fps 30 --from 2 --to 8`), using software rendering (SwiftShader) on a machine without a GPU. Style descriptions were rewritten by us.

Changes made by us: excerpt 2.0–8.0 s of the film timeline, captured at 1280×720 30 fps and encoded as H.264 with a silent AAC track (the upstream score `run_sfx.py` was not rendered).

Upstream credits: the kit, frame capture, sfx engine and review rules come from https://github.com/whaleyxbt/claude-motion (MIT, © 2026 whaleyxbt, included in the licence below). The recorded sound samples in `sfx/samples/` are CC0 1.0 from Freesound, trimmed by https://github.com/Barty-Bart/motion-graphics (MIT); sources listed in the upstream `sfx/samples/SOURCES.md`. Our sample contains no recorded sound.

---

MIT License

Copyright (c) 2026 elvarofficial
Copyright (c) 2026 whaleyxbt

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
