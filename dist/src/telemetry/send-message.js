import fetch from "node-fetch";
import config from "../../config.js";
const isTelemetryDisabled = () => {
    return process.env.TUNNELMOLE_TELEMETRY === '0';
};
const sendMessage = async function (message) {
    // Stop if telemetry is disabled
    if (isTelemetryDisabled()) {
        return;
    }
    const telemetryEndpoint = `${config.hostip.httpEndpoint}/tunnelmole-log-telemetry`;
    await fetch(telemetryEndpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(message)
    });
    return;
};
export { sendMessage };
//# sourceMappingURL=send-message.js.map