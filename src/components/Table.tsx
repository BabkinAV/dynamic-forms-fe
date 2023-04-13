import React from 'react';
import dayjs from 'dayjs';
import clipboardIcon from '../../public/clipboard-icon.svg';
import Image from 'next/image';
import { toastifyConfig } from '../schemas/toastifySchema';

import { ToastContainer, toast, ToastOptions } from 'react-toastify';
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
        toast('Скопировано в буфер обмена!', toastifyConfig as ToastOptions);
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
