const features = [
  { name: 'Type', description: '24K Gold Plated Necklace' },
  { name: 'Material', description: '925 Sterling Silver base with real gold plating' },
  { name: 'Stone', description: 'Cubic Zirconia (Diamond Cut) for high shine' },
  { name: 'Length', description: '18 inch adjustable chain' },
  { name: 'Finish', description: 'Hand polished with anti-tarnish coating' },
  { name: 'Includes', description: 'Premium jewellery box and polishing cloth' },
  { name: 'Care Instructions', description: 'Avoid perfume, water & sweat for long-lasting shine' },
  { name: 'Note', description: 'Slight variations may occur due to handcrafted nature' },
];


export default function Example() {
  return (
    <div className="bg-white">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div className="mb-70">
          <h2 className="text-3xl font-bold tracking-tight mb-10 text-gray-900 sm:text-4xl">Gold Mine</h2>
          <p className="mt-4 text-gray-500">
           Elevate your style with chic layered necklaces for a trendy look.
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
         <video src="https://kinvid1.bluestone.com/output/mp4/4_v0.mp4/4_v0.mp4" muted autoPlay loop className="rounded bg-gray-100" />
        <video src="https://kinvid1.bluestone.com/output/mp4/3_v0.mp4/3_v0.mp4 " muted autoPlay loop className="rounded bg-gray-100" />
         <video src="https://kinvid1.bluestone.com/output/mp4/2_v0.mp4/2_v0.mp4" muted autoPlay loop className="rounded  bg-gray-100" />
         <video src="https://kinvid1.bluestone.com/output/mp4/8_v0.mp4/8_v0.mp4" muted autoPlay loop className="rounded   bg-gray-100" />
        </div>
      </div>
    </div>
  )
}
