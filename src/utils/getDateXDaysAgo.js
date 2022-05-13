import Moment from 'moment';
const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
];

export const getDateXDaysAgo = (numOfDays) => {
    if (numOfDays) {
        var date = new Date(numOfDays);

        var x = date.toDateString();
        var arr = x?.split(' ');

        let number = monthNames.indexOf(arr[1]) + 1;

        var result = date.toISOString().split`T`[1].split`.`[0];

        var daysAgo = Moment([arr[3], parseInt(number), arr[2]]).fromNow(true);
        return `${daysAgo} Ago - ${result}`;
    }
    //     var today = new Date();
    // var createdOn = new Date(d.created_at);
    // var msInDay = 24 * 60 * 60 * 1000;

    // createdOn.setHours(0,0,0,0);
    // today.setHours(0,0,0,0)

    // var diff = (date.getTime(today) - +createdOn)/msInDay
};
