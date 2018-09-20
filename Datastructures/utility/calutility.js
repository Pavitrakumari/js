module.exports = {
    printCalendar: function (noOfDays, frstDay) {
        var calendar = [];/**declare a empty array for calender */
        var days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];/**the days in a week */
        var week = [];
        calendar.push(days);/**push the days into the calender array */
        var dates = 1;
        for (var i = 0; i < days.length; i++)
        {
            if (i < frstDay)/**print empty spaces for the days which are there before the starting day */
                week[i] = " ";
            else 
            {
                week[i] = dates;/**assigns the dates to the week */
                dates++;/**increment the date */
            }
        }
        calendar.push(week);   /**push the week into the calender */

        while (dates <= noOfDays)/**comparing dates with the no of days in the month */
         {
            var week = [];
            for (var i = 0; i < days.length; i++)
            {
                week[i] = dates;
                dates++;
                if ((dates - 1) > (noOfDays))
                    week[i] = " ";/**if the no.of dates in a month are completed then assign the remaining dates with the empty spaces */
            }

            calendar.push(week)

        }
        this.print(calendar, days)/**function to print the calender */
    },
    /**
     * @function print() prints the calendar
     */
    print: function (calendar, days)
    {
        for (var i = 0; i < calendar.length; i++)
         {
            var str = ""
            for (var j = 0; j < calendar[i].length; j++) 
            {
                str = str + " \t " + (calendar[i])[j];

            }
            console.log(str);
        }
    }
}