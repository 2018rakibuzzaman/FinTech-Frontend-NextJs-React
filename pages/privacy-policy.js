import Layout from './component/layout';
import Head from 'next/head';
export default function Privacy_policy() {
  return (
    <>
      <Head>
        <title>Privacy Policy</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="bg-gray-100">
      <div className="container mx-auto py-8">
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-2xl">
          <h1 className="text-2xl font-bold mb-4 text-green-500">Privacy Policy</h1>
          <p className="text-gray-700 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae congue nisi. Vestibulum imperdiet ex id
            mi dictum, ac pellentesque ipsum eleifend.
          </p>
          <p className="text-gray-700 mb-6">
            Duis commodo libero quis ex finibus, vitae viverra enim rutrum. Cras non lectus sit amet lorem suscipit
            finibus vel et mauris.
          </p>
          <h2 className="text-xl font-bold mb-4">Information We Collect</h2>
          <p className="text-gray-700 mb-6">
            We collect certain personal information when you use our payment gateway services, such as your name,
            contact information, and payment details. This information is used to process transactions and provide you
            with the requested services.
          </p>
          <h2 className="text-xl font-bold mb-4">How We Use Your Information</h2>
          <p className="text-gray-700 mb-6">
            We use your personal information to process payments, prevent fraudulent activities, and improve our
            services. We may also use your information to communicate with you regarding transactions, updates, and
            promotional offers.
          </p>
          <h2 className="text-xl font-bold mb-4">Data Security</h2>
          <p className="text-gray-700 mb-6">
            We take data security seriously and implement industry-standard measures to protect your information from
            unauthorized access, loss, or misuse. However, please note that no method of transmission over the internet
            or electronic storage is 100% secure.
          </p>
          <h2 className="text-xl font-bold mb-4">Disclosure of Information</h2>
          <p className="text-gray-700 mb-6">
            We may disclose your personal information to third parties in limited circumstances, such as when required
            by law or to prevent fraudulent activities. We do not sell or rent your personal information to any
            third-party marketers.
          </p>
          <h2 className="text-xl font-bold mb-4">Your Rights</h2>
          <p className="text-gray-700 mb-6">
            You have the right to access, update, and delete your personal information. If you have any concerns or
            requests regarding your information, please contact us using the provided contact details.
          </p>
          <p className="text-gray-700">
            By using our payment gateway services, you agree to the terms outlined in this Privacy Policy.
          </p>
        </div>
      </div>
    </div>
      
    </>
  )
}

Privacy_policy.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}