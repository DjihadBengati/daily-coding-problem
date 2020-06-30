import threading

class Scheduler:
    def __init__(self):
        print("Job Scheduler")

    def start(self, f, n):
        t = threading.Timer(n/1000, f)
        t.start()

f = lambda : print("Job done !")

job = Scheduler()
job.start(f,30)