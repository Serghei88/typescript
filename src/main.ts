export class Startup {
  public static main(): number {
    console.log("Hello World");
    return 0;
  }
}
export class TimeDuration
{
    
    public transform(seconds :number): string {
        var hours = (seconds / 3600) >> 0; 
        var minutes =  ((seconds - (hours * 3600)) / 60) >> 0;
        var remaining_seconds = seconds - (hours * 3600) - (minutes * 60)

        var hoursPart = hours > 0 ? hours.toString() + " hour" : "";
        if (hours>1) hoursPart +="s";

        var minutesPart = minutes > 0 ? minutes.toString() + " minute" : "";
        if (minutes>1) minutesPart +="s";

        var secondsPart = remaining_seconds > 0 ? remaining_seconds.toString() + " second" : "";
        if (remaining_seconds>1) secondsPart +="s";

        return hoursPart + (hours > 0 && minutes > 0 ? ", " : "") + 
            minutesPart + (minutes > 0 && remaining_seconds > 0 ? ' and ' : "") + secondsPart;
    }
}
var test = new  TimeDuration();
console.log(test.transform(1))

export default TimeDuration;
