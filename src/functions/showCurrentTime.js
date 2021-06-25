
const showCurrentTime = () => {
    const currentTime = new Date();
    return currentTime.toLocaleString('en-AU', 
        {dateStyle: "short", 
        timeStyle: "short"});
};

export default showCurrentTime;