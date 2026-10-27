// See contracts.md. The role handoff supplies authoritative constraints.
const MAX_BATCH = 20;
export function buildNotification(result) {
  if (!result || result.reviewed !== true || result.released !== true) return {eligible: false, body: ''};
  return {eligible: true, body: 'An update is available in your secure portal.'};
}
export function scheduleBatches(items) {
  const batches = [];
  for (let i = 0; i < items.length; i += MAX_BATCH) batches.push(items.slice(i, i + MAX_BATCH));
  return batches;
}
