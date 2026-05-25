import * as migration_20260525_171318 from './20260525_171318';
import * as migration_20260525_171436 from './20260525_171436';

export const migrations = [
  {
    up: migration_20260525_171318.up,
    down: migration_20260525_171318.down,
    name: '20260525_171318',
  },
  {
    up: migration_20260525_171436.up,
    down: migration_20260525_171436.down,
    name: '20260525_171436'
  },
];
