export function Hero() {
  return (
    <div className="w-screen h-screen grid grid-cols-12 grid-rows-6 gap-2 ">
      <div className="h-full w-0.25 bg-black col-start-8 row-span-5" />
      <div className="row-start-3 col-start-3 col-span-3 font-serif">
        <h2 className="my-2 text-5xl ">Wilsoncooked</h2>
        {/* <h3 className="my-2 text-4xl ">Software Developer</h3> */}
      </div>
      <div className="h-full w-0.5 bg-black col-start-3 row-start-6 row-span-2"></div>
      <div className="col-start-8 col-span-2 row-start-6">
        <p className="text-lg mr-4 tracking-wider font-light">
          Leaving something incomplete makes it interesting, and gives one the
          feeling that there is room for growth.
        </p>
        <p className="text-lg my-2">Yoshida Kenkō</p>
        <div className="-full w-0.25 bg-black col-start-3 row-start-2 row-span-3" />
      </div>
    </div>
  )
}
