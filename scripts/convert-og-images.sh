#!/bin/bash

# Convert OG images from PNG to WebP and AVIF
# Requires: cwebp (from libwebp) and avifenc (from libavif)

# Check if tools are available
if ! command -v cwebp &> /dev/null; then
    echo "cwebp not found. Install with: brew install webp"
    exit 1
fi

if ! command -v avifenc &> /dev/null; then
    echo "avifenc not found. Install with: brew install libavif"
    exit 1
fi

# Directories to process
DIRS=(
    "public/og"          # root OG (start, blog OGs, etc.)
    "public/og/hubs"     # hub preview images
    "public/og/use"      # use-case OGs
    "public/og/technology" # technology OGs
    "public/og/infographics" # infographic OGs
)

CONVERTED=0
SKIPPED=0

for DIR in "${DIRS[@]}"; do
    if [ ! -d "$DIR" ]; then
        echo "Directory $DIR not found, skipping..."
        continue
    fi
    
    echo "Processing $DIR..."
    
    # Process both PNG and JPG files in this directory (non-recursive)
    for IMG in "$DIR"/*.png "$DIR"/*.jpg; do
        [ -f "$IMG" ] || continue
        
        BASENAME="${IMG%.*}"
        WEBP="${BASENAME}.webp"
        AVIF="${BASENAME}.avif"
        
        # Convert to WebP if not exists
        if [ ! -f "$WEBP" ]; then
            echo "  Converting $(basename "$IMG") -> webp"
            cwebp -q 85 "$IMG" -o "$WEBP" 2>/dev/null
            ((CONVERTED++))
        else
            ((SKIPPED++))
        fi
        
        # Convert to AVIF if not exists
        if [ ! -f "$AVIF" ]; then
            echo "  Converting $(basename "$IMG") -> avif"
            avifenc --min 20 --max 30 "$IMG" "$AVIF" 2>/dev/null
            ((CONVERTED++))
        else
            ((SKIPPED++))
        fi
    done
done

echo ""
echo "Done! Converted: $CONVERTED files, Skipped (already exist): $SKIPPED files"

