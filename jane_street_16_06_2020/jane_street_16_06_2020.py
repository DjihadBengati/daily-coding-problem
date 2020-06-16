def cons(a, b):
    def pair(f):
        return f(a, b)
    return pair

f = lambda a, b: (a, b)

def car(pair):
    return pair(f)[0]

def cdr(pair):
    return pair(f)[1]

print(car(cons(3, 4)))
print(cdr(cons(3, 4)))