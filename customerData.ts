import { Customer } from "./src/types"

 const customerData: Customer[] =  [
	{
		"id": "x78i14-gzidv",
		"name": "Test11",
		"email": "фывфыв@gmail.com",
		"deferral_days": 14,
		"org": {
			"id": "131b9d78-ad58-415f-aab4-779a9e87edfd",
			"name": "Название организации",
			"inn": "7709655212",
			"kpp": "772901001",
			"ogrn": "1026101794313",
			"addr": "Юридический адрес",
			"bank_accounts": [
				{
					"id": "c0ca02e9-be90-456b-b77c-82189c7651ae",
					"name": "2",
					"bik": "123456783",
					"account_number": "12345678901234567891",
					"corr_account_number": "09876543210987654321",
					"is_default": true,
					"created_at": "2023-03-31T13:27:06Z",
					"updated_at": "2023-03-31T13:35:58Z"
				},
				{
					"id": "23c3a0d6-c13f-45b1-9143-ef27af1b6d44",
					"name": "Название1",
					"bik": "123456783",
					"account_number": "12345678901234567890",
					"corr_account_number": "09876543210987654321",
					"is_default": false,
					"created_at": "2023-03-31T13:27:06Z",
					"updated_at": "2023-03-31T13:35:58Z"
				}
			],
			"created_at": "2023-03-31T13:27:06Z",
			"updated_at": "2023-03-31T13:35:58Z"
		},
		"balance": {
			"currency": "RUB",
			"current_amount": 90000,
			"credit_limit": 0,
			"available_amount": 90000
		},
		"metadata": {
			"key1": "val1"
		},
		"created_at": "2023-03-31T13:27:06Z",
		"updated_at": "2023-03-31T13:35:58Z",
		"status": "active",
		"invoice_prefix": "L1RFJG",
		"invoice_emails": ["123@mail.com"]
	},
	{
		"id": "jbvokn-lgajs",
		"name": "ООО \"АМАЗОН\"",
		"email": "test@test.test",
		"deferral_days": 7,
		"org": {
			"id": "80372dac-1b65-4aa3-9406-ef893d8ad988",
			"name": "ООО \"АМАЗОН\"",
			"inn": "7709655218",
			"kpp": "770501001",
			"ogrn": "1067746110112",
			"addr": "115172, г Москва, Таганский р-н, ул Малые Каменщики, д 18 к 3, кв 30",
			"bank_accounts": [
				{
					"id": "9adf3e9e-b99e-459f-8bf2-291b265f904a",
					"name": "AAA MY BANK",
					"bik": "123456789",
					"account_number": "12345678901234567890",
					"corr_account_number": "09876543210987654321",
					"is_default": true,
					"created_at": "2023-03-31T10:16:51Z",
					"updated_at": "2023-03-31T10:16:51Z"
				}
			],
			"created_at": "2023-03-31T10:16:51Z",
			"updated_at": "2023-03-31T10:16:51Z"
		},
		"balance": {
			"currency": "RUB",
			"current_amount": 0,
			"credit_limit": 0,
			"available_amount": 0
		},
		"metadata": {
			"contract_type": "general"
		},
		"created_at": "2023-03-31T10:16:51Z",
		"updated_at": "2023-03-31T10:16:51Z",
		"status": "active",
		"invoice_prefix": "ИО",
		"invoice_emails": ["test@test.test"]
	},
	{
		"id": "skpbsd-naib3",
		"name": "ООО \"АМАЗОН\"",
		"email": "test@test.test",
		"deferral_days": 7,
		"org": {
			"id": "bb99339b-757e-4244-b5f9-5a0591729101",
			"name": "ООО \"АМАЗОН\"",
			"inn": "7709655218",
			"kpp": "770501001",
			"ogrn": "1067746110112",
			"addr": "115172, г Москва, Таганский р-н, ул Малые Каменщики, д 18 к 3, кв 30",
			"bank_accounts": [
				{
					"id": "d5aabbaa-268e-435c-90d9-200764b6ace2",
					"name": "AAA MY BANK",
					"bik": "123456789",
					"account_number": "12345678901234567890",
					"corr_account_number": "09876543210987654321",
					"is_default": true,
					"created_at": "2023-03-31T10:16:51Z",
					"updated_at": "2023-03-31T10:16:51Z"
				}
			],
			"created_at": "2023-03-31T10:16:51Z",
			"updated_at": "2023-03-31T10:16:51Z"
		},
		"balance": {
			"currency": "RUB",
			"current_amount": 0,
			"credit_limit": 0,
			"available_amount": 0
		},
		"metadata": {
			"contract_type": "agency"
		},
		"created_at": "2023-03-31T10:16:51Z",
		"updated_at": "2023-03-31T10:16:51Z",
		"status": "active",
		"invoice_prefix": "АА",
		"invoice_emails": ["test@test.test"]
	},
	{
		"id": "vwbdn6-ymzuj",
		"name": "АО \"АЗСМ 2\"",
		"email": "test@test.test",
		"deferral_days": 60,
		"org": {
			"id": "81a44002-7724-49a1-b9ff-ab4e316482db",
			"name": "АО \"АЗСМ 2\"",
			"inn": "7709655217",
			"kpp": "772901001",
			"ogrn": "1026101794311",
			"addr": "119530, г Москва, Очаково-Матвеевское р-н, Очаковское шоссе, д 28 стр 2, оф 201",
			"bank_accounts": [
				{
					"id": "b79bc13a-0f27-41ae-aea3-01b365e9695f",
					"name": "AAA MY BANK",
					"bik": "123456789",
					"account_number": "12345678901234567890",
					"corr_account_number": "09876543210987654321",
					"is_default": true,
					"created_at": "2023-03-31T10:15:59Z",
					"updated_at": "2023-03-31T10:15:59Z"
				}
			],
			"created_at": "2023-03-31T10:15:59Z",
			"updated_at": "2023-03-31T10:15:59Z"
		},
		"balance": {
			"currency": "RUB",
			"current_amount": 0,
			"credit_limit": 0,
			"available_amount": 0
		},
		"metadata": {
			"contract_type": "general"
		},
		"created_at": "2023-03-31T10:15:59Z",
		"updated_at": "2023-03-31T10:15:59Z",
		"status": "active",
		"invoice_prefix": "ИО",
		"invoice_emails": ["test@test.test"]
	},
	{
		"id": "qybaqr-rwqeg",
		"name": "АО \"АЗСМ 2\"",
		"email": "test@test.test",
		"deferral_days": 60,
		"org": {
			"id": "046fbdcb-fb6f-49f4-b116-73f72f0ac0bb",
			"name": "АО \"АЗСМ 2\"",
			"inn": "7709655217",
			"kpp": "772901001",
			"ogrn": "1026101794311",
			"addr": "119530, г Москва, Очаково-Матвеевское р-н, Очаковское шоссе, д 28 стр 2, оф 201",
			"bank_accounts": [
				{
					"id": "fa60c670-5a8b-442b-b5ad-327cb13f8378",
					"name": "AAA MY BANK",
					"bik": "123456789",
					"account_number": "12345678901234567890",
					"corr_account_number": "09876543210987654321",
					"is_default": true,
					"created_at": "2023-03-31T10:15:59Z",
					"updated_at": "2023-03-31T10:15:59Z"
				}
			],
			"created_at": "2023-03-31T10:15:59Z",
			"updated_at": "2023-03-31T10:15:59Z"
		},
		"balance": {
			"currency": "RUB",
			"current_amount": 0,
			"credit_limit": 0,
			"available_amount": 0
		},
		"metadata": {
			"contract_type": "agency"
		},
		"created_at": "2023-03-31T10:15:59Z",
		"updated_at": "2023-03-31T10:15:59Z",
		"status": "active",
		"invoice_prefix": "АА",
		"invoice_emails": ["test@test.test"]
	},
	{
		"id": "vykrnb-lmfwz",
		"name": "Test10",
		"email": "фывфыв2@gmail.com",
		"deferral_days": 7,
		"org": {
			"id": "0b1e29ec-aa92-4e7b-aa15-77a8a7d23cfa",
			"name": "Название организации",
			"inn": "7709655212",
			"kpp": "772901001",
			"ogrn": "1026101794313",
			"addr": "Юридический адрес",
			"bank_accounts": [
				{
					"id": "fccfd152-c0d8-4954-b490-2d7f90af18a7",
					"name": "Название",
					"bik": "123456783",
					"account_number": "12345678901234567895",
					"corr_account_number": "09876543210987654311",
					"is_default": true,
					"created_at": "2023-03-30T07:45:17Z",
					"updated_at": "2023-03-31T09:22:42Z"
				}
			],
			"created_at": "2023-03-30T07:45:17Z",
			"updated_at": "2023-03-31T09:22:42Z"
		},
		"balance": {
			"currency": "RUB",
			"current_amount": 1345500,
			"credit_limit": 0,
			"available_amount": 1345500
		},
		"metadata": {
			"1": "1",
			"key1": "123123"
		},
		"created_at": "2023-03-30T07:45:17Z",
		"updated_at": "2023-03-31T09:22:42Z",
		"status": "active",
		"invoice_prefix": "LYZAOT",
		"invoice_emails": ["123@mail.com", "asdasd111111111@safsf.uy"]
	},
	{
		"id": "1uvb3h-mk8sz",
		"name": "Test1",
		"email": "фывфыв@gmail.com",
		"deferral_days": 14,
		"org": {
			"id": "4ab5b278-06f2-42a8-b1b1-40ef638a5e4f",
			"name": "Название организации",
			"inn": "7709655218",
			"kpp": "772901001",
			"ogrn": "1026101794311",
			"addr": "Юридический адрес",
			"bank_accounts": [
				{
					"id": "84179187-5692-40cb-a7bc-ab1822f17874",
					"name": "Название счета",
					"bik": "123456789",
					"account_number": "12345678901234567890",
					"corr_account_number": "09876543210987654321",
					"is_default": true,
					"created_at": "2023-03-30T07:41:04Z",
					"updated_at": "2023-03-30T07:41:04Z"
				}
			],
			"created_at": "2023-03-30T07:41:04Z",
			"updated_at": "2023-03-30T07:41:04Z"
		},
		"balance": {
			"currency": "RUB",
			"current_amount": 0,
			"credit_limit": 100000,
			"available_amount": 100000
		},
		"metadata": {
			"1231": "123123"
		},
		"created_at": "2023-03-30T07:41:04Z",
		"updated_at": "2023-03-30T07:41:04Z",
		"status": "active",
		"invoice_prefix": "7UVIF2",
		"invoice_emails": ["123@mail.com", "asdasd@safsf.uy", "asfsdfd@dfhdh.pop"]
	},
	{
		"id": "necpru-b1s7g",
		"name": "Test1",
		"email": "makыkin@toyotafs.ru",
		"deferral_days": 14,
		"org": {
			"id": "3f7284b3-81ef-486a-84d5-1e5872f8c4db",
			"name": "Название организации",
			"inn": "7709655218",
			"kpp": "772901001",
			"ogrn": "1026101794311",
			"addr": "Юридический адрес",
			"bank_accounts": [
				{
					"id": "81e8eb5a-6265-467d-8c96-dad5fb56a63b",
					"name": "Название счета",
					"bik": "123456789",
					"account_number": "12345678901234567890",
					"corr_account_number": "09876543210987654321",
					"is_default": true,
					"created_at": "2023-03-29T12:27:44Z",
					"updated_at": "2023-03-29T12:27:44Z"
				}
			],
			"created_at": "2023-03-29T12:27:44Z",
			"updated_at": "2023-03-29T12:27:44Z"
		},
		"balance": {
			"currency": "RUB",
			"current_amount": 0,
			"credit_limit": 100000,
			"available_amount": 100000
		},
		"metadata": {
			"Key": "val1",
			"key2": "val2"
		},
		"created_at": "2023-03-29T12:27:44Z",
		"updated_at": "2023-03-29T12:27:44Z",
		"status": "active",
		"invoice_prefix": "4KTQNI",
		"invoice_emails": ["123@mail.com"]
	},
	{
		"id": "hmob0l-1do4x",
		"name": "Test1",
		"email": "maksim.b@toyotafs.ru",
		"deferral_days": 123,
		"org": {
			"id": "405499b9-b9d9-4cf9-be25-422de80679ca",
			"name": "Название организации",
			"inn": "7709655218",
			"kpp": "772901001",
			"ogrn": "1026101794311",
			"addr": "Юридический адрес",
			"bank_accounts": [
				{
					"id": "e54b8937-59ee-4dd4-a289-580e04406dda",
					"name": "12345678901234567890",
					"bik": "123456789",
					"account_number": "12345678901234567890",
					"corr_account_number": "09876543210987654321",
					"is_default": true,
					"created_at": "2023-03-29T12:20:49Z",
					"updated_at": "2023-03-29T12:20:49Z"
				}
			],
			"created_at": "2023-03-29T12:20:49Z",
			"updated_at": "2023-03-29T12:20:49Z"
		},
		"balance": {
			"currency": "RUB",
			"current_amount": 0,
			"credit_limit": 10000000,
			"available_amount": 10000000
		},
		"metadata": {},
		"created_at": "2023-03-29T12:20:49Z",
		"updated_at": "2023-03-29T12:20:49Z",
		"status": "active",
		"invoice_prefix": "PH0PXG",
		"invoice_emails": ["123@mail.com", "asdasd@gmail.cpom"]
	},
	{
		"id": "rodyxd-uodwa",
		"name": "Test1",
		"email": "фывфыв@gmail.com",
		"deferral_days": 13,
		"org": {
			"id": "9b3e3bae-d6d7-4c27-a6ba-ad26c6379e04",
			"name": "Название организации",
			"inn": "7709655218",
			"kpp": "772901001",
			"ogrn": "1026101794311",
			"addr": "Юридический адрес",
			"bank_accounts": [
				{
					"id": "80c1679f-3c0a-4fed-8955-304f6f949418",
					"name": "Название счета",
					"bik": "123456789",
					"account_number": "12345678901234567890",
					"corr_account_number": "09876543210987654321",
					"is_default": true,
					"created_at": "2023-03-29T12:16:24Z",
					"updated_at": "2023-03-29T12:16:24Z"
				}
			],
			"created_at": "2023-03-29T12:16:24Z",
			"updated_at": "2023-03-29T12:16:24Z"
		},
		"balance": {
			"currency": "RUB",
			"current_amount": 0,
			"credit_limit": 10000000,
			"available_amount": 10000000
		},
		"metadata": {},
		"created_at": "2023-03-29T12:16:24Z",
		"updated_at": "2023-03-29T12:16:24Z",
		"status": "active",
		"invoice_prefix": "X3XO3R",
		"invoice_emails": ["123@mail.com"]
	},
	{
		"id": "i7banp-2ym0g",
		"name": "Test2",
		"email": "test@test.com",
		"deferral_days": 7,
		"org": {
			"id": "3dd2036d-753b-4e4a-a91e-5264e686f1b6",
			"name": "Название организации",
			"inn": "7709655218",
			"kpp": "772901001",
			"ogrn": "1026101794311",
			"addr": "Юридический адрес",
			"bank_accounts": [
				{
					"id": "4451f32b-c7a0-4db8-ba7c-3959b3b27cd5",
					"name": "string",
					"bik": "123456789",
					"account_number": "12345678901234567890",
					"corr_account_number": "09876543210987654321",
					"is_default": true,
					"created_at": "2023-03-24T14:41:04Z",
					"updated_at": "2023-03-29T08:31:48Z"
				}
			],
			"created_at": "2023-03-24T14:41:04Z",
			"updated_at": "2023-03-29T08:31:48Z"
		},
		"balance": {
			"currency": "RUB",
			"current_amount": 0,
			"credit_limit": 0,
			"available_amount": 0
		},
		"metadata": {
			"Key1": "Value1",
			"Key2": "Value2"
		},
		"created_at": "2023-03-24T14:41:04Z",
		"updated_at": "2023-03-29T08:31:48Z",
		"status": "active",
		"invoice_prefix": "UQNTRX",
		"invoice_emails": ["test@mail.ru"]
	},
	{
		"id": "ge2hez-ko0oc",
		"name": "Test1",
		"email": "test@test.com",
		"deferral_days": 14,
		"org": {
			"id": "7f3b444c-011e-4357-b5a8-460e522b3d21",
			"name": "Название организации",
			"inn": "7709655218",
			"kpp": "772901001",
			"ogrn": "1026101794311",
			"addr": "Юридический адрес",
			"bank_accounts": [
				{
					"id": "e45b1c43-5edc-42ae-8e5d-9071a6be0ab0",
					"name": "string",
					"bik": "123456789",
					"account_number": "12345678901234567890",
					"corr_account_number": "09876543210987654321",
					"is_default": true,
					"created_at": "2023-03-24T14:39:41Z",
					"updated_at": "2023-03-24T14:39:41Z"
				}
			],
			"created_at": "2023-03-24T14:39:41Z",
			"updated_at": "2023-03-24T14:39:41Z"
		},
		"balance": {
			"currency": "RUB",
			"current_amount": 0,
			"credit_limit": 0,
			"available_amount": 0
		},
		"metadata": {},
		"created_at": "2023-03-24T14:39:41Z",
		"updated_at": "2023-03-24T14:39:41Z",
		"status": "active",
		"invoice_prefix": "PZPRLP",
		"invoice_emails": ["test@mail.ru"]
	},
	{
		"id": "jxs8gn-huwhm",
		"name": "АО АЗСМ NEW BILLING 2",
		"email": "test@test.test",
		"deferral_days": 7,
		"org": {
			"id": "29f86409-cc71-46f3-acd9-8988c9203ea0",
			"name": "АО АЗСМ NEW BILLING 2",
			"inn": "7709655213",
			"kpp": "772901001",
			"ogrn": "1026101794311",
			"addr": "119530, г Москва, Очаково-Матвеевское р-н, Очаковское шоссе, д 28 стр 2, оф 201",
			"bank_accounts": [
				{
					"id": "a4ef0bd0-f495-470a-8a24-713b7b202944",
					"name": "AA MY BANK",
					"bik": "123456789",
					"account_number": "12345678901234567890",
					"corr_account_number": "09876543210987654321",
					"is_default": true,
					"created_at": "2023-03-21T08:50:10Z",
					"updated_at": "2023-03-30T11:35:49Z"
				}
			],
			"created_at": "2023-03-21T08:50:10Z",
			"updated_at": "2023-03-30T11:35:49Z"
		},
		"balance": {
			"currency": "RUB",
			"current_amount": 0,
			"credit_limit": 0,
			"available_amount": 0
		},
		"metadata": {
			"123": "123"
		},
		"created_at": "2023-03-21T08:50:10Z",
		"updated_at": "2023-03-30T11:35:49Z",
		"status": "active",
		"invoice_prefix": "ИО",
		"invoice_emails": ["test@test.test"]
	},
	{
		"id": "qg3yz4-9friy",
		"name": "АО АЗСМ NEW BILLING 2",
		"email": "test@test.test",
		"deferral_days": 7,
		"org": {
			"id": "7436ec21-5b89-4a06-b28c-69b4a8b154e9",
			"name": "АО АЗСМ NEW BILLING 2",
			"inn": "7709655218",
			"kpp": "772901001",
			"ogrn": "1026101794311",
			"addr": "119530, г Москва, Очаково-Матвеевское р-н, Очаковское шоссе, д 28 стр 2, оф 201",
			"bank_accounts": [
				{
					"id": "9f5d6585-a525-42b7-890e-893ad020768c",
					"name": "AAA MY BANK",
					"bik": "123456789",
					"account_number": "12345678901234567890",
					"corr_account_number": "09876543210987654321",
					"is_default": true,
					"created_at": "2023-03-21T08:50:10Z",
					"updated_at": "2023-03-21T08:50:10Z"
				}
			],
			"created_at": "2023-03-21T08:50:10Z",
			"updated_at": "2023-03-21T08:50:10Z"
		},
		"balance": {
			"currency": "RUB",
			"current_amount": 0,
			"credit_limit": 0,
			"available_amount": 0
		},
		"metadata": {
			"contract_type": "agency"
		},
		"created_at": "2023-03-21T08:50:10Z",
		"updated_at": "2023-03-21T08:50:10Z",
		"status": "active",
		"invoice_prefix": "АА",
		"invoice_emails": ["test@test.test"]
	},
	{
		"id": "77sev6-yh72o",
		"name": "ООО \"РОМАТИ\"",
		"email": "test@test.com",
		"deferral_days": 7,
		"org": {
			"id": "6cf28a15-3c05-411b-a73a-49f5b11f835c",
			"name": "ООО \"РОМАТИ\"",
			"inn": "7730213981",
			"kpp": "773101001",
			"ogrn": "1167746874855",
			"addr": "121596, г Москва, Можайский р-н, ул Горбунова, д 2 стр 3, пом II комн 28",
			"bank_accounts": [
				{
					"id": "ddd54965-fdbf-436e-a89a-40f4af8ae512",
					"name": "Банк тест А",
					"bik": "123456789",
					"account_number": "12345123451234512345",
					"corr_account_number": "12345123451234512345",
					"is_default": true,
					"created_at": "2023-03-07T11:22:04Z",
					"updated_at": "2023-03-31T06:24:18Z"
				}
			],
			"created_at": "2023-03-07T11:22:04Z",
			"updated_at": "2023-03-31T06:24:18Z"
		},
		"balance": {
			"currency": "RUB",
			"current_amount": 0,
			"credit_limit": 0,
			"available_amount": 0
		},
		"metadata": {},
		"created_at": "2023-03-07T11:22:04Z",
		"updated_at": "2023-03-31T06:24:18Z",
		"status": "active",
		"invoice_prefix": "АА",
		"invoice_emails": ["test@test.com"]
	},
	{
		"id": "0ufg5i-gc2fj",
		"name": "ООО \"РОМАТИ\"",
		"email": "test@test.com",
		"deferral_days": 7,
		"org": {
			"id": "a6e9b0cc-4f74-4501-a865-f9ebe0ce3fca",
			"name": "ООО \"РОМАТИ\"",
			"inn": "7730213981",
			"kpp": "773101001",
			"ogrn": "1167746874855",
			"addr": "121596, г Москва, Можайский р-н, ул Горбунова, д 2 стр 3, пом II комн 28",
			"bank_accounts": [
				{
					"id": "d6803b5b-18f3-414d-8ce7-c58fcc61ba63",
					"name": "Банк тест А",
					"bik": "123456789",
					"account_number": "12345123451234512345",
					"corr_account_number": "12345123451234512345",
					"is_default": true,
					"created_at": "2023-03-07T11:22:04Z",
					"updated_at": "2023-03-31T06:24:18Z"
				}
			],
			"created_at": "2023-03-07T11:22:04Z",
			"updated_at": "2023-03-31T06:24:18Z"
		},
		"balance": {
			"currency": "RUB",
			"current_amount": 0,
			"credit_limit": 0,
			"available_amount": 0
		},
		"metadata": {
			"contract_type": "general"
		},
		"created_at": "2023-03-07T11:22:04Z",
		"updated_at": "2023-03-31T06:24:18Z",
		"status": "active",
		"invoice_prefix": "ИО",
		"invoice_emails": ["test@test.com"]
	},
	{
		"id": "pn0sze-xymvo",
		"name": "ООО \"БАЙКАЛПРОФИТУР\"",
		"email": "test@test.com",
		"deferral_days": 7,
		"org": {
			"id": "8f2f78a5-a73b-4b7b-991b-3309c4cdc608",
			"name": "ООО \"БАЙКАЛПРОФИТУР\"",
			"inn": "3808230466",
			"kpp": "381101001",
			"ogrn": "1133850025870",
			"addr": "664075, Иркутская обл, г Иркутск, Октябрьский р-н, ул Дальневосточная, д 164/5, пом 10",
			"bank_accounts": [
				{
					"id": "52bfa231-2fd8-43d3-ad83-5bc9205496ea",
					"name": "Банк тест 1",
					"bik": "123456789",
					"account_number": "12345123451234512345",
					"corr_account_number": "12345123451234512345",
					"is_default": true,
					"created_at": "2023-03-06T15:40:01Z",
					"updated_at": "2023-03-21T10:42:44Z"
				}
			],
			"created_at": "2023-03-06T15:40:01Z",
			"updated_at": "2023-03-21T10:42:44Z"
		},
		"balance": {
			"currency": "RUB",
			"current_amount": 100000,
			"credit_limit": 0,
			"available_amount": 100000
		},
		"metadata": {},
		"created_at": "2023-03-06T15:40:01Z",
		"updated_at": "2023-03-21T10:42:44Z",
		"status": "active",
		"invoice_prefix": "АА",
		"invoice_emails": ["test@test.com"]
	},
	{
		"id": "y6v47z-zhuje",
		"name": "ООО \"БАЙКАЛПРОФИТУР\"",
		"email": "test@test.com",
		"deferral_days": 7,
		"org": {
			"id": "ed6a1ca6-4103-4ebc-8b2e-2e7c77801044",
			"name": "ООО \"БАЙКАЛПРОФИТУР\"",
			"inn": "3808230466",
			"kpp": "381101001",
			"ogrn": "1133850025870",
			"addr": "664075, Иркутская обл, г Иркутск, Октябрьский р-н, ул Дальневосточная, д 164/5, пом 10",
			"bank_accounts": [
				{
					"id": "b19a7964-b668-4c60-874f-6b386a567a9f",
					"name": "Банк тест 1",
					"bik": "123456789",
					"account_number": "12345123451234512345",
					"corr_account_number": "12345123451234512345",
					"is_default": true,
					"created_at": "2023-03-06T15:40:00Z",
					"updated_at": "2023-03-21T10:42:44Z"
				}
			],
			"created_at": "2023-03-06T15:40:00Z",
			"updated_at": "2023-03-21T10:42:44Z"
		},
		"balance": {
			"currency": "RUB",
			"current_amount": 0,
			"credit_limit": 0,
			"available_amount": 0
		},
		"metadata": {},
		"created_at": "2023-03-06T15:40:00Z",
		"updated_at": "2023-03-21T10:42:44Z",
		"status": "active",
		"invoice_prefix": "ИО",
		"invoice_emails": ["test@test.com"]
	},
	{
		"id": "yltwhs-pn1uu",
		"name": "ООО \"ДАЛЬНЕРЕЧЕНСК АВИА\"",
		"email": "test@gmail.com",
		"deferral_days": 7,
		"org": {
			"id": "91ea6d41-9fb5-4b52-86cd-243cb632599f",
			"name": "ООО \"ДАЛЬНЕРЕЧЕНСК АВИА\"",
			"inn": "2506009114",
			"kpp": "272401001",
			"ogrn": "1062506014163",
			"addr": "680031, Хабаровский край, г Хабаровск, Матвеевское шоссе, д 24",
			"bank_accounts": [
				{
					"id": "da1f80ae-8116-4a29-a49d-226bc79d7fd5",
					"name": "Банк тест",
					"bik": "123456789",
					"account_number": "12345123451234512345",
					"corr_account_number": "12345123451234512345",
					"is_default": true,
					"created_at": "2023-03-03T11:09:46Z",
					"updated_at": "2023-03-30T14:53:13Z"
				}
			],
			"created_at": "2023-03-03T11:09:46Z",
			"updated_at": "2023-03-30T14:53:13Z"
		},
		"balance": {
			"currency": "RUB",
			"current_amount": 100000,
			"credit_limit": 0,
			"available_amount": 100000
		},
		"metadata": {},
		"created_at": "2023-03-03T11:09:46Z",
		"updated_at": "2023-03-30T14:53:13Z",
		"status": "active",
		"invoice_prefix": "АА",
		"invoice_emails": ["test@gmail.com"]
	},
	{
		"id": "sozbmi-qch4u",
		"name": "ООО \"ДАЛЬНЕРЕЧЕНСК АВИА\"",
		"email": "test@gmail.com",
		"deferral_days": 7,
		"org": {
			"id": "a9eeb953-a05d-4f4b-9178-4a6f4f46b04f",
			"name": "ООО \"ДАЛЬНЕРЕЧЕНСК АВИА\"",
			"inn": "2506009114",
			"kpp": "272401001",
			"ogrn": "1062506014163",
			"addr": "680031, Хабаровский край, г Хабаровск, Матвеевское шоссе, д 24",
			"bank_accounts": [
				{
					"id": "35b8eb33-9a9e-45c6-a478-4f2758081d5a",
					"name": "Банк тест",
					"bik": "123456789",
					"account_number": "12345123451234512345",
					"corr_account_number": "12345123451234512345",
					"is_default": true,
					"created_at": "2023-03-03T11:09:46Z",
					"updated_at": "2023-03-21T10:09:25Z"
				}
			],
			"created_at": "2023-03-03T11:09:46Z",
			"updated_at": "2023-03-21T10:09:25Z"
		},
		"balance": {
			"currency": "RUB",
			"current_amount": 0,
			"credit_limit": 0,
			"available_amount": 0
		},
		"metadata": {},
		"created_at": "2023-03-03T11:09:46Z",
		"updated_at": "2023-03-21T10:09:25Z",
		"status": "active",
		"invoice_prefix": "ИО",
		"invoice_emails": ["test@gmail.com"]
	}
]

export default customerData;