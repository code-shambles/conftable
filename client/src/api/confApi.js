const getAllConfs = () => {
  const confs = [];

  /* mock */

  confs.push({
    name: 'World Domination Conf 2019',
    cfp: {
      start: 1541030400000, // November 1, 2018 00:00:00 GMT+00:00
      end: 1550879999000 // February 22, 2019 23:59:59 GMT+00:00
    }
  }, {
    name: 'World Domination Conf 2020',
    cfp: {
      start: 1573776000000, // November 15, 2019 00:00:00 GMT+00:00
      end: 1582243199000 // February 20, 2020 23:59:59 GMT+00:00
    }
  });

  return confs;
};