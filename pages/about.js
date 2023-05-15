import Layout from './component/layout';
import Head from 'next/head';
export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="bg-gray-100">
      <div className="container mx-auto py-8">
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-2xl">
          <h1 className="text-2xl font-bold mb-4 text-green-500">About Our Payment Gateway</h1>
          <p className="text-gray-700 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor nibh vel pharetra suscipit. Cras ac
            vestibulum neque. Fusce eu metus nec lectus feugiat efficitur.
          </p>
          <p className="text-gray-700 mb-6">
            Quisque semper, justo ut facilisis ultrices, lorem lectus mattis tellus, vel auctor nunc neque eget diam.
            Nulla facilisi. Phasellus volutpat velit ut nulla pellentesque, in laoreet dolor euismod.
          </p>
          <p className="text-gray-700 mb-6">
            Morbi sed consectetur ante. Nam porttitor placerat quam at iaculis. Aliquam consequat neque a diam vehicula,
            vitae feugiat nunc ultrices.
          </p>
          <h2 className="text-xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-6">
            Our mission is to provide a secure and reliable payment gateway solution that simplifies online transactions for
            businesses and individuals.
          </p>
          <h2 className="text-xl font-bold mb-4">Why Choose Us?</h2>
          <ul className="list-disc pl-6 text-gray-700 mb-6">
            <li>Fast and secure payment processing</li>
            <li>Wide range of supported payment methods</li>
            <li>Easy integration with popular e-commerce platforms</li>
            <li>24/7 customer support</li>
            <li>Competitive pricing</li>
          </ul>
          <p className="text-gray-700">
            If you have any questions or would like to learn more about our services, please don't hesitate to contact us.
          </p>
          <div className="mt-8">
            <a href="/contact" className="text-green-500 hover:text-green-700">Contact Us</a>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

About.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}