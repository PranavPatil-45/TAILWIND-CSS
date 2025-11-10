const products = [
  {
    id: 1,
    name: 'Gold Ring',
    href: '#',
    imageSrc: 'https://kinclimg1.bluestone.com/f_webp,c_scale,w_1024,b_rgb:f0f0f0/giproduct/BIPM0025R22_YAA22XXXXXXXXXXXX_ABCD00-PICS-00001-1024-85126.png',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 2,
    name: 'Gold Necklace',
    href: '#',
    imageSrc: 'https://kinclimg5.bluestone.com/f_webp,c_scale,w_1024,b_rgb:f0f0f0/giproduct/BIAR0097R13_YAA18DIG6XXXXXXXX_ABCD00-PICS-00001-1024-64527.png',
    imageAlt: "Front of Gold Necklace.",
    price: '$80',
    color: 'Gold',
  },
  {
    id: 3,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://kinclimg6.bluestone.com/f_webp,c_scale,w_1024,b_rgb:f0f0f0/giproduct/BISK0368P05_YAA14DIG6XXXXXXXX_ABCD00-PICS-00004-1024-21017.png',
    imageAlt: "Front of men's Basic Tee in dark gray.",
    price: '$35',
    color: 'Charcoal',
  },
  {
    id: 4,
    name: 'Soliar Tee',
    href: '#',
    imageSrc: 'https://kinclimg3.bluestone.com/f_webp,c_scale,w_1024,b_rgb:f0f0f0/giproduct/BVUN0180S22_YAA18SOG60030XXXX_ABCD00-PICS-00004-1024-51176.png',
    imageAlt: "Front of men's Soliar Tee in peach with white and brown dots forming an isometric cube.",
    price: '$35',
    color: 'Peach',
  },
]

export default function Example() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <img
                alt={product.imageAlt}
                src={product.imageSrc}
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
              />
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
