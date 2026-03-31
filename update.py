from subprocess import run
from datetime import time, datetime
from time import sleep

from scheduler import Scheduler

def update():
    run(['uv', 'run', 'main.py'], check=True, shell=True)
    run(['git', 'add', '.'], shell=True)
    run(['git', 'commit', '-m', f'autosave at {datetime.now().strftime('%d.%m %H:%M')}'])
    run(['git', 'push'])


update()

schedule = Scheduler()
schedule.hourly(time(0, 0), update)

while True:
    schedule.exec_jobs()
    sleep(10)