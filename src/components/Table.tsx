import React from 'react';

const Table = () => {
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
          <th scope="col">Отстрочка оплаты</th>
          <th scope="col">Создан</th>
          <th scope="col">изменен</th>
        </tr>
      </thead>
      <tbody>
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
        <tr>
          <th scope="row">
            <input
              className="form-check-input"
              type="checkbox"
              value="checkBoxRow-02"
              id="checkBoxRow-02"
            />
          </th>
          <td>ООО &quot;Ромашка&quot;</td>
          <td>sfsf-222</td>
          <td>test@gmail.com</td>
          <td>7 дней</td>
          <td>31.03.2023</td>
          <td>06.03.2023</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
