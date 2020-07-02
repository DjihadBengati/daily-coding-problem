def waysNumber(staircase):
    if (staircase == 0 or staircase == 1 or staircase == 2):
        return staircase

    a , b, c = 0, 1, 2

    for i in range(2, staircase):
        a = b + c
        b = c
        c = a
    return a

result = waysNumber(4)
print(result)