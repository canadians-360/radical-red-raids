import json
import glob
import os

def process_pokemon_files():
    # Find all .json files in the current directory
    json_files = glob.glob("*.json")
    
    if not json_files:
        print("No JSON files found in the current directory.")
        return

    print(f"Processing {len(json_files)} files...")

    for file_path in json_files:
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                data = json.load(f)

            # Drill down into the pokemon dictionary
            additions = data.get("additions", {})
            pokemon = additions.get("pokemon", {})

            if pokemon:
                # --- 1. Clean Ability ---
                # Checks if "ability" exists and is a string
                ability = pokemon.get("ability")
                if isinstance(ability, str):
                    pokemon["ability"] = ability.replace(" ", "")

                # --- 2. Clean Moves ---
                # Checks if "moves" exists and is a list
                moves = pokemon.get("moves")
                if isinstance(moves, list):
                    pokemon["moves"] = [move.replace(" ", "") for move in moves]

                # --- 3. Save & Format ---
                with open(file_path, 'w', encoding='utf-8') as f:
                    # indent=4 ensures the moves list is expanded into new lines
                    json.dump(data, f, indent=4)
                
                print(f"Updated: {file_path}")
            else:
                print(f"Skipped: {file_path} (No pokemon data found)")

        except Exception as e:
            print(f"Error processing {file_path}: {e}")

    print("\nAll files processed successfully.")

if __name__ == "__main__":
    process_pokemon_files()