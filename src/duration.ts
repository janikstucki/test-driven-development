export function formatDuration(seconds: number): string {
  let hour:number = Math.round(seconds / 3600)
  let minute:number = Math.round(seconds / 60)
  let second:number = Math.round(seconds % 60)

  if (minute => 60)
  {
    minute = minute - 60
    hour = hour + 1
  }

    return hour + "h" + minute + "m" + second + "s";




  // console.log(seconds);
  // throw new Error("not implemented yet");
}
