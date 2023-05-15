import Layout from './component/layout';
import Head from 'next/head';
export default function Cookie_policy() {
  return (
    <>
      <Head>
        <title>Cookie Policy</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="bg-gray-100">
        <div className="container mx-auto py-8">
            <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-2xl">
            <h1 className="text-2xl font-bold mb-4 text-green-500">Cookie Policy</h1>
            <p className="text-gray-700 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae congue nisi. Vestibulum imperdiet ex id
                mi dictum, ac pellentesque ipsum eleifend.
            </p>
            <p className="text-gray-700 mb-6">
                Duis commodo libero quis ex finibus, vitae viverra enim rutrum. Cras non lectus sit amet lorem suscipit
                finibus vel et mauris.
            </p>
            <h2 className="text-xl font-bold mb-4">What Are Cookies?</h2>
            <p className="text-gray-700 mb-6">
                Cookies are small text files that are stored in your browser when you visit a website. These files allow the
                website to recognize your device and remember certain information about your visit, such as your preferences
                and settings.
            </p>
            <h2 className="text-xl font-bold mb-4">How We Use Cookies</h2>
            <p className="text-gray-700 mb-6">
                We use cookies to improve your experience on our website and provide personalized content. The information
                collected through cookies helps us analyze website traffic and tailor our services to better meet your
                needs.
            </p>
            <h2 className="text-xl font-bold mb-4">Types of Cookies We Use</h2>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
                <li>Essential cookies: These cookies are necessary for the website to function properly and cannot be
                disabled.</li>
                <li>Analytics cookies: We use these cookies to track website usage and gather anonymous information that
                helps us improve our services.</li>
                <li>Marketing cookies: These cookies are used to deliver relevant advertisements and measure the
                effectiveness of our marketing campaigns.</li>
            </ul>
            <p className="text-gray-700">
                By using our website, you consent to the use of cookies as described in this policy.
            </p>
            </div>
        </div>
    </div>
      
    </>
  )
}

Cookie_policy.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}