import React from 'react';
import dayjs from 'dayjs';
import clipboardIcon from '../../public/clipboard-icon.svg';
import Image from 'next/image';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface tableRow {
  customerName: string;
  customerId: string;
  customerEmail: string;
  customerDeferralsDays: number;
  customerCreationDay: string;
  customerUpdateDay: string;
}

const Table = ({ tableRows }: { tableRows: tableRow[] }) => {
  const clipboardClickHandler = (customerId: string) => {
    navigator.clipboard
      .writeText(customerId)
      .then(() => {
        toast('Скопировано в буфер обмена!', {
          position: 'bottom-center',
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          theme: 'light',
        });
      })
      .catch((err: Error) => {
        console.log(err.message)
      });
  };
  return (
    <>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">
              <input
                className="form-check-input"
                type="checkbox"
                value="checkBoxHead"
                id="checkBoxHead"
              />
            </th>
            <th scope="col">Имя</th>
            <th scope="col">ID</th>
            <th scope="col">Email</th>
            <th scope="col">Отсрочка оплаты</th>
            <th scope="col">Создан</th>
            <th scope="col">Изменен</th>
          </tr>
        </thead>
        <tbody>
          {tableRows.map(row => (
            <tr key={row.customerId}>
              <th scope="row">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value={`checkBoxRow-${row.customerId}`}
                  id={`checkBoxRow-${row.customerId}`}
                />
              </th>
              <td>{row.customerName}</td>
              <td>
                {row.customerId}
                {'  '}
                <Image
                  src={clipboardIcon}
                  alt="copy ID"
                  onClick={()=> {clipboardClickHandler(row.customerId)}}
                  role="button"
                />
              </td>
              <td>{row.customerEmail}</td>
              <td>{row.customerDeferralsDays + ' дней'}</td>
              <td>{dayjs(row.customerCreationDay).format('DD.MM.YYYY')}</td>
              <td>{dayjs(row.customerUpdateDay).format('DD.MM.YYYY')}</td>
            </tr>
          ))}
          <tr>
            <th scope="row">
              <input
                className="form-check-input"
                type="checkbox"
                value="checkBoxRow-01"
                id="checkBoxRow-01"
              />
            </th>
            <td>ООО &quot;Амазон&quot;</td>
            <td>sfsf-111</td>
            <td>test@gmail.com</td>
            <td>14 дней</td>
            <td>31.03.2023</td>
            <td>06.03.2023</td>
          </tr>
        </tbody>
      </table>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default Table;
