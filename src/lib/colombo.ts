const TIME_ZONE = "Asia/Colombo";

// Heuristic only: 07:00–22:59 Colombo time counts as "probably awake".
const AWAKE_FROM_HOUR = 7;
const AWAKE_UNTIL_HOUR = 23;

export function colomboTime(now: Date = new Date()) {
  const time = new Intl.DateTimeFormat("en-US", {
    timeZone: TIME_ZONE,
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(now);

  const hour = Number(
    new Intl.DateTimeFormat("en-US", {
      timeZone: TIME_ZONE,
      hour: "numeric",
      hourCycle: "h23",
    }).format(now),
  );

  const awake = hour >= AWAKE_FROM_HOUR && hour < AWAKE_UNTIL_HOUR;
  return { time, awake, label: awake ? "probably awake" : "probably asleep" };
}
