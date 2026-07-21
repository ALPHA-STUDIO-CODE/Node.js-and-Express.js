function info(...args) {
  console.log("[info]", ...args);
}

function error(...args) {
  console.error("[error]", ...args);
}

function debug(...args) {
  if (process.env.DEBUG) console.debug("[debug]", ...args);
}

export default { info, error, debug };
