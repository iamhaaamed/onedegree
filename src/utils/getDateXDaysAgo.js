export const getDateXDaysAgo = (numOfDays) => {
    if (numOfDays) {
        var date = new Date(numOfDays);
        var today = new Date();

        // var x = date.toDateString();
        // var createdOn = new Date(x);
        // var time = date.toISOString().split`T`[1].split`.`[0];
        console.log('....0', today);
        // const daysAgo = new Date(date.getTime());

        // daysAgo.setDate(date.getDate() - numOfDays);

        // daysAgo.setHours(0, 0, 0, 0);

        // return daysAgo;
    }
    //     var today = new Date();
    // var createdOn = new Date(d.created_at);
    // var msInDay = 24 * 60 * 60 * 1000;

    // createdOn.setHours(0,0,0,0);
    // today.setHours(0,0,0,0)

    // var diff = (date.getTime(today) - +createdOn)/msInDay
};
