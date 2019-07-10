import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Bus } from './bus';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const buses = [
      {
        id: '4',
        timing: '06:00 AM',
        bus: 'SARAVANA',
        direction: 'SOUTH',
        icon: 'saravana.jpg'
      },
      {
        id: '5',
        timing: '07:15 AM',
        bus: 'CITY',
        direction: 'SOUTH',
        icon: 'city.jpg'
      },
      {
        id: '6',
        timing: '07:15 AM',
        bus: 'SRRBS',
        direction: 'WEST',
        icon: 'logo.png'
      },
      {
        id: '7',
        timing: '05:00 AM',
        bus: 'SAKTHIMURUGAN',
        direction: 'SOUTH',
        icon: 'logo.png'
      },
      {
        id: '8',
        timing: '06:00 AM',
        bus: 'K1',
        direction: 'SOUTH',
        icon: 'c5.jpg'
      },
      {
        id: '9',
        timing: '06:30 AM',
        bus: 'C1',
        direction: 'SOUTH',
        icon: 'c5.jpg'
      },
      {
        id: '10',
        timing: '06:55 AM',
        bus: 'SRL',
        direction: 'SOUTH',
        icon: 'sangeetha.jpg'
      },
      {
        id: '11',
        timing: '07:15 AM',
        bus: 'RVR',
        direction: 'SOUTH',
        icon: 'city.jpg'
      },
      {
        id: '12',
        timing: '07:25 AM',
        bus: 'LSS',
        direction: 'SOUTH',
        icon: 'logo.png'
      },
      {
        id: '13',
        timing: '07:30 AM',
        bus: 'RBS',
        direction: 'SOUTH',
        icon: 'logo.png'
      },
      {
        id: '14',
        timing: '07:40 AM',
        bus: 'PSG (TOWN)',
        direction: 'SOUTH',
        icon: 'logo.png'
      },
      {
        id: '15',
        timing: '08:10 AM',
        bus: 'JEEVA',
        direction: 'SOUTH',
        icon: 'jeeva.jpg'
      },
      {
        id: '16',
        timing: '08:30 AM',
        bus: 'SRS',
        direction: 'SOUTH',
        icon: 'srs.jpg'
      },
      {
        id: '17',
        timing: '08:20 AM',
        bus: 'JEEVA (POLLACHI)',
        direction: 'SOUTH',
        icon: 'jeeva.jpg'
      },
      {
        id: '18',
        timing: '08:40 AM',
        bus: 'K1',
        direction: 'SOUTH',
        icon: 'c5.jpg'
      },
      {
        id: '19',
        timing: '08:50 AM',
        bus: 'SRL',
        direction: 'SOUTH',
        icon: 'sangeetha.jpg'
      },
      {
        id: '20',
        timing: '08:50 AM',
        bus: 'TST',
        direction: 'SOUTH',
        icon: 'logo.png'
      },
      {
        id: '21',
        timing: '09:00 AM',
        bus: 'JEEVA',
        direction: 'SOUTH',
        icon: 'jeeva.jpg'
      },
      {
        id: '22',
        timing: '09:00 AM',
        bus: 'MSBS',
        direction: 'SOUTH',
        icon: 'kannan.jpg'
      },
      {
        id: '23',
        timing: '09:15 AM',
        bus: 'K10',
        direction: 'SOUTH',
        icon: 'c5.jpg'
      },
      {
        id: '24',
        timing: '09:25 AM',
        bus: 'JEEVA (MADURAI)',
        direction: 'SOUTH',
        icon: 'jeeva.jpg'
      },
      {
        id: '25',
        timing: '09:30 AM',
        bus: 'RBS',
        direction: 'SOUTH',
        icon: 'logo.png'
      },
      {
        id: '26',
        timing: '09:30 AM',
        bus: 'LSS',
        direction: 'SOUTH',
        icon: 'logo.png'
      },
      {
        id: '27',
        timing: '09:35 AM',
        bus: 'PSG',
        direction: 'SOUTH',
        icon: 'logo.png'
      },
      {
        id: '28',
        timing: '10:25 AM',
        bus: 'JEEVA',
        direction: 'SOUTH',
        icon: 'jeeva.jpg'
      },
      {
        id: '29',
        timing: '10:30 AM',
        bus: 'TOWN BUS',
        direction: 'SOUTH',
        icon: 'c5.jpg'
      },
      {
        id: '30',
        timing: '10:35 AM',
        bus: 'LSS',
        direction: 'SOUTH',
        icon: 'logo.png'
      },
      {
        id: '31',
        timing: '10:40 AM',
        bus: 'K1',
        direction: 'SOUTH',
        icon: 'c5.jpg'
      },
      {
        id: '32',
        timing: '10:40 AM',
        bus: 'JEEVA',
        direction: 'SOUTH',
        icon: 'jeeva.jpg'
      },
      {
        id: '33',
        timing: '11:00 AM',
        bus: 'K10',
        direction: 'SOUTH',
        icon: 'c5.jpg'
      },
      {
        id: '34',
        timing: '11:20 AM',
        bus: 'LSS',
        direction: 'SOUTH',
        icon: 'logo.png'
      },
      {
        id: '35',
        timing: '11:25 AM',
        bus: 'SAKTHIMURUGAN',
        direction: 'SOUTH',
        icon: 'logo.png'
      },
      {
        id: '36',
        timing: '11:40 AM',
        bus: 'C1',
        direction: 'SOUTH',
        icon: 'c5.jpg'
      },
      {
        id: '37',
        timing: '11:45 AM',
        bus: 'KML',
        direction: 'SOUTH',
        icon: 'logo.png'
      },
      {
        id: '38',
        timing: '11:55 AM',
        bus: 'SANGEETHA',
        direction: 'SOUTH',
        icon: 'sangeetha.jpg'
      },
      {
        id: '39',
        timing: '12:00 PM',
        bus: 'LSS',
        direction: 'SOUTH',
        icon: 'logo.png'
      },
      {
        id: '40',
        timing: '12:25 PM',
        bus: 'JEEVA',
        direction: 'SOUTH',
        icon: 'jeeva.jpg'
      },
      {
        id: '41',
        timing: '12:35 PM',
        bus: 'K10',
        direction: 'SOUTH',
        icon: 'c5.jpg'
      },
      {
        id: '42',
        timing: '12:40 PM',
        bus: 'C5',
        direction: 'SOUTH',
        icon: 'c5.jpg'
      },
      {
        id: '43',
        timing: '01:00 PM',
        bus: 'TOWN BUS',
        direction: 'SOUTH',
        icon: 'c5.jpg'
      },
      {
        id: '44',
        timing: '01:10 PM',
        bus: 'PSG',
        direction: 'SOUTH',
        icon: 'logo.png'
      },
      {
        id: '45',
        timing: '01:20 PM',
        bus: 'C5',
        direction: 'SOUTH',
        icon: 'c5.jpg'
      },
      {
        id: '46',
        timing: '01:25 PM',
        bus: 'JEEVA (PALANI)',
        direction: 'SOUTH',
        icon: 'jeeva.jpg'
      },
      {
        id: '47',
        timing: '01:30 PM',
        bus: 'PSG',
        direction: 'SOUTH',
        icon: 'logo.png'
      },
      {
        id: '48',
        timing: '01:40 PM',
        bus: 'SARAVANA',
        direction: 'SOUTH',
        icon: 'saravana.jpg'
      },
      {
        id: '49',
        timing: '01:45 PM',
        bus: 'C1',
        direction: 'SOUTH',
        icon: 'c5.jpg'
      },
      {
        id: '50',
        timing: '02:00 PM',
        bus: 'LSS',
        direction: 'SOUTH',
        icon: 'logo.png'
      },
      {
        id: '51',
        timing: '02:20 PM',
        bus: 'RBS',
        direction: 'SOUTH',
        icon: 'logo.png'
      },
      {
        id: '52',
        timing: '02:40 PM',
        bus: 'K1',
        direction: 'SOUTH',
        icon: 'c5.jpg'
      },
      {
        id: '53',
        timing: '02:50 PM',
        bus: 'TOWN BUS',
        direction: 'SOUTH',
        icon: 'c5.jpg'
      },
      {
        id: '54',
        timing: '02:55 PM',
        bus: 'LSS',
        direction: 'SOUTH',
        icon: 'logo.png'
      },
      {
        id: '55',
        timing: '03:00 PM',
        bus: 'SRL',
        direction: 'SOUTH',
        icon: 'sangeetha.jpg'
      },
      {
        id: '56',
        timing: '03:05 PM',
        bus: 'PSG',
        direction: 'SOUTH',
        icon: 'logo.png'
      },
      {
        id: '57',
        timing: '03:25 PM',
        bus: 'LSS',
        direction: 'SOUTH',
        icon: 'logo.png'
      },
      {
        id: '58',
        timing: '03:30 PM',
        bus: 'SRL',
        direction: 'SOUTH',
        icon: 'sangeetha.jpg'
      },
      {
        id: '59',
        timing: '03:30 PM',
        bus: 'TOWN BUS',
        direction: 'SOUTH',
        icon: 'c5.jpg'
      },
      {
        id: '60',
        timing: '04:00 PM',
        bus: 'TOWN BUS',
        direction: 'SOUTH',
        icon: 'c5.jpg'
      },
      {
        id: '61',
        timing: '04:05 PM',
        bus: 'LSS',
        direction: 'SOUTH',
        icon: 'logo.png'
      },
      {
        id: '62',
        timing: '04:20 PM',
        bus: 'JEEVA (PALANI)',
        direction: 'SOUTH',
        icon: 'jeeva.jpg'
      },
      {
        id: '63',
        timing: '04:30 PM',
        bus: 'SRS',
        direction: 'SOUTH',
        icon: 'srs.jpg'
      },
      {
        id: '64',
        timing: '04:40 PM',
        bus: 'MSBS',
        direction: 'SOUTH',
        icon: 'kannan.jpg'
      },
      {
        id: '65',
        timing: '05:00 PM',
        bus: 'PSG',
        direction: 'SOUTH',
        icon: 'logo.png'
      },
      {
        id: '66',
        timing: '05:15 PM',
        bus: 'TOWN BUS',
        direction: 'SOUTH',
        icon: 'c5.jpg'
      },
      {
        id: '67',
        timing: '05:30 PM',
        bus: 'JEEVA',
        direction: 'SOUTH',
        icon: 'jeeva.jpg'
      },
      {
        id: '68',
        timing: '05:45 PM',
        bus: 'RVR',
        direction: 'SOUTH',
        icon: 'city.jpg'
      },
      {
        id: '69',
        timing: '05:50 PM',
        bus: 'SAKTHIMURUGAN',
        direction: 'SOUTH',
        icon: 'logo.png'
      },
      {
        id: '70',
        timing: '06:15 PM',
        bus: 'LSS',
        direction: 'SOUTH',
        icon: 'logo.png'
      },
      {
        id: '71',
        timing: '06:30 PM',
        bus: 'LSS',
        direction: 'SOUTH',
        icon: 'logo.png'
      },
      {
        id: '72',
        timing: '06:30 PM',
        bus: 'JEEVA',
        direction: 'SOUTH',
        icon: 'jeeva.jpg'
      },
      {
        id: '73',
        timing: '06:40 PM',
        bus: 'JEEVA',
        direction: 'SOUTH',
        icon: 'jeeva.jpg'
      },
      {
        id: '74',
        timing: '06:50 PM',
        bus: 'RBS',
        direction: 'SOUTH',
        icon: 'logo.png'
      },
      {
        id: '75',
        timing: '07:15 PM',
        bus: 'JEEVA',
        direction: 'SOUTH',
        icon: 'jeeva.jpg'
      },
      {
        id: '76',
        timing: '07:25 PM',
        bus: 'C5',
        direction: 'SOUTH',
        icon: 'c5.jpg'
      },
      {
        id: '77',
        timing: '07:45 PM',
        bus: 'K1',
        direction: 'SOUTH',
        icon: 'c5.jpg'
      },
      {
        id: '78',
        timing: '07:50 PM',
        bus: 'LSS',
        direction: 'SOUTH',
        icon: 'logo.png'
      },
      {
        id: '79',
        timing: '08:00 PM',
        bus: 'C5',
        direction: 'SOUTH',
        icon: 'c5.jpg'
      },
      {
        id: '80',
        timing: '08:20 PM',
        bus: 'PSG',
        direction: 'SOUTH',
        icon: 'logo.png'
      },
      {
        id: '81',
        timing: '09:20 PM',
        bus: 'TOWN BUS',
        direction: 'SOUTH',
        icon: 'c5.jpg'
      },
      {
        id: '82',
        timing: '08:05 PM',
        bus: 'PSG',
        direction: 'SOUTH',
        icon: 'logo.png'
      },
      {
        id: '83',
        timing: '09:20 PM',
        bus: 'C5',
        direction: 'SOUTH',
        icon: 'c5.jpg'
      },
      {
        id: '84',
        timing: '09:20 PM',
        bus: 'C1',
        direction: 'SOUTH',
        icon: 'c5.jpg'
      },
      {
        id: '85',
        timing: '09:45 PM',
        bus: 'TOWN BUS',
        direction: 'SOUTH',
        icon: 'c5.jpg'
      },
      {
        id: '86',
        timing: '05:50 AM',
        bus: 'LSS',
        direction: 'NORTH',
        icon: 'logo.png'
      },
      {
        id: '87',
        timing: '06:00 AM',
        bus: 'RBS',
        direction: 'NORTH',
        icon: 'logo.png'
      },
      {
        id: '88',
        timing: '06:15 AM',
        bus: 'C4',
        direction: 'NORTH',
        icon: 'c5.jpg'
      },
      {
        id: '89',
        timing: '06:25 AM',
        bus: 'JEEVA',
        direction: 'NORTH',
        icon: 'jeeva.jpg'
      },
      {
        id: '90',
        timing: '06:30 AM',
        bus: 'PSG',
        direction: 'NORTH',
        icon: 'logo.png'
      },
      {
        id: '91',
        timing: '06:40 AM',
        bus: 'C9',
        direction: 'NORTH',
        icon: 'c5.jpg'
      },
      {
        id: '92',
        timing: '06:45 AM',
        bus: 'JEEVA',
        direction: 'NORTH',
        icon: 'jeeva.jpg'
      },
      {
        id: '93',
        timing: '07:00 AM',
        bus: 'C13',
        direction: 'NORTH',
        icon: 'c5.jpg'
      },
      {
        id: '94',
        timing: '07:10 AM',
        bus: 'LSS',
        direction: 'NORTH',
        icon: 'logo.png'
      },
      {
        id: '95',
        timing: '07:25 AM',
        bus: 'C1',
        direction: 'NORTH',
        icon: 'c5.jpg'
      },
      {
        id: '96',
        timing: '07:30 AM',
        bus: 'LSS',
        direction: 'NORTH',
        icon: 'logo.png'
      },
      {
        id: '97',
        timing: '07:40 AM',
        bus: 'JEEVA',
        direction: 'NORTH',
        icon: 'jeeva.jpg'
      },
      {
        id: '98',
        timing: '07:45 AM',
        bus: 'JEEVA',
        direction: 'NORTH',
        icon: 'jeeva.jpg'
      },
      {
        id: '99',
        timing: '07:50 AM',
        bus: 'RVR',
        direction: 'NORTH',
        icon: 'city.jpg'
      },
      {
        id: '100',
        timing: '08:10 AM',
        bus: 'SS',
        direction: 'NORTH',
        icon: 'logo.png'
      },
      {
        id: '101',
        timing: '08:10 AM',
        bus: 'K10',
        direction: 'NORTH',
        icon: 'c5.jpg'
      },
      {
        id: '102',
        timing: '08:20 AM',
        bus: 'SAKTHIMURUGAN',
        direction: 'NORTH',
        icon: 'logo.png'
      },
      {
        id: '103',
        timing: '08:25 AM',
        bus: 'JEEVA',
        direction: 'NORTH',
        icon: 'jeeva.jpg'
      },
      {
        id: '104',
        timing: '08:30 AM',
        bus: 'KML',
        direction: 'NORTH',
        icon: 'logo.png'
      },
      {
        id: '105',
        timing: '08:35 AM',
        bus: 'PSG',
        direction: 'NORTH',
        icon: 'logo.png'
      },
      {
        id: '106',
        timing: '08:40 AM',
        bus: 'SANGEETHA',
        direction: 'NORTH',
        icon: 'sangeetha.jpg'
      },
      {
        id: '107',
        timing: '09:00 AM',
        bus: 'TOWN BUS',
        direction: 'NORTH',
        icon: 'c5.jpg'
      },
      {
        id: '108',
        timing: '09:05 AM',
        bus: 'JEEVA',
        direction: 'NORTH',
        icon: 'jeeva.jpg'
      },
      {
        id: '109',
        timing: '09:10 AM',
        bus: 'PSG',
        direction: 'NORTH',
        icon: 'logo.png'
      },
      {
        id: '110',
        timing: '09:15 AM',
        bus: 'JEEVA',
        direction: 'NORTH',
        icon: 'jeeva.jpg'
      },
      {
        id: '111',
        timing: '09:30 AM',
        bus: 'LSS',
        direction: 'NORTH',
        icon: 'logo.png'
      },
      {
        id: '112',
        timing: '10:00 AM',
        bus: 'SARAVANA',
        direction: 'NORTH',
        icon: 'saravana.jpg'
      },
      {
        id: '113',
        timing: '10:00 AM',
        bus: 'K10',
        direction: 'NORTH',
        icon: 'c5.jpg'
      },
      {
        id: '114',
        timing: '10:30 AM',
        bus: 'PSG',
        direction: 'NORTH',
        icon: 'logo.png'
      },
      {
        id: '115',
        timing: '10:40 AM',
        bus: 'C4',
        direction: 'NORTH',
        icon: 'c5.jpg'
      },
      {
        id: '116',
        timing: '10:45 AM',
        bus: 'SRL',
        direction: 'NORTH',
        icon: 'sangeetha.jpg'
      },
      {
        id: '117',
        timing: '11:05 AM',
        bus: 'TOWN BUS',
        direction: 'NORTH',
        icon: 'c5.jpg'
      },
      {
        id: '118',
        timing: '11:10 AM',
        bus: 'LSS',
        direction: 'NORTH',
        icon: 'logo.png'
      },
      {
        id: '119',
        timing: '11:25 AM',
        bus: 'C5',
        direction: 'NORTH',
        icon: 'c5.jpg'
      },
      {
        id: '120',
        timing: '11:30 AM',
        bus: 'LSS',
        direction: 'NORTH',
        icon: 'logo.png'
      },
      {
        id: '121',
        timing: '11:45 AM',
        bus: 'K10',
        direction: 'NORTH',
        icon: 'c5.jpg'
      },
      {
        id: '122',
        timing: '11:50 AM',
        bus: 'RBS',
        direction: 'NORTH',
        icon: 'logo.png'
      },
      {
        id: '123',
        timing: '12:05 PM',
        bus: 'LSS',
        direction: 'NORTH',
        icon: 'logo.png'
      },
      {
        id: '124',
        timing: '12:20 PM',
        bus: 'SANGEETHA',
        direction: 'NORTH',
        icon: 'sangeetha.jpg'
      },
      {
        id: '125',
        timing: '12:30 PM',
        bus: 'C4',
        direction: 'NORTH',
        icon: 'c5.jpg'
      },
      {
        id: '126',
        timing: '12:45 PM',
        bus: 'PSG',
        direction: 'NORTH',
        icon: 'logo.png'
      },
      {
        id: '127',
        timing: '01:00 PM',
        bus: 'JEEVA',
        direction: 'NORTH',
        icon: 'jeeva.jpg'
      },
      {
        id: '128',
        timing: '01:15 PM',
        bus: 'LSS',
        direction: 'NORTH',
        icon: 'logo.png'
      },
      {
        id: '129',
        timing: '01:25 PM',
        bus: 'JEEVA',
        direction: 'NORTH',
        icon: 'jeeva.jpg'
      },
      {
        id: '130',
        timing: '01:30 PM',
        bus: 'MSBS',
        direction: 'NORTH',
        icon: 'kannan.jpg'
      },
      {
        id: '131',
        timing: '01:30 PM',
        bus: 'K1',
        direction: 'NORTH',
        icon: 'c5.jpg'
      },
      {
        id: '132',
        timing: '01:50 PM',
        bus: 'TOWN BUS',
        direction: 'NORTH',
        icon: 'c5.jpg'
      },
      {
        id: '133',
        timing: '02:00 PM',
        bus: 'SRS',
        direction: 'NORTH',
        icon: 'srs.jpg'
      },
      {
        id: '134',
        timing: '02:05 PM',
        bus: 'LSS',
        direction: 'NORTH',
        icon: 'logo.png'
      },
      {
        id: '135',
        timing: '02:10 PM',
        bus: 'JEEVA',
        direction: 'NORTH',
        icon: 'jeeva.jpg'
      },
      {
        id: '136',
        timing: '02:25 PM',
        bus: 'PSG',
        direction: 'NORTH',
        icon: 'logo.png'
      },
      {
        id: '137',
        timing: '02:40 PM',
        bus: 'SAKTHIMURUGAN',
        direction: 'NORTH',
        icon: 'logo.png'
      },
      {
        id: '138',
        timing: '02:50 PM',
        bus: 'JEEVA',
        direction: 'NORTH',
        icon: 'jeeva.jpg'
      },
      {
        id: '139',
        timing: '03:00 PM',
        bus: 'JEEVA',
        direction: 'NORTH',
        icon: 'jeeva.jpg'
      },
      {
        id: '140',
        timing: '03:10 PM',
        bus: 'K10',
        direction: 'NORTH',
        icon: 'c5.jpg'
      },
      {
        id: '141',
        timing: '03:25 PM',
        bus: 'LSS',
        direction: 'NORTH',
        icon: 'logo.png'
      },
      {
        id: '142',
        timing: '03:30 PM',
        bus: 'C5',
        direction: 'NORTH',
        icon: 'c5.jpg'
      },
      {
        id: '143',
        timing: '03:50 PM',
        bus: 'RBS',
        direction: 'NORTH',
        icon: 'logo.png'
      },
      {
        id: '144',
        timing: '04:00 PM',
        bus: 'PSG',
        direction: 'NORTH',
        icon: 'logo.png'
      },
      {
        id: '145',
        timing: '04:10 PM',
        bus: 'PSG',
        direction: 'NORTH',
        icon: 'logo.png'
      },
      {
        id: '146',
        timing: '04:20 PM',
        bus: 'LSS',
        direction: 'NORTH',
        icon: 'logo.png'
      },
      {
        id: '147',
        timing: '04:30 PM',
        bus: 'C4',
        direction: 'NORTH',
        icon: 'c5.jpg'
      },
      {
        id: '148',
        timing: '04:30 PM',
        bus: 'SRRBS',
        direction: 'NORTH',
        icon: 'logo.png'
      },
      {
        id: '149',
        timing: '04:50 PM',
        bus: 'SANGEETHA',
        direction: 'NORTH',
        icon: 'sangeetha.jpg'
      },
      {
        id: '150',
        timing: '05:15 PM',
        bus: 'C3',
        direction: 'NORTH',
        icon: 'c5.jpg'
      },
      {
        id: '151',
        timing: '05:25 PM',
        bus: 'K1',
        direction: 'NORTH',
        icon: 'c5.jpg'
      },
      {
        id: '152',
        timing: '05:30 PM',
        bus: 'SARAVANA',
        direction: 'NORTH',
        icon: 'saravana.jpg'
      },
      {
        id: '153',
        timing: '06:00 PM',
        bus: 'JEEVA',
        direction: 'NORTH',
        icon: 'jeeva.jpg'
      },
      {
        id: '154',
        timing: '06:10 PM',
        bus: 'K10',
        direction: 'NORTH',
        icon: 'c5.jpg'
      },
      {
        id: '155',
        timing: '06:20 PM',
        bus: 'SRL',
        direction: 'NORTH',
        icon: 'sangeetha.jpg'
      },
      {
        id: '156',
        timing: '06:40 PM',
        bus: 'C5',
        direction: 'NORTH',
        icon: 'c5.jpg'
      },
      {
        id: '157',
        timing: '06:50 PM',
        bus: 'RVR',
        direction: 'NORTH',
        icon: 'city.jpg'
      },
      {
        id: '158',
        timing: '07:00 PM',
        bus: 'KML',
        direction: 'NORTH',
        icon: 'logo.png'
      },
      {
        id: '159',
        timing: '07:10 PM',
        bus: 'TOWN BUS',
        direction: 'NORTH',
        icon: 'c5.jpg'
      },
      {
        id: '160',
        timing: '07:25 PM',
        bus: 'JEEVA',
        direction: 'NORTH',
        icon: 'jeeva.jpg'
      },
      {
        id: '161',
        timing: '07:25 PM',
        bus: 'SRL',
        direction: 'NORTH',
        icon: 'sangeetha.jpg'
      },
      {
        id: '162',
        timing: '07:30 PM',
        bus: 'RBS',
        direction: 'NORTH',
        icon: 'logo.png'
      },
      {
        id: '163',
        timing: '07:35 PM',
        bus: 'PSG',
        direction: 'NORTH',
        icon: 'logo.png'
      },
      {
        id: '164',
        timing: '07:45 PM',
        bus: 'TOWN BUS',
        direction: 'NORTH',
        icon: 'c5.jpg'
      },
      {
        id: '165',
        timing: '07:50 PM',
        bus: 'LSS',
        direction: 'NORTH',
        icon: 'logo.png'
      },
      {
        id: '166',
        timing: '08:05 PM',
        bus: 'TOWN BUS',
        direction: 'NORTH',
        icon: 'c5.jpg'
      },
      {
        id: '167',
        timing: '08:20 PM',
        bus: 'LSS',
        direction: 'NORTH',
        icon: 'logo.png'
      },
      {
        id: '168',
        timing: '08:40 PM',
        bus: 'C5',
        direction: 'NORTH',
        icon: 'c5.jpg'
      },
      {
        id: '169',
        timing: '09:05 PM',
        bus: 'K1',
        direction: 'NORTH',
        icon: 'c5.jpg'
      },
      {
        id: '170',
        timing: '09:05 PM',
        bus: 'SAKTHIMURUGAN',
        direction: 'NORTH',
        icon: 'logo.png'
      },
      {
        id: '171',
        timing: '09:35 PM',
        bus: 'JEEVA',
        direction: 'NORTH',
        icon: 'jeeva.jpg'
      },
      {
        id: '172',
        timing: '09:45 PM',
        bus: 'MSBS',
        direction: 'NORTH',
        icon: 'kannan.jpg'
      },
      {
        id: '173',
        timing: '10:00 PM',
        bus: 'SRS',
        direction: 'NORTH',
        icon: 'srs.jpg'
      },
      {
        id: '174',
        timing: '10:45 PM',
        bus: 'C10',
        direction: 'NORTH',
        icon: 'c5.jpg'
      },
      {
        id: '175',
        timing: '11:55 PM',
        bus: 'JEEVA (SALEM)',
        direction: 'NORTH',
        icon: 'jeeva.jpg'
      }
    ];
    return {buses};
  }

}
