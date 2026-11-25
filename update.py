from subprocess import run, PIPE
from datetime import timedelta, datetime
from time import sleep
from sys import argv

from scheduler import Scheduler

def update():
    run(['uv', 'run', 'main.py'], check=True)
    # main.py stops early when the site's file hashes did not change; commit only real changes
    if not run(['git', 'status', '--porcelain'], stdout=PIPE, text=True).stdout.strip():
        print('nothing to commit')
        return
    run(['git', 'a'])
    run(['git', 'c', f'autosave at {datetime.now().strftime('%d.%m %H:%M')}'])
    run(['git', 'p'])

if '-s' in argv:
    update()

schedule = Scheduler()
schedule.cyclic(timedelta(hours=2), update)

while True:
    schedule.exec_jobs()
    sleep(10)
