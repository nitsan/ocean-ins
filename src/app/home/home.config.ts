export const homeConfig = {
  images: [
    'assets/images/house.jpg',
    'assets/images/car.jpg',
    'assets/images/life.jpg',
    'assets/images/travel.jpg',
    'assets/images/all.jpg'
  ],
  insurances: [
    {
      title: 'רכב',
      icon: 'fas fa-car',
      routerLink: '/insurance/car'
    }, {
      title: 'דירה',
      icon: 'fas fa-home',
      routerLink: '/insurance/house'
    }, {
      title: 'משכנתא',
      icon: 'fas fa-piggy-bank',
      routerLink: ''
    }, {
      title: 'נסיעות לחו"ל',
      icon: 'fas fa-plane-departure',
      routerLink: '/insurance/travel'
    }, {
      title: 'בריאות וסיעוד',
      icon: 'fas fa-file-medical',
      routerLink: '/insurance/health'
    }, {
      title: 'עסק',
      icon: 'fas fa-briefcase',
      routerLink: '/insurance/business'
    }, {
      title: 'בניה וקבלנים',
      icon: 'fas fa-hard-hat',
      routerLink: ''
    // }, {
    //   title: 'פיננסים',
    //   icon: 'fas fa-coins',
    //   routerLink: '/insurance/pension-solutions'
    // }, {
    //   title: 'ביטוח חיים',
    //   icon: 'fas fa-life-ring',
    //   routerLink: '/insurance/life'
    }
  ],
  articles: [
    {
      title: 'כך עוקצים אתכם עם ביטוח החובה',
      link: 'https://www.ynet.co.il/articles/0,7340,L-5411427,00.html'
    }, {
      title: 'לעבור מביטוח סיעודי קבוצתי לפרטי: 10 עצות יעילות',
      link: 'https://www.ynet.co.il/articles/0,7340,L-5055740,00.html'
    }
  ]
};
