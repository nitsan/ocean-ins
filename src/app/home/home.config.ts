export const homeConfig = {
  images: [
    'assets/images/slides/car.jpg',
    'assets/images/slides//mortgage.jpg',
    'assets/images/slides/life.jpg',
    'assets/images/slides/travel.jpg',
    'assets/images/slides/mortgage2.jpg',
    'assets/images/slides/house.jpg',
    'assets/images/slides/life2.jpg',
    'assets/images/slides/money1.jpg',
    'assets/images/slides/money2.jpg',
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
      routerLink: '/insurance/mortgage'
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
      routerLink: '/insurance/construction'
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
