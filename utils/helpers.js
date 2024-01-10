module.exports = {
    format_date: (date) => {
        return date.toLocaleDateString();
    },
    format_time: (date) => {
        return date.toLocaleTimeString();
    },
    format_datetime: (date) => {
        return date.toLocaleTimeString() + ' on ' + date.toLocaleDateString();
    },
};