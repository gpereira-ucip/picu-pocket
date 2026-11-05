#!/usr/bin/env python3
"""Arucip build: inlines src/ into the single-file index.html.

Usage: python3 tools/build.py [--check]

src/index.src.html holds the page skeleton. Each marker
    <!--@style path-->   ->  <style>…contents of path…</style>
    <!--@script path-->  ->  <script>…contents of path…</script>
    <!--@datauri path-->  ->  data: URI of an image in assets/ (used inside src="…")
    <!--@parts dir kind--> -> every file in dir (sorted by name) joined with "\n"
                              inside a single <style>/<script> block
is replaced by the real block. The output is one self-contained file so the app
still works when shared as a file (WhatsApp, Drive) and offline.
"""
import re, sys, pathlib, base64, mimetypes
ROOT = pathlib.Path(__file__).resolve().parent.parent

def rd(p):
    return (ROOT / p).read_text(encoding="utf-8")

def build():
    t = rd("src/index.src.html")
    def sub(m):
        kind, arg = m.group(1), m.group(2).strip()
        if kind == "datauri":
            mt = mimetypes.guess_type(arg)[0] or "application/octet-stream"
            return "data:%s;base64,%s" % (mt, base64.b64encode((ROOT / arg).read_bytes()).decode())
        if kind in ("style", "script"):
            return "<%s>%s</%s>" % (kind, rd(arg), kind)
        d, k = arg.split()
        files = sorted((ROOT / d).glob("*"))
        body = "\n".join(f.read_text(encoding="utf-8") for f in files)
        return "<%s>%s</%s>" % (k, body, k)
    return re.sub(r"<!--@(style|script|parts|datauri) (.*?)-->", sub, t)

if __name__ == "__main__":
    out = build()
    dst = ROOT / "index.html"
    if "--check" in sys.argv:
        sys.exit(0 if dst.read_text(encoding="utf-8") == out else "index.html is out of date: run tools/build.py")
    dst.write_text(out, encoding="utf-8")
    print("index.html: %d bytes" % len(out.encode("utf-8")))
