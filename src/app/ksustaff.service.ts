import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KSUstaffService {

  private staffList = [
    {
      id: 1,
      name: 'Семахин Андрей Михайлович',
      photoUrl: 'assets/images/dc24bukwr43fm8mh13p7xzkurhnu6fxo.jpg',
      shortDescription: 'Доцент кафедры',
      details: 'Учёная степень: Кандидат технических наук\nОбщий стаж: 34 года'
    },
    {
      id: 2,
      name: 'Черепанов Олег Сергеевич',
      photoUrl: 'assets/images/oi7hfqm1ch43m28ib7x7gnossswwa8vz.jpg',
      shortDescription: 'Доцент кафедры',
      details: 'Учёная степень: Кандидат физико-математических наук\nОбщий стаж: 11 лет'
    },
    {
      id: 3,
      name: 'Медведев Аркадий Андреевич',
      photoUrl: 'assets/images/shajd11t1m3h5ie7kh6p1n181351lxyp.jpg',
      shortDescription: 'Доцент кафедры',
      details: 'Учёная степень: Кандидат педагогических наук\nОбщий стаж: 37 лет'
    },
    {
      id: 4,
      name: 'Дик Дмитрий Иванович',
      photoUrl: 'assets/images/trc0ut3me4k829xf9gw1rt9betrd3w1m.jpg',
      shortDescription: 'Заведующий кафедрой',
      details: 'Учёная степень: Кандидат технических наук\nОбщий стаж: 28 лет'
    },
    {
      id: 5,
      name: 'Косовских Светлана Викторовна',
      photoUrl: 'assets/images/ycbe48ryu4y6bw5d2e7pefoiziqil15s.jpg',
      shortDescription: 'Доцент кафедры',
      details: 'Учёная степень: Кандидат физико-математических наук\nОбщий стаж: 35 лет'
    },
  ];

  constructor() { }

  getStaffList() {
    return this.staffList;
  }

  getStaffById(id: number) {
    return this.staffList.find(staff => staff.id === id);
  }
}
