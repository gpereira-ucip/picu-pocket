#!/usr/bin/env python3
"""One-off: split the legacy single-file index.html into src/ (see build.py)."""
import re, sys, pathlib
ROOT = pathlib.Path(__file__).resolve().parent.parent
s = (ROOT / sys.argv[1]).read_text(encoding="utf-8")
(ROOT/"src/css").mkdir(parents=True, exist_ok=True); (ROOT/"src/js").mkdir(parents=True, exist_ok=True); (ROOT/"src/data").mkdir(parents=True, exist_ok=True)
names_css = ["00-base","01-burns-tweaks","02-polish","03-components","04-paro-a","05-paro-b","06-tablet","07-net"]
names_js = {0:"00-theme-boot",1:"01-decimal-input",2:"02-ios-sound",3:"03-boot-guard-a",4:"04-boot-guard-b",5:"05-data-and-app",6:"06-late-a",7:"07-late-b",8:"08-late-c",9:"09-late-d",10:"10-ui-shell",11:"11-net-tools",12:"12-i18n",13:"13-service-worker"}
out=[];pos=0;ci=0;ji=0
for m in re.finditer(r'<(style|script)>(.*?)</\1>',s,re.S):
    out.append(s[pos:m.start()]); pos=m.end()
    kind,body=m.group(1),m.group(2)
    if kind=="style":
        n=names_css[ci] if ci<len(names_css) else "%02d-extra"%ci; ci+=1
        p="src/css/%s.css"%n; (ROOT/p).write_text(body,encoding="utf-8")
        out.append("<!--@style %s-->"%p)
    else:
        n=names_js.get(ji,"%02d-extra"%ji); ji+=1
        lines=body.split("\n")
        if len(body)>1_000_000:
            # keep logic in 05-*, put giant one-line data blobs in src/data/
            d=ROOT/("src/data/%s"%n); d.mkdir(exist_ok=True)
            chunks=[];cur=[]
            for ln in lines:
                if len(ln)>200_000:
                    if cur: chunks.append(("code","\n".join(cur)));cur=[]
                    chunks.append(("data",ln))
                else: cur.append(ln)
            if cur: chunks.append(("code","\n".join(cur)))
            # chunks are joined with "\n" by build -> original joins identical
            for i,(k,c) in enumerate(chunks):
                m2=re.match(r'\s*(?:const|var|let)\s+(\w+)',c)
                tag=(m2.group(1).lower() if k=="data" and m2 else k)
                (d/("%03d-%s.js"%(i,tag))).write_text(c,encoding="utf-8")
            out.append("<!--@parts src/data/%s script-->"%n)
        else:
            p="src/js/%s.js"%n; (ROOT/p).write_text(body,encoding="utf-8")
            out.append("<!--@script %s-->"%p)
out.append(s[pos:])
(ROOT/"src/index.src.html").write_text("".join(out),encoding="utf-8")
