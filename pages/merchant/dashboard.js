import Layout from '../merchant_components/layout'
import Head from 'next/head'

export default function Dashboard() {

  // Dummy data for demonstration
  const todayPayments = [
    { id: 1, amount: 50.0, description: 'Payment 1' },
    { id: 2, amount: 75.0, description: 'Payment 2' },
    { id: 3, amount: 100.0, description: 'Payment 3' },
  ];

  const monthPayments = [
    { id: 1, amount: 500.0, description: 'Payment 1' },
    { id: 2, amount: 750.0, description: 'Payment 2' },
    { id: 3, amount: 1000.0, description: 'Payment 3' },
  ];

  const transactions = [
    { id: 1, amount: 25.0, description: 'Transaction 1' },
    { id: 2, amount: 50.0, description: 'Transaction 2' },
    { id: 3, amount: 75.0, description: 'Transaction 3' },
  ];

  return (
    <>
      
      <Head>
        <title>Dashboard</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="container mx-auto p-8">
      <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold mb-4">Today's Payments</h2>
          {todayPayments.length > 0 ? (
            <ul>
              {todayPayments.map((payment) => (
                <li key={payment.id} className="flex justify-between mb-2">
                  <span>{payment.description}</span>
                  <span>BDT {payment.amount}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p>No payments for today.</p>
          )}
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold mb-4">This Month's Payments</h2>
          {monthPayments.length > 0 ? (
            <ul>
              {monthPayments.map((payment) => (
                <li key={payment.id} className="flex justify-between mb-2">
                  <span>{payment.description}</span>
                  <span>BDT {payment.amount}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p>No payments for this month.</p>
          )}
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold mb-4">Transaction List</h2>
          {transactions.length > 0 ? (
            <ul>
              {transactions.map((transaction) => (
                <li key={transaction.id} className="flex justify-between mb-2">
                  <span>{transaction.description}</span>
                  <span>BDT {transaction.amount}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p>No transactions available.</p>
          )}
        </div>
      </div>
    </div>
    </>
  )
}

Dashboard.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

