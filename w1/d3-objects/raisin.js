function raisinAlarm(cookie) {
  for (let ingredients of cookie) {
    if (ingredients === "🍇") {
      return 'Raisin Alert!';
    }
  }
  return "All Good!";
}

// Test Code:
console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));