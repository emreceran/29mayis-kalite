#!/usr/bin/env bash
# Kuruma teslim edilecek statik site paketini uretir.
# Kullanim: bash tools/paket-olustur.sh [hedef-klasor]
set -euo pipefail
cd "$(dirname "$0")/.."

HEDEF="${1:-teslim/$(date +%Y-%m-%d)-kuruma}"
AD="kalite-sitesi-$(date +%Y-%m-%d)"
TMP="$(mktemp -d)"
PAK="$TMP/$AD"

mkdir -p "$PAK/site/data"
cp index.html                        "$PAK/site/"
cp data/site.json data/dashboard.json "$PAK/site/data/"
cp -r dashboard assets               "$PAK/site/"
cp teslim/OKUYUN.txt                 "$PAK/OKUYUN.txt"

mkdir -p "$HEDEF"
rm -f "$HEDEF/ek1-$AD.zip"   # zip mevcut arsive ekler; once temizle
( cd "$TMP" && zip -qr "$OLDPWD/$HEDEF/ek1-$AD.zip" "$AD" )
rm -rf "$TMP"

echo "✓ $HEDEF/ek1-$AD.zip"
du -h "$HEDEF/ek1-$AD.zip" | cut -f1
