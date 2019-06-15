export interface Page {
  display: string;
  url?: string;
  children?: Page[];
  title?: string;
  description?: string;
}

export const headerConfig = {
  defaults: {
    title: 'אושן סוכנות לביטוח',
    description: 'אושן סוכנות לביטוח - צוות משפחתי, מיומן ומקצועי אשר נותן פתרון לכל סוגי הביטוח ודואג לטיפול מסור במקרה של תביעה',
  },
  pages: [
    {
      display: 'בית',
      url: '/'
    },
    {
      display: 'אודות',
      url: '/about',
      title: 'אודות'
    }, {
      display: 'ביטוחים',
      children: [
        {
          display: 'רכב',
          title: 'ביטוח רכב',
          url: '/insurance/car'
        }, {
          display: 'דירה',
          title: 'ביטוח דירה',
          url: '/insurance/house'
        }, {
          display: 'משכנתא',
          title: 'ביטוח משכנתא',
          url: '/insurance/mortgage'
        }, {
          display: 'נסיעות לחו"ל',
          title: 'ביטוח נסיעות לחו"ל',
          url: '/insurance/travel'
        }, {
          display: 'בריאות וסיעוד',
          title: 'ביטוח בריאות וסיעוד',
          url: '/insurance/health'
        }, {
          display: 'עסק',
          title: 'ביטוח עסק',
          url: '/insurance/business'
        }, {
          display: 'בניה וקבלנים',
          title: 'ביטוח בניה וקבלנים',
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
      title: 'צור קשר',
      url: '/contact-us'
    }
  ]
};
