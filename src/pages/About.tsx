import aboutImage from "../assets/aboutImage.png";

export default function About() {
  return (
    <>
      <div className="grid items-center md:grid-cols-2 sm:grid-cols-1 gap-x-3 -mr-4 sm:mr-0">
        <div className="flex flex-col ">
          <h3 className="text-4xl font-bold mb-6">Our Story</h3>
          <p className="mb-4">
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.
          </p>
          <p className="mb-4 md:mb-0">
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
        <img
          src={aboutImage}
          alt="img about"
          className="rounded-l sm:rounded justify-self-end"
        />
      </div>
    </>
  );
}
