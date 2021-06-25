
const showCurrentTime = () => {
    const currentTime = new Date();
    const year = currentTime.getUTCFullYear();
    const month = currentTime.getUTCMonth() + 1; // 0 represents Jan
    const day = currentTime.getUTCDate();
    const hours = currentTime.getUTCHours();
    const minutes = currentTime.getUTCMinutes();
    return `(${hours}:${minutes} UTC on ${day}/${month}/${year})`;
};

export default showCurrentTime;