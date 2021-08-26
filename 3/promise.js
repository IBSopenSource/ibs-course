const getNames = () => {
  return new Promise((res) => {
    setTimeout(() => {
      const names = ["Ehab", "Islam", "Andrew"];
      res(names);
    }, 2000);
  });
};

console.log(getNames());
