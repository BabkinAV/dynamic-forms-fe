import * as Yup from 'yup';

export const newCustomerValidationSchema = Yup.object({
  customerName: Yup.string().required('Введите имя'),
  customerEmail: Yup.string()
    .email('Введите корректный Email')
    .required('Введите Email'),
  deferralDays: Yup.number()
    .typeError('Введите число')
    .min(0, 'Дней отрочки должна быть больше или равна нулю')
    .required('Дней отрочки должна быть больше или равна нулю'),
  creditLimit: Yup.number()
    .typeError('Введите число')
    .min(0, 'Кредитный лимит должен быть больше или равен нулю')
    .required('Кредитный лимит должен быть больше или равен нулю'),
  organizationName: Yup.string().required('Введите название организации'),
  inn: Yup.number()
    .typeError('введите только цифры')
    .required('Введите ИНН организации'),
  kpp: Yup.number()
    .typeError('введите только цифры')
    .required('Введите КПП организации'),
  ogrn: Yup.number()
    .typeError('введите только цифры')
    .required('Введите ОГРН организации'),
  organizationAddr: Yup.string().required('Введите юридический адрес'),
  bankAccounts: Yup.array().of(
    Yup.object().shape({
      name: Yup.string().required('Введите название счета'),
      account_number: Yup.number()
        .typeError('введите только цифры')
        .required('Введите номер счета'),
      bik: Yup.number()
        .typeError('введите только цифры')
        .required('Введите БИК счета'),
      corr_account_number: Yup.number()
        .typeError('введите только цифры')
        .required('Введите номер счета'),
    })
  ),
});

export const newCustomerInitialValues = {
  customerName: '',
  customerEmail: '',
  deferralDays: '',
  creditLimit: '',
  organizationName: '',
  inn: '',
  kpp: '',
  ogrn: '',
  organizationAddr: '',
  bankAccounts: [
    {
      name: '',
      bik: '',
      account_number: '',
      corr_account_number: '',
    },
  ],
};
