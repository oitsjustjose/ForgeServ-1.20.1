import os
import json


def prettify(ugly: str) -> str:
    if ":" in ugly:
        ugly = ugly[ugly.index(":") + 1 :]
    return " ".join(map(lambda x: x[0].upper() + x[1:], ugly.split("_")))


def get_text_for_ingr(ingr) -> str:
    # Case for Fluids:
    if "fluid" in ingr:
        nm = prettify(ingr["fluid"])
        if "holder" in ingr:
            holder = prettify(ingr["holder"])
            return f"{nm} in a {holder}"
    elif "item" in ingr or "tag" in ingr:
        # Case for Items:
        key = "item" if "item" in ingr else "tag"
        nm = prettify(ingr[key])
        if "count" in ingr:
            return f"{ingr['count']}x {nm}"
        return nm
    else:
        print(f"Unknown ingredient: {ingr}")
        return None


def get_outputs(recipe, fn) -> str:
    def item_of(result: dict) -> str:
        if "item" not in result:
            print(fn)
            return "Item.of('ERROR')"
        item = result["item"]
        nbt = None
        count = 1
        if "nbt" in result:
            nbt = result["nbt"]
        if "count" in result:
            count = result["count"]

        return (
            f"Item.of('{item}', {count}).withNBT({nbt})"
            if nbt
            else f"Item.of('{item}', {count})" if count > 1 else f"Item.of('{item}')"
        )

    results = []
    if "results" in recipe:
        for result in recipe["results"]:
            res = item_of(result)
            results.append(res)
    elif "result" in recipe:
        res = item_of(recipe["result"])
        results.append(res)
    else:
        print(f"Unknown result for : {recipe}")
        return None

    if not results:
        return None

    return f"Ingredient.of([{','.join(results)}])"


data_dir = "../techreborn_data"

ADD_ME = []

for root, _, files in os.walk(data_dir):
    if root == data_dir:
        continue

    machine_name = prettify(root.replace(f"{data_dir}\\", ""))
    if machine_name == "Scrapbox\\auto" or machine_name == "Rolling Machine":
        continue

    for file in files:
        with open(f"{root}/{file}", "r", encoding="utf-8") as fh:
            data = json.loads(fh.read())

        ingredient_texts = []

        if "ingredient" in data:
            txt = get_text_for_ingr(ingr)
            if txt is not None:
                ingredient_texts.append(txt)
        elif "ingredients" in data:
            for ingr in data["ingredients"]:
                txt = get_text_for_ingr(ingr)
                if txt is not None:
                    ingredient_texts.append(txt)
        else:
            print(f"Found neither 'ingredient' nor 'ingredients' in {root}/{file}")

        ingredient_text = ", ".join(ingredient_texts)
        info_text = f"Created in {machine_name} using {ingredient_text}"

        outputs = get_outputs(data, f"{root}/{file}")

        ADD_ME.append(f"event.addItem({outputs}, Text.black('{info_text}'));")

with open("./out.txt", "w") as fh:
    fh.write("\n".join(ADD_ME))
