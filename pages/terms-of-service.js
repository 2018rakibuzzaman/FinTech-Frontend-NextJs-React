import Layout from './component/layout';
import Head from 'next/head';
export default function Terms_of_service() {
  return (
    <>
      <Head>
        <title>Terms of Service</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="bg-gray-100">
      <div className="container mx-auto py-8">
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-2xl">
          <h1 className="text-2xl font-bold mb-4 text-green-500">Terms of Service</h1>
          <p className="text-gray-700 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae congue nisi. Vestibulum imperdiet ex id
            mi dictum, ac pellentesque ipsum eleifend.
          </p>
          <p className="text-gray-700 mb-6">
            Duis commodo libero quis ex finibus, vitae viverra enim rutrum. Cras non lectus sit amet lorem suscipit
            finibus vel et mauris.
          </p>
          <h2 className="text-xl font-bold mb-4">Acceptance of Terms</h2>
          <p className="text-gray-700 mb-6">
            By accessing or using our payment gateway services, you agree to be bound by these Terms of Service. If you
            do not agree with any part of these terms, you may not use our services.
          </p>
          <h2 className="text-xl font-bold mb-4">User Responsibilities</h2>
          <p className="text-gray-700 mb-6">
            You are responsible for maintaining the confidentiality of your account information, including your login
            credentials. You agree to use our services for lawful purposes and not to engage in any illegal or
            unauthorized activities.
          </p>
          <h2 className="text-xl font-bold mb-4">Intellectual Property</h2>
          <p className="text-gray-700 mb-6">
            All intellectual property rights related to our payment gateway services are the property of our company.
            You may not use, modify, or distribute any copyrighted materials without our prior written consent.
          </p>
          <h2 className="text-xl font-bold mb-4">Limitation of Liability</h2>
          <p className="text-gray-700 mb-6">
            We strive to provide reliable and secure services, but we cannot guarantee uninterrupted or error-free
            operation. We shall not be liable for any damages or losses arising from the use of our services.
          </p>
          <h2 className="text-xl font-bold mb-4">Termination</h2>
          <p className="text-gray-700 mb-6">
            We reserve the right to terminate or suspend your access to our services at any time, with or without cause
            or notice. You may also terminate your account by contacting our support team.
          </p>
          <h2 className="text-xl font-bold mb-4">Governing Law</h2>
          <p className="text-gray-700 mb-6">
            These Terms of Service shall be governed by and construed in accordance with the laws of your jurisdiction.
          </p>
          <p className="text-gray-700">
            By using our payment gateway services, you agree to comply with these Terms of Service.
          </p>
        </div>
      </div>
    </div>
      
    </>
  )
}

Terms_of_service.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}