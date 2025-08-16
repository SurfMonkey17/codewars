function areYouPlayingBanjo(name) {
    if (name[0].toLowerCase() === "r") {
        console.log(`${name} plays banjo`)
    }
    else {
        console.log(`${name} does not play banjo`);
  }
}

areYouPlayingBanjo("Andy");
areYouPlayingBanjo("Roger");

