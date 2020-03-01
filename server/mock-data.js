/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable camelcase */
const fs = require('fs');
const humanNames = require('human-names');
const countriesAndCities = require('all-countries-and-cities-json');
const { loremIpsum } = require('lorem-ipsum');

const awesomeAttrs = [
  'Popular',
  'Famous',
  'Glorious',
  'Super',
  'Mega',
  'Hyper',
  'Ultra',
  'Leading',
  'Advanced',
  'Celeb',
  'Shining',
  '10X',
  'Hardcore',
];
const lastNameSuffixes = [
  'guru',
  'genious',
  'nerd',
  'expert',
  'head',
  'geek',
  'face',
  'mentor',
  'teacher',
  'sensei',
  'overlord',
  'hero',
  'god',
  'rockstar',
  'hacker',
  'brain',
  'pro',
];
const companySuffixes = [
  'Agency',
  'Company',
  'Consulting',
  'Solutions',
  'Technology',
  'Development',
  '& Co.',
  'Bros.',
];
const talkTags = [
  'JavaScript',
  'Web',
  'Hack',
  'Frontend',
  'UX',
  'TypeScript',
  'Design',
  'DevOps',
  'Backend',
  'Database',
  'React',
  'Vue.js',
  'Angular',
  'Programming',
  'Framework',
  'Livecoding',
  'Warstory',
  'CSS',
  'HTML',
];

const conf1 = {
  name: 'World Domination Conf 2019',
  cfp: {
    start: 1541030400000, // November 1, 2018 00:00:00 GMT+00:00
    end: 1550879999000, // February 22, 2019 23:59:59 GMT+00:00
  },
  origin_link: 'https://mock-cfp-platform.example.com/event/101',
};
const conf2 = {
  name: 'World Domination Conf 2020',
  cfp: {
    start: 1573776000000, // November 15, 2019 00:00:00 GMT+00:00
    end: 1582243199000, // February 20, 2020 23:59:59 GMT+00:00
  },
  origin_link: 'https://mock-cfp-platform.example.com/event/1337',
};

const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getRandoms = (arr, num) => {
  let used = 0;
  const randoms = [];

  while (used < num) {
    const newRandom = getRandom(arr);
    if (randoms.indexOf(newRandom) === -1) {
      randoms.push(newRandom);
      used += 1;
    }
  }

  return randoms;
};

const getRandomTS = (startTS, endTS) => new Date(startTS + Math.random() * (endTS - startTS));

const mockSpeakerName = () => `${humanNames.allRandom()} ${
  getRandom(awesomeAttrs)
}${getRandom(lastNameSuffixes)}`;

const mockSpeakerLocation = () => {
  const country = getRandom(Object.keys(countriesAndCities));
  const city = getRandom(countriesAndCities[country]);

  return `${city}, ${country}`;
};

const mockSpeaker = () => {
  const name = mockSpeakerName();
  const email = `${name.replace(' ', '-')}@example.com`;
  const location = mockSpeakerLocation();
  const twitter = `${name.replace(' ', '_')}_${Math.floor(Math.random() * 10000)}`;
  const url = `https://${twitter}.example.com`;
  const organization = `${getRandom(awesomeAttrs)}${getRandom(awesomeAttrs)} ${getRandom(companySuffixes)}`;

  return {
    name,
    email,
    location,
    twitter,
    url,
    organization,
  };
};

const mockTalk = (conf, i) => {
  const title = `${getRandom(awesomeAttrs)} Talk [${i}]`;
  const abstract = `Abstract [${i}]:\r\n ${loremIpsum({ count: 15 })}`;
  const description = `Description [${i}]:\r\n ${loremIpsum({ count: 30 })}`;
  const notes = `Notes [${i}]:\r\n ${loremIpsum({ count: 20 })}`;
  const additional_info = `Additional info [${i}]:\r\n ${loremIpsum({ count: 10 })}`;
  const talk_format = 'Talk (30 - 35 minutes)';
  const audience_level = 'All';
  const rating = Math.ceil(Math.random() * 1000) / 10;
  const state = getRandom(['submitted', 'accepted', 'rejected', 'waitlist']);
  const tags = getRandoms(talkTags, Math.round(Math.random() * 10));
  const created_at = (new Date(getRandomTS(conf.cfp.start, conf.cfp.end))).toISOString();

  return {
    title,
    abstract,
    description,
    notes,
    additional_info,
    talk_format,
    audience_level,
    rating,
    state,
    tags,
    created_at,
  };
};

const mockImportJson = (conf, numSubmissions) => {
  const importJson = [];

  for (let i = 0; i < numSubmissions; i += 1) {
    importJson.push({
      ...mockSpeaker(),
      ...mockTalk(conf, i),
    });
  }

  return importJson;
};

const writeMockFile = (conf) => {
  const tmpPath = './tmp';
  const filePath = `${tmpPath}/${conf.name.split(' ').join('-')}.json`;
  if (!fs.existsSync(tmpPath)) {
    fs.mkdir(tmpPath, () => {});
  }
  fs.writeFile(filePath, JSON.stringify(mockImportJson(conf, 85)), (err) => {
    if (err) {
      return console.log(err);
    }
    return console.info(`Successfully created ${filePath}`);
  });
};

writeMockFile(conf1);
writeMockFile(conf2);
