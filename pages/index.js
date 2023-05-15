import Layout from './component/layout';
import Head from 'next/head';
export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <header className="bg-green-100 py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-semibold">Welcome to <span className="self-center font-semibold whitespace-nowrap text-green-500">Just</span> pay Merchant</h1>
          <p className="mt-4 text-lg text-gray-700">Transforming the way you manage your payments.</p>
          <a href="/auth/login" className="mt-8 inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg">Get Started</a>
        </div>
      </header>

      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold text-center">How it works?</h2>
          <div className="flex mt-12">
            <div className="w-1/3 px-4">
              <div className="bg-green-500  h-44 text-white rounded-lg p-6">
                <h2 className="text-xl font-semibold">Create Account</h2>
                <p className="mt-4 text-white">Create account with some peronal data.</p>
              </div>
            </div>
            <div className="w-1/3 px-4">
              <div className="bg-green-500  h-44 text-white rounded-lg p-6">
                <h2 className="text-xl font-semibold">Get Payment</h2>
                <p className="mt-4 text-white">Get payment from your customer with your account and API.</p>
              </div>
            </div>
            <div className="w-1/3 px-4">
              <div className="bg-green-500  h-44 text-white rounded-lg p-6">
                <h2 className="text-xl font-semibold">Track Payments</h2>
                <p className="mt-4 text-white">TTrack your all payments.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

Home.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}