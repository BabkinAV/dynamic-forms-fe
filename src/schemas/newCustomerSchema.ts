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
});

export const newCustomerInitialValues = {
	customerName: '',
	customerEmail: '',
	deferralDays: '',
	creditLimit: '',
}
