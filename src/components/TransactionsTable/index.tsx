import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    api.get("transactions").then(({ data }) => setTransactions(data));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Website development</td>
            <td className="deposit">R$12.000,00</td>
            <td>Development</td>
            <td>20/02/2021</td>
          </tr>
          <tr>
            <td>Website development</td>
            <td className="deposit">R$12.000,00</td>
            <td>Development</td>
            <td>20/02/2021</td>
          </tr>
          <tr>
            <td>Website development</td>
            <td className="deposit">R$12.000,00</td>
            <td>Development</td>
            <td>20/02/2021</td>
          </tr>
          <tr>
            <td>Website development</td>
            <td className="withdraw">-R$12.000,00</td>
            <td>Development</td>
            <td>20/02/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
