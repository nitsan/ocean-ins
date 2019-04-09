export interface IPage {
  display: string;
  url?: string;
  children?: IPage[];
}

export const headerConfig = {
  pages: [
    {
      display: 'בית',
      url: '/home'
    },
    {
      display: 'אודות',
      url: '/about'
    }, {
      display: 'ביטוחים',
      children: [
        {
          display: 'רכב',
          url: '/insurance/car'
        }, {
          display: 'דירה',
          url: '/insurance/house'
        }, {
          display: 'משכנתא',
          url: '/insurance/mortgage'
        }, {
          display: 'נסיעות לחו"ל',
          url: '/insurance/travel'
        }, {
          display: 'בריאות וסיעוד',
          url: '/insurance/health'
        }, {
          display: 'עסק',
          url: '/insurance/business'
        }, {
          display: 'בניה וקבלנים',
          url: '/insurance/construction'
        // }, {
        //   display: 'ביטוח חיים',
        //   url: '/insurance/life'
        // }, {
        //   display: 'חסכון פנסיוני',
        //   url: '/insurance/pension-saving'
        // }, {
        //   display: 'פתרונות פיננסים',
        //   url: '/insurance/pension-solutions'
        }
      ]
      // }, {
      //   display: 'הצעות מחיר',
      //   children: [
      //     {
      //       display: 'ביטוח רכב',
      //       url: '/price-offers/car'
      //     }, {
      //       display: 'ביטוח דירה',
      //       url: '/price-offers/house'
      //     }, {
      //       display: 'ביטוח משכנתא',
      //       url: '/price-offers/mortgage'
      //     },
      //   ]
      // }, {
      //   display: 'מידע אישי',
      //   children: [
      //     {
      //       display: 'מה עושים בעת תאונה?',
      //       url: '/personal-info/accident'
      //     }, {
      //       display: 'דיווח ראשוני על תאונה',
      //       url: '/personal-info/initial-reporting-accident'
      //     }, {
      //       display: 'איתור שירותי גרירה',
      //       url: '/personal-info/towing-services'
      //     }, {
      //       display: 'איתור נזקי צנרת',
      //       url: '/personal-info/pipe-damage'
      //     }, {
      //       display: 'טפסים ומסמכים',
      //       url: '/personal-info/docs'
      //     },
      //   ]
    }, {
      display: 'צור קשר',
      url: '/contact-us'
    }
  ]
};
