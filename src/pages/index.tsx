import Head from 'next/head';
import Table from '../components/Table';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Customer } from '../types';
import CustomerCreateModal from '../components/CustomerCreateModal';

export default function Home() {
  const [customerDataArr, setCustomerDataArr] =
    useState<Customer[]>([]);

  const [showModal, setShowModal] = useState(false);

  const handleAddCustomer = (addedCustomer: Customer) => {
    setCustomerDataArr(prevArrState => {
      return [addedCustomer, ...prevArrState];
    });
  };

  useEffect(() => {
    axios
      .get<Customer[]>('http://localhost:8080/customers?_sort=created_at&_order=desc')
      .then(resp => {
				setCustomerDataArr(resp.data)
				console.log(resp.data.length);
			})
      .catch(err => {
				console.log(err);
			});
  }, []);

  let tableRows = customerDataArr.map(el => ({
    customerName: el.name,
    customerId: el.id,
    customerEmail: el.email,
    customerDeferralsDays: el.deferral_days,
    customerCreationDay: el.created_at,
    customerUpdateDay: el.updated_at,
  }));

  return (
    <>
      <Head>
        <title>Shtrafov Net Test | Клиенты</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="#"></link>
      </Head>
      <main>
        <div className="container mt-5">
          <div className="row mb-3">
            <div className="col d-flex justify-content-between">
              <h4>Клиенты</h4>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => setShowModal(true)}
              >
                <div className="d-flex align-items-center">
                  <div>+ Добавить клиента</div>
                </div>
              </button>
            </div>
          </div>
          <Table tableRows={tableRows} />
        </div>
        <CustomerCreateModal
          handleClose={() => setShowModal(false)}
          showModal={showModal}
          handleAddCustomer={handleAddCustomer}
        />
      </main>
    </>
  );
}
