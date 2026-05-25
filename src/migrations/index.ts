import * as migration_20260525_190931 from './20260525_190931'
import * as migration_20260525_191111 from './20260525_191111'

export const migrations = [
  {
    up: migration_20260525_191111.up,
    down: migration_20260525_191111.down,
    name: '20260525_191111',
  },
]
