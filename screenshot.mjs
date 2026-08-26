import { spawnSync } from 'node:child_process';

const scratchpadShot = 'C:/Users/chjdo/AppData/Local/Temp/claude/c--Users-chjdo-Documents-TRL-Metaphors-Landing-Page/47d2d18a-716b-4246-8c29-30947c32d9f5/scratchpad/shot.mjs';
const args = process.argv.slice(2);

const result = spawnSync('node', [scratchpadShot, ...args], { stdio: 'inherit' });
process.exit(result.status ?? 0);
