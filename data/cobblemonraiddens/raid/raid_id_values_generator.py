#!/usr/bin/env python3
"""
Generate value-list JSON files for raid names.

Run from the root directory.

Behavior:
- Reads all .json filenames in a target directory (default: ./target)
- Creates ./temp if it does not exist
- For each filename, creates a JSON file with the same name in ./temp
- Replaces REPLACE with the filename (without .json) in the id field

Example:
  tentacruel_radical.json ->
  {
    "replace": false,
    "values": [
      {
        "id": "cobblemonraiddens:tentacruel_radical",
        "required": false
      }
    ]
  }
"""

import json
import os

ROOT = os.getcwd()
TARGET_DIR = os.path.join(ROOT, "boss")  # change if needed
TEMP_DIR = os.path.join(ROOT, "temp")

TEMPLATE = {
    "replace": False,
    "values": [
        {
            "id": "cobblemonraiddens:REPLACE",
            "required": False
        }
    ]
}


def save_json(path, data):
    with open(path, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)


errors = []
processed = 0

if not os.path.isdir(TARGET_DIR):
    raise RuntimeError(f"Target directory not found: {TARGET_DIR}")

os.makedirs(TEMP_DIR, exist_ok=True)

for filename in os.listdir(TARGET_DIR):
    if not filename.endswith(".json"):
        continue

    name = os.path.splitext(filename)[0]

    try:
        data = TEMPLATE.copy()
        data["values"] = [
            {
                "id": f"cobblemonraiddens:{name}",
                "required": False
            }
        ]

        out_path = os.path.join(TEMP_DIR, filename)
        save_json(out_path, data)
        processed += 1

    except Exception as e:
        errors.append(f"Failed to write {filename}: {e}")

print(f"Generated {processed} files in ./temp")

if errors:
    print("\nWarnings / Errors:")
    for err in errors:
        print("-", err)
