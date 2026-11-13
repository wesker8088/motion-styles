# vocaloid-style-mv-pipeline attribution (MIT, with carve-outs)

The style `tegaki-lyric-pv` (batch b45, 2026-11-13) uses ideas from this repository by NikusonP (https://github.com/EGSECDA/vocaloid-style-mv-pipeline, commit 1b13be4), and a 6-second sample that we rendered ourselves with the upstream engine:

- The repository's own procedural smoke-test film 「蛍火」 (HOTARUBI), built exactly as its README / `template/demo/README.md` describe in a throwaway project (`new_project.py _smoke --setup`, `demo/make_demo_song.py`, `demo/lyrics_demo.lrc` + `sections_demo.json`, `tools/analyze_audio.py`, default `engine/timeline.js`), rendered with `tools/render_frames.mjs --start 8.4 --end 14.4 --codec x264 --allow-software` (software WebGL, no GPU) at 1920×1080 30 fps, scaled to 1280×720 and encoded H.264 + AAC with the demo's synthetic 128 BPM song (seconds 8.4–14.4). No code or parameters were changed; the fingerprint matches the repository's own `docs/images/demo_16x9.mp4`.
- The film uses only the engine's procedural scenes and the JIZURA lyric layer (JIZURA by 852wa, MIT, © 2026 hakoniwa, fetched by upstream setup at commit fc16bfe); fonts are Google Fonts (SIL OFL 1.1). No generated artwork.
- Upstream README carve-out: the song 「残光」, its lyrics, the character 灯 and the MV frames in `examples/zanko/` and `docs/images/` are © 2026 NikusonP, all rights reserved and not covered by MIT. None of those 残光 materials are used here, and the repository's `docs/images/demo_16x9.mp4` itself was not redistributed (we re-rendered the demo instead).
- VOCALOID is a registered trademark of Yamaha Corporation; "Vocaloid-style" only names the fan-made MV genre.

We rewrote the style description ourselves from the README, SKILL.md and effect cookbook.

Licence as stated in the upstream repository (`LICENSE`): MIT License.

```
MIT License

Copyright (c) 2026 NikusonP

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
```
