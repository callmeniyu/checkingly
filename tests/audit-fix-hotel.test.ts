import assert from 'node:assert/strict'
import test from 'node:test'

import { assertCheckInOnOpenBusinessDate } from '../features/keystone/lib/hotelBusinessTime'

test('an arrival after the open business date asks for the night audit; a late arrival keeps the old refusal', () => {
  assert.doesNotThrow(() => assertCheckInOnOpenBusinessDate('2026-11-15', '2026-11-15'))
  assert.throws(() => assertCheckInOnOpenBusinessDate('2026-11-16', '2026-11-15'), /Run the night audit/)
  assert.throws(() => assertCheckInOnOpenBusinessDate('2026-11-14', '2026-11-15'), /arrival business date/)
})
