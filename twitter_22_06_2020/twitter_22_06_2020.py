def find(imput, values):
    return list(filter(lambda x: (x.lower().startswith(imput.lower())), values))

print(find("de", ["dog", "deer", "deal"]))