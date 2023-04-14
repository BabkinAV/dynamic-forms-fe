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
  invoiceEmails: Yup.array().of(
    Yup.string().email('Введите корректный email').required('Введите Email')
  ),
  meta: Yup.array()
    .of(
      Yup.object().shape({
        key: Yup.string().required('Введите ключ'),
        value: Yup.string(),
      })
    )
    .test('unique-keys', 'Ключи не должны повторяться', values => {
      if (values) {
        return new Set(values.map(el => el.key)).size === values.length;
      }
      return false;
    }),
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
  invoiceEmails: [''],
  meta: [],
};
