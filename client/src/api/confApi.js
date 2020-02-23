const getAllConfs = () => {
  //const confs = [];

  /* mock */

  const confs = new Promise((resolve, reject) => {
    window.setTimeout(
      function() {
        resolve({
          allById: {
            '8755fc2e-b683-4a49-94c6-77046e49fbcc': {
              id: '8755fc2e-b683-4a49-94c6-77046e49fbcc',
              name: 'World Domination Conf 2019',
              cfp: {
                start: 1541030400000, // November 1, 2018 00:00:00 GMT+00:00
                end: 1550879999000 // February 22, 2019 23:59:59 GMT+00:00
              },
              submissions: [],
              lastImport: 1554405772000 // April 4, 2019 19:22:52 GMT+00:00
            }, 
            'ca532fb4-215d-43d6-bdea-846d29e37952': {
              id: 'ca532fb4-215d-43d6-bdea-846d29e37952',
              name: 'World Domination Conf 2020',
              cfp: {
                start: 1573776000000, // November 15, 2019 00:00:00 GMT+00:00
                end: 1582243199000 // February 20, 2020 23:59:59 GMT+00:00
              },
              submissions: [],
              lastImport: 1581454869000 // Feb 11, 2020 21:01:09 GMT+00:00
            }
          },
          ids: [
            '8755fc2e-b683-4a49-94c6-77046e49fbcc',
            'ca532fb4-215d-43d6-bdea-846d29e37952'
          ],
        });
      }, Math.random() * 500);
    }
  );

  return confs;
};

export { getAllConfs };