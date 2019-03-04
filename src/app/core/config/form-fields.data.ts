export class FieldData {
  key: string;
  display: string;
  required?: string;
  minlength?: string;
  maxlength?: string;
  email?: string;
}

export const formFieldsData = {
  firstName: {
    key: 'firstName',
    display: 'שם פרטי',
    required: 'שדה חובה',
    minlength: 'התוכן קצר מידי',
    maxlength: 'התוכן ארוך מידי',
    email: 'יש להכניס מייל חוקי'
  },
  lastName: {
    key: 'lastName',
    display: 'שם משפחה',
    minlength: 'התוכן קצר מידי',
    maxlength: 'התוכן ארוך מידי',
    email: 'יש להכניס מייל חוקי'
  },
  id: {
    key: 'id',
    display: 'מספר ת.ז',
  },
  birthday: {
    key: 'birthday',
    display: 'תאריך לידה',
  },
  phone: {
    key: 'phone',
    display: 'מספר טלפון',
  },
  email: {
    key: 'email',
    display: 'כתובת אימייל',
  },
  licenceIssuing: {
    key: 'licenceIssuing',
    display: 'שנת הוצאת רישיון',
  },
  licenseNumber: {
    key: 'licenseNumber',
    display: 'מספר רישוי',
  },
  manufacturer: {
    key: 'manufacturer',
    display: 'צרן הרכב',
  },
  model: {
    key: 'model',
    display: 'דגם',
  },
  manufactureYear: {
    key: 'manufactureYear',
    display: 'שנת ייצור',
  },
  engineCapacity: {
    key: 'engineCapacity',
    display: 'נפח מנוע',
  },
  type: {
    key: 'type',
    display: 'סוג ביטוח',
  },
  youngestDriver: {
    key: 'youngestDriver',
    display: 'גיל הנהג הצעיר ביותר',
  },
  youngestDriverExperience: {
    key: 'youngestDriverExperience',
    display: 'וותק הנהג הצעיר ביותר',
  },
  numberOfDrivers: {
    key: 'numberOfDrivers',
    display: 'מספר נהגים ברכב',
  },
  hasPastClaims: {
    key: 'hasPastClaims',
    display: 'תביעות ב3 שנים האחרונות',
  },
  claims: {
    key: 'claims',
    display: 'תביעות',
  },
  comment: {
    key: 'comment',
    display: 'הערות',
  },
  message: {
    key: 'message',
    display: 'הודעה',
  }
};
