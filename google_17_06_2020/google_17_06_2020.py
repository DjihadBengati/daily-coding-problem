class Node:

    def __init__(self, value):
        self.value = value
        self.both = 0

    def __str__(self):
        return str(self.value)

class XORList:
    def __init__(self):
        self.head = Node(None)
        self.tail = Node(None)

    def add(element):
        nodeToAdd = Node(element)
        if self.head.val == None:
            self.head = self.tail = nodeToAdd
        else:
            nodeToAdd.both = get_pointer(self.tail)
            self.tail.both = self.tail.both ^ get_pointer(nodeToAdd)
            self.tail = nodeToAdd

    def get(i):
        previousAddr = 0
        current = this.head
        for i in range(0,i-1):
            temp = get_pointer(current)
            current = dereference_pointer(previousAddr^current.both)
            previousAddr = temp
            if curret.both == previousAddr and i < i-2:
                print("Invalid index.")
                return None
        return current


if __name__ == "__main__":
    XORList = XORList()

    while True:
        choice = int(input("1. Add element\n2. Get element\n3. Exit").strip())
        if choice == 1:
            element = int(input("Enter the element: ").strip())
            XORList.add(element)
        elif choice == 2:
            i = int(input("Enter the index: ").strip())
            node = XORList.get(i)
            if node != None
                print(node)
        elif choice == 3:
            exit(0)
        else:
            print("Invalid choice.")