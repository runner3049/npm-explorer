import FrontEnd from '../../assets/Front-End.svg?react';
import BackEnd from '../../assets/Back-End.svg?react';
import CLI from '../../assets/CLI.svg?react';
import Documentation from '../../assets/Documentation.svg?react';
import CSS from '../../assets/CSS.svg?react';
import Testing from '../../assets/Testing.svg?react';
import IoT from '../../assets/IoT.svg?react';
import Coverage from '../../assets/Coverage.svg?react';
import Mobile from '../../assets/Mobile.svg?react';
import Frameworks from '../../assets/Frameworks.svg?react';
import Robotics from '../../assets/Robotics.svg?react';
import Math from '../../assets/Math.svg?react';

export enum KeywordsEnum {
  'Front-End' = 'Front-End',
  'Back-End' = 'Back-End',
  CLI = 'CLI',
  Documentation = 'Documentation',
  CSS = 'CSS',
  Testing = 'Testing',
  IoT = 'IoT',
  Coverage = 'Coverage',
  Mobile = 'Mobile',
  Frameworks = 'Frameworks',
  Robotics = 'Robotics',
  Math = 'Math',
}

export type Keyword = {
  name: string;
  colors: {
    text: string;
    hover: string;
  };
  Icon: any;
};

export const KeywordConfig: Keyword[] = [
  {
    name: KeywordsEnum['Front-End'],
    colors: {
      text: 'rgb(41, 0, 138)',
      hover: 'rgba(137, 86, 255, 0.2)',
    },
    Icon: FrontEnd,
  },
  {
    name: KeywordsEnum['Back-End'],
    colors: {
      text: 'rgb(0, 97, 32)',
      hover: 'rgba(0, 198, 66, 0.2)',
    },
    Icon: BackEnd,
  },
  {
    name: KeywordsEnum.CLI,
    colors: {
      text: 'rgb(20, 106, 144)',
      hover: 'rgba(41, 171, 226, 0.2)',
    },
    Icon: CLI,
  },
  {
    name: KeywordsEnum.Documentation,
    colors: {
      text: 'rgb(126, 32, 32)',
      hover: 'rgba(203, 56, 55, 0.2)',
    },
    Icon: Documentation,
  },
  {
    name: KeywordsEnum.CSS,
    colors: {
      text: 'rgb(107, 80, 0)',
      hover: 'rgba(255, 205, 58, 0.2)',
    },
    Icon: CSS,
  },
  {
    name: KeywordsEnum.Testing,
    colors: {
      text: 'rgb(40, 11, 39)',
      hover: 'rgba(200, 54, 195, 0.2)',
    },
    Icon: Testing,
  },
  {
    name: KeywordsEnum.IoT,
    colors: {
      text: 'rgb(41, 0, 138)',
      hover: 'rgba(137, 86, 255, 0.2)',
    },
    Icon: IoT,
  },
  {
    name: KeywordsEnum.Coverage,
    colors: {
      text: 'rgb(0, 97, 32)',
      hover: 'rgba(0, 198, 66, 0.2)',
    },
    Icon: Coverage,
  },
  {
    name: KeywordsEnum.Mobile,
    colors: {
      text: 'rgb(20, 106, 144)',
      hover: 'rgba(41, 171, 226, 0.2)',
    },
    Icon: Mobile,
  },
  {
    name: KeywordsEnum.Frameworks,
    colors: {
      text: 'rgb(126, 32, 32)',
      hover: 'rgba(203, 56, 55, 0.2)',
    },
    Icon: Frameworks,
  },
  {
    name: KeywordsEnum.Robotics,
    colors: {
      text: 'rgb(107, 80, 0)',
      hover: 'rgba(255, 205, 58, 0.2)',
    },
    Icon: Robotics,
  },
  {
    name: KeywordsEnum.Math,
    colors: {
      text: 'rgb(40, 11, 39)',
      hover: 'rgba(200, 54, 195, 0.2)',
    },
    Icon: Math,
  },
];
