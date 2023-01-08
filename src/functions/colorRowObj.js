const PlayArea = (num) => {
  let playOptions = [];
  let playsMade = [];
  let points = 0;

  for (let i = 1; i <= num; i++) {
    playOptions.push(i);
  }

  return {
    playOptions,
    playsMade,
    points,
  };
};

export { PlayArea };
