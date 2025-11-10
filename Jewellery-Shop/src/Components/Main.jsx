export default function Example() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-gray-950 sm:text-5xl">
          Lumina Collections
        </p>
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          <div className="relative lg:row-span-2 group">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-4xl transition-all duration-300 ease-out group-hover:shadow-xl group-hover:ring-1 group-hover:ring-black/5" />
            <div className="relative flex h-full flex-col overflow-hidden">
              <div className="@container relative min-h-120 w-full grow max-lg:mx-auto max-lg:max-w-sm">
                <div className="absolute mt-5 overflow-hidden">
                  <img
                    alt=""
                    src="https://kinclimg9.bluestone.com/static/hp/m/mhome_v06.jpg"
                    className="size-full object-cover object-top transform-gpu transition duration-300 ease-out group-hover:scale-105"
                  />
                  <img
                    src="https://kinclimg8.bluestone.com/static/hp/m/mhome_v05.jpg"
                    className="size-full object-cover object-top mt-4 transform-gpu transition duration-300 ease-out group-hover:scale-105"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 lg:rounded-l-4xl" />
          </div>

          <div className="relative max-lg:row-start-1 group">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-4xl transition-all duration-300 ease-out group-hover:shadow-xl group-hover:ring-1 group-hover:ring-black/5" />
            <div className="relative flex h-full flex-col overflow-hidden">
              <div className="mt-3" />
              <div>
                <img
                  alt=""
                  src="https://kinclimg7.bluestone.com/static/hp/m/mhome_v04.jpg"
                  className="size-full object-cover object-top transform-gpu transition duration-300 ease-out group-hover:scale-105"
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-t-4xl" />
          </div>

          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2 group">
            <div className="absolute inset-px rounded-lg bg-white transition-all duration-300 ease-out group-hover:shadow-xl group-hover:ring-1 group-hover:ring-black/5" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10" />
              <div className="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
                <img
                  alt=""
                  src="https://kinclimg5.bluestone.com/f_webp/static/hp/d/e1_v2.jpg"
                  className="size-full object-cover transform-gpu transition duration-300 ease-out group-hover:scale-105"
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5" />
          </div>

          <div className="relative lg:row-span-2 group">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-4xl lg:rounded-r-4xl transition-all duration-300 ease-out group-hover:shadow-xl group-hover:ring-1 group-hover:ring-black/5" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0" />
              <img
                src="https://kinclimg5.bluestone.com/f_webp/static/hp/d/e15.png"
                alt=""
                className="transform-gpu transition duration-300 ease-out group-hover:scale-105"
              />
              <img
                src="https://kinclimg5.bluestone.com/f_webp/static/hp/d/e14.png"
                alt=""
                className="transform-gpu transition duration-300 ease-out group-hover:scale-105"
              />
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-b-4xl lg:rounded-r-4xl" />
          </div>
        </div>
      </div>
    </div>
  )
}