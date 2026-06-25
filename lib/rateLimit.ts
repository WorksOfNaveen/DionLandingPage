type RateLimitEntry = {
  count: number;
  resetAt: number;
};

const WINDOW_MS = 15 * 60 * 1000;
const MAX_REQUESTS = 5;
const store = new Map<string, RateLimitEntry>();

export function checkRateLimit(key: string) {
  const now = Date.now();
  const current = store.get(key);

  if (!current || current.resetAt <= now) {
    store.set(key, {
      count: 1,
      resetAt: now + WINDOW_MS,
    });

    return {
      success: true,
      remaining: MAX_REQUESTS - 1,
      resetAt: now + WINDOW_MS,
    };
  }

  if (current.count >= MAX_REQUESTS) {
    return {
      success: false,
      remaining: 0,
      resetAt: current.resetAt,
    };
  }

  current.count += 1;
  store.set(key, current);

  return {
    success: true,
    remaining: MAX_REQUESTS - current.count,
    resetAt: current.resetAt,
  };
}
