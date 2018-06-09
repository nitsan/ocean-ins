export interface IPage {
  display: string;
  url: string;
  children?: IPage[];
}

export const headerConfig = {
  pages: [
    {
      display: 'אודות',
      url: '/about'
    }, {
      display: 'ביטוחים',
      url: '/insurance',
      children: [
        {
          display: 'ביטוח רכב',
          url: ''
        }, {
          display: 'ביטוח דירה',
          url: ''
        }, {
          display: 'ביטוח עסק',
          url: ''
        }, {
          display: 'ביטוח חו"ל',
          url: ''
        }, {
          display: 'ביטוח חיים',
          url: ''
        }, {
          display: 'ביטוח בריאות וסיעוד',
          url: ''
        }, {
          display: 'חסכון פנסיוני',
          url: ''
        }, {
          display: 'פתרונות פיננסים',
          url: ''
        }
      ]
    }, {
      display: 'הצעות מחיר',
      url: '/price-offers'
    }, {
      display: 'מידע אישי',
      url: '/personal-info',
      children: [
        {
          display: 'מה עושים בעת תאונה?',
          url: ''
        }, {
          display: 'דיווח ראשוני על תאונה',
          url: ''
        }, {
          display: 'איתור שירותי גרירה',
          url: ''
        }, {
          display: 'איתור נזקי צנרת',
          url: ''
        }, {
          display: 'טפסים ומסמכים',
          url: ''
        },
      ]
    }, {
      display: 'צור קשר',
      url: '/contact-us'
    }
  ]
};
