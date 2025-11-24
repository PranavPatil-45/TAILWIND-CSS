import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Fresh & Pure Milk Every Day',
    description:
      'Our milk is sourced directly from trusted local farms and delivered daily, ensuring natural taste, rich nutrients, and uncompromised purity with every pack.',
    image: "https://videos.openai.com/az/vg-assets/task_01kagj3cyqfzytrq4hx1esx37f%2F1763640003_img_0.webp?se=2025-11-26T00%3A00%3A00Z&sp=r&sv=2024-08-04&sr=b&skoid=cfbc986b-d2bc-4088-8b71-4f962129715b&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-11-20T01%3A09%3A13Z&ske=2025-11-27T01%3A14%3A13Z&sks=b&skv=2024-08-04&sig=U7hstPYaTvJvuVs8igXrMSiO95MOP69ZHUn6ufdgjRg%3D&ac=oaivgprodscus2",
  },
  {
    name: 'Wide Range of Dairy Products',
    description:
      'From milk, curd, ghee, paneer, and butter to premium flavored products, we offer a complete collection that meets every household’s daily needs.',
    image: "https://videos.openai.com/az/vg-assets/task_01kagf3dtbejxvw67pqaw5nmhs%2F1763636860_img_0.webp?se=2025-11-26T00%3A00%3A00Z&sp=r&sv=2024-08-04&sr=b&skoid=cfbc986b-d2bc-4088-8b71-4f962129715b&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-11-20T01%3A09%3A13Z&ske=2025-11-27T01%3A14%3A13Z&sks=b&skv=2024-08-04&sig=/stenGpSaypFmZFmbRLFFEVZd4O/TfAX5gcZnW%2BVTyo%3D&ac=oaivgprodscus2",
  },
  {
    name: 'Hygienic Storage & Cold Chain System',
    description:
      'All products are maintained under a strict refrigeration standard so freshness, quality, and safety remain intact until they reach your home.',
    image: "https://videos.openai.com/az/vg-assets/task_01kagj79mnet29kde1yn3z9qn6%2F1763640131_img_0.webp?se=2025-11-26T00%3A00%3A00Z&sp=r&sv=2024-08-04&sr=b&skoid=cfbc986b-d2bc-4088-8b71-4f962129715b&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-11-20T01%3A09%3A13Z&ske=2025-11-27T01%3A14%3A13Z&sks=b&skv=2024-08-04&sig=Fpvr%2BJFe0i%2Bv0dMovzFE73jxvyfownPt4pOats9iAvk%3D&ac=oaivgprodscus2",
  },
  {
    name: 'Quality Checked & Lab Tested',
    description:
      'Every batch goes through multiple quality checks and testing to ensure zero adulteration—bringing you only the most trusted and healthy dairy options.',
    image: "https://videos.openai.com/az/vg-assets/task_01kagjbq41ey78j87mgqqygye3%2F1763640281_img_0.webp?se=2025-11-26T00%3A00%3A00Z&sp=r&sv=2024-08-04&sr=b&skoid=cfbc986b-d2bc-4088-8b71-4f962129715b&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-11-20T01%3A09%3A13Z&ske=2025-11-27T01%3A14%3A13Z&sks=b&skv=2024-08-04&sig=wUcvSFZ9waoBaS6Dbg7cnlMcBI6mexcPXMSvAAEtn/4%3D&ac=oaivgprodscus2",
  },
]

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-indigo-600">DK KRISHNA DAIRY</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Everything you need to About Us
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">

            {features.map((feature) => (
              <div key={feature.name} className="relative pl-28 sm:pl-32">

                <dt className="text-lg font-semibold text-gray-900">

                  <div className="
                    absolute top-0 left-0
                    flex items-center justify-center
                    size-20 sm:size-24 md:size-28
                    rounded-lg overflow-hidden
                    shadow-lg bg-gray-200
                  ">
                    <img
                      src={feature.image}
                      alt={feature.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {feature.name}
                </dt>

                <dd className="mt-3 text-base text-gray-600">
                  {feature.description}
                </dd>

              </div>
            ))}
          </dl>
        </div>

      </div>
    </div>
  )
}
