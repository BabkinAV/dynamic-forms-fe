export interface Customer {
  id: string;
  name: string;
  email: string;
  deferral_days: number;
  org: Organization;
  balance: Balance;
  metadata: Record<string, string>;
  created_at: string;
  updated_at: string;
  status: CustomerStatus; 
  invoice_prefix: string;
  invoice_emails: string[];

}

export interface Organization {
	id: string;
	name: string;
	inn: string;
	kpp: string;
	ogrn: string;
	addr: string;
	bank_accounts: BankAccount[]; //BankAccount
	created_at: string;
	updated_at: string;
}

export interface BankAccount {
	id: string;
	name: string;
	bik: string;
	account_number: string;
	corr_account_number: string;
	is_default: boolean;
	created_at: string;
	updated_at: string;
}

export interface Balance {
	currency: string;
	current_amount: number;
	credit_limit: number;
	available_amount: number;
}

type CustomerStatus = 'active' | 'inactive';






export interface googlerpcStatus  {
	code: number;
	message: string;
	details: protobufAny[]
}

export interface protobufAny {
	['@type']: string,
	[key: string]: string
}
	

let err:googlerpcStatus = {
  "code": 0,
  "message": "string",
  "details": [
    {
      "@type": "string",
      "additionalProp1": "string",
      "additionalProp2": "string",
      "additionalProp3": "string"
    }
  ]
}

let myCustomer: Customer = {
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
}