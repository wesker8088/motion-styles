# Bygga attribution (MIT)

The style `paper-manual-assembly-steps` (batch b46, 2026-11-14) uses ideas from this repository by the Bygga contributors (maintainer Nutlope), and a 6-second sample **rendered by this library from the upstream app itself**:

- https://github.com/Nutlope/bygga (commit a02629a, 2026-10-29): `npm install && npm run dev`, then the stage of `/build/<slug>?step=N` (three.js line-art engine in `src/engine`, plan generator in `src/lib/plan`) was captured frame by frame with headless Chromium (software WebGL) at a fixed 30 fps step. The app code was not modified; only the drawing area was cropped (no header, no brand, no UI chrome).
- Bygga is unofficial and not affiliated with IKEA. IKEA and product names are trademarks of Inter IKEA Systems B.V.; the upstream NOTICE says the MIT licence grants no rights in them. This library keeps only the visual grammar; use your own product names and parts in real work.
- The Together AI voice (Kokoro clips) and Whisper listening were not used.

We rewrote the style description ourselves from README.md, AGENTS.md and the source of `src/engine`.

Licence as stated in the upstream repository (`LICENSE`): MIT License. The MIT licence covers Bygga's own code, drawings and voice clips (upstream NOTICE).

```
MIT License

Copyright (c) 2026 Bygga contributors

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
