import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'

class Table extends React.Component {
  render() {
    const items = this.props.items;
    return (
      <div id="Table">
        <table className='table'>
          <thead>
            <tr>
              <th scope='col'>Name</th>
              <th scope='col'>Time</th>
            </tr>
          </thead>
          <tbody>
          {items.map((item,index) => {
              return (
                <tr key={index} className={item.isExpired ? 'table-danger' : 'table-success'}>
                  <td>{item.name}</td>
                  <td>{item.time}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;