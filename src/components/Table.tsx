import React from 'react';
import { Customer } from '../types';
import dayjs from 'dayjs';

interface tableRow {
	customerName: string,
	customerId: string,
	customerEmail: string,
	customerDeferralsDays: number,
	customerCreationDay: string,
	customerUpdateDay: string
}

const Table = ({tableRows} : {tableRows: tableRow[]})   => {
  return (
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
				{tableRows.map((row) => (<tr key={row.customerId}>
          <th scope="row">
            <input
              className="form-check-input"
              type="checkbox"
              value={`checkBoxRow-${row.customerId}`}
              id={`checkBoxRow-${row.customerId}`}
            />
          </th>
          <td>{row.customerName}</td>
          <td>{row.customerId}</td>
          <td>{row.customerEmail}</td>
          <td>{row.customerDeferralsDays + ' дней'}</td>
          <td>{dayjs(row.customerCreationDay).format('DD.MM.YYYY')}</td>
          <td>{dayjs(row.customerUpdateDay).format('DD.MM.YYYY')}</td>
        </tr>))}
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
  );
};

export default Table;
