import relativeTimePlugin from "dayjs/plugin/relativeTime";
import dayjs from "dayjs";

function fromNow(date) {
  dayjs.extend(relativeTimePlugin);
  const now = dayjs(date);
  const relativeTime = now.fromNow();
  return relativeTime.replace('months','mon');
}
export { fromNow };
